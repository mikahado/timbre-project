# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'starts seeding'

MatchRequest.destroy_all
MatchedUser.destroy_all
User.destroy_all

user_info = ["elvis_presley", "the_beatles", "bob_dylan", "jimi_hendrix", "janis_joplin", "james_brown", "ray_charles", "stevie_wonder", "aretha_franklin", "marvin_gaye", "michael_jackson", "prince", "whitney_houston", "david_bowie", "freddie_mercury", "john_lennon", "paul_mccartney", "george_harrison", "ringo_starr", "mick_jagger", "keith_richards", "bob_marley", "joe_strummer", "bruce_springsteen", "tina_turner", "diana_ross", "neil_young", "brian_wilson", "buddy_holly", "ray_davies", "jerry_lee_lewis", "little_richard", "chet_atkins", "frank_sinatra", "dean_martin", "miles_davis", "duke_ellington", "benny_goodman", "count_basie", "nat_king_cole", "ella_fitzgerald", "billie_holiday", "peggy_lee", "doris_day", "barbra_streisand", "frank_zappa", "johnny_cash", "willie_nelson"]

index_counter = 0
request_index_counter = 0
match_index_counter = 0

puts 'created user_info'

puts'created user_var'

40.times do |u|
    User.create(username: user_info[index_counter], email: user_info[index_counter] + "@gmail.com", password: user_info[index_counter], password_confirmation: user_info[index_counter])
    
    index_counter += 1
end

puts 'created users'

30.times do |m|
    user = User.find_by(username: user_info[request_index_counter])
    MatchRequest.create(requester_id: user.id, receiver_id: user.id + rand(1..5))
    request_index_counter += 1
end

puts 'created requests'

20.times do |m|
    user = User.find_by(username: user_info[match_index_counter])
    MatchedUser.create_mutual_match(user.id, user.id + rand(1..5))
    match_index_counter += 1
end

puts 'created matches'

# MatchRequest.create(requester_id: gogo.id, receiver_id: bizbo.id)
# MatchRequest.create(requester_id: bizbo.id, receiver_id: gogo.id)
# MatchRequest.create(requester_id: gogo.id, receiver_id: vladimir.id)
# MatchRequest.create(requester_id: vladimir.id, receiver_id: didi.id)

# MatchedUser.create_mutual_match(gogo.id, bizbo.id)
# MatchedUser.create_mutual_match(gogo.id, didi.id)
# MatchedUser.create_mutual_match(vladimir.id, bizbo.id)

puts 'done seeding'