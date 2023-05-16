import { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { people: users };
        })
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState({ searchField });
  };

  render() {
    const { people, searchField } = this.state;

    const filteredPeople = people.filter((person) => {
      return person.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="app">
        <main>
          <h1 className="app-title">Random People</h1>

          <SearchBox
            onChangeHandler={this.onSearchChange}
            placeholder={"Search a person..."}
            className={"search-box"}
          />
          <CardList people={filteredPeople} />
        </main>
      </div>
    );
  }
}

export default App;
