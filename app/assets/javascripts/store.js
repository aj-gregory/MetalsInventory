DS.RESTAdapter.configure("plurals", {inventory: "inventories"})

MetalsInventory.Store = DS.Store.extend({
   adapter: DS.RESTAdapter.create()
});

