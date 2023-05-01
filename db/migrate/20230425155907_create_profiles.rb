class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.string :location
      t.text :bio
      t.string :media_1
      t.string :media_2
      t.string :media_3
      t.string :media_4

      t.timestamps
    end
  end
end
