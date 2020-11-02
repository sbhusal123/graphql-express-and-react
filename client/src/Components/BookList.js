import React, { Component } from "react";

// Components
import BookDetails from "./BookDetails";

// Graphql Imports
import { graphql } from "react-apollo"; // To bind query to component
import { getBooksQuery } from "../queries/queries";

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null // id of book selected for detail
        };
    }

    // Display List of books
    diplayBooks() {
        const data = this.props.data;

        if (data.loading) {
            return <div>Loading books...</div>;
        } else {
            return data.books.map(book => {
                return (
                    <li
                        key={book.id}
                        onClick={e => {
                            this.setState({ selected: book.id });
                        }}
                    >
                        {" "}
                        {book.name}
                    </li>
                );
            });
        }
    }

    render() {
        return (
            <div>
                <ul id="book-list">{this.diplayBooks()}</ul>
                <BookDetails bookId={this.state.selected} />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
