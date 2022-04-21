import React, { createContext, useContext, useReducer } from "react";

import axios from "axios";
import { ACTIONS, API_COM } from "../helpers/consts";
import { notify, notifyError } from "../components/Toastify/Toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./AuthContextProvider";

export const comContext = createContext();

export const useComContext = () => {
  return useContext(comContext);
};

const INIT_STATE = {
  comments: [],
  oneCom: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_COM:
      return {
        ...state,
        comments: action.payload.data,
      };
    case ACTIONS.GET_ONE_COM:
      return { ...state, oneCom: action.payload };
    default:
      return state;
  }
}

const ComContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const { prodId } = useParams();

  //Get Comments for one product by prodId
  const getCom = async (id) => {
    try {
      let res = await axios.get(`${API_COM}?prodId=${id}`);
      dispatch({
        type: ACTIONS.GET_COM,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Add new Comment
  const addCom = async (newCom) => {
    if (currentUser?.isLogged) {
      try {
        let res = await axios.post(API_COM, newCom);
        getCom(newCom.prodId);
      } catch (err) {
        notifyError(err);
      }
    } else {
      notify("info", "You need to login/register to leave a comment!");
      navigate("/login");
    }
  };
  //Delete Comment
  const delCom = async (id, prodId) => {
    try {
      let { data } = await axios.delete(`${API_COM}/${id}`);

      getCom(prodId);
      // console.log(prodId);
    } catch (err) {
      console.log(err);
    }
  };

  //Edit Comment
  //get one comment for edit
  const getOneCom = async (id, prodId) => {
    try {
      let { data } = await axios(`${API_COM}/${id}`);
      // console.log(data);
      getCom(data.prodId);
      dispatch({
        type: ACTIONS.GET_ONE_COM,
        payload: data,
      });
    } catch (err) {
      notifyError(err);
    }
  };

  const saveEditedCom = async (editedCom) => {
    try {
      let { data } = await axios.patch(`${API_COM}/${editedCom.id}`, editedCom);
      notify("info", `Comment succesfully updated`);
      getCom(data.prodId);
    } catch (err) {
      notifyError(err);
    }
  };

  return (
    <comContext.Provider
      value={{
        comments: state.comments,
        oneCom: state.oneCom,
        comForEdit: true,
        getCom,
        addCom,
        delCom,
        getOneCom,
        saveEditedCom,
      }}
    >
      {children}
    </comContext.Provider>
  );
};

export default ComContextProvider;
