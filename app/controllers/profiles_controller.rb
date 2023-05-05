class ProfilesController < ApplicationController

    skip_before_action :authorize

    def index
        users = User.all
        render json: users, include: [:profile, :preference]
    end

end
