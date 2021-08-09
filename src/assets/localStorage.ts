export const isInLocalStorage = (name: string): any => {
  let result = localStorage.getItem(name);
  return result ? JSON.parse(result) : false;
};

export const setStarWarsLocalStorage = (movies: []): void => {
  let result: any[] = [];
  movies.forEach((movie: {}) => {
    let newMovie: {} = { ...movie, isLiked: false };
    result.push(newMovie);
  });
  localStorage.setItem('star-wars-api', JSON.stringify(result));
};
