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
u1 = User.create!(username: 'JRich', email: 'jjsmith@email.com', password:'hotdog64', location: 'San Diego, CA')
u1 = User.create!(username: 'StevenAdams', email: 'newzealander@email.com', password:'matemate', location: 'New York, NY')
u1 = User.create!(username: 'ChefCurry', email: '40percent@email.com', password:'504090se', location: 'Akron, OH')
u1 = User.create!(username: 'ElChapo', email: 'thebeardedone@email.com', password:'stepback', location: 'Los Angeles, CA')
u1 = User.create!(username: 'KingJames', email: 'akidfromakron@email.com', password:'kdisasnake', location: 'Cleveland, OH')
u1 = User.create!(username: 'easymoneysnip', email: 'burner@email.com', password:'imachampion2x', location: 'Washington, DC')
u1 = User.create!(username: 'DameTime', email: 'betterthancurry@email.com', password:'best3shooter', location: 'Oakland, CA')
u1 = User.create!(username: '23donkey', email: 'draygreen@email.com', password:'naturalmotion', location: 'Saginaw, MI')
krabs = User.create!(username: 'Eugene Krabs', email: 'mrkrabs@seamail.com', password:'moneybags', location: 'Bikini Bottom, PO')
sponge = User.create!(username: 'Spongebob Squarepants', email: 'frycook@seamail.com', password:'icanboat', location: 'Bikini Bottom, PO')
squid = User.create!(username: 'Squidward Tentacles', email: 'clarinetlover@seamail.com', password:'hatemyjob', location: 'Bikini Bottom, PO')
star = User.create!(username: 'Patrick Star', email: 'pinhead@seamail.com', password:'ismayoaninstrument', location: 'Bikini Bottom, PO')
puff = User.create!(username: 'Poppy Puff', email: 'mrspuff@seamail.com', password:'tetrodotoxin', location: 'Bikini Bottom, PO')

b1 = Business.create!(name: 'Krusty Krab', creator_id: krabs.id, address: '831 Bottom Feeder Lane, Bikini Bottom, Pacific Ocean', rating: 5, category: "Restaurants")
b2 = Business.create!(name: "Mrs. Puff's Boating School", creator_id: puff.id, address: '233 Barnacle Ave, Bikini Bottom, Pacific Ocean', rating: 5, category: "Education")

file1 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/krusty_krab.png')
b1.photo.attach(io: file1, filename: 'krusty_krab.png')

file2 = open('https://kelp-seeds.s3-us-west-1.amazonaws.com/boating_school.png')
b2.photo.attach(io: file2, filename: 'boating_school.png')