const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET
router.get('/', (req, res)=>{
    let queryText = '  '
    pool.query(queryText)
    .then(result =>{
        res.send(result);
    }).catch(error => {
     console.log('Ummm do we have koalas??', erro);
    })
})

// POST
router.post('/', (req,res)=>{
    let newKoala = req.body;
    console.log('Adding New Koala',newKoala);

    let queryText = ' '
    pool.query(queryText, [])
    .then(result =>{
        res.sendStatus(500);
    }).catch(error => {
        console.log(`Error adding Koala`, error);
        res.sendStatus(500);
      });
})


// PUT
router.put('/:id',  (req, res) => {
    let koala = req.body; 
    let id = req.params.id; // id of the book to update
    let update = req.params.update;
    let queryText = `  `;
    pool.query(queryText,[id])
    .then(()=>{
      console.log('Updating koala ${id} with ', koala);
      res.sendStatus(200);
    })
  
    // TODO - REPLACE BELOW WITH YOUR CODE
    .catch((error)=>{
      console.log('Error in UPDATE',error);
      res.sendStatus(500);
    })
  });


// DELETE
router.delete('/:id',  (req, res) => {
    let id = req.params.id; 
    let queryText = 
    pool.query(queryText, [req.params.id])
    .then(()=>{
      res.sendStatus(200);
      console.log('Delete Koala', id);
    })
    // TODO - REPLACE BELOW WITH YOUR CODE

    
    .catch((error)=>{
      res.sendStatus(500);
      console.log('Error on Delete Koala', error);
    })
});

module.exports = koalaRouter;
