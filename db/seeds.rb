# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create!({:email => 'demo@demo.demo', :password => 'password'})

warehouse = Inventory.create!({:name => 'Warehouse', :inventory_manager_id => user.id })
                               
store = Inventory.create!({:name => 'Store', :inventory_manager_id => user.id })

goods = Good.create!([{:metal_type => 'Sheet', :material => 'Steel', :grade => '1025', :gauge => 9, :inventory_id => store.id},
                      {:metal_type => 'Tube', :material => 'Copper', :diameter => 1, :grade => 'C1300', :length => 4, :inventory_id => store.id},
                      {:metal_type => 'Plate', :material => 'Steel', :grade => 'AR360', :gauge => 0, :inventory_id => warehouse.id}])

