const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const _ = require("lodash");

// Sample Query Data: Supposed to be from db
var books = [
    { name: "Book1", genre: "Genre1", id: "1" },
    { name: "Book2", genre: "Genre2", id: "2" },
    { name: "Book3", genre: "Genre3", id: "3" }
];

// Defining graphql Object Types: Mapps db col from db to graphql
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
                return _.find(books, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
