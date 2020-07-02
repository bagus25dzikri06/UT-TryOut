function infinityAdd() {
  var input = parseInt(prompt('Masukkan angkamu di sini', '0'))
  var jumlah = 0
  
  if (input === '=') {
	  alert('Hasil jumlahnya adalah ' + jumlah)
  } else {
	  jumlah += input
  }
}