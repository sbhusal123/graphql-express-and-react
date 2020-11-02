import React, { Component } from "react";

// Graphql Imports
import { graphql } from "react-apollo"; // To bind query to component
import { getAuthorsQuery } from "../queries/queries";

class AddBook extends Component {
    // Return options for authors
    displayAuthorOptions() {
        const data = this.props.data;

        if (data.loading) {
            return <option disabled>Loading authors...</option>;
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>
                        {author.name}
                    </option>
                );
            });
        }
    }

    render() {
        console.log(this.props.data);
        return (
            <form id="add-book">
                <div className="field">
                    <label>Book Name:</label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label>Author</label>
                    <select>
                        <option disabled>Select author</option>
                        {this.displayAuthorOptions()}
                    </select>
                </div>

                <button>+</button>
            </form>
        );
    }
}

export default graphql(getAuthorsQuery)(AddBook);
