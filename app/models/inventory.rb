class Inventory < ActiveRecord::Base
  attr_accessible :name, :inventory_manager_id

  belongs_to :inventory_manager,
    :class_name => "User"

  has_many :goods
end
