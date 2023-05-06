class PreferencesController < ApplicationController

    def update
        preferences = @current_user.preference.update!(preference_params)
        render json: preferences, status: :created
      end

    private 

    def preference_params
        params.require(:user).permit(:instruments, :instruments_wanted, :skill, :genres, :goals, :money, :host)
    end

end

