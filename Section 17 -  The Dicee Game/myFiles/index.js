var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice1D1 = document.querySelectorAll(".dice-face1 .d1");
var dice1D2 = document.querySelectorAll(".dice-face1 .d2");
var dice1D3 = document.querySelectorAll(".dice-face1 .d3");
var dice1D4 = document.querySelectorAll(".dice-face1 .d4");
var dice1D5 = document.querySelectorAll(".dice-face1 .d5");
var dice1D6 = document.querySelectorAll(".dice-face1 .d6");

var dice2D1 = document.querySelectorAll(".dice-face2 .d1");
var dice2D2 = document.querySelectorAll(".dice-face2 .d2");
var dice2D3 = document.querySelectorAll(".dice-face2 .d3");
var dice2D4 = document.querySelectorAll(".dice-face2 .d4");
var dice2D5 = document.querySelectorAll(".dice-face2 .d5");
var dice2D6 = document.querySelectorAll(".dice-face2 .d6");

if (randomNumber1 === 1) {
  dice1D2.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D3.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D4.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D5.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D6.forEach(el => {
    el.style.visibility = "hidden";
  });

  dice1D1.forEach(el => {
    el.style.visibility = "visible";
  })
  
 } else if (randomNumber1 === 2) {
  dice1D1.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D3.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D4.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D5.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D6.forEach(el => {
    el.style.visibility = "hidden";
  });

  dice1D2.forEach(el => {
    el.style.visibility = "visible";
  });

} else if (randomNumber1 === 3) {
  dice1D1.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D2.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D4.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D5.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D6.forEach(el => {
    el.style.visibility = "hidden";
  });

  dice1D3.forEach(el => {
      el.style.visibility = "visible";
    });

} else if (randomNumber1 === 4) {
  dice1D1.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D2.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D3.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D5.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D6.forEach(el => {
    el.style.visibility = "hidden";
  });

  dice1D4.forEach(el => {
      el.style.visibility = "visible";
  });
} else if (randomNumber1 === 5) {
  dice1D1.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D2.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D3.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D4.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D6.forEach(el => {
    el.style.visibility = "hidden";
  });

  dice1D5.forEach(el => {
      el.style.visibility = "visible";
  });

} else if (randomNumber1 === 6) {
  dice1D1.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D2.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D3.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D4.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice1D5.forEach(el => {
    el.style.visibility = "hidden";
  });

  dice1D6.forEach(el => {
      el.style.visibility = "visible";
  }); 
}

if (randomNumber2 === 1) {
  dice2D2.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D3.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D4.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D5.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D6.forEach(el => {
    el.style.visibility = "hidden";
  });

  dice2D1.forEach(el => {
    el.style.visibility = "visible";
  })
  
 } else if (randomNumber2 === 2) {
  dice2D1.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D3.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D4.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D5.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D6.forEach(el => {
    el.style.visibility = "hidden";
  });

  dice2D2.forEach(el => {
    el.style.visibility = "visible";
  });

} else if (randomNumber2 === 3) {
  dice2D1.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D2.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D4.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D5.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D6.forEach(el => {
    el.style.visibility = "hidden";
  });

  dice2D3.forEach(el => {
      el.style.visibility = "visible";
    });

} else if (randomNumber2 === 4) {
  dice2D1.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D2.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D3.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D5.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D6.forEach(el => {
    el.style.visibility = "hidden";
  });

  dice2D4.forEach(el => {
      el.style.visibility = "visible";
  });
} else if (randomNumber2 === 5) {
  dice2D1.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D2.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D3.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D4.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D6.forEach(el => {
    el.style.visibility = "hidden";
  });

  dice2D5.forEach(el => {
      el.style.visibility = "visible";
  });

} else if (randomNumber2 === 6) {
  dice2D1.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D2.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D3.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D4.forEach(el => {
    el.style.visibility = "hidden";
  });
  dice2D5.forEach(el => {
    el.style.visibility = "hidden";
  });

  dice2D6.forEach(el => {
      el.style.visibility = "visible";
  }); 
}



if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}else {
  document.querySelector("h1").textContent = "Draw!";
}