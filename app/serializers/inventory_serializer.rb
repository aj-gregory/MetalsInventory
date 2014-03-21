class InventorySerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :inventory_manager_id, :name
  has_many :goods
end
