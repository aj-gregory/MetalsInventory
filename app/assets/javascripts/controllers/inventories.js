MetalsInventory.InventoriesIndexController = Ember.ArrayController.extend({
  actions: {
    createInventory: function() {
      var name = this.get('newName');

      var inventory = this.store.createRecord('inventory', {
        name: name
      });

      this.set('newName', '');

      inventory.save();
    }
  }
});

