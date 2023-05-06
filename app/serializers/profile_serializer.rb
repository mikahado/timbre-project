class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :location, :bio, :media_1, :media_2, :media_3, :media_4
  
  # has_one :user
end
