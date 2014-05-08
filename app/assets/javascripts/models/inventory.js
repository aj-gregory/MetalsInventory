var attr = DS.attr; 

MetalsInventory.Inventory = DS.Model.extend({
  goods: DS.hasMany('good'),
  name: attr('string'),
  inventory_manager_id: attr('string'),
  elementId: function() {
  	return (this.get('name') + '-link');
  }.property('id')
});