class PreferenceSerializer < ActiveModel::Serializer
  attributes :id, :instruments, :instruments_wanted, :skill, :genres, :goals, :money, :host
  has_one :user_id
end
