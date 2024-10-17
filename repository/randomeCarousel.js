import { BUILDRANDOME } from "./buildRandomeNum";

export const GETRANDOMECAROUSEL = () => {
  const mathrandome = BUILDRANDOME(15);
  const urlCardCarousel = fetch(
    `https://moviesapi.ir/api/v1/genres/${mathrandome}/movies?page={page}`
  );
  return urlCardCarousel;
};
