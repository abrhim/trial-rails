Rails.application.routes.draw do
  root 'sites#index'
  get 'pricing' => 'sites#pricing'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
