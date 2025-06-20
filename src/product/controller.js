import { Router } from "express";
import {createNewProduct, allProducts,productById,updateProductById, deleteProductById } from './service.js';
const router = Router();

/* router.get('/', (req, res) => {
    res.send('lista de productos');
});

// parms
router.post('/', (req, res) => {
    const {id} = req.parms;
    res.send('crear productos por id: ' + id);
});
//query 
router.get('/query', (req, res) => {
    const {id} = req.query;
    res.send('query productos por id: ' + id);
});
// body
router.post('/body', (req, res) => {
    const {id} = req.body;
    res.send('crear productos por body id: ' + id);
}); */

//create
router.post('/', (req, res) => {
    const data = req.body 
    createNewProduct(data, res)
})

//read
router.get('/', (req, res) => {
      allProducts(res) 
})
//oneProduct
router.get('/:id', (req, res) => {
    let paramId = +req.params.id
    productById(paramId, res)
})

//update
router.put('/:id', (req, res) => {
     const id = +req.params.id
     const body = req.body
     updateProductById(id, body, res)
     
})

/* //updateProductbyid
router.patch('/:id', (req, res) => {
}) */

//delete
router.delete('/:id', (req, res) => {
   const paramid = req.params.id
   deleteProductById(paramid, res)
})


export default router;