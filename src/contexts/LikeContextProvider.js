import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { notifyError } from "../components/Toastify/Toastify";
import { ACTIONS, API_LIKE } from "../helpers/consts";
import { useAuth } from "./AuthContextProvider";

export const likeContext = createContext();

export const useLikeContext = () => {
  return useContext(likeContext);
};

const INIT_STATE = {
  likes: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_LIKES:
      return {
        ...state,
        likes: action.payload.data,
      };
    default:
      return state;
  }
}

const LikeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const { currentUser } = useAuth();

  const getLike = async () => {
    try {
      let res = await axios.get(API_LIKE);
      dispatch({
        type: ACTIONS.GET_LIKES,
        payload: res,
      });
    } catch (err) {
      notifyError(err);
    }
  };

  const addLike = async (obj) => {
    try {
      await axios.post(API_LIKE, obj);
      getLike();
    } catch (err) {}
  };

  const delLike = async (id) => {
    try {
      await axios.delete(`${API_LIKE}/${id}`);
      getLike();
    } catch (err) {}
  };

  return (
    <likeContext.Provider
      value={{
        getLike,
        addLike,
        delLike,
        likes: state.likes.filter((item) => item.user === currentUser.user),
        allLikes: state.likes,
      }}
    >
      {children}
    </likeContext.Provider>
  );
};

export default LikeContextProvider;
