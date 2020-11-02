import React, { Component } from "react";

// Graphql Imports
import { graphql } from "react-apollo"; // To bind query to component
import { getAuthorsQuery } from "../queries/queries";

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            genre: "",
            authorId: ""
        };
    }
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

    submitForm(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Book Name:</label>
                    <input
                        type="text"
                        onChange={e => this.setState({ name: e.target.value })}
                    />
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input
                        type="text"
                        onChange={e => this.setState({ genre: e.target.value })}
                    />
                </div>

                <div className="field">
                    <label>Author</label>
                    <select
                        onChange={e =>
                            this.setState({ authorId: e.target.value })
                        }
                    >
                        <option>Select author</option>
                        {this.displayAuthorOptions()}
                    </select>
                </div>

                <button>+</button>
            </form>
        );
    }
}

export default graphql(getAuthorsQuery)(AddBook);
