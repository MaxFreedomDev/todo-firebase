import React, { useState } from "react";
import "./app.css";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

const App = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  return (
    <div className="todo-app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel onSearchChange={setSearch} />
        <ItemStatusFilter filter={filter} onFilterChange={setFilter} />
      </div>
    </div>
  );
};

export default App;
