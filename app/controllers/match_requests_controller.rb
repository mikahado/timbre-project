class MatchRequestsController < ApplicationController

    skip_before_action :authorize

    def index
        requests = MatchRequest.all
        render json: requests
    end

    def create
        match_request = MatchRequest.create(match_request_params)

        if MatchRequest.check_for_match?(match_request.requester_id, match_request.receiver_id)
            
          matched_user = MatchedUser.create_mutual_match(match_request.requester_id, match_request.receiver_id)
          render json: matched_user, status: :created
        else
         render json: match_request, status: :created
        end

      end
    private 

    def match_request_params
        params.permit(:requester_id, :receiver_id)
    end


end
