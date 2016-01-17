// LinerNotes Application:  Track Model
module.exports = function() {
  var db = require('../../db.js')();
  var Sequelize = require('sequelize');
  var sequelize = db.connection;

  var defaultFail = function(err, doc){ console.log('err' + err + doc); };

  // Create Track Table ******************************************************
  var track = sequelize.define('track', {
    artist:{
      type:Sequelize.STRING
    },
    album:{
      type:Sequelize.STRING
    },
    track: {
      type: Sequelize.STRING
    }
  });

  // Add one Track to database ******************************************************
  var _addOne = function(payload, success, fail){
    track.create({
      artist: payload.artist,
      album: payload.album,
      trackTitle: payload.trackTitle,
    })
    // If successful adding, run success callback
    .then(success)

    // If error on adding, run Fail Callback
    .catch(fail);
  };

/*
  // Find All Orders

   * @param {function} success Callback function for execution on successful adding.
   * @param {function} fail Callback function for execution on failed adding.
   * @example
   * // Return all Orders with Success and Failure
   * order.all(function(data){
   *   res.json(data);
   * }, function(err){
   *   console.log('err' + err);
   * });

  var _findAll = function (success, fail){
    order.findAll().then(success).catch(fail);
    console.log(success);
  };


  // Find One Order(s)

   * @param {function} success Callback function for execution on successful adding.
   * @param {function} fail Callback function for execution on failed adding.
   * @example
   * // Find One based on supplied obj, in this case just a time_stamp or ID with Success and Failure
   * order.findOne({shipping_tracking:1600}, function(data){
   *   res.json(data);
   * }, function(err, doc){
   *   console.log('err' + err + doc);
   * });

  var _findOne = function (payload, success, fail){

    // Run user data through sanitize.
    var cleanData = defaultSanitize(payload);

    // If sanitize fails prevent payload from touching the db
    if(!cleanData) return fail({ code:301 });

    order.findOne({where:payload}).then(success).catch(fail);
  };


  // Find Units

  * @param {obj} What to filter upon
  * @param {function} success Callback function for execution on successful adding.
  * @param {function} fail Callback function for execution on failed adding.
  * @example
  * // Return all orders where it meets a certain requirement with Success and Failure
  * order.find({statusId: status.statusId}, function(data){
  *   res.json(data);
  * }, function(err){
  *   console.log('err' + err);
  * });

  var _find = function (payload, success, fail){
    order.findAll({where:payload}).then(success).catch(fail);
    console.log(success);
  };


  // Remove One Order

  * @param {obj} payload Requires 'sku' attribute
  * @param {function} success Callback function for execution on successful adding.
  * @param {function} fail Callback function for execution on failed adding.
  * @example
  * // Remove Order with Success and Fail
  * order.remove({sku:AJK1500}, function(){
  *   console.log('No more records remain with that time_stamp');
  * }, function(err, doc){
  *   console.log('err' + err + doc);
  * });

  var _remove = function (payload, success, fail){

    // Run user data through sanitize.
    var cleanData = defaultSanitize(payload);

    // If sanitize fails prevent payload from touching the db
    if(!cleanData) return fail({ code:301 });

    // Validation:
    if(!cleanData.id) return fail({ code:301 });

    order.destroy({where: {id: cleanData.id}}).then(success).catch(fail);
  };



  // Update One Order

  * @param {obj} payload Requires 'id' attribute
  * @param {function} success Callback function for execution on successful adding.
  * @param {function} fail Callback function for execution on failed adding.
  * @example
  * // Update Unit with Success and Fail
  * order.update({shipping_tracking:1709}, function(data){
  *     console.log(data);
  * }, function(err){
  *   console.log('Error Code: ' + err.code);
  * });

  var _update = function(payload, updateObj, success, fail){
    // Run user data through sanitize.
    cleanData = defaultSanitize(payload);

    // If sanitize fails prevent payload from touching the db
    if(!cleanData) return fail({ code:301 });

    // Validation:
    if(!cleanData.id) return fail({ code:301 });

    order.find({where:{id:cleanData.id}}).then(function (data) {
      // Console.log('hello', data);
      // No data was found
      if (!data) return fail({ code:309 });
      // Update the Atts of the returned row
      data.updateAttributes({
          shipping_tracking: updateObj.shipping_tracking,
          name:updateObj.name,
          address:updateObj.address,
          city: updateObj.city,
          state: updateObj.state,
          zip: updateObj.zip,
          phone: updateObj.phone
      }).then(success).catch(fail)
    }).catch(fail);
  };
*/
  return {
    create: _addOne
    //findAll: _findAll,
    //findOne: _findOne,
    //find: _find,
    //remove: _remove,
    //update: _update
  }
}();