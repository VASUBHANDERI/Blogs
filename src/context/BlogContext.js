import createDataContext from "./createDataContext";
import axios from "axios";
import baseURL from "../../URL";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogPosts":
      return action.payload;

    case "delete_blogPost":
      return state.filter((state) => state.id !== action.payload);

    case "edit_blogPost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await axios.get(`${baseURL}`);
    dispatch({ type: "get_blogPosts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callBack) => {
    const response = await axios.post(`${baseURL}`, { title, content });
    if (callBack) {
      callBack();
    }
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callBack) => {
    await axios.put(`${baseURL}/${id}`, { title, content });
    dispatch({ type: "edit_blogPost", payload: { title, content, id } });
    if (callBack) {
      callBack();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await axios.delete(`${baseURL}/${id}`);
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
