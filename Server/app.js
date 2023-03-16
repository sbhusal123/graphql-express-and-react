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
    "mongodb://127.0.0.1:27017/myapp"
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
