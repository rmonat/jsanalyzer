function foo() {
	var i = 4;
	while (true) {
		i = i + 1;
		if (i == 10) {
			return 42;
		}
	}
	return i;
}

x = foo();


y = 0;
while (Math.random()) {
	y = y + 1;
}

z = 0;
while(z < 10) {
	z = z + 1;
}
