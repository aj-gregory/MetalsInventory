MetalsInventory::Application.routes.draw do
  get "inventories/index"

  get "ember/start"

  devise_for :users
  
  resources :inventories, :only => [:index, :create, :show, :upddate, :destroy] do
    resources :goods, :only => [:index, :create]
  end

  resources :goods, :only => [:update, :destroy, :show]
  
  root :to => "ember#start"
end
