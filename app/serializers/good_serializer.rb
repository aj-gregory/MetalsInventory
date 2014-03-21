class GoodSerializer < ActiveModel::Serializer
  attributes :comment, :diameter, :finish, :gauge, 
    :grade, :id, :inventory_id, :length, :material, :metal_type
end