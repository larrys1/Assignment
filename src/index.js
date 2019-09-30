import "./styles.css";

var turn = 1;
var gameOver = 0;

var field = [
  ["", "", "h", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""]
];

// access gameField
console.log(field[0][2]);

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
  for (var j = 0; j <= 5; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i < 5; i++) {
      // create element <td> and text node
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("");

      cell.appendChild(cellText);
      cell.setAttribute("height", "40");
      cell.setAttribute("width", "40");
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

document.getElementById("turn").innerHTML = "<h2>testihng</h2>";

function move() {
  if ((gameOver = 0 || turn === 1)) {
  }
}

var checkWinner = function() {
  var p1 = 0;
  var p2 = 0;

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (field[i][j] === 1) {
        p1++;
      } else if (field[i][j] === 2) {
        p2++;
      }
      if (p1 === 5) {
        return "player 1 won";
      } else if (p2 === 5) {
        return "player 2 won";
      }
    }
    p1 = 0;
    p2 = 0;
  }
  for (var j = 0; j < 5; j++) {
    for (var i = 0; i < 5; i++) {
      if (field[i][j] === 1) {
        p1++;
      } else if (field[i][j] === 2) {
        p2++;
      }
      if (p1 === 5) {
        return "player 1 won";
      } else if (p2 === 5) {
        return "player 2 won";
      }
    }
    p1 = 0;
    p2 = 0;
  }
  for (var j = 0; j < 5; j++) {
    if (field[j][j] === 1) {
      p1++;
    } else if (field[j][j] === 2) {
      p2++;
    }
    if (p1 === 5) {
      return "player 1 won";
    } else if (p2 === 5) {
      return "player 2 won";
    }
  }
  p1 = 0;
  p2 = 0;
  for (var k = 0; k < 5; k++) {
    if (field[2 - k][0 + k] === 1) {
      p1++;
    } else if (field[2 - k][0 + k] === 2) {
      p2++;
    }
    if (p1 === 5) {
      return "player 1 won";
    } else if (p2 === 5) {
      return "player 2 won";
    }
  }
  p1 = 0;
  p2 = 0;
  return "no winner";
};
