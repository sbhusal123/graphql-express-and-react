import React, { Component } from "react";

// Components
import BookDetails from "./BookDetails";

// Graphql Imports
import { graphql } from "react-apollo"; // To bind query to component
import { getBooksQuery } from "../queries/queries";

class BookList extends Component {
    // Display List of books
    diplayBooks() {
        const data = this.props.data;

        if (data.loading) {
            return <div>Loading books...</div>;
        } else {
            return data.books.map(book => {
                return <li key={book.id}> {book.name}</li>;
            });
        }
    }

    render() {
        return (
            <div>
                <ul id="book-list">{this.diplayBooks()}</ul>
                <BookDetails />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
