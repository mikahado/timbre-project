class User < ApplicationRecord
    has_secure_password    

    has_many :matched_users
    has_many :matches, through: :matched_users, foreign_key: :user_1

end
