import express, { Router } from 'express';
import './Routes/Router.js';


app.use(express.static('/src/Backend/Routes/Router.js'));

console.log("Estas en la ruta:" )