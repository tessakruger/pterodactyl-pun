(1..100).each do |x|
a = String.new
a << "Fizz" if x%3 == 0
a << "Buzz" if x%5 == 0
a << x.to_s if a.empty?
puts a
<<<<<<< HEAD
end
=======
end
>>>>>>> 0140150c5dbe05289faa4ae6555ca8701b9a15bd
