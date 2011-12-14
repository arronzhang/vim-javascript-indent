
/*
 * One line
 *
 * line last or first:  \ + - = * / . , : | & ? || && %
 *
 */

function line(){

	var str = "test" 
		+ "werwer";
	var ok
	  , name
	  , dd = {
		  bb: 5
		, dd: 10
		}
	  , fn = function() {
		};

	if( true )
		indent();

	sep();

	if( true )
		return (function(){
			return false;
		})() ||
			false ||
			true;
	sep();

	im.boy() &&
		strong() &&
		wisdom() &&
		function(){
			return true;
		} &&
		back();

	sep();

	im.boy() 
		&& strong() 
		&& wisdom() 
		&& function(){
			return true;
		} 
		&& back();

	type.object({
		name: type.string()
			.trim().uppercase()
			.validator(function(val, done){
				setTimeout(function(){
					done();
				}, 100);
			})
		, email: type.string()
			.trim()
			.email(), 
		pass: type.string().
			trim()
	});
}

