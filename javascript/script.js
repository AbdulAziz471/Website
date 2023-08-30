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
  const sidePanel = document.getElementById("mySidepanel");

  if (window.innerWidth <= 750) {
    // If the screen is shrunk (750px or less), set width to 60%
    sidePanel.style.width = "60%";
  } else {
    // If the screen is not shrunk, set width to 30%
    sidePanel.style.width = "30%";
  }
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
  var icon = button.querySelector('i');  // Get the <i> element inside the button

  if (x.style.display === "none") {
    x.style.display = "block";
    icon.className = "fa fa-minus-square";  // Change to minus icon when showing
  } else {
    x.style.display = "none";
    icon.className = "fa fa-plus-square";   // Change to plus icon when hiding
  }
}






const cardContainer = document.querySelector('.CARDS');
        const cardData = [

          {
            id: 1,
            imgSrc: "img/07-Research_MushRush_2.png",
            date: "JULLY 07 2023",
            title: "CARD 1",
            content: "The Quran, also spelled as Koran, is the holy book of Islam, revered by Muslims worldwide as the divine word of God",
            link: "card-details.html?id=1"
          },
          {
            id: 2,
            imgSrc: "img/07-Research_MushRush_3.png",
            date: "JULLY 07 2023",
            title: "CARD 2",
            content: "The Quran, also spelled as Koran, is the holy book of Islam, revered by Muslims worldwide as the divine word of God",
            link: "card-details.html?id=2"
          },
          
                  ];

        function createCard(data) {
            const card = document.createElement('div');
            card.classList.add('card-item');

            card.innerHTML = `
                <img src="${data.imgSrc}" alt="">
                <p><span>${data.date}</span></p>
                <h4>${data.title}</h4>
                <p>${data.content}</p>
                <a href="${data.link}">READ MORE</a>
            `;

            cardContainer.appendChild(card);
        }

        // Loop through cardData and create cards
        cardData.forEach(data => {
            createCard(data);
        });
    











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


function openCustomSearch() {
  var overlay = document.getElementById("customOverlay");
  overlay.style.display = "flex"; // Change display to "flex"
}

function closeCustomSearch() {
  var overlay = document.getElementById("customOverlay");
  overlay.style.display = "none"; // Change display to "none"
}















document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll('.card');

  productCards.forEach(card => {
      const imgContainer = card.querySelector('.PRODUCT-IMG');
      const img = imgContainer.querySelector('img');
      const originalSrc = img.src;
      const hoverSrc = img.getAttribute('data-hover');

      card.addEventListener('mouseenter', () => {
          img.src = hoverSrc;
      });

      card.addEventListener('mouseleave', () => {
          img.src = originalSrc;
      });
  });
});














