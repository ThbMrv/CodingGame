const pool = require('../config/db');

const getAllAbonnes = () => {
  return pool.query('SELECT * FROM abonnes');
};

const getAbonneById = (id) => {
  return pool.query('SELECT * FROM abonnes WHERE id = $1', [id]);
};

const createAbonne = (nom, email) => {
  return pool.query(
    'INSERT INTO abonnes (nom, email) VALUES ($1, $2) RETURNING *',
    [nom, email]
  );
};

const updateAbonne = (id, nom, email) => {
  return pool.query(
    'UPDATE abonnes SET nom = $1, email = $2 WHERE id = $3 RETURNING *',
    [nom, email, id]
  );
};

const deleteAbonne = (id) => {
  return pool.query('DELETE FROM abonnes WHERE id = $1', [id]);
};

const inscrireAbonneAuCours = (abonne_id, cours_id) => {
  return pool.query(
    'INSERT INTO cours_abonnes (abonne_id, cours_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
    [abonne_id, cours_id]
  );
};

const getCoursByAbonne = (abonne_id) => {
  return pool.query(
    `SELECT cours.* FROM cours 
     JOIN cours_abonnes ON cours.id = cours_abonnes.cours_id
     WHERE cours_abonnes.abonne_id = $1`,
    [abonne_id]
  );
};

module.exports = {
  getAllAbonnes,
  getAbonneById,
  createAbonne,
  updateAbonne,
  deleteAbonne,
  inscrireAbonneAuCours,
  getCoursByAbonne
};
