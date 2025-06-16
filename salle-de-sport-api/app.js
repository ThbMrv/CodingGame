const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const coachRoutes = require('./routes/coachRoutes');
app.use('/api/coachs', coachRoutes);

const coursRoutes = require('./routes/coursRoutes');
app.use('/api/cours', coursRoutes);

const abonneRoutes = require('./routes/abonneRoutes');
app.use('/api/abonnes', abonneRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
