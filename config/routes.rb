Rails.application.routes.draw do
  namespace :api do
    get 'greetings/random_message', to: 'greetings#random_message'
  end

  root 'root#index'
end
