require ('minitest/autorun')
require ('minitest/rg')
require_relative('../card.rb')

class TestCard < MiniTest::Test

  def setup()
      @card = Card.new("Spade", 10 )
  end

  def test_card_has_a_suit()
    assert_equal("Spade", @card.suit)
  end

  def test_card_has_a_value()
    assert_equal(10, @card.value)
  end

end
