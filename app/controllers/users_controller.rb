class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        render json: User.all
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    # def destroy
    #     @current_user.destroy
    #     head :no_content
    # end
      

    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end

end
