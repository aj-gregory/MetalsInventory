class InventoriesController < ApplicationController
  respond_to :json
  ActiveModel::Serializer.root = false

  def index
    @inventories = Inventory.all

    render :json => @inventories, :serializer => ActiveModel::ArraySerializer
  end

  def show
    @inventory = Inventory.find(params[:id])

    render :json => @inventory
  end
end
