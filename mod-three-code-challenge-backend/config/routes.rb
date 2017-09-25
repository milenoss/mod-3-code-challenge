Rails.application.routes.draw do
  resources :image_comments
  resources :comments
  resources :images, only: [:index, :show, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
