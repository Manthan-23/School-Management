import pool from '../db.js';
import { getDistance } from 'geolib';


export const addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO school (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, latitude, longitude]
    );
    res.status(201).json({ message: 'School added successfully', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
};


export const listSchools = async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const [schools] = await pool.query('SELECT * FROM school');

    const schoolsWithDistance = schools.map(school => {
      const distance = getDistance(
        { latitude: parseFloat(lat), longitude: parseFloat(lng) },
        { latitude: school.latitude, longitude: school.longitude }
      );

      return {
        ...school,
        distanceInKm: (distance / 1000).toFixed(2),
      };
    });

    // Sort by distance
    schoolsWithDistance.sort((a, b) => a.distanceInKm - b.distanceInKm);

    res.json(schoolsWithDistance);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
};