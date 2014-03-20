MetalsInventory.InventoriesIndexRoute = Ember.Route.extend({
  model: function() {
    return MetalsInventory.Inventory.find();
  }
});