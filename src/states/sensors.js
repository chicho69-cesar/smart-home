import { atom } from "recoil";

export const sensorActiveState = atom({
  key: 'sensorActiveState',
  default: {}
});

export const sensorDataListState = atom({
  key: 'sensorDataListState',
  default: null
});