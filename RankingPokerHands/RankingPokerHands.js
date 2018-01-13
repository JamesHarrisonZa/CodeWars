const Result = { 
	win: 0,
	loss: 1,
	tie: 2
}

const Rank = {
	straightFlush: 8,
	fourOfAKind: 7,
	fullHouse: 6,
	flush: 5,
	straight: 4,
	threeOfAKind: 3,
	twoPair: 2,
	pair: 1,
	highCard: 0,
}


class PokerHand {
	/**
	 * @param {string} cards 
	 */
	constructor(cards) {
		this._cards = cards;
		this._rank = getRankedPokerHand(cards);
	};

	compareWith(compareHand){
		if (this._rank > compareHand._rank)
			return Result.win;
		if (this._rank < compareHand._rank)
			return Result.loss;
		return compareHighCardResult(this, compareHand);
	}
}

const getRankedPokerHand = (cards) =>
{
	if (isStraightFlush(cards))
		return Rank.straightFlush;

	if (isFourOfAKind(cards))
		return Rank.fourOfAKind;

	if (isFullHouse(cards))
		return Rank.fullHouse;

	if (isFlush(cards))
		return Rank.flush;

	if (isStraight(cards))
		return Rank.straight;

	if (isThreeOfAKind(cards))
		return Rank.threeOfAKind;

	if (isTwoPair(cards))
		return Rank.twoPair;

	if (isPair(cards))
		return Rank.pair;

	return Rank.highCard;
}

 const compareHighCardResult = (myHand, compareHand) => {

	const mySortedCardValues = getSortedCardValues(myHand._cards);
	const compareSortedCardValues = getSortedCardValues(compareHand._cards);

	for (let i = 0; i < mySortedCardValues.length; i++) {
		const card = mySortedCardValues[i];
		const compareCard = compareSortedCardValues[i];

		if (card > compareCard)
			return Result.win;

		if (card < compareCard)
			return Result.loss;
	}
	return result.Tie;
}

const comparingPairs = (myHand, compareHand) => {
	return myHand._rank === Rank.pair &&
		compareHand._rank === Rank.pair;
}

const isStraightFlush = (cards) => isStraight(cards) && isFlush(cards);

const isFourOfAKind = (cards) => getGroupedCards(cards, 4).length == 1;

const isFullHouse = (cards) => isThreeOfAKind(cards) && isPair(cards);

const isFlush = (cards) => getCardSuits(cards).every((card, i, array) => card === array[0]);

const isStraight = (cards) => sortedValues.slice(1).every((card, i) => sortedValues[i] === card + 1);

const isThreeOfAKind = (cards) => getGroupedCards(cards, 3).length == 1;

const isTwoPair = (cards) => getGroupedCards(cards, 2).length == 2;

const isPair = (cards) => getGroupedCards(cards, 2).length == 1;

const getGroupedCards = (cards, groupSize) => getCardValues(cards).filter((cardValue, i, array) => array.filter(p => p === cardValue).length === groupSize);

const getCardValue = (card) =>
{
	if (card === 'T')
		return 10;
	if (card === 'J')
		return 11;
	if (card === 'Q')
		return 12;
	if (card === 'K')
		return 13;
	if (card === 'A')
		return 14;

	return Number(card);
}

const getCardValues = (cards) => cards.split(' ').map(card => getCardValue(card.substring(0,1)));

const getSortedCardValues = (cards) => getCardValues(cards).sort();

const getCardSuits = (cards) => cards.split(' ').map(card => card.substring(1));

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {

		var playerHand = new PokerHand('4S 5H 6H TS AC');
		var opponentHand = new PokerHand('3S 5H 6H TS AC');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

	console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Highest card wins');


// it("Highest straight flush wins", function() { assert(Result.loss, "2H 3H 4H 5H 6H", "KS AS TS QS JS");});
// it("Straight flush wins of 4 of a kind", function() { assert(Result.win, "2H 3H 4H 5H 6H", "AS AD AC AH JD");});
// it("Highest 4 of a kind wins", function() { assert(Result.win, "AS AH 2H AD AC", "JS JD JC JH 3D");});
// it("4 Of a kind wins of full house", function() { assert(Result.loss, "2S AH 2H AS AC", "JS JD JC JH AD");});
// it("Full house wins of flush", function() { assert(Result.win,  "2S AH 2H AS AC", "2H 3H 5H 6H 7H");});
// it("Highest flush wins", function() { assert(Result.win, "AS 3S 4S 8S 2S", "2H 3H 5H 6H 7H");});
// it("Flush wins of straight", function() { assert(Result.win, "2H 3H 5H 6H 7H", "2S 3H 4H 5S 6C");});
// it("Equal straight is tie", function() { assert(Result.tie, "2S 3H 4H 5S 6C", "3D 4C 5H 6H 2S");});
// it("Straight wins of three of a kind", function() { assert(Result.win, "2S 3H 4H 5S 6C", "AH AC 5H 6H AS");});
// it("3 Of a kind wins of two pair", function() { assert(Result.loss, "2S 2H 4H 5S 4C", "AH AC 5H 6H AS");});
// it("2 Pair wins of pair", function() { assert(Result.win, "2S 2H 4H 5S 4C", "AH AC 5H 6H 7S");});
// it("Highest pair wins", function() { assert(Result.loss, "6S AD 7H 4S AS", "AH AC 5H 6H 7S");});
// it("Pair wins of nothing", function() { assert(Result.loss, "2S AH 4H 5S KC", "AH AC 5H 6H 7S");});
// it("Highest card loses", function() { assert(Result.loss, "2S 3H 6H 7S 9C", "7H 3C TH 6H 9S");});
// //it("Highest card wins", function() { assert(Result.win, "4S 5H 6H TS AC", "3S 5H 6H TS AC");});
// it("Equal cards is tie", function() { assert(Result.tie, "2S AH 4H 5S 6C", "AD 4C 5H 6H 2C");});

