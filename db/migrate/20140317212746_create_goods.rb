class CreateGoods < ActiveRecord::Migration
  def change
    create_table :goods do |t|
      t.integer :inventory_id, :null => false
      t.string :type, :null => false
      t.string :material, :null => false
      t.integer :gauge
      t.string :grade
      t.float :diameter
      t.float :length
      t.string :finish
      t.text :comment

      t.timestamps
    end
  end
end
