class ImageComment < ApplicationRecord
  belongs_to :image
  belongs_to :comment
end
