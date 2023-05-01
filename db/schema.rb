ActiveRecord::Schema[7.0].define(version: 2023_04_25_180005) do

  enable_extension "plpgsql"

  create_table "match_requests", force: :cascade do |t|
    t.bigint "requester_id", null: false
    t.bigint "receiver_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["receiver_id"], name: "index_match_requests_on_receiver_id"
    t.index ["requester_id"], name: "index_match_requests_on_requester_id"
  end

  create_table "matched_users", force: :cascade do |t|
    t.bigint "user_1_id", null: false
    t.bigint "user_2_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_1_id"], name: "index_matched_users_on_user_1_id"
    t.index ["user_2_id"], name: "index_matched_users_on_user_2_id"
  end

  create_table "matches", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "preferences", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "instruments"
    t.string "instruments_wanted"
    t.string "skill"
    t.string "genres"
    t.string "goals"
    t.string "money"
    t.boolean "host"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_preferences_on_user_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "location"
    t.text "bio"
    t.string "media_1"
    t.string "media_2"
    t.string "media_3"
    t.string "media_4"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "preferences", "users"
  add_foreign_key "profiles", "users"
end