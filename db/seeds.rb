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
Review.destroy_all


u1 = User.create!(username: 'DemoUser', email: 'demo@email.com', password:'12345678', location: 'Richmond, CA')
krabs = User.create!(username: 'Eugene Krabs', email: 'mrkrabs@seamail.com', password:'moneybags', location: 'Bikini Bottom, PO')
sponge = User.create!(username: 'Spongebob Squarepants', email: 'frycook@seamail.com', password:'icanboat', location: 'Bikini Bottom, PO')
squid = User.create!(username: 'Squidward Tentacles', email: 'clarinetlover@seamail.com', password:'hatemyjob', location: 'Bikini Bottom, PO')
star = User.create!(username: 'Patrick Star', email: 'pinhead@seamail.com', password:'ismayoaninstrument', location: 'Bikini Bottom, PO')
puff = User.create!(username: 'Poppy Puff', email: 'mrspuff@seamail.com', password:'tetrodotoxin', location: 'Bikini Bottom, PO')
plank = User.create!(username: 'Sheldon J. Plankton', email: 'fun@seamail.com', password:'plankton', location: 'Bikini Bottom, PO')
sandy = User.create!(username: 'Sandy Cheeks', email: 'bushy@seamail.com', password:'sandycheeks', location: 'Bikini Bottom, PO')
gary = User.create!(username: 'Gary', email: 'shell@seamail.com', password:'garysnail', location: 'Bikini Bottom, PO')

b1 = Business.create!(name: 'Krusty Krab', creator_id: krabs.id, address: '831 Bottom Feeder Lane, Bikini Bottom, Pacific Ocean', rating: 0, category: "Restaurants")
b5 = Business.create!(name: 'Chum Bucket', creator_id: plank.id, address: '832 Bottom Feeder Lane, Bikini Bottom, Pacific Ocean', rating: 0, category: "Restaurants")
b2 = Business.create!(name: "Mrs. Puff's Boating School", creator_id: puff.id, address: '233 Barnacle Avenue, Bikini Bottom, Pacific Ocean', rating: 0, category: "Education")
b3 = Business.create!(name: "Larry's Gym", creator_id: star.id, address: '9387 Krill Blvd, Bikini Bottom, Pacific Ocean', rating: 0, category: "Active Life")
b4 = Business.create!(name: "Weenie Hut Jr's", creator_id: star.id, address: '256 Hotdog Road, Bikini Bottom, Pacific Ocean', rating: 0, category: "Restaurants")
b6 = Business.create!(name: "Goofy Goober's Ice Cream Party Boat", creator_id: gary.id, address: '1983 Goober Street, Bikini Bottom, Pacific Ocean', rating: 0, category: "Restaurants")
b7 = Business.create!(name: "Poseidon Elementary School", creator_id: sandy.id, address: '478 Neptune Way, Bikini Bottom, Pacific Ocean', rating: 0, category: "Education")
b8 = Business.create!(name: "Salty Spitoon", creator_id: sponge.id, address: '255 Hotdog Road, Bikini Bottom, Pacific Ocean', rating: 0, category: "Bars")

r1 = Review.create!(rating: 5, author_id: krabs.id, business_id: b1.id, body: 'I highly recommend this place. They have great service and even better food! Definitely try the more expensive options because they are better.')
r1 = Review.create!(rating: 4, author_id: gary.id, business_id: b1.id, body: 'Whenever I get a craving for Krabby Patties I always come here. The food is very consistent. I have a sensitive stomach and eating here has never upset me')
r1 = Review.create!(rating: 1, author_id: krabs.id, business_id: b5.id, body: 'I highly recommend you avoid this place. They have terrible service and even worse food!')
r2 = Review.create!(rating: 5, author_id: sponge.id, business_id: b2.id, body: 'This boating school is one of the best in Bikini Bottom. I have been attending for over 10 years
 and will probably get my boating license soon! Mrs. Puff is an amazing instructor and I would not choose any other school.')
r1 = Review.create!(rating: 1, author_id: puff.id, business_id: b5.id, body: 'Saw a cockroach while I was eating. Needless to say, I will not be coming back.')
r1 = Review.create!(rating: 1, author_id: sandy.id, business_id: b5.id, body: 'Probably the worst restaurant I have ever eaten at. Not only does the food taste bad, the whole place smells bad too.')
r3 = Review.create!(rating: 4, author_id: squid.id, business_id: b3.id, body: 'I became a member for a month to give it a try. All the equipment is very new and polished. 
The owner Larry even helped spot me when I was bench pressing! However when I was struggling to finish my last set, Larry got distracted looking in the mirror and I almost died. 
For that I will have to give it a less than perfect score.')
r3 = Review.create!(rating: 3, author_id: plank.id, business_id: b3.id, body: 'There are too many muscleheads here. I would rather go to Sea Fitness')
r3 = Review.create!(rating: 5, author_id: sponge.id, business_id: b4.id, body: 'I hang out here with my friends all the time. The environment is perfect for us.')
r4 = Review.create!(rating: 5, author_id: star.id, business_id: b4.id, body: "My favorite item here is the hotdogs. They serve it with plenty of mayonnaise. It's usually empty here so the wait time isn't too bad.")
r3 = Review.create!(rating: 4, author_id: squid.id, business_id: b6.id, body: 'Come here for quality ice cream. I usually get the cookies and cream or mint chocolate chip. Just kidding, mint chocolate chip is the worst flavor ever created.')
r3 = Review.create!(rating: 3, author_id: u1.id, business_id: b6.id, body: 'I am lactose intolerant, so the ice cream made me very uncomfortable.')
r3 = Review.create!(rating: 4, author_id: krabs.id, business_id: b7.id, body: 'This is where I went to school, and I turned out alright.')
r3 = Review.create!(rating: 2, author_id: sponge.id, business_id: b8.id, body: 'Upon arriving, my friend and I were turned away at the door. Something about not being tough enough to enter. That is just outrageous.')
r3 = Review.create!(rating: 5, author_id: gary.id, business_id: b8.id, body: 'I am here all the time and have known the owner for years. There is no better place to get blackout drunk.')
r3 = Review.create!(rating: 1, author_id: star.id, business_id: b5.id, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')


file1 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/krusty_krab.png')
b1.photos.attach(io: file1, filename: 'krusty_krab.png')

file2 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/boating_school.png')
b2.photos.attach(io: file2, filename: 'boating_school.png')

file3 = open("https://kelp-seeds.s3-us-west-1.amazonaws.com/Larry's_Gym.png")
b3.photos.attach(io: file3, filename: "Larry's_Gym.png")

file4 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/weenie_hut_jr.png')
b4.photos.attach(io: file4, filename: 'weenie_hut_jr.png')

file5 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/krusty1.jpeg')
b1.photos.attach(io: file5, filename: 'krusty1.png')

file6 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/krusty2.png')
b1.photos.attach(io: file6, filename: 'krusty2.png')

file7 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/boating1.png')
b2.photos.attach(io: file7, filename: 'boating1.png')

file8 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/boating2.png')
b2.photos.attach(io: file8, filename: 'boating2.png')

file9 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/gym1.png')
b3.photos.attach(io: file9, filename: 'gym1.png')

file10 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/gym2.png')
b3.photos.attach(io: file10, filename: 'gym2.png')

file11 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/weenie1.png')
b4.photos.attach(io: file11, filename: 'weenie1.png')

file12 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/weenie2.png')
b4.photos.attach(io: file12, filename: 'weenie2.png')

file13 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/chum1.png')
b5.photos.attach(io: file13, filename: 'chum1.png')

file14 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/chum2.png')
b5.photos.attach(io: file14, filename: 'chum2.png')

file15 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/goofy_goober1.png')
b6.photos.attach(io: file15, filename: 'goofy_goober1.png')

file16 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/goofy_goober2.png')
b6.photos.attach(io: file16, filename: 'goofy_goober2.png')

file17 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/goofy_goober3.png')
b6.photos.attach(io: file17, filename: 'weenie_hut_jr.png')

file18 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/poseidon1.png')
b7.photos.attach(io: file18, filename: 'poseidon1.png')

file19 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/poseidon2.png')
b7.photos.attach(io: file19, filename: 'poseidon2.png')

file20 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/poseidon3.png')
b7.photos.attach(io: file20, filename: 'poseidon3.png')

file21 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/salty1.jpeg')
b8.photos.attach(io: file21, filename: 'salty1.jpeg')

file22 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/salty2.jpeg')
b8.photos.attach(io: file22, filename: 'salty2.jpeg')

file23 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/salty3.jpeg')
b8.photos.attach(io: file23, filename: 'salty3.jpeg')

file24 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/Patchy.png')
u1.photo.attach(io: file24, filename: 'Patchy.png')

file25 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/Mr_Krabs.png')
krabs.photo.attach(io: file25, filename: 'Mr_Krabs.png')


file26 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/spongebob.png')
sponge.photo.attach(io: file26, filename: 'spongebob.png')


file27 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/patrick.png')
star.photo.attach(io: file27, filename: 'patrick.png')


file28 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/squidward.png')
squid.photo.attach(io: file28, filename: 'squidward.png')


file29 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/Mrs_Puff.png')
puff.photo.attach(io: file29, filename: 'Mrs_Puff.png')


file30 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/Plankton.png')
plank.photo.attach(io: file30, filename: 'Plankton.png')


file31 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/Sandy.png')
sandy.photo.attach(io: file31, filename: 'Sandy.png')

file32 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/gary.png')
gary.photo.attach(io: file32, filename: 'gary.png')



