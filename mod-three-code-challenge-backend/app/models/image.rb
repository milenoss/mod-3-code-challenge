class Image < ApplicationRecord
  has_many :image_comments
  has_many :comments, through: :image_comments
end
