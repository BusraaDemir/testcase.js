function oddishOrEvenish(sayi) {
    var toplam = 0;
    if (sayi != null && sayi.toString().length > 0 && sayi > 0) {
        for (i = 0; i < sayi.toString().length; i++) {
            var item = parseInt(sayi.toString()[i]);
            toplam += item;
        }
        if (toplam % 2 == 0) {
            console.log(toplam, "Even");
        } else {
            console.log(toplam, "Odd");
        }
    }
}

oddishOrEvenish(21);
