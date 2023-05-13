class RemoveLocationFromProfile < ActiveRecord::Migration[7.0]
  def change
    remove_column :profiles, :location, :string
  end
end
