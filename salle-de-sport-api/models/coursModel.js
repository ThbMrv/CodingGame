const pool = require('../config/db');

const getAllCours = () => {
  return pool.query(
    `SELECT cours.*, coachs.nom AS coach_nom 
     FROM cours LEFT JOIN coachs ON cours.coach_id = coachs.id`
  );
};

const getCoursById = (id) => {
  return pool.query(
    `SELECT cours.*, coachs.nom AS coach_nom 
     FROM cours LEFT JOIN coachs ON cours.coach_id = coachs.id 
     WHERE cours.id = $1`,
    [id]
  );
};

const createCours = (nom, description, coach_id) => {
  return pool.query(
    `INSERT INTO cours (nom, description, coach_id)
     VALUES ($1, $2, $3) RETURNING *`,
    [nom, description, coach_id]
  );
};

const updateCours = (id, nom, description, coach_id) => {
  return pool.query(
    `UPDATE cours SET nom = $1, description = $2, coach_id = $3
     WHERE id = $4 RETURNING *`,
    [nom, description, coach_id, id]
  );
};

const deleteCours = (id) => {
  return pool.query(`DELETE FROM cours WHERE id = $1`, [id]);
};

module.exports = {
  getAllCours,
  getCoursById,
  createCours,
  updateCours,
  deleteCours
};
