SuperFashion::Application.routes.draw do
	root to: 'home#index'

	resources :contact, only: :index do
		collection do
			
		end
	end

	get '/about', to: 'home#about'
end
