class Message < ApplicationRecord
  belongs_to :user
  belongs_to :chatroom

  validates :content, length: { minimum: 2 }
end
