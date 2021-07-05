import { createStore } from "redux";
import { v4 as uuid } from "uuid";

// actions
export const addNote = (payload) => {
  return {
    type: "ADD_NOTE",
    payload: {
      id: uuid(),
      ...payload,
    },
  };
};

export const removeNote = (payload) => {
  return {
    type: "REMOVE_NOTE",
    payload,
  };
};

// reducer + initialState
const initialState = {
  notes: [
    {
      id: uuid(),
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet",
    },
  ],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "REMOVE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// store
export const store = createStore(
  notesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
