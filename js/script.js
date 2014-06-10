 
var itemCSSMap = {
	1: 'itmBottle',
	3: 'itmMagicWand',
};

// A full version of this JSON will be served for APIs requesting full data

//Send changed data only
var jsonInputForRefresh = {
	MID: ID1, //The match id - will be sent with each request to server to get desired match data
	T:3057, //Last data update
	D: 1, //Dire Kills
	R: 2, //Radiant Kills
	RBD: X,// Radiant buildings destroyed
	DBD: X,// Dire buildings destroyed
	H: { //Hero Data
		D1: {
			L:17,
			K:6,
			D:3,
			A:12,
			NW:12000,
			I:[1,3,5,6,9,10]
		},
		D2: {
			I:[1,3,5,6,9,11]
		}
	}
};

