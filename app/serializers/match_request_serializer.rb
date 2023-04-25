class MatchRequestSerializer < ActiveModel::Serializer
  attributes :id
  has_one :requester
  has_one :receiver
end
