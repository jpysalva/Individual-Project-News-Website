const heartIcons = document.querySelectorAll(".heartIcon");

heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener("click", function () {
      if (this.src.includes("icon--24px--favorit--active.svg")) {
        this.src = "./public/icon--20px--favorit--default.svg"; 
      } else {
        this.src = "./public/icon--24px--favorit--active.svg"; 
      }
    });
  });

const cards = document.querySelectorAll(".card, .card1, .card2, .card3, .card4, .card5, .card6, .card7, .card8");

cards.forEach(card => {
  card.addEventListener("click", function () {
    this.classList.toggle("read");
  });
});

const crossIcons = document.querySelectorAll(".icon-20px-cross");

crossIcons.forEach(crossIcon => {
  crossIcon.addEventListener("click", function () {
    const parentCard = this.closest(".card, .card1, .card2, .card3, .card4, .card5, .card6, .card7, .card8");
    if (parentCard) {
      parentCard.remove();
    }
    event.preventDefault();
  });
});



