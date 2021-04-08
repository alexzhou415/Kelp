# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

u1 = User.create!(username: 'DemoUser', email: 'demo@email.com', password:'12345678', location: 'Richmond, CA')
u1 = User.create!(username: 'JRich', email: 'jjsmith@email.com', password:'hotdog64', location: 'San Diego, CA')
u1 = User.create!(username: 'StevenAdams', email: 'newzealander@email.com', password:'matemate', location: 'New York, NY')
u1 = User.create!(username: 'ChefCurry', email: '40percent@email.com', password:'504090se', location: 'Akron, OH')
u1 = User.create!(username: 'ElChapo', email: 'thebeardedone@email.com', password:'stepback', location: 'Los Angeles, CA')
u1 = User.create!(username: 'KingJames', email: 'akidfromakron@email.com', password:'kdisasnake', location: 'Cleveland, OH')
u1 = User.create!(username: 'easymoneysnip', email: 'burner@email.com', password:'imachampion2x', location: 'Washington, DC')
u1 = User.create!(username: 'DameTime', email: 'betterthancurry@email.com', password:'best3shooter', location: 'Oakland, CA')
u1 = User.create!(username: '23donkey', email: 'draygreen@email.com', password:'naturalmotion', location: 'Saginaw, MI')
