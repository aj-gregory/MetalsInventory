class InventoriesController < ApplicationController
  respond_to :json

  def index
    @inventories = Inventory.includes(:goods).all

    render :json => @inventories, :serializer => ActiveModel::ArraySerializer
  end

  def show
    @inventory = Inventory.find(params[:id])

    render :json => @inventory
  end

  def create
    @inventory = Inventory.new(params[:inventory])
    @inventory.inventory_manager_id  = current_user.id
    @inventory.save!

    render :json => @inventory
  end

  def destroy
    @inventory = Inventory.find(params[:id])
    @inventory.destroy
    head :ok
  end
end
