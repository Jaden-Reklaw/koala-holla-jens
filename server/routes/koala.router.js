const express = require('express');
const router = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "koalas" ORDER BY "name";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    })
        .catch(error => {
            console.log('error getting books', error);
            res.sendStatus(500);
        });
});

// POST
router.post('/', (req,res)=>{
    let newKoala = req.body;
    console.log('Adding New Koala',newKoala);

    let queryText = `INSERT INTO koalas (name, gender, age, ready_to_transfer, notes)
        VALUES($1, $2, $3, $4, $5);`
    pool.query(queryText, [newKoala.name, newKoala.gender, newKoala.age, newKoala.readyForTransfer, newKoala.notes])
    .then(result =>{
        res.sendStatus(200);
    }).catch(error => {
        console.log(`Error adding Koala`, error);
        res.sendStatus(500);
      });
})

router.post('/search', (req, res) => {
    let searchFor = req.body;
    console.log('Searching for koala', searchFor);

    let queryText = `SELECT * FROM "koalas" WHERE "name" LIKE $1 ORDER BY "name";`
    pool.query(queryText, [`%${searchFor.searchFor}%`])
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log(`Error adding Koala`, error);
            res.sendStatus(500);
        });
})


// PUT
router.put('/:id',  (req, res) => {
    let koala = req.body; 
    let id = req.params.id;
    let queryText = `UPDATE koalas SET ready_to_transfer = $1
                    WHERE id = $2`;
    pool.query(queryText, [koala.status, id])
    .then(()=>{
      console.log(`Updating koala ${id} with `, koala);
      res.sendStatus(200);
    }).catch((error)=>{
      console.log('Error in UPDATE',error);
      res.sendStatus(500);
    })
  });


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
