### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame

# Errors:
# Function name should be check_for_ace
# Variable Name should be card_value

  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  #Errors:
  # dif should be def when defining the function
  # Indentation not great. if statement should be indented under function definition
  # Arguments card1 and card2 not separated by a comma
  # First line of if statement should be if card1_value > card2_value
  # return card should be return card1

  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card
  else
    return card2
  end
end
end

#Errors:
# This is outside the class
# Function name should be self_cards_total
# No value assigned to total
# Argument name should be card not cards
# total += card.value should be card_value instead

def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end
```
