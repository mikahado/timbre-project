class Profile < ApplicationRecord
  belongs_to :user

  validates :name, :bio, :media_1, :lat, :lng, presence: true
end
