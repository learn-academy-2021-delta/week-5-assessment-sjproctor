# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# create a method - word_finder
# parameters - array, string
# iterating - select
# .include?

def word_finder(array, string)
  array.select do |value|
    value.include? string
  end
end

# p word_finder(beverages_array, letter_o)
# p word_finder(beverages_array, letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# create a method - come_together
# parameters - array
# create an anchor variable to start at 0
# look at each item in the array - each
# accumulate the anchor with each iteration

# def come_together array
#   anchor = 0
#   array.each do |value|
#     anchor += value
#   end
#   anchor
# end

def come_together array
  array.sum
end

# p come_together nums_array1
# p come_together nums_array2

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0

class Bike
  def initialize model
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
  def pedal_faster mph
    @current_speed += mph
  end
  def brake mph
    if mph > @current_speed
      @current_speed = 0
    else
      @current_speed -= mph
    end
  end
end

new_bike = Bike.new 'Trek'
# p new_bike
#<Bike:0x00007fa0de04ef58 @model="Trek", @wheels=2, @current_speed=0>
p new_bike.bike_info
# "The Trek bike has 2 wheels and is going 0 mph."
new_bike.pedal_faster(10)
p new_bike.bike_info
# "The Trek bike has 2 wheels and is going 10 mph."
new_bike.pedal_faster(20)
p new_bike.bike_info
# "The Trek bike has 2 wheels and is going 30 mph."
new_bike.brake(15)
p new_bike.bike_info
# "The Trek bike has 2 wheels and is going 15 mph."
new_bike.brake(20)
p new_bike.bike_info
# "The Trek bike has 2 wheels and is going 0 mph."

# class Bike
#   attr_accessor :model
#   def initialize
#     @model = model
#     @wheels = 2
#     @current_speed = 0
#   end
#   def bike_info
#     "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
#   end
# end
#
# new_bike = Bike.new
# new_bike.model = 'Trek'
# p new_bike
#<Bike:0x00007fa0de04ef58 @model="Trek", @wheels=2, @current_speed=0>

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0
