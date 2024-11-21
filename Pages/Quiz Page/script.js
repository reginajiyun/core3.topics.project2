const quizData = [
    {
      question: "1. What does an FDC stand for?",
      options: ["A. Fire Department Connection", "B. Fire Duck Connection", "C. Fire Drain Connection", "D. Fire Door Connection", "E. Fire Drop Connection"],
      answer: "A. Fire Department Connection"
    },
    {
      question: "2. Where is an FDC usually located?",
      options: ["A. Inside a building", "B. On the roof", "C. Outside a building", "D. In the basement", "E. Under the ground"],
      answer: "C. Outside a building"
    },
    {
      question: "3. What is the main job of an FDC?",
      options: ["A. To let air into the building", "B. To pump water into the building’s fire sprinkler or standpipe system", "C. To turn on the building lights", "D. To stop the fire alarm", "E. To control the temperature of the water"],
      answer: "B. To pump water into the building’s fire sprinkler or standpipe system"
    },
    {
      question: "4. What color are FDCs in New York City?",
      options: ["A. Green", "B. Yellow", "C. Red", "D. Blue", "E. Black"],
      answer: "C. Red"
    },
    {
      question: "5. What kind of tool do firefighters use to connect a hose to the FDC?",
      options: ["A. Hammer", "B. Wrench", "C. Screwdriver", "D. Saw", "E. Scissors"],
      answer: "B. Wrench"
    },
    {
      question: "6. Why is an FDC important during a fire?",
      options: ["A. It helps firefighters get more water", "B. It tells people to leave the building", "C. It cools down the building", "D. It makes the fire alarm louder", "E. It turns off the electricity"],
      answer: "A. It helps firefighters get more water"
    },
    {
      question: "7. What does a double-inlet FDC look like?",
      options: ["A. A straight line", "B. A circle", "C. A Y-shape", "D. A triangle", "E. A square"],
      answer: "C. A Y-shape"
    },
    {
      question: "8. Which type of FDC is located away from the building, usually near a sidewalk?",
      options: ["A. Exposed", "B. Flush", "C. Freestanding", "D. Hidden", "E. Vertical"],
      answer: "C. Freestanding"
    },
    {
      question: "9. What do the green color-coded pipes on a Siamese connection mean?",
      options: ["A. They connect to a standpipe system", "B. They connect to a sprinkler system", "C. They are for water fountains", "D. They connect to the electricity", "E. They connect to the sewer"],
      answer: "B. They connect to a sprinkler system"
    },
    {
      question: "10. Who is responsible for making sure FDCs are working properly?",
      options: ["A. Firefighters", "B. Building owners", "C. Teachers", "D. Police officers", "E. Construction workers"],
      answer: "B. Building owners"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    const questionData = quizData[currentQuestion];
  
    const optionsHTML = questionData.options
      .map((option, index) => `<label class="option"><input type="radio" name="option" value="${option}"> ${option}</label>`)
      .join("");
  
    quizContainer.innerHTML = `
      <div class="question">${questionData.question}</div>
      ${optionsHTML}
    `;
  }
  
  function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
  
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      }
  
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuiz();
      } else {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("result").innerHTML = `You got ${score} out of ${quizData.length} correct!`;
      }
    } else {
      alert("Please select an answer.");
    }
  }
  
  window.onload = function () {
    loadQuiz();
  };

document.getElementById('homeButton').addEventListener('click', function() {
    // Go to the home page - replace with your actual home page URL or path
    window.location.href = 'file:///Users/reginadoo/Desktop/Website/home.html';
});

