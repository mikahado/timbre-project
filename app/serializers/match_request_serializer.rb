class MatchRequestSerializer < ActiveModel::Serializer
  attributes :id
  has_one :receiver
  has_one :requester
end
