class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
    render :index
  end

  def show
    @business = Business.find(params[:id])
    if @business
      render :show
    else
      render json: ["The page you're looking for cannot be found"], status: 404
    end
  end

  def create
    @business = Business.new(business_params)
    if @business.save
      render :show
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def update
    @business = Business.find(params[:id])
    if @business && @business.creator_id == current_user.id && @business.update(business_params)
      render :show
    else
      render json: ["Business page could not be updated"], status: 401
    end
  end

  def destroy
    @business = Business.find(params[:id])
    if @business && @business.creator_id == current_user.id && @business.destroy()
      render json: "meat"
    else
      render json: ["Business page could not be removed"], status: 401
    end
  end



  private
  def business_params
    params.require(:business).permit(:name, :creator_id, :address, :rating, :website, :category, photos: [])
  end
end
