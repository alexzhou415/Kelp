class Api::ReviewsController < ApplicationController

  def show
    @review = Review.find(params[:id])
    if @review
      render :show
    else
      render json: ["The review you're looking for cannot be found"], status: 404
    end
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Business.find(params[:id])
    if @review && @review.author_id == current_user.id && @review.update(review_params)
      render :show
    else
      render json: ["Review could not be updated"], status: 401
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review && @review.author_id == current_user.id && @review.destroy()
      render json: {}
    else
      render json: ["Review could not be removed"], status: 401
    end
  end



  private
  def review_params
    params.require(:review).permit(:body, :author_id, :rating, :business_id, photos: [])
  end
end
