class MatchedUsersController < ApplicationController

    def create
        @match = MatchedUser.create_mutual_match(params[:user_1_id], params[:user_2_id])
        render json: @match
    end

end
