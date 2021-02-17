import React, { useState } from "react";
import "./item-add-form.css";

const ItemAddForm = ({ onItemAdded, loading }) => {
  const [label, setLabel] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setLabel("");
    const cb = onItemAdded || (() => {});
    cb(label);
  };
  return (
    <form className="bottom-panel d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control new-todo-label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Добавить задачу"
      />

      <button
        type="submit"
        className="btn btn-outline-secondary"
        disabled={label === "" || loading}
      >
        Add
      </button>
    </form>
  );
};

export default ItemAddForm;
