var vows = require('vows');
var assert = require('assert');
var workable = require('../index.js');


vows.describe('api tests').addBatch({

  // isFunction
  'when instantiating workable':{
    topic:function(){
      return new workable();
    },
    'workable should be an instantiable object':function(topic) {
      assert.equal(typeof(topic), 'object');
    }
  },

   // _get
  'when making a generic _get call to /accounts':{
    topic:function(){ 
      workable._get('/accounts', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  }


}).export(module);