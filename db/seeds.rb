# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'starts seeding'

Profile.destroy_all
Preference.destroy_all
MatchRequest.destroy_all
MatchedUser.destroy_all
User.destroy_all


user_info = ["prince",  "michael_jackson",  "madonna",  "whitney_houston",  "george_michael",  "bruce_springsteen",  "janet_jackson",  "beyonce",  "taylor_swift",  "eminem",  "jay-z",  "justin_timberlake",  "adele",  "rihanna",  "pink",  "lady_gaga",  "drake",  "ariana_grande",  "ed_sheeran",  "kendrick_lamar",  "billie_eilish",  "dua_lipa",  "cardi_b",  "halsey",  "ariana_grande",  "taylor_swift",  "rihanna",  "beyonce",  "adele",  "lizzo",  "alicia_keys",  "celine_dion",  "enya",  "shakira",  "mariah_carey",  "christina_aguilera",  "whitney_houston",  "jennifer_lopez",  "sade",  "cyndi_lauper",  "jessie_j",  "tina_turner",  "kylie_minogue",  "gwen_stefani",  "adele",  "amy_winehouse",  "lauryn_hill",  "sheryl_crow",  "chaka_khan",  "fiona_apple",  "bjork",  "sinead_oconnor"]

instruments = [  "Acoustic guitar",  "Electric guitar",  "Piano",  "Drums",  "Bass guitar",  "Violin",  "Cello",  "Flute",  "Saxophone",  "Trumpet",  "Clarinet",  "Harp",  "Banjo",  "Mandolin",  "Ukulele",  "Accordion",  "Harmonica",  "Bagpipes",  "Djembe",  "Maracas"]

skill = [  "Beginner",  "Intermediate",  "Advanced",  "Professional"]

genres = [  "Pop",  "Rock",  "Hip hop / Rap",  "EDM",  "R&B / Soul",  "Country",  "Classical",  "Jazz",  "Reggae",  "Folk"]

goals = [  "Jamming",  "Gigging",  "Recording",  "Songwriting",  "Teaching",  "Learning",  "Networking",  "Collaborating",  "Hanging out",  "Other"]

money = [  "Free",  "Paid",  "Negotiable",  "Other"]

host = [ true, false ]

index_counter = 0
request_index_counter = 0
match_index_counter_1 = 0
match_index_counter_2 = 0

puts 'created user_info'

puts'created user_var'

40.times do |u|
   user =  User.create(username: user_info[index_counter], email: user_info[index_counter] + "@gmail.com", password: user_info[index_counter], password_confirmation: user_info[index_counter])

   user.create_profile(
        location: "location", 
        bio: "bio",
        media_1: "photo link", 
        media_2: "video link", 
        media_3:"audio link", 
        media_4:"website link")

    user.create_preference(
        instruments: instruments.sample,
        instruments_wanted: instruments.sample,
        genres: genres.sample,
        skill: skill.sample,
        goals: goals.sample,
        money: money.sample,
        host: host.sample,
    )
    
    index_counter += 1
end

puts 'created users'

30.times do |m|
    user = User.find_by(username: user_info[request_index_counter_1])
    MatchRequest.create(requester_id: user.id, receiver_id: user.id + rand(1..5))
    request_index_counter_1 = rand(0..user_info.length)
end

puts 'created requests for user_1'

50.times do |m|
    user = User.find_by(username: user_info[request_index_counter_2])
    MatchRequest.create(requester_id: user.id + rand(1..5), receiver_id: user.id + rand(6..10))
    request_index_counter_2 = rand(0..user_info.length)
end

puts 'created requests for user_2'

# 20.times do |m|
#     user = User.find_by(username: user_info[match_index_counter])
#     MatchedUser.create_mutual_match(user.id, user.id + rand(1..5))
#     match_index_counter += 1
# end

puts 'created matches'

puts 'done seeding'