class PreferencesController < ApplicationController

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

