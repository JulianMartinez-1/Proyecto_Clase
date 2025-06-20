import express from 'express';
// import trabajador from './endpoints/trabajador.js';
import product from './product/Controller.js';


const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
// app.use('/trabajador', trabajador);
app.use('/product', product);

//get, patch, delete, post

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});