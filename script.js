// select question container
// select arrow up
// select arrow down

// iterate over question container and addEventListener
// question p - font weight: 700
// answer set height and margin
// show arrow up, hide arrow down

const questions = document.querySelectorAll(".question-container")

questions.forEach((questionContainer) => {
  const questionDOM = questionContainer.querySelector(".question")
  questionDOM.addEventListener("click", openQuestion)
})

function openQuestion() {
  const questionContainerDOM = this.parentNode
  questionContainerDOM.classList.toggle("show-answer")
}
