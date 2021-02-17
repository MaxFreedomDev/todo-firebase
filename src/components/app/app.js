import React, { useEffect, useState } from "react";
import "./app.css";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form";
import { useSelector } from "react-redux";
import Loader from "../loader/loader";
import { useActions } from "../../hooks/use-action";

const App = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const { items, loading } = useSelector((state) => state.todo);
  const { createItemAction, getItems, updateItem } = useActions();

  const doneCount = items.filter((item) => item.done).length;
  const toDoCount = items.length - doneCount;

  useEffect(() => {
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchItems = (items, search) => {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  const filterItems = (items, filter) => {
    if (filter === "all") {
      return items;
    } else if (filter === "active") {
      return items.filter((item) => !item.done);
    } else if (filter === "done") {
      return items.filter((item) => item.done);
    }
  };

  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];
    const item = { ...arr[idx], [propName]: value };
    return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
  };

  const onToggleImportant = (id) => {
    const item = toggleProperty(items, id, "important");
    updateItem(item);
  };

  const onToggleDone = (id) => {
    const item = toggleProperty(items, id, "done");
    updateItem(item);
  };

  const onDelete = (id) => {
    const idx = items.findIndex((item) => item.id === id);
    const item = [...items.slice(0, idx), ...items.slice(idx + 1)];
    updateItem(item);
  };

  const createItem = (label) => {
    return {
      id: items.length === 0 ? 0 : items[items.length - 1]?.id + 1,
      label,
      important: false,
      done: false,
    };
  };

  const onItemAdded = (label) => {
    const item = createItem(label);
    createItemAction(item);
  };

  const visibleItems = searchItems(filterItems(items, filter), search);

  return (
    <div className="todo-app">
      <AppHeader toDo={toDoCount} done={doneCount} />
      <div className="search-panel d-flex">
        <SearchPanel onSearchChange={setSearch} />
        <ItemStatusFilter filter={filter} onFilterChange={setFilter} />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <TodoList
          items={visibleItems}
          onToggleImportant={onToggleImportant}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
        />
      )}
      <ItemAddForm onItemAdded={onItemAdded} />
    </div>
  );
};

export default App;
