var attr = DS.attr; 

MetalsInventory.Good = DS.Model.extend({
  inventory: DS.belongsTo('inventory'),
  metal_type: attr('string'),
  material: attr('string'),
  length: attr('string'),
  diameter: attr('string'),
  grade: attr('string'),
  gauge: attr('string'),
  finish: attr('string') 
});