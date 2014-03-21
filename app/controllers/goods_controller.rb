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
  end

  def destroy
  end
end