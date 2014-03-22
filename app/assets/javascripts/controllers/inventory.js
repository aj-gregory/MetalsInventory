MetalsInventory.InventoryController = Ember.ObjectController.extend({
  actions: {
    removeInventory: function() {
      if (window.confirm('Are you sure you want to remove this inventory?')){
        var inventory = this.get('model');
        inventory.deleteRecord();
        inventory.save();
        this.transitionToRoute('inventories.index');
      }
    },

    addGood: function() {
      debugger
      var newGood = this.store.createRecord('good', {
        metal_type: this.selectedType,
        material: this.material,
        length: this.tubeLength,
        gauge: this.gauge,
        grade: this.grade,
        diameter: this.diameter,
        finish: this.finish,
        comment: this.comment,
        inventory: this.get('model')
      });
      
      function failure(reason) {
        alert('Please fill in all required fields');
      }

      newGood.save().catch(failure);
    },

    removeGood: function(good) {
      if (window.confirm('Are you sure you would like to remove this good?')) {
        good.destroyRecord();
      }
    }
  },

  metalTypes: ['Sheet', 'Plate', 'Tube'],

  selectedType: null,
  material: null,
  tubeLength: null,
  gauge: null,
  grade: null,
  diameter: null,
  finish: null,
  comment: null
});