class MatchRequest < ApplicationRecord
  belongs_to :requester, class_name: 'User'
  belongs_to :receiver, class_name: 'User'

  def self.check_for_match? a, b
    MatchRequest.where(requester_id: a, receiver_id: b).exists? and 
    MatchRequest.where(requester_id: b, receiver_id: a).exists?
  end


end
