class CreateMatchedUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :matched_users do |t|
      t.references :user_1, null: false 
      t.references :user_2, null: false 

      t.timestamps
    end
  end
end
