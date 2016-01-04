(1..100).each do |x|
a = String.new
a << "Fizz" if x%3 == 0
a << "Buzz" if x%5 == 0
a << x.to_s if a.empty?
puts a
end
