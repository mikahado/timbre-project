class PreferencesController < ApplicationController

    def create
        profile = @current_user.create_preference!(preference_params)
        render json: profile, status: :created 
    end

    def update
        preferences = @current_user.preference
        preferences.update(preference_params)
        render json: preferences
      end

    private 

    def preference_params
        params.require(:preference).permit(:instruments, :instruments_wanted, :skill, :genres, :goals, :money, :host)
    end

end

