const pool = require('../config/db');

const getAllCoachs = () => {
  return pool.query('SELECT * FROM coachs');
};

const getCoachById = (id) => {
  return pool.query('SELECT * FROM coachs WHERE id = $1', [id]);
};

const createCoach = (nom, specialite) => {
  return pool.query(
    'INSERT INTO coachs (nom, specialite) VALUES ($1, $2) RETURNING *',
    [nom, specialite]
  );
};

const updateCoach = (id, nom, specialite) => {
  return pool.query(
    'UPDATE coachs SET nom = $1, specialite = $2 WHERE id = $3 RETURNING *',
    [nom, specialite, id]
  );
};

const deleteCoach = (id) => {
  return pool.query('DELETE FROM coachs WHERE id = $1', [id]);
};

module.exports = {
  getAllCoachs,
  getCoachById,
  createCoach,
  updateCoach,
  deleteCoach
};
