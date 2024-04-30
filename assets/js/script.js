console.clear();

const animalList = ["deer", "dog", "frog", "giraffe", "pig", "tiger", "zebra"]
const touchRadius = 80;



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
    "M140,10 L301,10C471,10 514,87 514,165C514,276 428,324 330,324L140,324",
    "M140,324L310,324C469,324 534,392 534,496C534,595 475,670 302,670L140,670",
  ],
  C: ["M566 -489C529 -583 460 -632 358 -632C187 -632 95 -496 95 -293C95 -69 208 48 358 48C475 48 552 -23 580 -105"],
  D: ["M140 10L140 670",
"M140 10L260 10C440 10 607 103 608 339C609 543 484 670 287 670L140 670"],
E: ["M140 10 L501 10",
  "M140 10L140 670",
  "M140 356L484 356",
  "M140 670L501 670"],
  F: ["M140 10 L501 10",
  "M140 10L140 670",
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
Z: ["M110 -622L498 -622L498 -618L111 34L111 38L509 38"]


}

lettersDict = {
 
}

const fullDict = {
  lettersDict: lettersDict,
  numbersDict: numbersDict,
}

var audioPlayer = document.getElementById('audioPlayer');

let alphanum_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var praise_list = ["Goed gedaan!", "Fantastisch!", "Geweldig!", "Prima!", "Heel goed!", "Uitstekend!", "Knap hoor!", "Fantastisch gedaan!", "Wat goed zeg!", "Klasse!", "Goed bezig!", "Wat knap van je!"]



// Preload MP3 files
function preloadAudio() {
  const files = [];

  // Add "Schrijf de [character]" MP3 files to the list
  alphanum_list.forEach(character => {
    files.push(`assets/audio/Schrijf de ${character}.mp3`);
  });

  // Add praise MP3 files to the list
  praise_list.forEach(praise => {
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

// Add event listener to the button
startButton.addEventListener("click", function () {
  initiateExercise(); // Call the function to start the exercise
});

const searchParams = new URLSearchParams(window.location.search);


function initiateExercise() {
  const selectedAnimal = animalList[Math.floor(Math.random() * animalList.length)]
  console.log(selectedAnimal)

  const patternImage = "assets/images/"+selectedAnimal+"-pattern.jpg";
  const svg = d3.select("svg");


  document.getElementById("startBox").classList.add('hidden');
  document.getElementById("mainDiv").classList.remove('hidden');
  document.getElementById("header").classList.remove('hidden');
  document.getElementById("svgbox").classList.remove('hidden');

  document.getElementById("svgbox").innerHTML = ''

  const keys = Object.keys(numbersDict);
  let randomKey
  if (searchParams.get('key')){
    randomKey = searchParams.get('key');
  } else {
    randomKey = keys[Math.floor(Math.random() * keys.length)];
  }

  // const randomKey = 3; //for testing
  const chosenPath = numbersDict[randomKey];

  // Function to load and play the MP3 files sequentially
  function playAudio() {
    audioPlayer.src = 'assets/audio/Schrijf de ' + randomKey + '.mp3';
    audioPlayer.play();
  }
 
  playAudio()
  // Get the button element
  var playButton = document.getElementById("playButton");
  playButton.addEventListener("click", function () {
    playAudio();
  });

  letterElement = document.getElementById("message");
  letterElement.innerHTML = 'Schrijf de ' + randomKey;

  function playPraise() {
    var selected_string = praise_list[(Math.floor(Math.random() * praise_list.length))]
    message.innerHTML = selected_string;
    audioPlayer.src = 'assets/audio/' + selected_string + '.mp3';
    audioPlayer.play();
  }

  const pathData = chosenPath;

  const defs = svg.append("defs");



  const pattern = defs
    .append("pattern")
    .attr("id", "pattern")
    .attr("width", 200)
    .attr("height", 140)
    .attr("patternUnits", "userSpaceOnUse");

  pattern.append("image").attr("xlink:href", patternImage);

  pathList = [];
  for (let i = 0; i < pathData.length; i++) {
    newPath = svg
      .append("path")
      .attr("id", "shape" + i)
      .attr("class", "shape")
      .attr("d", pathData[i])
      .attr("stroke", "")
      .attr("stroke-width", "50");

    pathList.push(newPath);
  }

  function animatePath() {
    // Handle the first iteration separately without a timeout
    let currentPath = pathList[0];
    let totalLength = currentPath.node().getTotalLength();
    let animationDuration = totalLength / 1500;
    currentPath.style("stroke-dasharray", totalLength);
    currentPath.style("stroke-dashoffset", totalLength);
    currentPath.style("animation-duration", animationDuration + "s");
    currentPath.attr("stroke", "#F2D785");
    currentPath.attr("class", "animateFill");

    // Use a loop for the remaining iterations with a timeout
    for (let i = 1; i < pathList.length; i++) {
      let currentPath = pathList[i];
      let totalLength = currentPath.node().getTotalLength();
      let animationDuration = totalLength / 1500;
      let pauseDuration = pathList[i - 1].node().getTotalLength() / 1500;
      setTimeout(() => {

        currentPath.style("stroke-dasharray", totalLength);
        currentPath.style("stroke-dashoffset", totalLength);
        currentPath.style("stroke-dasharray", totalLength);
        currentPath.style("stroke-dashoffset", totalLength);
        currentPath.style("animation-duration", animationDuration + "s");
        currentPath.attr("stroke", "#F2D785");
        currentPath.attr("class", "animateFill");
      }, i * pauseDuration * 1000, i); // Multiply animationDuration by 1000 to convert seconds to milliseconds
    }
  }

  animatePath()

  const lineList = [];
  function drawPath() {
    for (let i = 0; i < pathData.length; i++) {
      const newLine = svg
        .append("path")
        .attr("id", "line" + i)
        .attr("fill", "none")
        .attr("d", pathData[i])
        .attr("stroke", "url(#pattern)")
        .attr("stroke-width", "50")
        .style("display", "none");
      lineList.push(newLine);
    }
  }

  drawPath();

  svgbox = svg.node().getBBox();


  svg.attr(
    "viewBox",
    `${svgbox.x - 90} ${svgbox.y - 90} ${svgbox.width + 160} ${svgbox.height + 160
    }`
  );


  let path, pathLength, startPoint, lastPoint, lastLength, circle;
  let draggingEnabled = true;
  const itr = document.getElementById("itr");
  const message = document.getElementById("message");
  let currentPath = 0;


  function selectPath() {


    circleElement = document.getElementById("circle")
    if (circleElement !== null) {
      circleElement.remove();
    }

    path = lineList[currentPath].node();
    fillpercentage = 0;
    pathLength = path.getTotalLength() || 0;
    startPoint = path.getPointAtLength(0);
    lastPoint = startPoint
    fullPoint = path.getPointAtLength(pathLength);
    lastLength = 0;

    circle = createCircle();
    circle.attr("x", startPoint.x - 70).attr("y", startPoint.y - 70);
    disableDragging()
  }

  function createCircle() {
    circle = svg
      .append("image")
      .attr("id", "circle")
      .attr("xlink:href", "assets/images/"+selectedAnimal+"-face.png")
      .attr("width", 140)
      .attr("height", 140)

      .on("mouseenter", enableDragging)
      .on("touchstart", enableDragging, { passive: true })
      .call(
        d3
          .drag()
          .on("start", startProgressbar)
          .on("drag", function (event) {
            if (!draggingEnabled) return;
            const points = { x: event.x, y: event.y };
            pointModifier(points, circle);
          })
      );
    return circle
  }
  selectPath();



  function pauseProgressbar() {
    var element = document.getElementById("progressBar");
    element.classList.add("paused");
  }
  function startProgressbar() {
    var element = document.getElementById("progressBar");
    element.classList.remove("paused");
  }



  function enableDragging() {
    draggingEnabled = true;
  }


  function disableDragging() {
    draggingEnabled = false;
  }


  function pointModifier(point, circle) {
    const p = closestPoint(path, pathLength, point);
    if (
      point.x < p.point.x - touchRadius ||
      point.x > p.point.x + touchRadius ||
      point.y < p.point.y - touchRadius ||
      point.y > p.point.y + touchRadius
    ) {
      disableDragging();
    }

    lastPoint.x = point.x;
    lastPoint.y = point.y;
    if (p.length > lastLength){
    lastLength = p.length;
    fillpercentage = lastLength / pathLength;
    if (fillpercentage > 0.98) {
      disableDragging();
      updateLineFill(1);
      circle.attr("x", fullPoint.x - 70).attr("y", fullPoint.y - 70)

      if (currentPath == lineList.length - 1) {
        pauseProgressbar();
        playPraise();
        circle.on(".drag", null);
        setTimeout(initiateExercise, 2000);

      } else {
        currentPath += 1;
        selectPath();
      }
    } else {
      updateLineFill(lastLength / pathLength);
      circle.attr("x", p.point.x - 70).attr("y", p.point.y - 70);
    }
  }
  }


  function updateLineFill(ratio) {
    let path = lineList[currentPath].node();
    const pathLength = path.getTotalLength();
    const dashArray = pathLength * ratio + " " + pathLength;
    path.style.strokeDasharray = dashArray;
    lineList[currentPath].style("display", "block");
  }

  function closestPoint(pathNode, pathLength, point) {
    var precision = 1,
      best,
      bestLength,
      bestDistance = Infinity;
    var traveled = distance2sqrt(lastPoint);
    var scanFrom = lastLength - traveled;
    var scanTo = lastLength + traveled;
    scanFrom = scanFrom < 0 ? 0 : scanFrom;

    if (traveled * 2 < 20) {
      scanTo = scanFrom + 20;
    }

    scanTo = scanTo > pathLength ? pathLength : scanTo;

    // console.log(scanTo - scanFrom);
    // linear scan for coarse approximation
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

    var len2 = bestLength + (bestLength === pathLength ? -0.1 : 0.1);
    // var rotation = getRotation(best, pathNode.getPointAtLength(len2));

    return {
      point: best,
      //   rotation: rotation * DEG,
      // distance: Math.sqrt(bestDistance),
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

  // function getRotation(p1, p2) {
  //   var dx = p2.x - p1.x;
  //   var dy = p2.y - p1.y;
  //   return Math.atan2(dy, dx);
  // }

}
