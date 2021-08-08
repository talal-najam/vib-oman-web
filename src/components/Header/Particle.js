import React from "react";
import Particles from "react-particles-js";

export default function Particle() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 5000.4120608655228,
              },
            },
            color: {
              value: "#ffffff",
            },
            params: {
              fullScreen: {
                zIndex: -1
              }
            }
          },
        }}
      />
    </div>
  );
}
