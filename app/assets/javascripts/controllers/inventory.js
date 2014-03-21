MetalsInventory.InventoryController = Ember.ObjectController.extend({
  actions: {
    removeInventory: function() {
      var inventory = this.get('model');
      inventory.deleteRecord();
      inventory.save();
      this.transitionToRoute('inventories.index');
    }
  },

  metalTypes: ['Sheet', 'Plate', 'Tube'],

  selectedType: 'Sheet'
});