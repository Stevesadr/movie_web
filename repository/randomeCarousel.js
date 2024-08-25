export const GETRANDOMECAROUSEL = () => {
  const mathrandome = Math.floor(Math.random() * 15) + 1;
  const urlCardCarousel = fetch(
    `https://moviesapi.ir/api/v1/genres/${mathrandome}/movies?page={page}`
  );
  return urlCardCarousel;
};
