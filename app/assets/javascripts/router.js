MetalsInventory.Router.map(function() {
  this.resource("inventories", function() {
    this.resource("inventory", {path: ":inventory_id"}, function() {
      this.resource("goods");
    });
  });
});

