Rails.application.routes.draw do
  namespace :api do
    get 'random_message', to: 'greetings#index'
  end

  root 'root#index'
end
