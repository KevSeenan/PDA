require ('minitest/autorun')
require ('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class TestCardGame < MiniTest::Test

  def setup()
    @card1 = Card.new("Spades", 1)
    @card2 = Card.new("Hearts", 6)
  end

  def test_is_there_an_ace__true()
    assert_equal(1, @card1.value)
  end

  def test_for_finding_the_highest_card()
    card1 = @card1
    card2 = @card2
    assert_equal(6, @card2.value)
  end



end
