Rails.application.routes.draw do

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  resources :matches
  resources :preferences
  resources :profiles
  resources :match_requests
  resources :matched_users
  
end
