function recursive(num1, num2) {
	if (num1 > num2) {
		if (num2 == 1) {
			return num1
		} else {
			return (num1 * num2) + recursive(num1, num2 - 1)
		}
	} else {
		if (num1 == num2) {
			return num1^2
		} else {
			return num1 * recursive(num1 + 1, num2)
		}
	}
}