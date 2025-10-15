"use client";
import { useEffect } from "react";

const LocationABAplanet = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let map: any;

    const initializeMap = () => {
      try {
        const DG = require("2gis-maps");
        
        const container = document.getElementById("ourContacts-container");
        if (!container) return;

        map = DG.map(container, {
          center: [40.509942, 72.811327],
          zoom: 18,
        });

        DG.marker([40.510023, 72.811259])
          .addTo(map)
          .bindPopup("ABAplanet");

      } catch (error) {
        console.error("Фатальная ошибка инициализации:", error);
      }
    };

    initializeMap();

    return () => {
      if (map) map.remove();
    };
  }, []);

  return (
    <div
      id="ourContacts-container"
      style={{ 
        width: "100%",
        height: "100%",
        borderRadius: "30px",
        border: "2px solid #e0e0e0",
        background: "#f8f9fa"
      }}
    />
  );
};

export default LocationABAplanet;