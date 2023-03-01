import { useState, useEffect } from "react";
import { sensorsData } from "../utils/sensors-data";

const useSensor = id => {
  const [ sensor, setSensor ] = useState({});

  const getSensorData = () => {
    const { sensors } = sensorsData();
    setSensor(sensors.find(s => s.id === id));
  }

  useEffect(() => {
    getSensorData();
  }, []);

  const data = sensor ? sensor : {};

  return { sensor: data };
}

export default useSensor;