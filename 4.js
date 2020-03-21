function longest(word){
    let str = word.split(" ")
    let long = ""
    for(i=0;i<str.length;i++) {
        if(str[i].length > long.length) {
            long = str[i]
        }
    } return long
}
console.log(longest("Seluruh Arkademian mengucapkan selamat ramadhan!"));
console.log(longest("Halo Arkademian!"));
console.log(longest("Baju ini sangat bagus sekali"))