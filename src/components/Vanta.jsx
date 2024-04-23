import React from "react";
import NET from "vanta/src/vanta.net";
import { useEffect } from "react";
const Vanta = () => {
  useEffect(() => {
    NET({
      el: "#hero",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x3fffad,
      backgroundColor: 0x0,
    });
  }, []);

  return (
    <div className="h-[700px] z-40" id="hero">
      <h1>Vanta</h1>
    </div>
  );
};

export default Vanta;
