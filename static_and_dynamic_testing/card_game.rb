### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

class CardGame

  def initialize(suit, value)  #This was also missing from static test file
    @suit = suit
    @value = value;
  end


  def check_for_ace(card)
    if card_value == 1 #== added in after static test due to being missed
      return true
    else
      return false
    end
  end

  def highest_card(card1, card2)
    if card1.value > card2.value
      return card1
    else
      return card2
    end
  end

  def self_cards_total(cards)
    total = 0
    for card in cards
      total += card.value
      return "You have a total of" + total
    end
  end
end
