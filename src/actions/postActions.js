import { FETCH_POSTS } from "./types";

//Feches data from api and puts the body into the payload
export const fetchPosts = () => dispatch => {
  fetch(
    "https://bojwbhw97e.execute-api.us-east-2.amazonaws.com/Production/eshop-challenge/products"
  )
    .then(res => res.json())
    .then(posts => {
      if (posts.statusCode === 200) {
        dispatch({
          type: FETCH_POSTS,
          payload: posts.body
        });
      }
    });
};
