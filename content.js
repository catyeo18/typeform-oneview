var script_list = document.getElementsByTagName('script')
// console.log("HI")
for (i = 0; i < script_list.length - 1; i++) {
  // console.log(i)
  // console.log(script_list[i].text)

  script_dump = script_list[i].text
  console.log(script_dump)

  for (var a=[], j=0; j < script_dump.length; j++) {
    if (script_dump.substring(j, j + 5)=="title") {
      // Find where the title property ends
      var index = j + 8
      while (script_dump[index] != '"') {
        index++
      }
      a.push(script_dump.substring(j + 8, index));
    }    
  }
  console.log(a)
  console.log(a.slice(3, a.length - 3))
}