function max(array) {
	if (array.length < 100) {
		array.sort(function(a,b) {return a-b})
	}
	console.log('Nilai maksimum: ' + array[array.length - 1])
}

function min(array) {
	if (array.length < 100) {
		array.sort(function(a,b) {return b-a})
	}
	console.log('Nilai minimum: ' + array[array.length - 1])
}

function average(array) {
	var jumlah = 0, rataRata
	
	if (array.length < 100) {
		for (var i = 0; i < array.length; i++) {
			jumlah += array[i]
		}
	}
	
	rataRata = jumlah / array.length
	console.log('Nilai rata-rata: ' + rataRata)
}