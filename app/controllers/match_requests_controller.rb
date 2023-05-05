class MatchRequestsController < ApplicationController

    # every time user_1 swipes right on user_2, the create needs to check if user_2 also swiped right on user_1
    # if so, then create a Matched_user
    def create
        match_request = MatchRequest.create(match_request_params)
        check = match_request.check_for_match(match_request_params)
        
        if check.present?
            render json: check            
        else    
            render json: match_request
        end
    end

    private 

    def match_request_params
        params.permit(:requester_id, :receiver_id)
    end


end
