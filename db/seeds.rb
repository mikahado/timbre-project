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

puts'creates users'

gogo = User.create(username: "gogo", email: "gogo@aol.com", password: "gogo", password_confirmation: "gogo")
bizbo = User.create(username: "bizbo", email: "bizbo@aol.com", password: "bizbo", password_confirmation: "bizbo")
didi = User.create(username: "didi", email: "didi@aol.com", password: "didi", password_confirmation: "didi")
vladimir = User.create(username: "vladimir", email: "vladimir@aol.com", password: "vladimir", password_confirmation: "vladimir")

puts 'creates match requests'

MatchRequest.create(requester_id: gogo.id, receiver_id: bizbo.id)
MatchRequest.create(requester_id: bizbo.id, receiver_id: gogo.id)
MatchRequest.create(requester_id: gogo.id, receiver_id: vladimir.id)
MatchRequest.create(requester_id: vladimir.id, receiver_id: didi.id)

# MatchedUser.create_mutual_match(gogo.id, bizbo.id)
# MatchedUser.create_mutual_match(gogo.id, didi.id)
# MatchedUser.create_mutual_match(vladimir.id, bizbo.id)

puts 'done seeding'