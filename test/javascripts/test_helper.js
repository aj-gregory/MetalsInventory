//= require application
//= require_tree .
//= require_self
 
document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
document.write('<style>#ember-testing-container { position: absolute; background: white; bottom: 0; right: 0; width: 640px; height: 384px; overflow: auto; z-index: 9999; border: 1px solid #ccc; } #ember-testing { zoom: 50%; }</style>');
 
MetalsInventory.rootElement = '#ember-testing';
MetalsInventory.setupForTesting();
MetalsInventory.injectTestHelpers();
MetalsInventory.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

MetalsInventory.Inventory.FIXTURES = [{
  id: 1,
  name: 'TestInventory',
  inventory_manager_id: '1'
},{
  id: 2,
  name: 'TestInventory2',
  inventory_manager_id: '1',
}];
 
function exists(selector) {
  return !!find(selector).length;
}

// test('Inventory Properties', function() {
// 	expect(1);
// 	debugger

// 	var testInv = MetalsInventory.Inventory.FIXTURES.findBy('id', 1);
   
//    equal(testInv.get('name'), 'TestInventory');
//    equal(testInv.get('inventory_manager_id'), '1')

// });

module("UI Unit Tests");
 
test("Check HTML is returned", function() {
 
  visit("/").then(function() {
    ok(exists("*"), "Found HTML!");
  });
 
});

test("Home page contains link to inventories page", function() {

	visit('/').then(function() {
    ok(exists('#inventories-link'));
	});

});

test("Inventories page titled 'My Inventories'", function() {
 
  visit("/inventories").then(function() {
    equal(find('h1').text(), 'My Inventories');
  });
 
});

test("Inventories page contains inventories list UL", function() {

  visit("/inventories").then(function() {
    ok(exists('#inventories-list'));
  });

});


module("UI Integration Tests")

test("Home page links to inventories page", function() {

  visit('/');

  click('#inventories-link').then(function() {
    equal(find('h1').text(), 'My Inventories');
  });

});

test("Inventories can be added", function() {
  visit("/inventories");

  fillIn('#new-inventory', 'NewTestInventory');
  click('#add-inventory-button').then(function() {
    ok(exists('#NewTestInventory-link'));
  });

});

test("Inventories index links to specific inventory", function() {
 
  visit("/inventories", "Inventories page")

  click('#TestInventory-link');

  andThen(function() {
    equal(find('h1').text(), 'TestInventory');
  }); 
});

test("Can add good from inventory page", function() {
  
  visit("/inventories/1");

  fillIn('#material-input', 'Steel');
  fillIn('#grade-input', '2');
  fillIn('#gauge-input', '3');

  click('#add-good').then(function() {
    ok(exists('tr#good-fixture-1'));
  });

});

test("Can edit a good from inventory page", function() {
  expect(3);

  visit("/inventories/1");

  fillIn('#material-input', 'Steel');
  fillIn('#grade-input', '2');
  fillIn('#gauge-input', '3');

  click('#add-good').then(function() {
    ok(exists('tr#good-fixture-2'), 'new good added');
  });

  click('#edit-good-fixture-2').then(function() {
    ok(exists('#edit-material'), 'edit button renders edit fields');
  });

  fillIn('#edit-material', 'Copper');

  click('#save-edit').then(function(){
    equal(find('tr#good-fixture-2 .material-cell').text(), 'Copper', 'good updated');
  });

});

// test("Page redirects to index on delete", function() {

// 	visit("/inventories/2");
//   click('button.destroy').then(function() {
//     equal(currentURL(), '/inventories');
//   });
 
// });

// test("Can add good of type 'tube'", function() {
  
//   visit("/inventories/1");

//   click('#metal-type-input');
//   click('#metal-type-input option:last');

//   andThen(function() {
//     ok(exists('#length-input'));
//   });

// });
