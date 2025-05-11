const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

router.post('/', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: 'تم حجز الموعد بنجاح' });
  } catch (error) {
    res.status(500).json({ error: 'فشل الحجز' });
  }
});

module.exports = router;
