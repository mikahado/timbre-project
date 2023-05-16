class User < ApplicationRecord
    has_secure_password    

    has_many :matched_users, foreign_key: :user_1

    # below CUSTOM METHOD sets up the many to many relationship. allows us to call matches on a user instance to see all matches.
    has_many :matches, through: :matched_users, foreign_key: :user_1, source: :user_2

    has_one :profile
    has_one :preference

end


    # has_many :pending_matches, foreign_key: :receiver, class_name: "MatchRequest"
    # has_many :sent_matches, foreign_key: :requester, class_name: "MatchRequest"


# the has many matches through, above, is essentially doing the code below

# def matches
#     MatchedUser.all.select do |matched_user|
#         matched_user.user_1 == self 
#     end.map do |matched_user|
#         matched_user.user_2
#     end
# end