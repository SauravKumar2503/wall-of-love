export const getReviews = () => {
  return JSON.parse(localStorage.getItem("reviews")) || [];
};

export const saveReviews = (reviews) => {
  localStorage.setItem("reviews", JSON.stringify(reviews));
};
