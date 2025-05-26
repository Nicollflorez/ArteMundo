import express from 'express';
import obras from './obras.js';

const router = express.Router();

// Middleware para registrar cada visita
router.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Visita a: ${req.originalUrl}`);
  next();
});

// Función para obtener la cantidad de items en el carrito
const getCarritoCount = (session) => {
  return session.carrito ? session.carrito.reduce((sum, item) => sum + item.cantidad, 0) : 0;
};

// Página de inicio
router.get('/', (req, res) => {
  const carritoCount = getCarritoCount(req.session);
  res.render('index', { titulo: 'ArteMundo', carritoCount: carritoCount });
});

// Galería de obras
router.get('/galeria', (req, res) => {
  const carritoCount = getCarritoCount(req.session);
  res.render('galeria', { titulo: 'Galería de Obras', obras, carritoCount: carritoCount });
});

// Página de obra individual dinámica
router.get('/obra/:id', (req, res) => {
  const obra = obras.find(o => o.id == req.params.id);
  if (!obra) return res.status(404).send('Obra no encontrada');
  const carritoCount = getCarritoCount(req.session);
  res.render('obra', { titulo: obra.titulo, obra, carritoCount: carritoCount });
});

// Obra fija de ejemplo (opcional)
router.get('/obra-ejemplo', (req, res) => {
  const obra = { /* ... */ };
  const carritoCount = getCarritoCount(req.session);
  res.render('obra', { titulo: obra.titulo, obra, carritoCount: carritoCount });
});

// Agregar al carrito
router.post('/carrito/agregar', (req, res) => {
  const obraId = parseInt(req.body.id);
  const obra = obras.find(o => o.id === obraId);
  if (!obra) return res.status(404).send('Obra no encontrada');

  if (!req.session.carrito) req.session.carrito = [];

  const item = req.session.carrito.find(i => i.id === obraId);
  if (item) {
    item.cantidad++;
  } else {
    req.session.carrito.push({
      id: obra.id,
      titulo: obra.titulo,
      precio: obra.precio || 100,
      cantidad: 1
    });
  }

  res.redirect('/carrito');
});

// Mostrar carrito
router.get('/carrito', (req, res) => {
  const carritoCount = getCarritoCount(req.session);
  const carrito = req.session.carrito || [];
  res.render('carrito', { titulo: 'Tu Carrito', carrito, carritoCount: carritoCount });
});

// Eliminar del carrito
router.post('/carrito/eliminar', (req, res) => {
  const obraId = parseInt(req.body.id);
  if (!req.session.carrito) return res.redirect('/carrito');
  req.session.carrito = req.session.carrito.filter(item => item.id !== obraId);
  res.redirect('/carrito');
});

// Acerca
router.get('/acerca', (req, res) => {
  const carritoCount = getCarritoCount(req.session);
  res.render('acerca', { titulo: 'Acerca de ArteMundo', carritoCount: carritoCount });
});

// Página de descuentos
router.get('/descuento', (req, res) => {
  const carritoCount = getCarritoCount(req.session);
  res.render('descuento', { titulo: 'Descuentos y Juego', carritoCount: carritoCount });
});

// Página de la app
router.get('/app', (req, res) => {
  const carritoCount = getCarritoCount(req.session);
  res.render('app', { titulo: 'Nuestra App', carritoCount: carritoCount });
});

// Redirección opcional
router.get('/inicio', (req, res) => {
  res.redirect('/');
});

export default router;


