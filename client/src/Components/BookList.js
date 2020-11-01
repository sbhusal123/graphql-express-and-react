import React, { Component } from "react";

// Graphql Imports
import { gql } from "apollo-boost"; // To make api calls
import { graphql } from "react-apollo"; // To bind query to component

const getBooksQuery = gql`
    {
        books {
            name
            id
            genre
        }
    }
`;

class BookList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <ul id="book-list">
                    <li>Book Name</li>
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
