class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :matches
  has_many :sent_matches

  has_one :profile
  has_one :preference
end