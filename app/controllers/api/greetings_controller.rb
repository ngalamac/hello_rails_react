class Api::GreetingsController < ApplicationController
     def random_message
    render json: { greeting: Greeting.order('RANDOM()').first&.message || 'No greetings found'}
  end
end
