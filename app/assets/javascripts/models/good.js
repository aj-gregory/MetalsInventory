var attr = DS.attr; 

MetalsInventory.Good = DS.Model.extend({
  inventory: DS.belongsTo('inventory'),
  metal_type: attr('string'),
  material: attr('string'),
  length: attr('string'),
  diameter: attr('string'),
  grade: attr('string'),
  gauge: attr('string'),
  finish: attr('string'),
  comment: attr('string'),
  elementId: function() {
    return ('good-' + this.get('id'));
  }.property('id'),
  editId: function() {
    return ('edit-good-' + this.get('id'));
  }.property('id'),
  deleteId: function() {
    return ('delete-good-' + this.get('id'));
  }.property('id')
});