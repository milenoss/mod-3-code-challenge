# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

image_array = [
  {url: "http://blog.flatironschool.com/wp-content/uploads/2017/06/IMAG2936-352x200.jpg", name: "Science Fair", likes: 0},
  {url: "http://blog.flatironschool.com/wp-content/uploads/2015/10/laptop-352x200.jpg", name: "Turning Tables", likes: 0},
  {url: "http://blog.flatironschool.com/wp-content/uploads/2016/07/072716-js-saved-web-4-352x200.jpg", name: "The Internet!", likes: 0},
  {url: "http://blog.flatironschool.com/wp-content/uploads/2016/01/20141110-Flatiron-School-29-352x200.jpg", name: "Not Flatiron", likes: 0},
  {url: "http://blog.flatironschool.com/wp-content/uploads/2017/06/5-year-event-352x200.jpg", name: "Avi and Adam", likes: 0},
  {url: "http://blog.flatironschool.com/wp-content/uploads/2016/10/Code-Background-352x200.jpg", name: "Info Hash", likes: 0},
  {url: "http://blog.flatironschool.com/wp-content/uploads/2017/02/Campus_Normal-352x200.png", name: "Lovelace Graffiti Wall", likes: 0}
]
5000.times do
  Image.create(image_array[rand(image_array.length)])
end

Comment.create(content: 'first comment!')
ImageComment.create(image:Image.find(1), comment:Comment.find(1))
