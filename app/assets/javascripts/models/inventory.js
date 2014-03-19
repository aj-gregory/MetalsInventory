var attr = DS.attr; 

MetalsInventory.Inventory = DS.Model.extend({
  name: attr('string'),
  inventory_manager_id: attr('string')
});