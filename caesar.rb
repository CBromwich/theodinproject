# Program implementing a Caesar shift cypher in Ruby

def caesar(string, shift)
  str_array = string.split('')
  
  if (shift < 0)
    caesar(string, shift + 26)
  end

  str_array.each_with_index do |c, index|
    value = c.ord
    if (value >= 65 && value <= 90)
      str_array[index] = (((value - 65 + shift) % 26) + 65).chr
    elsif (value >= 97 && value <= 122)
      str_array[index] = (((value - 97 + shift) % 26) + 97).chr
    end
  end
  
  return str_array.join('')
end

puts caesar('test', 5)