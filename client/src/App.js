import React, { Component } from "react";

// Components
import BookList from "./Components/BookList";

class App extends Component {
    render() {
        return (
            <div id="main">
                <h1>Surya's Reading List</h1>
                <BookList />
            </div>
        );
    }
}

export default App;
