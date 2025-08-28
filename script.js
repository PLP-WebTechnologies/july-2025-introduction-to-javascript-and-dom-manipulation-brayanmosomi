// PART 1: Variables & Conditionals
let classGrades = [65, 80, 90, 72, 55]; // Example data

// PART 2: Functions

// Function 1: Check if student passed or failed
function checkPassFail(grade) {
  if (grade >= 50) {
    return `Grade ${grade} → Pass ✅`;
  } else {
    return `Grade ${grade} → Fail ❌`;
  }
}

// Function 2: Calculate average grade
function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}


// PART 3: Loops


// Example 1: Show all class grades in a list
function displayGrades() {
  let list = document.getElementById("gradeList");
  list.innerHTML = "";
  for (let i = 0; i < classGrades.length; i++) {
    let li = document.createElement("li");
    li.textContent = "Student " + (i+1) + ": " + classGrades[i];
    list.appendChild(li);
  }
}

// Example 2: While loop → generate table of grades until 100
function generateGradeTable() {
  let n = 10;
  let result = "Table of 10 (up to 100): ";
  let i = 1;
  while (i <= 10) {
    result += (n * i) + " ";
    i++;
  }
  return result;
}

// PART 4: DOM Interactions

// 1. Check grade button
document.getElementById("btnCheck").addEventListener("click", function() {
  let grade = document.getElementById("gradeInput").value;
  if (grade === "") {
    document.getElementById("output").textContent = "Please enter a grade!";
  } else {
    document.getElementById("output").textContent = checkPassFail(parseInt(grade));
  }
});

// 2. Show average grade button
document.getElementById("btnAverage").addEventListener("click", function() {
  let avg = calculateAverage(classGrades);
  document.getElementById("output").textContent = "Class Average = " + avg.toFixed(2);
});

// 3. Generate grade table button
document.getElementById("btnTable").addEventListener("click", function() {
  displayGrades();
  document.getElementById("output").textContent = generateGradeTable();
});

// Extra: Change title color on load
document.getElementById("pageTitle").style.color = "purple";
