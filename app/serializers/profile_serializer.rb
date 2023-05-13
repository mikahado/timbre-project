class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :lat, :lng, :bio, :name, :media_1, :media_2, :media_3, :media_4
  
  has_one :user
end
