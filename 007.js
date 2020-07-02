function reverse(kalimat) {
	var kalimatTerbalik = []
	
	//Membuat versi reverse dari suatu kalimat
	for (var i = kalimat.length - 1; i >= 0; i--) {
		kalimatTerbalik.push(kalimat[i])
    }		
	
	//Menampilkan versi reverse dari suatu kata
	console.log(kalimatTerbalik.join(''))
}