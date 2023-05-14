class Profile < ApplicationRecord
  belongs_to :user

  validates :name, :bio, :media_1, presence: true
end
