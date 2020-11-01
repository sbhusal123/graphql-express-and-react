const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const _ = require("lodash");

// Sample Query Data: Supposed to be from db
var books = [
    { name: "Book1", ganre: "Genre1", id: "1" },
    { name: "Book2", ganre: "Genre2", id: "2" },
    { name: "Book3", ganre: "Genre3", id: "3" }
];

// Defining graphql Object Types: Similar to model
const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

// Grapql Query Type: Tells how to query graphql?
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } }, // argument is expected for specific book type
            resolve(parent, args) {
                // Code to get data from db / other sources
                _.find(books, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
