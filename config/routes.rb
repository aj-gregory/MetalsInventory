MetalsInventory::Application.routes.draw do
  devise_for :users

  get "static_pages/root"
  
  resources :inventories, :only => [:index, :create, :upddate, :destroy] do
    resources :goods, :only => [:index, :create]
  end

  resources :goods, :only => [:update, :destroy]
  
  root :to => "static_pages#root"
end
