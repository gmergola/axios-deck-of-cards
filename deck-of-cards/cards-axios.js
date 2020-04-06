let deckId;

async function getNewDeck(){
  let deck = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  return deck.data.deck_id;
}



async function getSingleCard (){
  let singleCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  return singleCard.data;
}

async function addCardToPage(){
  let cardData = await getSingleCard();
  
  let cardImage = $('<img>')
  cardImage.attr("src", cardData.cards[0].image);
  $("#cards").append(cardImage)

  if (cardData.remaining === 0){
    $("#button").hide()
    $('#restart').show()
  }

}

async function start(){
  deckId = await getNewDeck()

  $("#button").on("click", addCardToPage)
}

$(start)
