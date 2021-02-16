import fire from "../../firebase";

const db = fire.database();

const loadingItems = () => {
  return {
    type: "LOADING_ITEMS",
  };
};

const getItemsList = (items) => {
  return {
    type: "GET_ITEMS_LIST",
    payload: items,
  };
};

export const getItems = () => (dispatch) => {
  dispatch(loadingItems());
  db.ref(`items`).on("value", (snap) => {
    let data = snap.val();
    if (data === null) {
      return null;
    }
    dispatch(getItemsList(data));
  });
};

export const createItemAction = (payload) => (dispatch) => {
  db.ref("items")
    .child(`${payload.id}`)
    .set(payload)
    .then(() => {
      dispatch(getItems);
    });
};

export const deleteItem = (id) => (dispatch) => {
  db.ref("items")
    .child(`${id}`)
    .remove()
    .then(() => {
      dispatch(getItems);
    });
};

export const updateItem = (payload) => (dispatch) => {
  db.ref(`items`)
    .child(`${payload.id}`)
    .set(payload)
    .then(() => {
      dispatch(getItems());
    });
};
