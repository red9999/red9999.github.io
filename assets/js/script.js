console.clear();
const searchParams = new URLSearchParams(window.location.search);
const animalList = ["deer", "dog", "frog", "giraffe", "pig", "tiger", "zebra"]
const circleSize = 200;
const touchRadius = circleSize * 1.3;

const timerDuration = 60; // in seconds, also to be set in css


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}


const numbersDict = {
  0: [
    "M310 -632C162 -632 90 -479 90 -289C90 -97 162 48 311 48S532 -97 532 -289C532 -479 460 -632 312 -632",
  ],
  1: ["M70 151L284 0H288V670"],
  2: [
    "M0 178C13 42 86 0 174 0C361 0 440 42 440 151C440 258 364 337 288 421L65 666V670H465",
  ],
  3: [
    "M90 -531C119 -584 177 -632 273 -632C392 -632 446 -560 446 -478C446 -388 383 -311 249 -311L218 -311 L249 -311C400 -311 456 -216 456 -127C456 -25 381 49 263 49C166 49 94 -1 75 -75",
  ],
  4: ["M 385,-622 L 65,-116 L 509,-112", "M 385,-622 L 385,48"],
  5: [
    "M137 -622L127 -328C169 -354 228 -367 274 -367C393 -367 467 -277 467 -160C467 -36 385 48 276 48C193 48 127 -1 95 -90",
    "M137 -622 L449 -622",
  ],
  6: [
    "M360 -632L201 -420C119 -311 90 -236 90 -157C90 -57 144 48 292 48C420 48 492 -36 492 -150C492 -276 401 -353 298 -353C229 -353 151 -320 105 -249",
  ],
  7: ["M40 -622L445 -622L445 -618L126 48"],
  8: [
    "M-230 -632C-329 -632 -398 -570 -398 -489C-398 -305 -42 -322 -42 -114C-42 -9 -133 48 -230 48C-326 48 -421 -8 -421 -114C-421 -320 -64 -302 -64 -489C-64 -562 -118 -632 -228 -632",
  ],
  9: [
    "M 477,-427  C477,-527 423,-632 275,-632 C 147,-632 75,-548 75,-434 C 75,-308 166,-231 269,-231 C 338,-231 416,-264 462,-335 C470 -354 477 -379 477 -427 C477 -348 448 -273 366 -164L207 48",
  ],
  ///
  A: ["M338 0L70 675", "M338 0L606,675", "M155 462L522 462"],
  B: [
    "M140,-15 L140,695",
    "M140,10 L301,10C471,10 514,87 514,165C514,276 428,324 330,324L140,324 L310,324C469,324 534,392 534,496C534,595 475,670 302,670L140,670",
  ],
  C: ["M566 -489C529 -583 460 -632 358 -632C187 -632 95 -496 95 -293C95 -69 208 48 358 48C475 48 552 -23 580 -105"],
  D: ["M140 10L140 670",
"M140 10L260 10C440 10 607 103 608 339C609 543 484 670 287 670L140 670"],
E: ["M140 10L140 670",
    "M140 10 L501 10",
  "M140 356L484 356",
  "M140 670L501 670"],
  F: ["M140 10L140 670",
      "M140 10 L501 10",
  "M140 356L484 356",
 ],
 G: ["M566 -489C529 -583 460 -632 358 -632C196 -632 95 -508 95 -292C95 -104 169 48 363 48C443 48 509 22 560 -9L560 -286L383 -286"],
 H: ["M140 0L140 680",
 "M140 365L566 365",
 "M566 0L566 680"],
  I: ["M140 0v680"],
  J: ["M231 -632L231 -90C231 13 185 48 128 48C103 48 73 41 50 19"],
  K: ["M181 -632 L181 48",
 "M503 -632L191 -311L527 48"],
L: ["M140 -632L140 38L458 38"],
M: ["M140 48L140 -627L144 -627L429 18L433 18L718 -627L722 -627L722 48"],
N: ["M140 48L140 -627L144 -627L596 43L600 43L599 -632"],
O: ["M357 -632C168 -632 95 -453 95 -293C95 -159 147 48 358 48S621 -159 621 -293C621 -453 548 -632 359 -632"],
P: ["M140 -622 L140 48", 
"M140 -622L317 -622C458 -622 525 -546 525 -440C525 -331 454 -268 314 -268L140 -268"],
Q: [
"M357 -632C168 -632 95 -453 95 -293C95 -159 147 48 358 48S621 -159 621 -293C621 -453 548 -632 359 -632","M428 41 L599 186"],
R: ["M140 -622L140 48",
"M140 -622L313 -622C447 -622 506 -546 506 -459C506 -356 423 -296 325 -296L140 -296",
"M343 -296L519 48"],
S: ["M456 -542C432 -594 379 -632 293 -632C171 -632 109 -557 109 -478C109 -286 476 -316 476 -115C476 -26 404 48 285 48C193 48 123 5 95 -61"],
T: ["M40 -622L480 -622",
"M260 -622 L260 48"],
U: ["M130 -632L130 -197C130 -39 218 48 347 48C482 48 564 -39 564 -197L564 -632 L564 48"],
V: ["M70 -632L319 43L323 43L571 -632"],
W: ["M80 -632L255 43L259 43L450 -622L454 -622L645 43L649 43L830 -632"],
X: ["M70 0L516 680",
"M537 0L93 680"],
Y: ["M50 -632L285 -248L525 -632",
"M285 -248L285 48"],
Z: ["M110 -622L498 -622L498 -618L111 34L111 38L509 38"],
LIAM: "",
LUCAS: "",
PAPA: "",
MAMA: "",
OPA: "",
OMA: "",
APPEL: "",
STOEL: "",
TAFEL: "",
TV: "",
WATER: "",
AUTO: ""
}


let alphanumList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var praiseList = ["Goed gedaan!", "Fantastisch!", "Geweldig!", "Prima!", "Heel goed!", "Uitstekend!", "Knap hoor!", "Fantastisch gedaan!", "Wat goed zeg!", "Klasse!", "Goed bezig!", "Wat knap van je!"]



// Preload MP3 files
function preloadAudio() {
  const files = [];

  // Add "Schrijf de [character]" MP3 files to the list
  alphanumList.forEach(character => {
    files.push(`assets/audio/Schrijf de ${character}.mp3`);
  });

  // Add praise MP3 files to the list
  praiseList.forEach(praise => {
    files.push(`assets/audio/${praise}.mp3`);
  });

  // Preload all MP3 files
  files.forEach(audioSrc => {
    const audio = new Audio(audioSrc);
    audio.preload = 'auto';
    // document.body.appendChild(audio); // Optionally, you can append the audio element to the document body to trigger preloading
  });
}

// Call the preload function when the page loads
window.addEventListener('load', preloadAudio);


var startButton = document.getElementById("startButton");

function openFullscreen() {
  elem = document.getElementById("gameDiv")
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


// Add event listener to the button
startButton.addEventListener("click", function () {
  gameIsActive = true;
  openFullscreen()
  initiateExercise();
});


const overlay = document.getElementById("overlayImage")

const successImages = ["astronaut", "cat", "cat2", "chicken", "monkey", "pig", "rabbit"]
let gameIsActive = false;
let progressbarStarted = false;

function initiateExercise() {
  const audioPlayer = document.getElementById('audioPlayer');
const message = document.getElementById("message");
  audioPlayer.onended = null; 
  
  const selectedAnimal = animalList[Math.floor(Math.random() * animalList.length)]
  const patternImage = "assets/images/"+selectedAnimal+"-pattern.jpg";
  const svg = d3.select("svg");
  const svgContainer = d3.select("#svgContainer");

  document.getElementById("actionBox").classList.add('hidden');
  document.getElementById("mainDiv").classList.remove('hidden');

  document.getElementById("svgContainer").innerHTML = ''

  // Select random key
  const keys = Object.keys(numbersDict);
  let randomKey
  if (searchParams.get('key')){
    randomKey = searchParams.get('key');
  } else {
    randomKey = keys[Math.floor(Math.random() * keys.length)];
  }

 

  
  function playAudio(currentKey) {
    const audioSrc = `assets/audio/Schrijf de ${currentKey}.mp3`;
    audioPlayer.src = audioSrc;
    audioPlayer.play();
    message.innerHTML = `Schrijf de ${currentKey}`;
  }
  
  function showSuccessImage() {
    const successImage = successImages[Math.floor(Math.random() * successImages.length)];
    overlay.style.backgroundImage = `url('assets/images/success/${successImage}.png')`;
    overlay.style.display = "block";
    // overlay.style.animationName = "scale-in";
    // overlay.style.animationDuration = "1s";
    // overlay.style.backgroundSize = "80%";
  }
  
  function praiseAudio() {
    const selectedString = praiseList[Math.floor(Math.random() * praiseList.length)];
    message.innerHTML = selectedString;
    const audioSrc = `assets/audio/${selectedString}.mp3`;
    audioPlayer.src = audioSrc;
    audioPlayer.play();
    audioPlayer.onended = function() {
      setTimeout(gameEnd, 1000);
    };
  }
  
  function playPraise() {
    if (randomKey.length > 1) {
      const audioSrc = `assets/audio/${randomKey}.mp3`;
      audioPlayer.src = audioSrc;
      audioPlayer.play();
      audioPlayer.onended = function() {
        showSuccessImage();
        praiseAudio();
      };
    } else {
      showSuccessImage();
      praiseAudio();
    }
  }
  
  // Call playAudio with the first randomKey
  playAudio(randomKey[0]);
  
  // Add event listener to play the audio on message click
  message.addEventListener("click", function() {
    audioPlayer.play();
  });
  
  

  // define pattern
  const defsDiv = svgContainer.append("div").style("height","0px").style("width","0px")
  const defs = defsDiv.append("svg").append("defs");
  const pattern = defs
    .append("pattern")
    .attr("id", "pattern")
    .attr("width", 200)
    .attr("height", 200)
    .attr("patternUnits", "userSpaceOnUse");

  pattern.append("image").attr("xlink:href", patternImage);




  


  // Draw path and hidden lines
const pathList = [];
const lineList = [];
const groupList = [];

function drawPath(pathData, key) {
  const newGroup = svgContainer.append("svg") // Create a new SVG element for each letter
  // const transformValue = i*400
  .attr("id", "svgGroup"+key)
  .attr("class", "svg-group")
  // .attr("class", "svg-container")
  .attr("preserveAspectRatio", "xMidYMid meet");
  // .attr("class", )
  groupList.push(newGroup)
  pathData.forEach((path, i) => {

    const newPath = newGroup.append("path") // Append path to the new SVG element
      .attr("id", "shape" + i)
      .attr("class", "shape")
      .attr("d", path)
      .attr("stroke", "")
      .attr("stroke-width", "50")
      .attr("fill", "none");

    pathList.push(newPath);
    

    const newLine = newGroup.append("path") // Append line to the new SVG element
      .attr("id", "line" + i)
      .attr("fill", "none")
      .attr("d", path)
      .attr("stroke", "url(#pattern)")
      // .attr("stroke", "#000")
      .attr("stroke-width", "80")
      .style("display", "none");

    lineList.push(newLine);
  });
}




// Animate the drawing of the path
function animatePath() {
  let cumulativeDuration = 0;
  const animationSpeed = 3000; // Aanimation speed
  pathList.forEach((currentPath, i) => {
    const totalLength = currentPath.node().getTotalLength();
    const animationDuration = totalLength / animationSpeed;
    const pauseDuration = i === 0 ? 0 : pathList[i - 1].node().getTotalLength() / animationSpeed;
    
    setTimeout(() => {
      currentPath.style("stroke-dasharray", totalLength);
      currentPath.style("stroke-dashoffset", totalLength);
      currentPath.style("animation-duration", animationDuration + "s");
      currentPath.attr("stroke", "#F2D785");
      currentPath.attr("class", "animateFill");
    }, cumulativeDuration * 1000);
    
    cumulativeDuration += animationDuration + pauseDuration;
  });
}

for (let key = 0; key < randomKey.length; key++){
  const currentKey = randomKey[key]

  pathData = numbersDict[currentKey];
    drawPath(pathData, key);
    animatePath();
}


const groupWidthPercentage = 100 / groupList.length;
let totalWidth = 0;
groupList.forEach((group, i) => {
  totalWidth += group.node().getBBox().width + circleSize+10;
})

groupList.forEach((group, i) => {
  groupBBox = group.node().getBBox();
  group.attr(
    "viewBox",
    `${groupBBox.x - (circleSize / 2)} ${groupBBox.y - (circleSize / 2)} ${groupBBox.width + circleSize+10} ${groupBBox.height + circleSize+10
    }`);
  widthPercentage = ((groupBBox.width + circleSize+10) / totalWidth)*100
  group.style("max-width", `${widthPercentage}%`);
})

  //interaction

  let path, pathLength, startPoint, lastPoint, lastLength, circle, svgGroup;
  let draggingEnabled = true;
  let currentPath = 0;
  let currentGroup = 0;
  let firstIteration = true
  
  function selectPath() {
    
    circleElement = document.getElementById("circle")
    if (circleElement !== null) {
      circleElement.remove();
    }
    path = lineList[currentPath].node();
    if (!firstIteration && path.id == "line0") {
      currentGroup ++;
      playAudio(randomKey[currentGroup])
    }

    svgGroup = d3.select(path.parentNode);
    
    fillpercentage = 0;
    pathLength = path.getTotalLength() || 0;
    startPoint = path.getPointAtLength(0);
    lastPoint = startPoint
    fullPoint = path.getPointAtLength(pathLength);
    lastLength = 0;

    circle = createCircle();
    circle.attr("x", startPoint.x - (circleSize / 2)).attr("y", startPoint.y - (circleSize / 2));
    disableDragging()
  }

  function createCircle() {
    return svgGroup.append("image")
      .attr("id", "circle")
      .attr("xlink:href", "assets/images/" + selectedAnimal + "-face.png")
      .attr("width", circleSize)
      .attr("height", circleSize)
      .on("mouseenter", enableDragging)
      .on("touchstart", enableDragging, { passive: true })
      .call(
        d3.drag()
          .on("start", startProgressbar)
          .on("drag", function (event) {
            if (!draggingEnabled) return;
            const points = { x: event.x, y: event.y };
            pointModifier(points, circle);
          })
      );
  }
  selectPath();

  

  function pauseProgressbar() {
    var element = document.getElementById("progressBar");
    element.classList.add("paused");
  }
  const progressBarBox = document.getElementById("progressBarBox");
  const flashProgressBar = () => {
      progressBarBox.classList.add("flashAnimation");
  };

  function startProgressbar() {
    if (progressbarStarted) {
      return; // If progress bar has already started, exit the function
    }
    
    progressbarStarted = true;
    console.log("Start")
    var element = document.getElementById("progressBar");
    element.classList.remove("paused");
    setTimeout(flashProgressBar, timerDuration * 1000 * 0.8);
    setTimeout(endTimer, timerDuration*1000);
    var progressBar = document.querySelector('.progressBar');
    progressBar.style.animation = 'none';
    void progressBar.offsetWidth;
    progressBar.style.animation = null;

  }
  function endTimer(){
    gameIsActive = false;
    
    
  }

  function gameEnd(){
    overlay.style.display = "none"
    if(gameIsActive){
      initiateExercise();
    } else {
      progressbarStarted = false;
    document.getElementById('actionMessage').classList.remove('hidden')
    actionBox = document.getElementById("actionBox").classList.remove('hidden');
    document.getElementById("mainDiv").classList.add('hidden');
    progressBarBox.classList.remove("flashAnimation");
  }
}

  function enableDragging() {
    draggingEnabled = true;
  }


  function disableDragging() {
    draggingEnabled = false;
  }

  function updateLineFill(lastLength) {
    const dashArray = lastLength + " " + pathLength;
    path.style.strokeDasharray = dashArray;
    lineList[currentPath].classed("block", true);

  }

  function pointModifier(point, circle) {
    const touchBox = {
      minX: parseFloat(circle.attr("x")) - touchRadius,
      maxX: parseFloat(circle.attr("x")) + touchRadius,
      minY: parseFloat(circle.attr("y")) - touchRadius,
      maxY: parseFloat(circle.attr("y")) + touchRadius
  
    };

    if (
        point.x < touchBox.minX ||
        point.x > touchBox.maxX ||
        point.y < touchBox.minY ||
        point.y > touchBox.maxY
    ) {
      console.log("disabledrag")
        disableDragging();
        return; 
    }
    const p = closestPoint(path, pathLength, point);
    lastPoint.x = point.x;
    lastPoint.y = point.y;
    lastLength = p.length;
    fillpercentage = lastLength / pathLength

    if (fillpercentage > 0.95) {
      disableDragging();
      updateLineFill(pathLength);
      circle.attr("x", fullPoint.x - (circleSize / 2)).attr("y", fullPoint.y - (circleSize / 2));

      if (currentPath == lineList.length - 1) {
          playPraise();
          circle.on(".drag", null);
      } else {
          currentPath += 1;
          firstIteration = false;
          selectPath();
      }
  } else {
      updateLineFill(lastLength);
      circle.attr("x", p.point.x - (circleSize / 2)).attr("y", p.point.y - (circleSize / 2));
  }

}



  function closestPoint(pathNode, pathLength, point) {
    var precision = 10,
      best,
      bestLength,
      bestDistance = Infinity;
    var traveled = distance2sqrt(lastPoint);
    var scanFrom = Math.max(lastLength, 0);;
    var scanTo = lastLength + traveled;


    if (traveled * 2 < 50) {
      scanTo = scanFrom + 50;
    }

    if (scanTo > pathLength) {
      scanTo = pathLength;
    }

    for (
      var scan, scanLength = scanFrom, scanDistance;
      scanLength <= scanTo;
      scanLength += precision
    ) {
      if (
        (scanDistance = distance2(
          (scan = pathNode.getPointAtLength(scanLength))
        )) < bestDistance
      ) {
        (best = scan), (bestLength = scanLength), (bestDistance = scanDistance);
      }
    }

    return {
      point: best,
      length: bestLength,
    };

    function distance2(p) {
      var dx = p.x - point.x,
        dy = p.y - point.y;
      return dx * dx + dy * dy;
    }

    function distance2sqrt(p) {
      var dx = p.x - point.x,
        dy = p.y - point.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }

}
