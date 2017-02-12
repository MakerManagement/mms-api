var express = require('express');

// Load controllers
var itemController = require('./controllers/items');
var tagController = require('./controllers/tags');
var locationController = require('./controllers/locations');

var router = express.Router();

// Initial dummy route for testing
router.get('/', function(req, res) {
  res.json({ message: 'Hello World!!' });
});

// Create endpoint prefix /items
router.route('/items')
  .post(itemController.postItems)
  .get(itemController.getItems);

// Create endpoint prefix /items/:item_id
router.route('/items/:item_id')
  .get(itemController.getItem)
  .put(itemController.putItem)
  .delete(itemController.deleteItem);
  
// Create endpoint prefix /tags
router.route('/tags')
  .post(tagController.postTags)
  .get(tagController.getTags);

// Create endpoint prefix /tags/:tag_id
router.route('/tags/:tag_id')
  .get(tagController.getTag)
  .put(tagController.putTag)
  .delete(tagController.deleteTag);
  
// Create endpoint prefix /locations
router.route('/locations')
  .post(locationController.postLocations)
  .get(locationController.getLocations);

// Create endpoint prefix /locations/:location_id
router.route('/locations/:location_id')
  .get(locationController.getLocation)
  .put(locationController.putLocation)
  .delete(locationController.deleteLocation);

module.exports = router;