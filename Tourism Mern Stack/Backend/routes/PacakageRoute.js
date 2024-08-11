const express = require('express');
const router = express.Router();
const Package = require('../Schema/Pacakage');

// Define your routes for package related operations
router.post('/packages', async (req, res) => {
    try {
        // Create a new package using the request body
        const newPackage = await Package.create(req.body);
        res.status(201).json({ success: true, data: newPackage });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// GET endpoint to fetch all packages
router.get('/packages', async (req, res) => {
    try {
        // Fetch all packages from the database
        const packages = await Package.find();
        res.status(200).json({ success: true, data: packages });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.get('/packages/:packageId', async (req, res) => {
  try {
      const packageId = req.params.packageId;
      // Query the database to find the package by ID
      const package = await Package.findById(packageId);
      if (!package) {
          // If package is not found, return 404 error
          return res.status(404).json({ error: 'Package not found' });
      }
      // If package is found, return package details
      res.status(200).json({ success: true, data: package });
  } catch (error) {
      console.error('Error fetching package details:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/packages/:packageId', async (req, res) => {
    try {
        const packageId = req.params.packageId;
        // Find the package by ID and update its details with the data from the request body
        const updatedPackage = await Package.findByIdAndUpdate(packageId, req.body, { new: true });
        if (!updatedPackage) {
            return res.status(404).json({ error: 'Package not found' });
        }
        res.status(200).json({ success: true, data: updatedPackage });
    } catch (error) {
        console.error('Error updating package:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete a package by ID
router.delete('/packages/:packageId', async (req, res) => {
    try {
        const packageId = req.params.packageId;
        // Find the package by ID and delete it
        const deletedPackage = await Package.findByIdAndDelete(packageId);
        if (!deletedPackage) {
            return res.status(404).json({ error: 'Package not found' });
        }
        res.status(200).json({ success: true, message: 'Package deleted successfully' });
    } catch (error) {
        console.error('Error deleting package:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
