import "../components/css/style.css";
import "../components/css/image-puzzle.css";
import imagePuzzle from "../components/js/image-puzzle";
import "../components/js/jquery-2.1.1.min.js";
import "../components/js/jquery-ui.js";
import "../components/js/image-puzzle.js";
import $ from "jquery";
import React from "react";

const index = () => {
  var images = [
    { src: "./images/1.png" },
    { src: "./images/2.png" },
    { src: "./images/3.png" },
  ];

  $(function () {
    var gridSize = $("#levelPanel :radio:checked").val();
    imagePuzzle.startGame(images, gridSize);
    $("#newPhoto").click(function () {
      imagePuzzle.startGame(images, gridSize);
    });

    $("#levelPanel :radio").change(function (e) {
      var gridSize = $(this).val();
      imagePuzzle.startGame(images, gridSize);
    });
  });

  var h1 = document.getElementsByTagName("h1")[0],
    start = document.getElementById("start"),
    stop = document.getElementById("stop"),
    clear = document.getElementById("clear"),
    seconds = 0,
    minutes = 0,
    hours = 0,
    t;

  function add() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }

    h1.textContent =
      (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
      ":" +
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds);

    timer();
  }
  function timer() {
    t = setTimeout(add, 1000);
  }
  timer();

  /* Stop button */
  stop.onclick = function () {};
  clearTimeout(t);

  return (
    <div>
      <div id="collage">
        <h2 style="color:#222; font-weight:bold; font-size:30px;">TECH-IT</h2>
        <hr />
        <div id="playPanel" style="padding:5px;display:none;">
          <div style="display:inline-block; margin:auto; width:95%; vertical-align:top;">
            <ul id="sortable" class="sortable"></ul>

            <div id="actualImageBox">
              <div id="stepBox">
                <div>Steps:</div>
                <div class="stepCount">0</div>
              </div>
              <img id="actualImage" />
              <div>Re-arrange to create a picture like this.</div>
              <p id="levelPanel">
                <input
                  type="radio"
                  name="level"
                  id="hard"
                  checked="checked"
                  value="3"
                />{" "}
                <label for="hard">Puzzle Picture</label>
              </p>
              <div style="display:inline-block; margin:auto; width:95%; vertical-align:top;">
                <div></div>
              </div>
            </div>
            <div id="gameOver" style="display:none;">
            
              <div style=" padding: 5px 10px 20px 10px; text-align: center; ">
                <h2 style="text-align:center">Game Over!!</h2>
                Congratulations!! <br /> You have completed this picture
                <br />
                in <span class="stepCount">0</span> steps.
                <br />
                <br />
              </div>
            </div>
          </div>
          <div style=" background: #000; color:#eee; padding:10px; text-align:center;">
            <h1>
              <time>00:00:00</time>
            </h1>
          </div>
        </div>
      </div>

      
    </div>
  );
}
  export default index;

