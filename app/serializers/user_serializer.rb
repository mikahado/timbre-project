class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_pic

  has_many :matches

  def profile_pic
    object.profile.media_1
  end
  # has_many :sent_matches
  # has_many :pending_matches

  has_one :profile
  has_one :preference
end