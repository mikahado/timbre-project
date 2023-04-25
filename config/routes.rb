Rails.application.routes.draw do
  resources :matches
  resources :preferences
  resources :profiles
  resources :match_requests
  resources :matched_users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  get '/hello', to: 'application#hello_world'
end
