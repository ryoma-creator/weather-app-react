import React from "react";

const RainEffect = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="absolute bg-blue-400 w-0.5 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              height: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 2}s`,
              animation: 'rainFall 1s linear infinite',
            }}
          ></div>
        ))}
      </div>
    );
  };

  export default RainEffect;