class LikesController < ApplicationController

  def create
    @image = Image.find(params[:id])
    @image.update(likes: @image.likes + 1)
    render json: @image, :include => :comments
  end

end
