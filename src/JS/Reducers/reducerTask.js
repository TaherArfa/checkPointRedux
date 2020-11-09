// import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import {  ADD_TASK,  CHECK_TASK,  DELETE_TASK,  EDIT_TASK } from "../Constants/actionTypes";

const intialState = {
  listItems: [],
};

export const reducerTask = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, listItems: [...state.listItems, action.payload] };

    case DELETE_TASK:
      return {
        ...state,
        listItems: state.listItems.filter((el) => el.id !== action.payload),
      };
    case CHECK_TASK:
      return {
        ...state,
        listItems: state.listItems.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        listItems: state.listItems.map((el) =>
          el.id === action.payload.id
            ? { ...el, text: action.payload.text }
            : el
        ),
      };

    default:
      return state;
  }
};
