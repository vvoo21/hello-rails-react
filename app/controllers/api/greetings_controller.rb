class Api::GreetingsController < ApplicationController
    def index
        @greetings = Message.all
        rand_ind = rand(@greetings.size)
        @rand_greeting = @greetings[rand_ind]
        render json: @rand_greeting
    end
end
