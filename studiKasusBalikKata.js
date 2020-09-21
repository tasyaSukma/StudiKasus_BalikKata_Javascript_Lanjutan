function balikKata (kata){
	var reverseKata="";

	for(var i=kata.length-1;i>=0;i--){
		reverseKata = reverseKata +kata.charAt(i)
	}

	return reverseKata
}

console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))  
console.log(balikKata("alohahola"))  
console.log(balikKata("Jawa_Barat"))
