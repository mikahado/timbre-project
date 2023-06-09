# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "faker"
puts 'starts seeding'

Profile.destroy_all
Preference.destroy_all
MatchRequest.destroy_all
MatchedUser.destroy_all
User.destroy_all


user_info = ["prince",  "madonna",  "whitney_houston",  "janet_jackson", "kendrick_lamar",  "billie_eilish",  "dua_lipa", "jennifer_lopez", "tina_turner", "chaka_khan", "bjork"]

name = ["Midnight Shadows", "Sunny Side Upbeat", "Blue River Blues", "Flow State", "Neon Visions", "Soul Serenade", "Blackened Sun", "Dream State Symphony", "Electric Graveyard", "Broken Records"]


bio = [
  "I was the drummer for The Beatles, but Ringo Starr said I was too obsessed with octopuses. I'm ready to start a new band, with or without a cephalopod fixation.",
  "I used to play bass for Nirvana, until Kurt Cobain said I was too happy-go-lucky. Ready to find new bandmates who won't judge me for smiling on stage!",
  "I was the lead guitarist for Metallica, but James Hetfield said my solos were too shreddy. Looking for new musicians who appreciate a good face-melting riff!",
  "I used to sing backup for The Rolling Stones, until Mick Jagger said I was too flashy. Hey, it's rock and roll, baby! Looking for new bandmates who want to bring some glitz to the stage!",
  "I was the drummer for Radiohead, but Thom Yorke said my beats were too optimistic. Ready to start a new band and prove that drums can be happy too!",
  "I used to play keyboard for Arcade Fire, until Win Butler said I was too introverted. But hey, introverts rock too. Looking for new musicians who want to make music that speaks louder than words!",
  "I was the bassist for Red Hot Chili Peppers, but Flea said my hair was too short. Can you believe that? Ready to start a new band and show off my luscious locks!",
  "I used to sing lead for Lady Gaga, until she said my outfits were too understated. But hey, I thought I was being tasteful. Looking for new musicians who appreciate a minimalist aesthetic!",
  "I was the lead guitarist for Twenty One Pilots, but Tyler Joseph said I was too good-looking. Yeah, I didn't get it either. Ready to start a new band and bring some style to the stage!",
  "I used to play drums for Vampire Weekend, until Ezra Koenig said I was too punctual. Hey, being on time is important! Looking for new bandmates who respect my commitment to the clock!"
]

profile_pic = [""]

instruments = ["acoustic_guitar", "electric_guitar", "piano", "drums", "bass_guitar", "violin", "cello", "flute", "saxophone", "trumpet", "clarinet", "harp", "banjo", "mandolin", "ukulele", "accordion", "harmonica", "bagpipes", "djembe", "maracas"]


lat = [37.7749, 40.7128, 34.0522, 41.8781, 29.7604, 25.7617, 47.6062, 39.7392, 42.3601, 38.9072, 33.7490, 36.1627, 44.9778, 35.2271, 38.2527, 43.0389, 33.4484, 32.7157, 30.2672, 42.3603]

lng = [-122.4194, -74.0060, -118.2437, -87.6298, -95.3698, -80.1918, -122.3321, -104.9903, -71.0589, -77.0369, -84.3880, -86.7816, -93.2650, -80.8431, -85.7585, -87.9065, -112.0740, -117.1611, -97.7431, -71.0583]


skill = ["beginner", "intermediate", "advanced", "professional"]

genres = ["pop", "rock", "hip_hop_rap", "edm", "rb_soul", "country", "classical", "jazz", "reggae", "folk"]

goals = ["jam", "perform", "record", "compose"]

money = ["split", "paid", "negotiable", "free"]

host = [ true, false ]

index_counter = 0               
request_index_counter = 0
request_index_counter_1 = 0
request_index_counter_2 = 0

puts 'created user_info'

puts'created user_var'

Faker::Config.random = Random.new(42)

11.times do |u|

   user =  User.create(username: user_info[index_counter], email: user_info[index_counter] + "@gmail.com", password: user_info[index_counter], password_confirmation: user_info[index_counter])

   user.create_profile(
        lat: lat[index_counter],
        lng: lng[index_counter],
        name: Faker::Music::RockBand.name,
        bio: bio.sample,
        media_1: Faker::Placeholdit.image(size: '600x600', format: 'jpg', background_color: '4076a2'), 
        media_2: Faker::Placeholdit.image(size: '600x600', format: 'jpg', background_color: '323330'), 
        media_3: Faker::Placeholdit.image(size: '600x600', format: 'jpg', background_color: '820C02'), 
        media_4: Faker::Placeholdit.image(size: '600x600', format: 'jpg', background_color: '337283')
        )
  
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

20.times do |m|
  user_1 = User.find_by(username: user_info.sample)
  user_2 = User.find_by(username: user_info.sample)
  MatchRequest.create(requester_id: user_1.id, receiver_id: user_2.id)
  MatchRequest.create(requester_id: user_2.id, receiver_id: user_1.id)

  if MatchRequest.check_for_match?(user_1.id, user_2.id)
    MatchedUser.create_mutual_match(user_1.id, user_2.id)
  end

end


user_1 = User.find_by(username: "prince")
user_2 = User.find_by(username: "madonna")
MatchRequest.create(requester_id: user_1.id, receiver_id: user_2.id)
MatchRequest.create(requester_id: user_2.id, receiver_id: user_1.id)

if MatchRequest.check_for_match?(user_1.id, user_2.id)
    MatchedUser.create_mutual_match(user_1.id, user_2.id)
end

puts MatchRequest.count
puts MatchedUser.count
# 30.times do |m|
#     user = User.find_by(username: user_info[request_index_counter_1])
#     MatchRequest.create(requester_id: user.id, receiver_id: user.id + rand(1..5))
#     request_index_counter_1 = rand(0..user_info.length - 6)
# end

# puts 'created requests for user_1'

# 30.times do |m|
#     user = User.find_by(username: user_info[request_index_counter_2])
#     MatchRequest.create(requester_id: user.id + rand(1..5), receiver_id: user.id + rand(6..10))
#     request_index_counter_2 = rand(0..user_info.length - 6)
#     puts request_index_counter_2
# end

# puts 'created requests for user_2'

# 20.times do |m|
#     user = User.find_by(username: user_info[match_index_counter])
#     MatchedUser.create_mutual_match(user.id, user.id + rand(1..5))
#     match_index_counter += 1
# end

puts 'done seeding'