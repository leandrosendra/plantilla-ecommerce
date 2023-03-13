



// const express = require('express');
// const app = express();
// const Carrito = require('./carrito'); // Importa el modelo de Carrito
// const Producto = require('./producto'); // Importa el modelo de Producto
// const Usuario = require('./usuario'); // Importa el modelo de Usuario

// // Crea un nuevo carrito para el usuario
// app.post('/carritos', async (req, res) => {
//   const usuarioId = req.body.usuarioId;
  
//   // Crea el carrito en la base de datos
//   const carrito = await Carrito.create({ usuarioId });
  
//   res.json(carrito);
// });

// // Obtiene el carrito del usuario
// app.get('/carritos/:usuarioId', async (req, res) => {
//   const usuarioId = req.params.usuarioId;
  
//   // Busca el carrito del usuario en la base de datos
//   const carrito = await Carrito.findOne({
//     where: { usuarioId },
//     include: [{ model: Producto }]
//   });
  
//   if (carrito) {
//     res.json(carrito);
//   } else {
//     res.status(404).send('Carrito no encontrado');
//   }
// });

// // Agrega un producto al carrito del usuario
// app.post('/carritos/:usuarioId/productos/:productoId', async (req, res) => {
//   const usuarioId = req.params.usuarioId;
//   const productoId = req.params.productoId;
  
//   // Busca el carrito del usuario en la base de datos
//   const carrito = await Carrito.findOne({
//     where: { usuarioId },
//     include
// // Busca el producto en la base de datos
//     const producto = await Producto.findByPk(productoId);

//     if (!producto) {
//     return res.status(404).send('Producto no encontrado');
//         }

//     // Agrega el producto al carrito
//     await carrito.addProducto(producto);

//     res.send('Producto agregado al carrito');
// });

// // Elimina un producto del carrito del usuario
// app.delete('/carritos/:usuarioId/productos/:productoId', async (req, res) => {
// const usuarioId = req.params.usuarioId;
// const productoId = req.params.productoId;

// // Busca el carrito del usuario en la base de datos
// const carrito = await Carrito.findOne({
// where: { usuarioId },
// include: [{ model: Producto }]
// });

// if (!carrito) {
// return res.status(404).send('Carrito no encontrado');
// }

// // Busca el producto en el carrito
// const producto = carrito.productos.find(p => p.id === Number(productoId));

// if (!producto) {
// return res.status(404).send('Producto no encontrado en el carrito');
// }

// // Elimina el producto del carrito
// await carrito.removeProducto(producto);

// res.send('Producto eliminado del carrito');
// });

// // Cierra el carrito del usuario
// app.put('/carritos/:usuarioId', async (req, res) => {
// const usuarioId = req.params.usuarioId;

// // Busca el carrito del usuario en la base de datos
// const carrito = await Carrito.findOne({ where: { usuarioId } });

// if (!carrito) {
// return res.status(404).send('Carrito no encontrado');
// }

// // Cierra el carrito
// carrito.estado = 'cerrado';
// await carrito.save();

// res.send('Carrito cerrado');
// });