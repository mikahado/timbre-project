class MatchRequestsController < ApplicationController

    # every time user_1 swipes right on user_2, the create needs to check if user_2 also swiped right on user_1
    # if so, then create a Matched_user\
    skip_before_action :authorize

    def index
        requests = MatchRequest.all
        render json: requests
    end

    def create
        match_request = MatchRequest.create(match_request_params)
        
        if MatchRequest.check_for_match?(match_request.requester_id, match_request.receiver_id)
           MatchedUser.create_mutual_match(match_request.requester_id, match_request.receiver_id)
        end
        
    end

    private 

    def match_request_params
        params.permit(:requester_id, :receiver_id)
    end


end
