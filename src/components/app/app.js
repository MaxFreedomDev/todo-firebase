import React, {useState} from "react";
import "./app.css";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";

const App = () => {
    const [search, setSearch] = useState("");


  return (
      <div className="todo-app">
        <AppHeader />
        <SearchPanel onSearchChange={setSearch}/>
      </div>
  )
};

export default App;