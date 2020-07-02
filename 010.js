function arrayWarga(array) {
	var dataOrang = {}
	var dataWarga = []
	
	for (var i = 0; i < array.length; i++) {
		//Menampilkan data semua orang dalam satu objek
		dataOrang.nama = array[i][0]
		dataOrang.usia = array[i][1]
		
		//Mendorong data suatu objek ke dalam satu array jika orang tersebut berusia di bawah 21 tahun
		if (dataOrang.usia < 21) {
			dataWarga.push(dataOrang.nama)
		}
	}
	
	console.log('Data orang yang usianya kurang dari 21 tahun: ' + dataWarga)
}