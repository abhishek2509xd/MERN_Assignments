var y = document.getElementById("table");

document.getElementById("1").style.backgroundColor = "red";
document.getElementById("2").style.backgroundColor = "black";
document.getElementById("3").style.backgroundColor = "red";
document.getElementById("4").style.backgroundColor = "black";
document.getElementById("5").style.backgroundColor = "red";

console.log("Elements of even cells are\n");

for (i = 0; i < y.rows.length; i++) {
  for (j = 0; j < y.rows[i].cells.length; j++) {
    if ((j + i) % 2 != 0) {
      console.log(
        "value " +
          y.rows[i].cells[j].innerHTML +
          " " +
          "the position is" +
          "row-" +
          " " +
          (i + 1) +
          " " +
          "column-" +
          (j + 1)
      );
      console.log("\n");
    }
  }
}