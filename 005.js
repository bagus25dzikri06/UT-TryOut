function leapYear(tahunPertama, tahunTerakhir) {
	for (var i = tahunPertama; i <= tahunTerakhir; i++) {
		if (i % 4 == 0) {
			console.log(i + ' adalah tahun kabisat')
		} else {
			console.log(i + ' bukan tahun kabisat')
		}
	}
}