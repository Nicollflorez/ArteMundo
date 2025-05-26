import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import session from 'express-session';      // <-- Importa express-session
import router from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Configuración de Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para analizar datos de formularios (si los vas a usar)
app.use(express.urlencoded({ extended: true }));

// Middleware de sesión (agregado justo aquí)
app.use(session({
  secret: 'arte-secreto-123',    // Cambia esta cadena por algo seguro
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }      // En producción, con HTTPS, pon secure: true
}));

// Middleware de logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware para pasar variables a las vistas (debe ir ANTES del router)
app.use((req, res, next) => {
  res.locals.nombreSitio = "Artemundo Museo"; // Ejemplo de variable para las vistas
  next();
});

// Monta el router
app.use('/', router);

// Iniciar el servidor
app.listen(port, () => {
  console.log(` El servidor de Artemundo está funcionando en http://localhost:${port}`);
});

export default app;

