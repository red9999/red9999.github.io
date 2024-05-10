console.clear();
const searchParams = new URLSearchParams(window.location.search);
const animalList = ["deer", "dog", "frog", "giraffe", "pig", "tiger", "zebra"]
let circleSize = 20;
let strokeWidth = 8;
let touchRadius = circleSize * 1.5;
let patternSize = 50

const timerDuration = 60; // in seconds, also to be set in css


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}


const numbersDict = {
  0: [
    "M31 -63.2C16.2 -63.2 9 -47.9 9 -28.9C9 -9.7 16.2 4.8 31.1 4.8S53.2 -9.7 53.2 -28.9C53.2 -47.9 46 -63.2 31.2 -63.2",
  ],
  1: ["M7 15.1L28.4 0H28.8V67"],
  2: [
    "M0 17.8C1.3 4.2 8.6 0 17.4 0C36.1 0 44 4.2 44 15.1C44 25.8 36.4 33.7 28.8 42.1L6.5 66.6V67H46.5",
  ],
  3: [
    "M9 -53.1C11.9 -58.4 17.7 -63.2 27.3 -63.2C39.2 -63.2 44.6 -56 44.6 -47.8C44.6 -38.8 38.3 -31.1 24.9 -31.1L21.8 -31.1 L24.9 -31.1C40 -31.1 45.6 -21.6 45.6 -12.7C45.6 -2.5 38.1 4.9 26.3 4.9C16.6 4.9 9.4 -0.1 7.5 -7.5",
  ],
  4: ["M 38.5,-62.2 L 6.5,-11.6 L 50.9,-11.2", "M 38.5,-62.2 L 38.5,4.8"],
  5: [
    "M13.7 -62.2L12.7 -32.8C16.9 -35.4 22.8 -36.7 27.4 -36.7C39.3 -36.7 46.7 -27.7 46.7 -16C46.7 -3.6 38.5 4.8 27.6 4.8C19.3 4.8 12.7 -0.1 9.5 -9",
    "M13.7 -62.2 L44.9 -62.2",
  ],
  6: [
    "M36 -63.2L20.1 -42C11.9 -31.1 9 -23.6 9 -15.7C9 -5.7 14.4 4.8 29.2 4.8C42 4.8 49.2 -3.6 49.2 -15C49.2 -27.6 40.1 -35.3 29.8 -35.3C22.9 -35.3 15.1 -32 10.5 -24.9",
  ],
  7: ["M4 -62.2L44.5 -62.2L44.5 -61.8L12.6 4.8"],
  8: [
    "M-23 -63.2C-32.9 -63.2 -39.8 -57 -39.8 -48.9C-39.8 -30.5 -4.2 -32.2 -4.2 -11.4C-4.2 -0.9 -13.3 4.8 -23 4.8C-32.6 4.8 -42.1 -0.8 -42.1 -11.4C-42.1 -32 -6.4 -30.2 -6.4 -48.9C-6.4 -56.2 -11.8 -63.2 -22.8 -63.2",
  ],
  9: [
    "M 47.7,-42.7  C47.7,-52.7 42.3,-63.2 27.5,-63.2 C 14.7,-63.2 7.5,-54.8 7.5,-43.4 C 7.5,-30.8 16.6,-23.1 26.9,-23.1 C 33.8,-23.1 41.6,-26.4 46.2,-33.5 C47 -35.4 47.7 -37.9 47.7 -42.7 C47.7 -34.8 44.8 -27.3 36.6 -16.4L20.7 4.8",
  ],
  A: ["M33.8 0L7 67.5", "M33.8 0L60.6,67.5", "M15.5 46.2L52.2 46.2"],
  B: [
    "M14,-1.5 L14,69.5",
    "M14,1 L30.1,1C47.1,1 51.4,8.7 51.4,16.5C51.4,27.6 42.8,32.4 33,32.4L14,32.4 L31,32.4C46.9,32.4 53.4,39.2 53.4,49.6C53.4,59.5 47.5,67 30.2,67L14,67",
  ],
  C: ["M56.6 -48.9C52.9 -58.3 46 -63.2 35.8 -63.2C18.7 -63.2 9.5 -49.6 9.5 -29.3C9.5 -6.9 20.8 4.8 35.8 4.8C47.5 4.8 55.2 -2.3 58 -10.5"],
  D: ["M14 1L14 67",
    "M14 1L26 1C44 1 60.7 10.3 60.8 33.9C60.9 54.3 48.4 67 28.7 67L14 67"],
  E: ["M14 1L14 67",
    "M14 1 L50.1 1",
  "M14 35.6L48.4 35.6",
  "M14 67L50.1 67"],
  F: ["M14 1L14 67",
      "M14 1 L50.1 1",
  "M14 35.6L48.4 35.6",
 ],
 G: ["M56.6 -48.9C52.9 -58.3 46 -63.2 35.8 -63.2C19.6 -63.2 9.5 -50.8 9.5 -29.2C9.5 -10.4 16.9 4.8 36.3 4.8C44.3 4.8 50.9 2.2 56 -0.9L56 -28.6L38.3 -28.6"],
 H: ["M14 0L14 68",
 "M14 36.5L56.6 36.5",
 "M56.6 0L56.6 68"],
  I: ["M14 0v68"],
  J: ["M23.1 -63.2L23.1 -9C23.1 1.3 18.5 4.8 12.8 4.8C10.3 4.8 7.3 4.1 5 1.9"],
  K: ["M18.1 -63.2 L18.1 4.8",
 "M50.3 -63.2L19.1 -31.1L52.7 4.8"],
L: ["M14 -63.2L14 3.8L45.8 3.8"],
M: ["M14 4.8L14 -62.7L14.4 -62.7L42.9 1.8L43.3 1.8L71.8 -62.7L72.2 -62.7L72.2 4.8"],
N: ["M14 4.8L14 -62.7L14.4 -62.7L59.6 4.3L60 4.3L59.9 -63.2"],
O: ["M35.7 -63.2C16.8 -63.2 9.5 -45.3 9.5 -29.3C9.5 -15.9 14.7 4.8 35.8 4.8S62.1 -15.9 62.1 -29.3C62.1 -45.3 54.8 -63.2 35.9 -63.2"],
P: ["M14 -62.2 L14 4.8", 
"M14 -62.2L31.7 -62.2C45.8 -62.2 52.5 -54.6 52.5 -44C52.5 -33.1 45.4 -26.8 31.4 -26.8L14 -26.8"],
Q: ["M35.7 -63.2C16.8 -63.2 9.5 -45.3 9.5 -29.3C9.5 -15.9 14.7 4.8 35.8 4.8S62.1 -15.9 62.1 -29.3C62.1 -45.3 54.8 -63.2 35.9 -63.2","M42.8 4.1 L59.9 18.6"],
R: ["M14 -62.2L14 4.8",
"M14 -62.2L31.3 -62.2C44.7 -62.2 50.6 -54.6 50.6 -45.9C50.6 -35.6 42.3 -29.6 32.5 -29.6L14 -29.6",
"M34.3 -29.6L51.9 4.8"],
S: ["M45.6 -54.2C43.2 -59.4 37.9 -63.2 29.3 -63.2C17.1 -63.2 10.9 -55.7 10.9 -47.8C10.9 -28.6 47.6 -31.6 47.6 -11.5C47.6 -2.6 40.4 4.8 28.5 4.8C19.3 4.8 12.3 0.5 9.5 -6.1"],
T: ["M4 -62.2L48 -62.2",
"M26 -62.2 L26 4.8"],
U: ["M13 -63.2L13 -19.7C13 -3.9 21.8 4.8 34.7 4.8C48.2 4.8 56.4 -3.9 56.4 -19.7L56.4 -63.2 L56.4 4.8"],
V: ["M7 -63.2L31.9 4.3L32.3 4.3L57.1 -63.2"],
W: ["M8 -63.2L25.5 4.3L25.9 4.3L45 -62.2L45.4 -62.2L64.5 4.3L64.9 4.3L83 -63.2"],
X: ["M7 0L51.6 68",
"M53.7 0L9.3 68"],
Y: ["M5 -63.2L28.5 -24.8L52.5 -63.2",
"M28.5 -24.8L28.5 4.8"],
Z: ["M11 -62.2L49.8 -62.2L49.8 -61.8L11.1 3.4L11.1 3.8L50.9 3.8"],
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
const wordList = ["LIAM", "LUCAS", "PAPA", "MAMA", "OPA", "OMA", "APPEL", "STOEL",
  "TAFEL", "TV", "WATER", "AUTO"]

// Preload MP3 files
function preloadAudio() {
  const files = ["assets/audio/Waar is de.mp3", "assets/audio/Schrijf de.mp3"];

  // Add "Schrijf de [character]" MP3 files to the list
  alphanumList.forEach(character => {
    files.push(`assets/audio/Schrijf de ${character}.mp3`);
    files.push(`assets/audio/Waar is de ${character}.mp3`);
  });

  // Add praise MP3 files to the list
  praiseList.forEach(praise => {
    files.push(`assets/audio/${praise}.mp3`);
  });

  // Preload all MP3 files
  files.forEach(audioSrc => {
    const audio = new Audio(audioSrc);
    audio.preload = 'auto';
    document.getElementById("audioElements").appendChild(audio);
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
  // openFullscreen()
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
  
  
  const gameContainer = d3.select("#gameContainer");
  gameContainer.html('')
  document.getElementById("actionBox").classList.add('hidden');
  document.getElementById("mainDiv").classList.remove('hidden');


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

 function showSuccessImage() {
    const successImage = successImages[Math.floor(Math.random() * successImages.length)];
    overlay.style.backgroundImage = `url('assets/images/success/${successImage}.png')`;
    overlay.style.display = "block";
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
    // Add event listener to play the audio on message click
    message.addEventListener("click", function() {
      audioPlayer.play();
    });

if(Math.floor(Math.random() * 10) < 7){
  balloonGame();
}else{
  writeGame();
}


  function balloonGame(){
  
// Function to generate a random letter from A to Z
function getRandomLetter() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}



// Generate falling snowflakes with custom positions and animation delays
function generateBalloons() {
  let chosenLetter = getRandomLetter();
  const container = document.getElementById("gameContainer");
  let hasChosenLetter = false;
  let chosenLettersList = [];
  let allLettersList = [];


  function playAudio(chosenLetter) {
    const audioSrc = `assets/audio/Waar is de ${chosenLetter}.mp3`;
    audioPlayer.src = audioSrc;
    audioPlayer.play();
    message.innerHTML = "Waar is de *";
  }
  playAudio(chosenLetter)
  function getRandomStyles() {
    const colors = [
      "light-pink",
      "pink",
      "peach",
      "yellow",
      "lime-green",
      "light-green",
      "sky-blue",
      "light-blue",
      "lavender",
      "light-purple",
      "pastel-pink",
      "cream",
      "coral",
      "rose",
      "apricot",
      "canary",
      "chartreuse",
      "mint",
      "powder-blue",
      "celeste"
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  }

  for (let i = 0; i < 7; i++) {
    const randomStyle = getRandomStyles();
    const snowflake = document.createElement("div");
    snowflake.classList.add("balloon", "balloon-float", randomStyle);
    
    // Create a <span> element for the snowflake text content
    const snowflakeText = document.createElement("span");
    const randomLetter = getRandomLetter();
    snowflakeText.textContent = randomLetter;
    allLettersList.push(snowflake)
    if(randomLetter==chosenLetter){
      hasChosenLetter = true;
      chosenLettersList.push(snowflake)
    } 
    
    // Append the <span> element to the snowflake container
    snowflake.appendChild(snowflakeText);
    // Apply styles to the snowflake
    // snowflake.style.backgroundColor = `rgba(${r},${g},${b},0.7)`;
    // snowflake.style.color = `rgba(${r},${g},${b},0.7)`;
    // snowflake.style.boxShadow = `inset -7px -3px 10px rgba(${r - 40},${g - 40},${b - 40},0.7)`;

    container.appendChild(snowflake);
};


  // If no chosen letter is present, randomly select a snowflake and change its text content to chosenletter
  if (!hasChosenLetter) {
    const randomIndex = Math.floor(Math.random() * allLettersList.length);
    chosenSnowFlake = allLettersList[randomIndex]
    chosenSnowFlake.getElementsByTagName("span")[0].textContent = chosenLetter;
  

    chosenLettersList.push(chosenSnowFlake)
  }
console.log(chosenLettersList)
  chosenLettersList.forEach(letter => {
    letter.classList.add("chosenLetter")
    letter.addEventListener('click', function(){
      console.log("win")
      allLettersList.forEach(otherLetter => {
        if(otherLetter != letter){
        otherLetter.style.display = 'none';
        }
      });
      letter.classList.add('balloon-win')
      letter.classList.remove('balloon-float')
      const audioSrc = `assets/audio/${chosenLetter}.mp3`;
      audioPlayer.src = audioSrc;
      audioPlayer.play();
      audioPlayer.onended = function() {
        letter.style.zIndex = '0'
        showSuccessImage();
        praiseAudio();
      };
    });
  });
  
  console.log(chosenLetter)
}

// Call the function to generate snowflakes
generateBalloons();
  }
  
  function writeGame(){
  // Select random key
  const keys = Object.keys(numbersDict);
  let randomKey
  if (searchParams.get('key')){
    randomKey = searchParams.get('key');
  } else {
    randomKey = keys[Math.floor(Math.random() * keys.length)];
  }
  if(randomKey.length > 1){
    circleSize *= (1 + (0.05 * randomKey.length));
    strokeWidth *= (1 + (0.05 * randomKey.length));
    touchRadius *= (1 + (0.05 * randomKey.length))
    patternSize *= (1 + (0.05 * randomKey.length))
  }

  function playAudio(currentKey) {
    const audioSrc = `assets/audio/Schrijf de ${currentKey}.mp3`;
    audioPlayer.src = audioSrc;
    audioPlayer.play();
    message.innerHTML = `Schrijf de ${currentKey}`;
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
  

  
  
  const selectedAnimal = animalList[Math.floor(Math.random() * animalList.length)]
  const patternImage = "assets/images/"+selectedAnimal+"-pattern.jpg";

  // define pattern
  const defsDiv = gameContainer.append("div").style("height","0px").style("width","0px")
  const defs = defsDiv.append("svg").append("defs");
  const pattern = defs
    .append("pattern")
    .attr("id", "pattern")
    .attr("width", patternSize)
    .attr("height", patternSize)
    .attr("patternUnits", "userSpaceOnUse");

  pattern.append("image").attr("xlink:href", patternImage)
  .attr("width", patternSize)
  .attr("height", patternSize);




  


  // Draw path and hidden lines
const pathList = [];
const lineList = [];
const groupList = [];

function drawPath(pathData, key) {
  const newGroup = gameContainer.append("svg") // Create a new SVG element for each letter
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
      .attr("stroke-width", strokeWidth)
      .attr("fill", "none");

    pathList.push(newPath);
    

    const newLine = newGroup.append("path") // Append line to the new SVG element
      .attr("id", "line" + i)
      .attr("fill", "none")
      .attr("d", path)
      .attr("stroke", "url(#pattern)")
      // .attr("stroke", "#000")
      .attr("stroke-width", strokeWidth)
      .style("display", "none");

    lineList.push(newLine);
  });
}




// Animate the drawing of the path
function animatePath() {
  let cumulativeDuration = 0;
  const animationSpeed = 500; // Aanimation speed
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


// Calculate total width of all groups
let totalWidth = 0;
groupList.forEach(group => {
  totalWidth += group.node().getBBox().width + circleSize + 10;
});

// Adjust viewBox and width percentage for each group
groupList.forEach(group => {
  const groupBBox = group.node().getBBox();
  const widthPercentage = ((groupBBox.width + circleSize + 10) / totalWidth) * 100;
  const viewBoxX = groupBBox.x - (circleSize / 2);
  const viewBoxWidth = groupBBox.width + circleSize + 10;
  const viewBoxY = groupBBox.y - (circleSize / 2);
  const viewBoxHeight = groupBBox.height + circleSize + 10;
  group.attr("viewBox", `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`);
  group.style("max-width", `${widthPercentage}%`);
});

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
    var precision = 1,
      best,
      bestLength,
      bestDistance = Infinity;
    var traveled = distance2sqrt(lastPoint);
    var scanFrom = Math.max(lastLength, 0);;
    var scanTo = lastLength + traveled;


    if (traveled * 2 < 10) {
      scanTo = scanFrom + 10;
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
}