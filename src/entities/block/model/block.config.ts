import { getColor, hexToRgba } from "shared";
import { BlockTypes } from "./block.types";

export const config = {
  name: "block",
  width: 200,
  height: 200,
  fill: getColor("--color-gray-500"),
  shadowBlur: 17,
  cornerRadius: 6,
  strokeWidth: 1,
  stroke: "",
  selectedStroke: getColor("--color-primary-100"),
  selectedShadowColor: hexToRgba(getColor("--color-primary-100"), 0.5),
  shadowColor: hexToRgba("#000000", 0.1),
  shadowOffset: { x: 0, y: 7 },
};

export const colorConfig: {
  [key in BlockTypes]: { fill: string; text: string };
} = {
  [BlockTypes.INTEGRATION]: {
    fill: getColor("--color-yellow-500"),
    text: getColor("--color-yellow-100"),
  },
  [BlockTypes.CONDITION]: {
    fill: getColor("--color-blue-500"),
    text: getColor("--color-blue-100"),
  },
  [BlockTypes.INPUT]: {
    fill: getColor("--color-green-500"),
    text: getColor("--color-green-100"),
  },
  [BlockTypes.OUTPUT]: {
    fill: getColor("--color-red-500"),
    text: getColor("--color-red-100"),
  },
  [BlockTypes.TIME]: {
    fill: getColor("--color-pink-500"),
    text: getColor("--color-pink-100"),
  },
};
