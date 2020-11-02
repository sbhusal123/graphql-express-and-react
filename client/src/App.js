import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Components
import BookList from "./Components/BookList";
import AddBook from "./Components/AddBook";

// apollo Client Setup
const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div id="main">
                    <h1>Surya's Reading List</h1>
                    <BookList />
                    <AddBook />
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
