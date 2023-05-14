class Preference < ApplicationRecord
  belongs_to :user

  validates :instruments, :instruments_wanted, :skill, :goals, :money, :host, presence: true

end
