<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Refresh" content="300" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css?family=Victor Mono|Audiowide|Bebas Neue"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100..900&display=swap"
      rel="stylesheet"
    />
    <title>BAMAONE WX DASHBOARD</title>
<!--
	Hamdash
	License: MIT
	https://www.va3hdl.com/projects/hamdash

  Credits:
  Project inspired by the concept of DAVID A GOLD callsign N2MXX published at https://nject.us/HAMSHACK-DASHBOARD-O.html
--

.d8888. d888888b db    db db      d88888b .d8888.
88'  YP `~~88~~' `8b  d8' 88      88'     88'  YP
`8bo.      88     `8bd8'  88      88ooooo `8bo.
  `Y8b.    88       88    88      88~~~~~   `Y8b.
db   8D    88       88    88booo. 88.     db   8D
`8888Y'    YP       YP    Y88888P Y88888P `8888Y'


-->
    <style>
      body {
        background: black;
        font-size: 100%;
        max-width: 100%;
        overflow-x: hidden;
      }

      .iframe-container {
        background-color: black;
        left: 0px;
        border: 0px none;
        height: 100%;
        position: fixed;
        width: 100%;
        bottom: 0px;
        z-index: -2;
      }

      .img-zoom {
        background-color: black;
        left: 0px;
        border: 0px none;
        height: 100%;
        position: fixed;
        width: 100%;
        overflow: hidden;
        bottom: 0px;
        z-index: -2;
      }

      /* Style for the fullscreen container (menu options) */
      .full-screen {
        height: 100%;
        border: 0px none;
        width: 100%;
        margin-bottom: 0px;
        margin-left: 0px;
        -ms-zoom: 1;
        -moz-transform: scale(1);
        -moz-transform-origin: 0 0;
        -o-transform: scale(1);
        -o-transform-origin: 0 0;
        -webkit-transform: scale(1);
        -webkit-transform-origin: 0 0;
      }

      .default-frame {
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
        left: 0px;
        border: 0px none;
        height: 100%;
        position: fixed;
        width: 100%;
        overflow: hidden;
        bottom: 0px;
      }

      .top-bar {
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        background-color: #333;
        color: #fff;
        padding: 1vh;
        border: 0px none;
        overflow: hidden;
        position: relative;
        width: auto;
      }

      .child {
        position: relative;
        display: grid;
        border: 1px solid hsl(210deg 8% 50%);
        border-radius: 5px;
        background: hsl(210deg 15% 20%);
        color: white;
        padding: 0.5vh;
        font-family: "Victor Mono", sans-serif;
        font-size: 1.4vw;
      }

      /* Style for the dashboard container */
      .dashboard {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 0px;
        border: 0px none;
        margin-bottom: 0px;
        overflow: hidden;
        position: relative;
        width: 100%;
      }

      /* Style for the image container */
      .image-container {
        position: relative;
        float: inline-start;
        margin-right: 0px;
        border: 0px;
        width: 24.9vw;
        height: 31vh;
        overflow: hidden;
        display: flex;
        justify-content: center; /* Horizontal centering */
        align-items: center; /* Vertical centering */
      }

      /* Style for the image */
      .image-container img {
        width: 100%;
        height: 100%;
      }

      /* Style for the image titles */
      .image-title {
        position: absolute;
        top: 6%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white; /* font color */
        background-color: black;
        font-size: 1vw;
        border-left: 0.25vw solid black;
        border-right: 0.25vw solid black;
        font-family: "Roboto Condensed", sans-serif;
        font-optical-sizing: auto;
        font-weight: 300;
        font-style: normal;
        padding-top: 1px;
      }

      /* Style for the full screen image */
      .image-large {
        display: block;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: 100%;
      }

      /* Style for the left menu options */
      .menu {
        display: grid;
        grid-gap: 3px;
        position: absolute;
        width: auto;
        height: auto;
        margin-top: 10vh;
        left: calc(-5.2vw - 0px);
        z-index: 2;
        overflow: hidden;
        transition: 0.3s;
      }

      /* Style for the right menu options */
      .menuR {
        display: grid;
        grid-gap: 3px;
        position: absolute;
        width: 30px;
        height: auto;
        margin-top: 10vh;
        right: -1px;
        z-index: 2;
        transition: 0.3s;
      }

      #myMenu:hover {
        width: 7vw;
        left: 0px;
      }

      #myMenuR:hover {
        width: 7vw;
        right: 0px;
      }

      #mySidenav a {
        position: relative;
        float: inline-start;
        left: calc(-0.2vw - 10px);
        transition: 0.3s;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 12px;
        padding-bottom: 8px;
        width: 5vw;
        text-decoration: none;
        font-family: "Bebas Neue", sans-serif;
        font-size: 1.2vw;
        font-optical-sizing: auto;
        font-weight: 300;
        font-style: normal;
        text-align: right;
        color: white;
        border-radius: 0 5px 5px 0;
        box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.5);
      }

      #mySidenav a:hover {
        left: 0;
      }

      #mySidenavR a {
        position: relative;
        float: inline-start;
        right: calc(-0.2vw - 10px);
        transition: 0.3s;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 12px;
        padding-bottom: 8px;
        width: 7vw;
        text-decoration: none;
        font-family: "Bebas Neue", sans-serif;
        font-size: 1.2vw;
        font-optical-sizing: auto;
        font-weight: 300;
        font-style: normal;
        text-align: left;
        color: white;
        border-radius: 5px 0px 0px 5px;
        box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.5);
      }

      #mySidenavR a:hover {
        right: 0;
        width: 7vw;
      }
    </style>
  </head>
  <!--
.d8888.  .o88b. d8888b. d888888b d8888b. d888888b .d8888.
88'  YP d8P  Y8 88  `8D   `88'   88  `8D `~~88~~' 88'  YP
`8bo.   8P      88oobY'    88    88oodD'    88    `8bo.
  `Y8b. 8b      88`8b      88    88~~~      88      `Y8b.
db   8D Y8b  d8 88 `88.   .88.   88         88    db   8D
`8888Y'  `Y88P' 88   YD Y888888P 88         YP    `8888Y'


-->
  <script src="wheelzoom.js"></script>
  <script src="config.js"></script>
  <script>
    var largeShow = 0;
    var aIdx = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    // This function shows the embedded websites
    function MenuOpt(num) {
      // Stop refreshes
      window.stop();
      clearTimeout(getSlideId);
      //
      document.getElementById("FullScreen").style.display = "block";
      document.getElementById("iFrameContainer").style.zIndex = 1;
      document.getElementById("FullScreen").src = aURL[num][2];
      document.getElementById("FullScreen").style.transform =
        "scale(" + aURL[num][3] + ")";

      if (aURL[num][1].toLowerCase() == "back") {
        // Start refreshes
        window.location.reload(true);
        getSlideId = setInterval(() => slide(), 5000);
        //
        wheelzoom(document.querySelectorAll("img"));
      } else if (aURL[num][1].toLowerCase() == "refresh") {
        // Start refreshes
        window.location.reload(true);
        getSlideId = setInterval(() => slide(), 5000);
        //
      } else if (aURL[num][1].toLowerCase() == "help") {
        alert(`Double click on an image to expand to full screen.
Double click again to close full screen view.
Right click on an image to display the next one.
The content refreshes automatically every 5 minutes.
`);
      }
    }

    // This function shows the larger images when double click to enlarge
    function larger(event) {
      var targetElement = event.target || event.srcElement;
      if (largeShow == 1) {
        // Start refreshes
        window.location.reload(true);
        getSlideId = setInterval(() => slide(), 5000);
        //
        largeShow = 0;
        document.getElementById("imgZoom").style.display = "none";
        document.getElementById("imgZoom").style.zIndex = -2;
      } else {
        // Stop refreshes
        window.stop();
        clearTimeout(getSlideId);
        //
        largeShow = 1;
        document.getElementById("imgZoom").style.display = "block";
        document.getElementById("imgZoom").style.zIndex = 3;
        document.getElementById("ImageLarge").src =
          targetElement.style.backgroundImage
            .replace(/^url\(["']?/, "")
            .replace(/["']?\)$/, "");
      }
    }

    // Manually rotate images
    function rotate(event) {
      event.preventDefault();
      var targetElement = event.target || event.srcElement;
      i = +targetElement.id.match(/\d+/)[0];
      if (aIMG[i].length > 2) {
        ++aIdx[i];
        if (aIdx[i] > aIMG[i].length - 1) {
          aIdx[i] = 1;
        }
        document.getElementById(targetElement.id).src = aIMG[i][aIdx[i]];
      }
    }

    // Automatically rotate images
    function slide() {
      // get the locations with multiple images
      aIMG.forEach(function (innerArray, i) {
        if (aIMG[i].length > 2) {
          ++aIdx[i];
          if (aIdx[i] > aIMG[i].length - 1) {
            aIdx[i] = 1;
          }
          // console.log("Image" + i, " ", aIMG[i][aIdx[i]]);
          img = document.getElementById("Image" + i);
          img.src = aIMG[i][aIdx[i]];
          // img.style.opacity = 0;
          // img.style.transform = "translateX(-100%)";
        }
      });
      // setTimeout(() => {
      //   aIMG.forEach(function (innerArray, i) {
      //     if (aIMG[i].length > 2) {
      //       console.log("Image" + i);
      //       img = document.getElementById("Image" + i);
      //       // img.style.opacity = 1;
      //       // img.style.transform = "translateX(0)";
      //       img.src = aIMG[i][aIdx[i]];
      //     }
      //   });
      // }, 1000);
    }

    function start() {
      // Get the parent div for Menu container
      var parentDiv = document.getElementById("myMenu");
      var parentDivR = document.getElementById("myMenuR");
      // Append the new div to the parent div
      aURL.forEach(function (innerArray, index) {
        // Create a new div element
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `<a href="#" style="background-color:#${innerArray[0]};" onclick="MenuOpt(${index})">${innerArray[1]}</a>`;
        if (innerArray[4] == "R") {
          // Set some properties for the new div
          newDiv.id = "mySidenavR";
          newDiv.className = "sidenavR";
          parentDivR.appendChild(newDiv);
        } else {
          // Set some properties for the new div
          newDiv.id = "mySidenav";
          newDiv.className = "sidenav";
          parentDiv.appendChild(newDiv);
        }
      });

      // Get the parent div for Dashboard container
      var parentDiv = document.getElementById("dash");
      // Append the new div to the parent div
      aIMG.forEach(function (innerArray, index) {
        // Create a new div element
        var newDiv = document.createElement("div");
        // Set some properties for the new div
        newDiv.className = "image-container";
        // Create a new img element
        var newImg = document.createElement("img");
        newImg.id = `Image${index}`;
        newImg.src = innerArray[1];
        newImg.oncontextmenu = rotate;
        newImg.ondblclick = larger;
        parentDiv.appendChild(newDiv);
        newDiv.appendChild(newImg);
        // Create a new div element for img title
        var newTtl = document.createElement("div");
        newTtl.className = "image-title";
        newTtl.innerHTML = innerArray[0];
        newDiv.appendChild(newTtl);
      });

      // assign wheelzoom functionality to all 12 images
      wheelzoom(document.querySelectorAll("img"));

      window.addEventListener("resize", function () {
        "use strict";
        window.location.reload();
      });

      getSlideId = setInterval(() => slide(), 30000);
    }

    // This function update the time on the top bar
    function updateTopBar() {
      const now = new Date();

      const options = { weekday: "long", month: "long", day: "numeric" };

      const localDate = now.toLocaleDateString("en-US", options);
      const localTime = now.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      });

      const utcDate = now.toISOString().slice(0, 10);
      const utcTime = now.toISOString().slice(11, 19) + " UTC";

      const topBarLeft = document.getElementById("topBarLeft");
      topBarLeft.textContent = `${localDate} - ${localTime}`;
      const topBarCenter = document.getElementById("topBarCenter");
      topBarCenter.textContent = topBarCenterText;
      const topBarRight = document.getElementById("topBarRight");
      topBarRight.textContent = `${utcDate} ${utcTime}`;
    }

    // Update every second
    setInterval(updateTopBar, 1000);

  </script>
  <!--
d8888b.  .d88b.  d8888b. db    db
88  `8D .8P  Y8. 88  `8D `8b  d8'
88oooY' 88    88 88   88  `8bd8'
88~~~b. 88    88 88   88    88
88   8D `8b  d8' 88  .8D    88
Y8888P'  `Y88P'  Y8888D'    YP


-->
  <body onload="start()">
    <div id="iFrameContainer" class="iframe-container">
      <iframe
        class="full-screen"
        id="FullScreen"
        src=""
        title="Zoom"
      ></iframe>
    </div>

    <div id="imgZoom" class="img-zoom">
      <img
        class="image-large"
        id="ImageLarge"
        alt="pic"
        ondblclick="larger(event);"
      />
    </div>

    <div id="myMenu" class="menu">
      <!-- Left Menu container -->
    </div>

    <div id="myMenuR" class="menuR">
      <!-- Right Menu container -->
    </div>


    <div id="defaultFrame" class="default-frame">
      <div class="top-bar">
        <div
          id="topBarLeft"
          class="child"
          style="text-align: left; padding-left: 7px; color: blanchedalmond"
        >&nbsp;</div>
        <div
          id="topBarCenter"
          class="child"
          style="text-align: center; color: rgb(0, 119, 255)"
        >&nbsp;</div>
        <div
          id="topBarRight"
          class="child"
          style="text-align: right; padding-right: 5px; color: aquamarine"
        >&nbsp;</div>
      </div>
      
      <div id="dash" class="dashboard">
        <!-- Images container -->
      </div>
    </div>
  </body>
</html>
