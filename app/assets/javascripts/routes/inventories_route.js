MetalsInventory.InventoriesRoute = Ember.Route.extend({
  model: function() {
    MetalsInventory.Inventory.find();
  }
});