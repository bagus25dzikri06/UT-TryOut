function max(array) {
	if (array.length < 100) {
		//Mengurutkan bilangan
		array.sort(function(a,b) {return a-b})
	}
	//Mengambil nilai tertinggi
	console.log('Nilai maksimum: ' + array[array.length - 1])
}

function min(array) {
	if (array.length < 100) {
		//Mengurutkan bilangan
		array.sort(function(a,b) {return b-a})
	}
	//Mengambil nilai terendah
	console.log('Nilai minimum: ' + array[array.length - 1])
}

function average(array) {
	var jumlah = 0, rataRata
	
	if (array.length < 100) {
		//Menjumlahkan nilai dari suatu array
		for (var i = 0; i < array.length; i++) {
			jumlah += array[i]
		}
	}
	
	//Nilai rata-rata dari suatu array 
	rataRata = jumlah / array.length
	console.log('Nilai rata-rata: ' + rataRata)
}