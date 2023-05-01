class CreatePreferences < ActiveRecord::Migration[7.0]
  def change
    create_table :preferences do |t|
      t.references :user, null: false, foreign_key: true
      t.string :instruments
      t.string :instruments_wanted
      t.string :skill
      t.string :genres
      t.string :goals
      t.string :money
      t.boolean :host

      t.timestamps
    end
  end
end
