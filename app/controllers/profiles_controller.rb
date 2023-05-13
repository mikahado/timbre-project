class ProfilesController < ApplicationController

    def index
        users = User.all
        render json: users, include: [:profile, :preference]
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, include: [:profile, :preference]
    end

    def create
        profile = @current_user.profile || @current_user.build_profile
            profile.update(profile_params)
          
            render json: profile, status: :created

    end

    def update 
        @current_user.profile.update!(profile_params)
        render json: @current_user, status: :accepted
    end

    private 

    def profile_params
        params.require(:profile).permit(:lat, :lng, :name, :bio, :media_1, :media_2, :media_3, :media_4)
    end

end
