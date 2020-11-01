const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

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
                return {
                    id: 2,
                    name: "sasd",
                    genre: "asd"
                };
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
