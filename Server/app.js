const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Allow Cross Origin Request
app.use(cors());

// Connect to mlab database
mongoose.connect(
    "mongodb://surya:surya@cluster0-shard-00-00.15xqi.mongodb.net:27017,cluster0-shard-00-01.15xqi.mongodb.net:27017,cluster0-shard-00-02.15xqi.mongodb.net:27017/graphql_practice?ssl=true&replicaSet=atlas-mz1pxe-shard-0&authSource=admin&retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
    console.log("Connected to database.. ");
});

// Use graphql Middleware in route.
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

// Start Node server on port 4000
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000 ...");
});
