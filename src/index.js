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

  //  button.addEventListener("mousedown", event => {
  //    buttonActivities();
  //    event.stopPropagation();
  // }
  //);
}

document.getElementById("board").innerHTML = `
<table>
  <tr>
  <td>d</td>
  <td>d</td>
  <td>d</td>
  <td>d</td>
  <td>d</td>
  </tr>
  <tr>
  <td>d</td>
  <td>d</td>
  <td>d</td>
  <td>d</td>
  <td>d</td>
  </tr>
  <tr>
  <td>d</td>
  <td>d</td>
  <td>d</td>
  <td>d</td>
  <td>d</td>
  </tr>
  <tr>
  <td>d</td>
  <td>d</td>
  <td>d</td>
  <td>d</td>
  <td>d</td>
  </tr>

</table>
`;

document.getElementById("turn").innerHTML = "<h2>testihng</h2>";
