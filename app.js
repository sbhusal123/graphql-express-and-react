const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema/schema");

const app = express();

// Use graphql Middleware in route.
app.use(
    "/graphql",
    graphqlHTTP({
        schema
    })
);

// Start Node server on port 4000
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000 ...");
});
