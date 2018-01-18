// https://www.codewars.com/kata/ranking-poker-hands/javascript

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
	constructor(cards) {
		this._cards = cards;
		this._rank = getRankedPokerHand(cards);
	};

	compareWith(compareHand) {
		if (this._rank > compareHand._rank)
			return Result.win;
		if (this._rank < compareHand._rank)
			return Result.loss;

		const multiplesResult = compareMultiplesResult(this, compareHand);
		if (multiplesResult !== undefined) return multiplesResult;
		
		return compareHighCardResult(this, compareHand);
	}
}

const getRankedPokerHand = (cards) => {
	if (isStraightFlush(cards))	return Rank.straightFlush;
	if (isFourOfAKind(cards)) return Rank.fourOfAKind;
	if (isFullHouse(cards))	return Rank.fullHouse;
	if (isFlush(cards)) return Rank.flush;
	if (isStraight(cards)) return Rank.straight;
	if (isThreeOfAKind(cards)) return Rank.threeOfAKind;
	if (isTwoPair(cards)) return Rank.twoPair;
	if (isPair(cards)) return Rank.pair;
	return Rank.highCard;
}

const compareMultiplesResult = (hand, compareHand) => {
	let groupSize;
	if (hand._rank === Rank.pair) groupSize = 2;
	if (hand._rank === Rank.threeOfAKind) groupSize = 3;
	if (hand._rank === Rank.fourOfAKind) groupSize = 4;

	const pair = getGroupedCards(hand._cards, groupSize)[0];
	const compairPair = getGroupedCards(compareHand._cards, groupSize)[0];
	
	if (pair > compairPair) return Result.win;
	if (pair < compairPair) return Result.loss;
};

const compareHighCardResult = (hand, compareHand) => {

	const mySortedCardValues = getSortedCardValues(hand._cards, true);
	const compareSortedCardValues = getSortedCardValues(compareHand._cards, true);

	for (let i = 0; i < mySortedCardValues.length; i++) {
		const card = mySortedCardValues[i];
		const compareCard = compareSortedCardValues[i];

		if (card > compareCard) return Result.win;
		if (card < compareCard)	return Result.loss;
	}
	return Result.tie;
}

const comparingPairs = (hand, compareHand) => hand._rank === Rank.pair && compareHand._rank === Rank.pair;

const isStraightFlush = (cards) => isStraight(cards) && isFlush(cards);

const isFourOfAKind = (cards) => getGroupedCards(cards, 4).length === 1;

const isFullHouse = (cards) => isThreeOfAKind(cards) && isPair(cards);

const isFlush = (cards) => getCardSuits(cards).every((card, i, array) => card === array[0]);

const isStraight = (cards) => {
	const sortedCards = getSortedCardValues(cards);
	return sortedCards.slice(1).every((card, i) => card - 1 === sortedCards[i]);
}

const isThreeOfAKind = (cards) => getGroupedCards(cards, 3).length === 1;

const isTwoPair = (cards) => getGroupedCards(cards, 2).length === 2;

const isPair = (cards) => getGroupedCards(cards, 2).length === 1;

const getGroupedCards = (cards, groupSize) => {
	 const cardsMatchingGroupSize = getCardValues(cards).filter((cardValue, i, array) => array.filter(p => p === cardValue).length === groupSize);
	 const uniqueCards = Array.from(new Set(cardsMatchingGroupSize));
	return uniqueCards;
}

const getCardValue = (card) => {
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

const getSortedCardValues = (cards, descending) => descending ? getCardValues(cards).sort((a,b) => b - a) : getCardValues(cards).sort((a,b) => a - b);

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

((desc) => {

	var playerHand = new PokerHand('2H 3H 4H 5H 6H');
	var opponentHand = new PokerHand('KS AS TS QS JS');

const expected = Result.loss;
const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Highest straight flush wins');

((desc) => {

	var playerHand = new PokerHand('2H 3H 4H 5H 6H');
	var opponentHand = new PokerHand('AS AD AC AH JD');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Straight flush wins of 4 of a kind');

((desc) => {

	var playerHand = new PokerHand('AS AH 2H AD AC');
	var opponentHand = new PokerHand('JS JD JC JH 3D');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Highest 4 of a kind wins');

((desc) => {

	var playerHand = new PokerHand('2S AH 2H AS AC');
	var opponentHand = new PokerHand('JS JD JC JH AD');

	const expected = Result.loss;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('4 Of a kind wins of full house');

((desc) => {

	var playerHand = new PokerHand('2S AH 2H AS AC');
	var opponentHand = new PokerHand('2H 3H 5H 6H 7H');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Full house wins of flush');

((desc) => {

	var playerHand = new PokerHand('AS 3S 4S 8S 2S');
	var opponentHand = new PokerHand('2H 3H 5H 6H 7H');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Highest flush wins');

((desc) => {

	var playerHand = new PokerHand('2H 3H 5H 6H 7H');
	var opponentHand = new PokerHand('2S 3H 4H 5S 6C');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Flush wins of straight');

((desc) => {

	var playerHand = new PokerHand('2S 3H 4H 5S 6C');
	var opponentHand = new PokerHand('3D 4C 5H 6H 2S');

	const expected = Result.tie;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Equal straight is tie');

((desc) => {

	var playerHand = new PokerHand('2S 3H 4H 5S 6C');
	var opponentHand = new PokerHand('AH AC 5H 6H AS');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Straight wins of three of a kind');

((desc) => {

	var playerHand = new PokerHand('2S 2H 4H 5S 4C');
	var opponentHand = new PokerHand('AH AC 5H 6H AS');

	const expected = Result.loss;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('3 Of a kind wins of two pair');

((desc) => {

	var playerHand = new PokerHand('2S 2H 4H 5S 4C');
	var opponentHand = new PokerHand('AH AC 5H 6H 7S');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('2 Pair wins of pair');

((desc) => {

	var playerHand = new PokerHand('6S AD 7H 4S AS');
	var opponentHand = new PokerHand('AH AC 5H 6H 7S');

	const expected = Result.loss;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Highest pair wins');

((desc) => {

	var playerHand = new PokerHand('2S AH 4H 5S KC');
	var opponentHand = new PokerHand('AH AC 5H 6H 7S');

	const expected = Result.loss;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Pair wins of nothing');

((desc) => {

	var playerHand = new PokerHand('2S 3H 6H 7S 9C');
	var opponentHand = new PokerHand('7H 3C TH 6H 9S');

	const expected = Result.loss;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Highest card loses');

((desc) => {

	var playerHand = new PokerHand('4S 5H 6H TS AC');
	var opponentHand = new PokerHand('3S 5H 6H TS AC');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Highest card wins');

((desc) => {

	var playerHand = new PokerHand('2S AH 4H 5S 6C');
	var opponentHand = new PokerHand('AD 4C 5H 6H 2C');

	const expected = Result.tie;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Equal cards is tie');

((desc) => {

	var playerHand = new PokerHand('JH 9H TH KH QH');
	var opponentHand = new PokerHand('JC KH JS JD JH');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Straight flush vs four of a kind wins');

((desc) => {

	var playerHand = new PokerHand('KH KS 5S 4C 3H');
	var opponentHand = new PokerHand('4S 4D AD 5S 3S');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Highest pair wins');

((desc) => {

	var playerHand = new PokerHand('KH KS KD 4C 3H');
	var opponentHand = new PokerHand('2H 2S 2D AS 3S');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Highest three of a kind wins');

((desc) => {

	var playerHand = new PokerHand('AS AH AD AC 2H');
	var opponentHand = new PokerHand('JS JD JC JH 3D');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Highest four of a kind wins');

((desc) => {

	var playerHand = new PokerHand('AS 3S 4S 8S 2S');
	var opponentHand = new PokerHand('2H 3H 5H 6H 7H');

	const expected = Result.win;
	const actual = playerHand.compareWith(opponentHand);

console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Highest flush wins');