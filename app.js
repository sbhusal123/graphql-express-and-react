const express = require("express");

const app = express();

// Start Node server on port 4000
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000 ...");
});
