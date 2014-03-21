MetalsInventory::Application.routes.draw do
  get "inventories/index"

  get "ember/start"

  devise_for :users
  
  resources :inventories, :only => [:index, :create, :show, :upddate, :destroy] do
    resources :goods, :only => [:index]
  end

  resources :goods, :only => [:update, :destroy, :show, :create]
  
  root :to => "ember#start"
end
