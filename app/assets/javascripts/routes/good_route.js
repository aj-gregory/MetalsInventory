MetalsInventory.GoodsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('good');
  }
});