const graphql = require("graphql");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

const _ = require("lodash");

// Sample Query Data: Supposed to be from db
var books = [
    { name: "Book1", genre: "Genre1", id: "1", authorId: "1" },
    { name: "Book2", genre: "Genre2", id: "2", authorId: "2" },
    { name: "Book3", genre: "Genre3", id: "3", authorId: "3" },
    { name: "Book4", genre: "Genre3", id: "4", authorId: "1" },
    { name: "Book5", genre: "Genre3", id: "5", authorId: "2" },
    { name: "Book6", genre: "Genre3", id: "6", authorId: "3" }
];
var authors = [
    { name: "Author1", age: 32, id: "1" },
    { name: "Author2", age: 35, id: "2" },
    { name: "Author3", age: 45, id: "3" }
];

// Defining graphql Object Types: Mapps db col from db to graphql
const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                // Parent is Book Type
                return _.find(authors, { id: parent.authorId });
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType), // List Type -> List of books associated with author
            resolve(parent, args) {
                return _.filter(books, { authorId: parent.id });
            }
        }
    })
});

// Grapql Query Type: Tells how to query graphql?
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } }, // argument is expected for specific book type
            resolve(parent, args) {
                // Code to get data from db / other sources
                return _.find(books, { id: args.id });
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // Code to get data from db / other sources
                return _.find(authors, { id: args.id });
            }
        },
        books: {
            type: new GraphQLList(BookType), // List Type -> Returns List of objects
            resolve(parent, args) {
                return books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return authors;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
