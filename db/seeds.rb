# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Business.destroy_all


u1 = User.create!(username: 'DemoUser', email: 'demo@email.com', password:'12345678', location: 'Richmond, CA')
krabs = User.create!(username: 'Eugene Krabs', email: 'mrkrabs@seamail.com', password:'moneybags', location: 'Bikini Bottom, PO')
sponge = User.create!(username: 'Spongebob Squarepants', email: 'frycook@seamail.com', password:'icanboat', location: 'Bikini Bottom, PO')
squid = User.create!(username: 'Squidward Tentacles', email: 'clarinetlover@seamail.com', password:'hatemyjob', location: 'Bikini Bottom, PO')
star = User.create!(username: 'Patrick Star', email: 'pinhead@seamail.com', password:'ismayoaninstrument', location: 'Bikini Bottom, PO')
puff = User.create!(username: 'Poppy Puff', email: 'mrspuff@seamail.com', password:'tetrodotoxin', location: 'Bikini Bottom, PO')


b1 = Business.create!(name: 'Krusty Krab', creator_id: krabs.id, address: '831 Bottom Feeder Lane, Bikini Bottom, Pacific Ocean', rating: 5, category: "Restaurants")
b2 = Business.create!(name: "Mrs. Puff's Boating School", creator_id: puff.id, address: '233 Barnacle Ave, Bikini Bottom, Pacific Ocean', rating: 5, category: "Education")
b3 = Business.create!(name: "Larry's Gym", creator_id: star.id, address: '9387 Krill Blvd, Bikini Bottom, Pacific Ocean', rating: 4, category: "Active Life")
b4 = Business.create!(name: "Weenie Hut Jr's", creator_id: star.id, address: '256 Hotdog Road, Bikini Bottom, Pacific Ocean', rating: 4.5, category: "Restaurants")

r1 = Review.create!(rating: 5, author_id: krabs.id, business_id: b1.id, body: 'I highly recommend this place. They have great service and even better food!')
r2 = Review.create!(rating: 5, author_id: sponge.id, business_id: b2.id, body: 'This boating school is one of the best in Bikini Bottom. I have been attending for over 10 years
 and will probably get my boating license soon! Mrs. Puff is an amazing instructor and I would not choose any other school.')
r3 = Review.create!(rating: 4, author_id: squid.id, business_id: b3.id, body: 'I became a member for a month to give it a try. All the equipment is very new and polished. 
The owner Larry even helped spot me when I was bench pressing! However when I was struggling to finish my last set, Larry got distracted looking in the mirror and I almost died. 
For that I will have to give it a less than perfect score.')
r4 = Review.create!(rating: 5, author_id: star.id, business_id: b4.id, body: "My favorite item here is the hotdogs. They serve it with plenty of mayonnaise. It's usually empty here so the wait time isn't too bad.")

file1 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/krusty_krab.png')
b1.photo.attach(io: file1, filename: 'krusty_krab.png')

file2 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/boating_school.png')
b2.photo.attach(io: file2, filename: 'boating_school.png')

file3 = open("https://kelp-seeds.s3-us-west-1.amazonaws.com/Larry's_Gym.png")
b3.photo.attach(io: file3, filename: "Larry's_Gym.png")

file4 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/weenie_hut_jr.png')
b4.photo.attach(io: file4, filename: 'weenie_hut_jr.png')


