class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :location, :photo_1, :photo_2, :bio, :media_1, :media_2, :media_3, :media_4, :influences
  has_one :user_id
end
