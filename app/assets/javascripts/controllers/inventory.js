MetalsInventory.InventoryController = Ember.ObjectController.extend({
  actions: {
    removeInventory: function() {
      var inventory = this.get('model');
      inventory.deleteRecord();
      inventory.save();
      this.transitionToRoute('inventories.index');
    },

    addGood: function() {
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
      good.destroyRecord();
    },

    renderEditGood: function(good) {
      this.set('selectedGood', good);
      this.set('editPartial', "edit" + good.get('metal_type'))
    },

    editGood: function(good) {
      function failure(reason) {
        alert('Please fill in all required fields');
      }

      good.save().catch(failure);
      this.set('selectedGood', null);
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
  comment: null,

  selectedGood: null,

  editPartial: null
  
});