# Program to find substrings in a string given an array of substrings

def substrings(string, substrings)
  results = Hash.new(0)

  string.downcase!.split(' ').each do |word|
    substrings.each do |substring|
      results[substring] += 1 if word.include?(substring)
    end
  end
  puts results
end

substrings("Howdy partner, sit down! How's it going?", ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"])