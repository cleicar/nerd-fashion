SuperFashion::Application.routes.draw do
  root to: 'home#index'

  get '/about', to: 'home#about'
end
