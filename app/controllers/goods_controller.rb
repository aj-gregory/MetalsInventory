class GoodsController < ApplicationController

  def index
    @goods = Good.where(:inventory_id => params[:inventory_id])

    render :json => @goods
  end

  def show
    @good = Good.find(params[:id])

    render :json => @good
  end

  def create
    inventory_id = params[:good][:inventory]
    params[:good].delete(:inventory)
    @good = Good.new(params[:good])
    @good.inventory_id = inventory_id
    @good.save!

    render :json => @good
  end

  def update
    @good = Good.find(params[:id])
    params[:good].delete(:inventory)
    @good.update_attributes!(params[:good])

    render :json => @good
  end

  def destroy
    @good = Good.find(params[:id])
    @good.destroy

    head :ok
  end
end