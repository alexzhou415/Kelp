class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show' #placeholder, will be changed to api/businesses
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.with_attached_photo.find(params[:id])
    if @user
      render :show
    else
      render json: ["The page you're looking for cannot be found"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :location)
  end
end
