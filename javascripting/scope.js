var a = 1, b = 8, c = 6 ;

(function firstFunction(){
	var b = 8 , c = 6;

	(function secondFunction(){
		var b = 8;

		(function thirdFunction(){
			var a = 1, c = 6;

			(function fourthFunction(){
				var a = 1, c = 6;

			})();
		})();
	})();
})();

console.log("a: " + a + ", b: " + b + ", c: " + c);