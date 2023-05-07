class AddLatitudeAndLongitudeToProfiles < ActiveRecord::Migration[7.0]
  def change
    add_column :profiles, :lat, :float
    add_column :profiles, :lng, :float
  end
end
