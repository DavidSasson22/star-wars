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
  localStorage.setItem("star-wars-api", JSON.stringify(result));
};

export const movieLikerDisliker = (movieIndex: number): any => {
  let data = isInLocalStorage("star-wars-api");
  if (data) {
    data[movieIndex].isLiked = !data[movieIndex].isLiked;
    localStorage.setItem("star-wars-api", JSON.stringify(data));
    return data;
  }
};
