class MatchedUser < ApplicationRecord
  belongs_to :user_1, class_name: 'User'
  belongs_to :user_2, class_name: 'User'

  # this is the final step of creating a match. the second button of a request would run this code:

  def self.create_mutual_match(user_1_id, user_2_id)
    transaction do
      # Use the "find_or_create_by" method to avoid creating duplicate records
      MatchedUser.find_or_create_by(user_1_id: user_1_id, user_2_id: user_2_id)
      MatchedUser.find_or_create_by(user_1_id: user_2_id, user_2_id: user_1_id)
    end
  end

  def self.delete_mutual_match user_1_id, user_2_id
    match1 = MatchedUser.find_by(user_1_id: user_1_id, user_2_id: user_2_id)
    match2 = MatchedUser.find_by(user_1_id: user_2_id, user_2_id: user_1_id)
    match1.destroy
    match2.destroy
  end

end

# requester_id: 1489,
# receiver_id: 1491,