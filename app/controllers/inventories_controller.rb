class InventoriesController < ApplicationController
  respond_to :json

  def index
    respond_with Inventory.all
  end
end
