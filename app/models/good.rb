class Good < ActiveRecord::Base
  attr_accessible :inventory_id, :type, :material, :guage,
    :grade, :diameter, :length, :finish, :comment

  belongs_to :inventory
end
