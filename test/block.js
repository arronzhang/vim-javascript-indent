/*
 * Test for block
 *
 * ({[ at the end 
 * )}] at the start 
 *
 */

function getBuddy( id ) {
	/*
	 * wer
	 *
	 * Comment...
	 * 
	 */
	var bb = 4
		, dd = 23
		, gg = 10;

	//Inline comment...
	id(
		1,
		{
			test: "ok"
		}
	);

	return [  //Inline comment
		{ 
			id: 1
			, name: "Jack"
			, age: 20
			, desc: "[{test"
		},
		{
			id: 2
			, name: "Lucy"
			, age: 19
		}
		, {
			id: 3
			, name: "Lili"
			, age: 19
			, test: function(done) {
				function done() {

				};
			}
		}
	];

	function id(i){
		return i * 2;
	};
}

console.log( getBuddy() );

