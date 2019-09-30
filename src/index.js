import "./styles.css";

var turn = 1;
var gameOver = 0;

var field = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""]
];

if (document.readyState !== "loading") {
  // Document ready, executing
  console.log("Document ready, executing");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function() {
    // Document was not ready, executing when loaded
    console.log("Document ready, executing after a wait");
    initializeCode();
  });
}

function initializeCode() {
  console.log("Initializing");
  const boardi = document.getElementById("board");

  // cells creation
  for (var i = 0; i <= 4; i++) {
    // table row creation
    var row = document.createElement("tr");

    for (var j = 0; j <= 4; j++) {
      // create element <td> and text node
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("");

      cell.appendChild(cellText);
      cell.setAttribute("height", "40");
      cell.setAttribute("width", "40");
      //cell.setAttribute("id", i + "" + j);
      cell.setAttribute("id", i + "" + j);
      cell.addEventListener("click", move);
      //console.log(i,j)
      row.appendChild(cell);
    }

    //row added to end of table body
    boardi.appendChild(row);
    boardi.setAttribute("border", "2");
  }

  // append the <tbody> inside the <table>
  //tbl.appendChild(tblBody);

  //const boardi = document.getElementById("board");
  //const node = document.CreateElement("TR"); // create a <TR> node
  //const textnode = documentTextNode(content); // Create a text node
  //node.appendChild(textnode); // Append the text to <li>
  //document.getElementById("thislist").appendChild(node);

  //  button.addEventListener("mousedown", event => {
  //    buttonActivities();
  //    event.stopPropagation();
  // }
  //);
}

document.getElementById("info").innerHTML = "<h2>Player 1: x, Player 2:o</h2>";
document.getElementById("turn").innerHTML = "<h2>Turn of Player 1 (x)</h2>";

function move() {
  if (gameOver === 0 && turn === 1 && this.innerHTML === "") {
    this.innerHTML = "x";
    field[parseInt(this.id[0], 10)][parseInt(this.id[1], 10)] = "x";
    document.getElementById("turn").innerHTML = "<h2>Turn of Player 2 (o)</h2>";
    turn = 2;
    checkWinner();
  } else if (gameOver === 0 && turn === 2 && this.innerHTML === "") {
    this.innerHTML = "o";
    field[parseInt(this.id[0], 10)][parseInt(this.id[1], 10)] = "o";
    document.getElementById("turn").innerHTML = "<h2>Turn of Player 1 (x)</h2>";
    turn = 1;
    checkWinner();
  }
}

function printField() {
  for (var i in field) {
    console.log("row " + i);
    for (var j in field[i]) {
      console.log(" " + field[i][j]);
    }
  }
}

var checkWinner = function() {
  var p1 = 0;
  var p2 = 0;

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (field[i][j] === "x") {
        p1++;
      } else if (field[i][j] === "o") {
        p2++;
      }
      if (p1 === 5) {
        document.getElementById("turn").innerHTML =
          "<h2>Player 1 (x) wins!</h2>";
        alert("Player 1 won!");
        gameOver = 1;
        //return "player 1 won";
      } else if (p2 === 5) {
        document.getElementById("turn").innerHTML =
          "<h2>Player 2 (o) wins!</h2>";
        alert("Player 2 won!");
        gameOver = 1;
        //return "player 2 won";
      }
    }
    p1 = 0;
    p2 = 0;
  }
  for (var j = 0; j < 5; j++) {
    for (var i = 0; i < 5; i++) {
      if (field[i][j] === "x") {
        p1++;
      } else if (field[i][j] === "o") {
        p2++;
      }
      if (p1 === 5) {
        document.getElementById("turn").innerHTML =
          "<h2>Player 1 (x) wins!</h2>";
        alert("Player 1 won!");
        gameOver = 1;
        //return "player 1 won";
      } else if (p2 === 5) {
        document.getElementById("turn").innerHTML =
          "<h2>Player 2 (o) wins!</h2>";
        alert("Player 2 won!");
        gameOver = 1;
        //return "player 2 won";
      }
    }
    p1 = 0;
    p2 = 0;
  }
  for (var j = 0; j < 5; j++) {
    if (field[j][j] === "x") {
      p1++;
    } else if (field[j][j] === "o") {
      p2++;
    }
    if (p1 === 5) {
      document.getElementById("turn").innerHTML = "<h2>Player 1 (x) wins!</h2>";
      alert("Player 1 won!");
      gameOver = 1;
      //return "player 1 won";
    } else if (p2 === 5) {
      document.getElementById("turn").innerHTML = "<h2>Player 2 (o) wins!</h2>";
      alert("Player 2 won!");
      gameOver = 1;
      //return "player 2 won";
    }
  }
  p1 = 0;
  p2 = 0;
  for (var k = 0; k < 5; k++) {
    if (field[2 - k][0 + k] === "x") {
      p1++;
    } else if (field[2 - k][0 + k] === "o") {
      p2++;
    }
    if (p1 === 5) {
      document.getElementById("turn").innerHTML = "<h2>Player 1 (x) wins!</h2>";
      alert("Player 1 won!");
      gameOver = 1;

      //return "player 1 won";
    } else if (p2 === 5) {
      document.getElementById("turn").innerHTML = "<h2>Player 2 (o) wins!</h2>";
      alert("Player 2 won!");
      gameOver = 1;
      //return "player 2 won";
    }
  }
  p1 = 0;
  p2 = 0;
  if (gameOver === 1) {
  }
  return "no winner";
};
