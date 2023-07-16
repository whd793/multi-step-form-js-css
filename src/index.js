//add event handler to each next buttons

const btnNext = document.querySelectorAll(".btn-next");
const btnPrev = document.querySelectorAll(".btn-prev");
const formStep = document.querySelectorAll(".form-step");
const progressStep = document.querySelectorAll(".progress-step");
let currentProgress = document.querySelector(".currentProgress");
let stepCount = 0;

btnNext.forEach((btn) => {
  btn.addEventListener("click", () => {
    stepCount++;
    updateClass();
    updateProgress();
    updateCurrentProgress();
  });
});

btnPrev.forEach((btn) => {
  btn.addEventListener("click", () => {
    stepCount--;
    updateClass();
    updateProgress();
    updateCurrentProgress();
  });
});

function updateClass() {
  //remove active class from all
  formStep.forEach((form) => {
    if (form.classList.contains("form-step-active")) {
      form.classList.remove("form-step-active");
    }
  });
  //add active class to the current element with the class '.form-step'
  formStep[stepCount].classList.add("form-step-active");
}

function updateProgress() {
  progressStep.forEach((progress, idx) => {
    if (idx > stepCount) {
      progress.classList.remove("progress-step-active");
    }
  });
  progressStep[stepCount].classList.add("progress-step-active");
}

function updateCurrentProgress() {
  currentProgress.style.width =
    (stepCount / (progressStep.length - 1)) * 100 + "%";
}
