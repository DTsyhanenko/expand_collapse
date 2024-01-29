const cards = document.querySelectorAll(".card")
const buttons = document.querySelectorAll(".expand-button")
const cardBody = document.querySelectorAll(".card-body")

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const clickedButton = e.target
    const closestHeader = clickedButton.closest(".card-header")
    const closestBody = closestHeader.nextElementSibling

    cardBody.forEach((card) => {
      if (card !== closestBody) {
        card.classList.remove("show")
      }
    })

    buttons.forEach((button) => {
      if (button !== clickedButton) {
        button.innerHTML = "Expand"
      }
    })

    closestBody.classList.toggle("show")
    if (closestBody.classList.contains("show")) {
      clickedButton.innerHTML = "Collapse"
    } else {
      clickedButton.innerHTML = "Expand"
    }
  })
})
