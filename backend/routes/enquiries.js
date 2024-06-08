// routes/enquiries.js
const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const newEnquiry = new Enquiry({
      name,
      email,
      subject,
      message,
    });

    const savedEnquiry = await newEnquiry.save();
    res.json(savedEnquiry);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
