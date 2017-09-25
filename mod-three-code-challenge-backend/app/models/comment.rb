class Comment < ApplicationRecord
  has_one :image_comment
  has_one :image, through: :image_comment
end
