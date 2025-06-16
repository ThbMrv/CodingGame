const Abonne = require('../models/abonneModel');

exports.getAll = async (req, res) => {
  try {
    const result = await Abonne.getAllAbonnes();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await Abonne.getAbonneById(req.params.id);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Abonné non trouvé' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  const { nom, email } = req.body;
  if (!nom || !email) return res.status(400).json({ error: 'Nom et email requis' });
  try {
    const result = await Abonne.createAbonne(nom, email);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const { nom, email } = req.body;
  try {
    const result = await Abonne.updateAbonne(req.params.id, nom, email);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Abonné non trouvé' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Abonne.deleteAbonne(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.inscrire = async (req, res) => {
  const { cours_id } = req.body;
  const abonne_id = req.params.id;
  if (!cours_id) return res.status(400).json({ error: 'cours_id requis' });
  try {
    await Abonne.inscrireAbonneAuCours(abonne_id, cours_id);
    res.status(200).json({ message: 'Inscription réussie' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCours = async (req, res) => {
  const abonne_id = req.params.id;
  try {
    const result = await Abonne.getCoursByAbonne(abonne_id);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
