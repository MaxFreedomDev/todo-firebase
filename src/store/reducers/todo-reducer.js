const initialState = {
  items: [],
  loading: false,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_ITEMS": {
      return {
        ...state,
        loading: true,
      };
    }
    case "GET_ITEMS_LIST": {
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
