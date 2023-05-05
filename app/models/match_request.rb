class MatchRequest < ApplicationRecord
  belongs_to :requester, class_name: 'User'
  belongs_to :receiver, class_name: 'User'

  def check_for_match(requester, requested)
    if MatchRequest.find_by(requester_id: requester.id, receiver_id: requested.id) 
      && MatchRequest.find_by(requester_id: requested.id, receiver_id: requester.id)
      MatchedUser.create_mutual_match(requester.id, requested.id)
    else 
      null
    end
  end


end
