const express = require("express");
const router = express();

router.get("/", (req, res) => {
    res.render("../projects/calculator/views/index.ejs", {
        navFile: 'navProject.ejs'
    });
});


module.exports = router;