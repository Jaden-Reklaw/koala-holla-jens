const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET


// POST


// PUT


// DELETE
router.delete('/:id', (req, res) => {
    let id = req.params.id; // id of the thing to delete
    console.log('Delete route called with id of', id);

    // delete query
    let queryText = `DELETE FROM "koalas" WHERE "id" = $1;`;

    // substitute $s for values
    pool.query(queryText, [id])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`error deleteing koala`, error);
            res.sendStatus(500);
        });


});
module.exports = koalaRouter;