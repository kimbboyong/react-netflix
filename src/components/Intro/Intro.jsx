import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.style.css";
const Intro = () => {
  const navigate = useNavigate();
  const [showLines, setShowLines] = useState(false);
  const [animation, setAnimation] = useState({
    stick2: "",
    stick3: "",
    stick1: "",
    lines: "",
  });

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimation((prev) => ({
        ...prev,
        stick2: "movedown 0.5s ease forwards",
      }));
    }, 3000);
    const timer2 = setTimeout(() => {
      setAnimation((prev) => ({
        ...prev,
        stick3: "movedown 0.5s ease forwards",
      }));
    }, 3500);
    const timer3 = setTimeout(() => {
      setAnimation((prev) => ({
        ...prev,
        stick1: "opacity 0.5s ease forwards",
        lines: "flex",
      }));
      setShowLines(true);
    }, 4000);

    const timer4 = setTimeout(() => {
      navigate("/home");
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [navigate]);

  const colors = [
    "#4a7fcb",
    "#133286",
    "#3062af",
    "#628ace",
    "#949fd9",
    "#821e12",
    "#c34821",
    "red",
    "#d3ad94",
    "yellow",
    "#821e12",
    "#462652",
    "#b16f67",
    "#d3ad94",
    "#821e12",
    "#462652",
    "#4a7fcb",
    "#133286",
    "#3062af",
    "#628ace",
    "#b16f67",
    "#d3ad94",
    "yellow",
    "#821e12",
    "#821e12",
    "#c34821",
    "#821e21",
    "#c34821",
    "red",
  ];

  return (
    <div className="background">
      <div className="logo">
        <div className="brush1">
          <div className="color" style={{ animation: animation.stick1 }}></div>
          {showLines && (
            <div className="lines" style={{ display: animation.lines }}>
              {colors.map((color, index) => {
                const randomMargin = Math.floor(Math.random() * 1000);
                return (
                  <div
                    key={index}
                    className="line"
                    style={{
                      "--m": `${randomMargin}px`,
                      "--c": color,
                    }}
                  ></div>
                );
              })}
            </div>
          )}
        </div>
        <div className="brush2">
          <div className="color2" style={{ animation: animation.stick2 }}></div>
        </div>
        <div className="brush3">
          <div className="color3" style={{ animation: animation.stick3 }}></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
