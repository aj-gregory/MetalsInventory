class InventorySerializer < ActiveModel::Serializer
  embed :ids, :include => true

  attributes :id, :inventory_manager_id, :name
  has_many :goods, :key => :goods
end
