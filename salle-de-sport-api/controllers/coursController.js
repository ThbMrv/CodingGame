const Cours = require('../models/coursModel');

exports.getAll = async (req, res) => {
  try {
    const result = await Cours.getAllCours();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await Cours.getCoursById(req.params.id);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Cours non trouvé' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  const { nom, description, coach_id } = req.body;
  if (!nom || !coach_id) return res.status(400).json({ error: 'Nom et coach_id requis' });
  try {
    const result = await Cours.createCours(nom, description, coach_id);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const { nom, description, coach_id } = req.body;
  try {
    const result = await Cours.updateCours(req.params.id, nom, description, coach_id);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Cours non trouvé' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Cours.deleteCours(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
