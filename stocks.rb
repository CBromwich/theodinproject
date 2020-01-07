# Implements a simple algorithm to find the best sell point between 2 days given an array of ints

def stock_picker(array)
  max_margin = 0
  buy_day = 0
  sell_day = 0

  array.each do |num|
    for day in array.index(num)..array.size - 1 do
      margin = array[day] - num
      if margin > max_margin
        max_margin = margin
        buy_day = array.index(num)
        sell_day = day
      end
    end
  end
  puts "Buy on #{buy_day} and sell on #{sell_day}. Profit of #{max_margin}"
end

stock_picker([17,3,5,9,15,8,6,1,10])