function triangle(num){
  let print = ""
  if(typeof num == "number" && num >= 0) {
    for(i=0;i<num;i++) {
      for(j=0;j<=i;j++) {
        print += "#"
      } print += "\n"
    }
  } else {
    print += "Parameter harus angka dan positif!"
  }
 return print
}

console.log(triangle(5));