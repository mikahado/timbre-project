class ProfilesController < ApplicationController

    skip_before_action :authorize

    def index
        users = User.all
        render json: users, include: [:profile, :preference]
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, include: [:profile, :preference]
    end

    private 



end
