function setCardGallerySize(containerWidth, containerHeight)
{
	var ratio = 0.20*0.70; // width of a card to the width of the screen
	
	var allCards = document.getElementsByClassName("cardimage");
	var cardAmount = allCards.length;	
	var cardVertical = Math.ceil(cardAmount/5);
	
	var cardGallery = document.getElementById("cardGallery");
	
	cardGallery.style.marginTop = ((containerHeight - cardVertical*containerWidth*ratio*569/400)/2).toString() + 'px';
	
	for (var i=0; i < cardAmount; i++)
	{
		setCardDimensions(allCards[i], containerWidth*ratio);	
	}
}