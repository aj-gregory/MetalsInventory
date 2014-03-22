class Good < ActiveRecord::Base
  attr_accessible :inventory_id, :metal_type, :material, :gauge,
    :grade, :diameter, :length, :finish, :comment

  validates :inventory_id, :metal_type, :material, :grade, :presence => true

  validate :correct_params_for_type

  belongs_to :inventory

  private

  def correct_params_for_type
    if self.metal_type.downcase == 'tube' 
      errors.add(:diameter, "required") if self.diameter.nil?
      errors.add(:length, "required") if self.length.nil?
    else
      errors.add(:gauge, "required") if self.gauge.nil?
    end
  end

end
