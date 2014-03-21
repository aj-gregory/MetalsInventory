class RenameTypeToMetalType < ActiveRecord::Migration
  def up
    rename_column :goods, :type, :metal_type
  end

  def down
    rename_column :goods, :metal_tpe, :type
  end
end
