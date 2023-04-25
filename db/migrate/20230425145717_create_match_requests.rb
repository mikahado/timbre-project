class CreateMatchRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :match_requests do |t|
      t.references :requester, null: false
      t.references :receiver, null: false

      t.timestamps
    end
  end
end
