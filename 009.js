function daftarKotaGanda(kota) {
	var kotaGanda = []
	
	for (var i = 0; i < kota.length; i++) {
		for (var j = i + 1; j < kota.length; j++) {
			//Mencari dan memindahkan kota yang memiliki nilai sama dalam satu array ke array lain
			if (kota[i] === kota[j]) {
				kotaGanda.push(kota[i])
			}
		}
	}
	
	//Menampilkan kota-kota yang memiliki nilai sama dalam satu array
	console.log(kotaGanda)
}