class Good < ActiveRecord::Base
  attr_accessible :inventory_id, :metal_type, :material, :gauge,
    :grade, :diameter, :length, :finish, :comment

  belongs_to :inventory
end
