MetalsInventory.InventoriesIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('inventory');
  }
});