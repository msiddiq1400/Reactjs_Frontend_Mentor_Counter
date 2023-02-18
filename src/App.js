import { useEffect, useState } from "react";
import "./app.css";
import FacebookIcon from "./assets/images/icon-facebook.svg";
import InstagramIcon from "./assets/images/icon-instagram.svg";
import PinterestIcon from "./assets/images/icon-pinterest.svg";
import { motion } from "framer-motion";

const timeFormat = (val) => {
  if (parseInt(val) < 10) {
    return `0${val}`;
  }
  return val;
};

function App() {
  const [seconds, setSeconds] = useState(15);
  const [minutes, setMinutes] = useState(4);
  const [animateMin, setAnimateMin] = useState(false);

  const animate = {
    rotateX: 180,
  };
  const transition = {
    repeat: Infinity,
    duration: 1,
  };

  const noAnimate = {
    rotateX: 0,
  };
  const noTransition = {
    repeat: 0,
    duration: 0,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
        setAnimateMin(false);
      }
      if (seconds === 0) {
        if (minutes > 0) {
          setSeconds(59);
          setAnimateMin(true);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      return clearInterval(interval);
    };
  });

  return (
    <div className="container">
      <div className="top">
        <p>WE 'RE LAUNCHING SOON</p>
      </div>
      <div className="center">
        <div className="main-card">
          <motion.div className="card-wrapper">
            <div className="top-half-card"></div>
            <div className="bottom-half-card"></div>
          </motion.div>
          <div className="counter-text">08</div>
          <div className="bottom-text">DAYS</div>
        </div>
        <div className="main-card">
          <motion.div className="card-wrapper">
            <div className="top-half-card"></div>
            <div className="bottom-half-card"></div>
          </motion.div>
          <div className="counter-text">08</div>
          <div className="bottom-text">HOURS</div>
        </div>
        <div className="main-card">
          <motion.div
            animate={animateMin ? animate : noAnimate}
            transition={animateMin ? transition : noTransition}
            className="card-wrapper"
          >
            <div className="top-half-card"></div>
            <div className="bottom-half-card"></div>
          </motion.div>
          <div className="counter-text">{timeFormat(minutes)}</div>
          <div className="bottom-text">MINUTES</div>
        </div>
        <div className="main-card">
          <motion.div
            animate={animate}
            transition={transition}
            className="card-wrapper"
          >
            <div className="top-half-card"></div>
            <div className="bottom-half-card"></div>
          </motion.div>
          <div className="counter-text">{timeFormat(seconds)}</div>
          <div className="bottom-text">SECONDS</div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src={FacebookIcon} alt="facebook" />
          <img src={InstagramIcon} alt="instagram" />
          <img src={PinterestIcon} alt="pinterest" />
        </div>
      </div>
    </div>
  );
}

export default App;
