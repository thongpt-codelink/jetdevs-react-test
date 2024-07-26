import { IDatum } from "../types/data";

export const sortData: (data: IDatum[], dir?: "asc" | "desc") => IDatum[] = (
  data,
  dir = "desc"
) => {
  return data.sort((a, b) => {
    if (dir === "desc") return a.score < b.score ? 1 : -1;
    if (dir === "asc") return a.score > b.score ? 1 : -1;

    return 1;
  });
};

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomScoreDiff = () => {
  return getRandomNumber(0, 10_000);
};
