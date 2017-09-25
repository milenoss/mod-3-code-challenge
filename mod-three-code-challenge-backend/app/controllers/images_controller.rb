class ImagesController < ApplicationController
  before_action :set_image, only: [:show, :update, :destroy]

  def index
    @images = [Image.find(1 + rand(5000)),Image.find(1 + rand(5000)),Image.find(1 + rand(5000))]
    render json: @images
  end

  def show
    @image = Image.find(params[:id])
    render json: @image
  end



end
