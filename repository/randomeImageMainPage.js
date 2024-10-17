import { BUILDRANDOME } from "./buildRandomeNum";

export const RANDOMEIMAGEMAINPAGE = () => {
  const mathrandome = BUILDRANDOME(20);
  const urlMainPageSliser = fetch(
    `https://moviesapi.ir/api/v1/movies/${mathrandome}`
  );
  return urlMainPageSliser;
};
