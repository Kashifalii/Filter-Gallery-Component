// geting filterable buttons and cards.
const filterableButtons = document.querySelectorAll(".filterButtons button");
const filterableCards = document.querySelectorAll(".filterCards .card");

// define the filterCards function

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target)

    // Iterate over each filterableCards
    filterableCards.forEach(card => {

        // add hide class to hide the card initially
        card.classList.add("hide");

        // check if the card matches the selected filter or "all" are selected
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");

        };
    });
};

// adding click eventlistener on filterbuttons.
filterableButtons.forEach(button => button.addEventListener("click", filterCards))