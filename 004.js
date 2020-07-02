function palindrome(kata){
	var kataPalindrome = []
	
	//Membuat versi reverse dari suatu kata
	for (var i = kata.length - 1; i >= 0; i--) {
		kataPalindrome.push(kata[i])
	}
	
	//Membandingkan suatu kata dengan versi reverse dari kata tersebut, palindrom atau tidak?
	if (kata === kataPalindrome.join('')) {
		return true
	} else {
		return false
	}
}