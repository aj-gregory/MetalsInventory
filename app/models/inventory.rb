class Inventory < ActiveRecord::Base
  attr_accessible :name, :inventory_manager_id

  validates :name, :inventory_manager_id, :presence => true

  belongs_to :inventory_manager,
    :class_name => "User"

  has_many :goods
end
