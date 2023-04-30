class Profile < ApplicationRecord
  has_one :user
  has_one :preference

end
