// Load required packages
var Location = require('../models/location');

// Create endpoint /api/locations for POSTS
exports.postLocations = function(req, res) {
  // Create a new instance of the Location model
  var location = new Location();

  // Set the location properties that came from the POST data
  location.location = req.body.location;

  // Save the location and check for errors
  location.save(function(err) {
    if (err) {
      if(err.code == 11000) {
        res.json({ message: 'Location already exists!!', data: err });
		return;
	  }
      res.send(err);
	}
	

    res.json({ message: 'Location added!', data: location });
  });
};

// Create endpoint /api/locations for GET
exports.getLocations = function(req, res) {
  // Use the Location model to find all locations
  Location.find(function(err, locations) {
    if (err)
      res.send(err);

    res.json(locations);
  });
};

// Create endpoint /api/locations/:location_id for GET
exports.getLocation = function(req, res) {
  // Use the Location model to find a specific location
  Location.findById(req.params.location_id, function(err, location) {
    if (err)
      res.send(err);

    res.json(location);
  });
};

exports.putLocation = function(req, res) {
  // Use the Location model to find a specific location
  Location.findById(req.params.location_id, function(err, location) {
    if (err)
      res.send(err);

    // Update the existing location language values
    location.location = req.body.location;

    // Save the location and check for errors
    location.save(function(err) {
      if (err)
        res.send(err);

      res.json(location);
    });
  });
};

exports.deleteLocation = function(req, res) {
  // Use the Location model to find a specific location and remove it
  Location.findByIdAndRemove(req.params.location_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Location removed!' });
  });
};