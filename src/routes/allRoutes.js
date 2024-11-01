// src/routes/allRoutes.js
import registerRoutes from './registerRoutes.json';
import loginRoutes from './loginRoutes.json';

const allRoutes = [...registerRoutes, ...loginRoutes];

export default allRoutes;
