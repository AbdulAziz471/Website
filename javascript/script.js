const stars = document.querySelectorAll(".stars i");
// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    // Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {

      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

function opencart() {
  document.getElementById("mySidepanel").style.width = "30%";

}

function closecart() {
  document.getElementById("mySidepanel").style.width = "0";

}
const textareas = document.querySelectorAll(".Info textarea");

textareas.forEach(textarea => {
  textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
  });
});


function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}


function toggleElement(elementId, buttonId) {
  var x = document.getElementById(elementId);
  var button = document.getElementById(buttonId);

  if (x.style.display === "none") {
    x.style.display = "block";
    button.innerHTML = "-";
  } else {
    x.style.display = "none";
    button.innerHTML = "+";
  }
}



const cardContainer = document.querySelector('.CARDS');
const pageNumbersContainer = document.querySelector('.page-numbers');
const cardsPerPage = 6;
let currentPage = 1;

function showPage(pageNumber) {
  const startIndex = (pageNumber - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const cardItems = cardContainer.querySelectorAll('.card-item');

  cardItems.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function updatePageNumbers() {
  pageNumbersContainer.innerHTML = '';

  const totalPages = Math.ceil(cardContainer.children.length / cardsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageNumberElement = document.createElement('li');
    pageNumberElement.textContent = i;
    pageNumberElement.classList.toggle('active', i === currentPage);
    pageNumberElement.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
      updatePageNumbers();
    });
    pageNumbersContainer.appendChild(pageNumberElement);
  }
}

showPage(currentPage);
updatePageNumbers();


fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => console.error('Error fetching header:', error));


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function changeImage(imageSource) {
  const image = document.getElementById('image');
  image.src = imageSource;
}