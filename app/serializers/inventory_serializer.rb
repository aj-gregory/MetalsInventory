class InventorySerializer < ActiveModel::Serializer
  embed :ids
  
  attributes :id, :inventory_manager_id, :name
end
