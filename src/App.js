import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFieldValue: "",
    };
  }

  searchFieldChange = (e) => {
    this.setState({ searchFieldValue: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    let filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name
        .toLowerCase()
        .includes(this.state.searchFieldValue.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          onChange={this.searchFieldChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
