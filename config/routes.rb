NerdFashion::Application.routes.draw do
	
	root to: 'pages#index'

	resources :pages, only: [:index]
	
  get "about"   => "pages#about",   as: :about
  get "contact" => "pages#contact", as: :contact
  get "pricing" => "pages#pricing", as: :pricing
end
