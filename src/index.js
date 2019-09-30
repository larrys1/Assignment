import "./styles.css";

var turn = 1;
var gameOver = 0;

var gameField = [
  [0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

// access gameField
// console.log(gameField[1][1]);

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
  for (var j = 0; j <= 4; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i < 4; i++) {
      // create element <td> and text node
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("r" + j + ",c" + i);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    //row added to end of table body
    boardi.appendChild(row);
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
