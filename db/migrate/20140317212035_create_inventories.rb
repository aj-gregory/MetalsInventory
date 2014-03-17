class CreateInventories < ActiveRecord::Migration
  def change
    create_table :inventories do |t|
      t.integer :inventory_manager_id, :null => false
      t.string :name, :null => false
      
      t.timestamps
    end
  end
end
