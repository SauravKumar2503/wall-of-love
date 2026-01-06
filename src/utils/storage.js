export const saveSession = (data) => {
  localStorage.setItem("session", JSON.stringify(data));
};

export const getSession = () => {
  return JSON.parse(localStorage.getItem("session"));
};

export const logout = () => {
  localStorage.removeItem("session");
};

export const getReviews = () => {
  return JSON.parse(localStorage.getItem("reviews")) || [];
};

export const saveReviews = (reviews) => {
  localStorage.setItem("reviews", JSON.stringify(reviews));
};
