const urlParams = new URLSearchParams(window.location.search);
        const cardId = urlParams.get('id');

        const cardData = [
            {
                id: 1,
                imgSrc: "img/07-Research_MushRush_2.png",
                date: "JULLY 07 2023",
                title: "CARD 1",
                content: "The Quran, also spelled as Koran, is the holy book of Islam, revered by Muslims worldwide as the divine word of GodThe Quran, also spelled as Koran, is the holy book of Islam, revered by Muslims worldwide as the divine word of GodThe Quran, also spelled as Koran, is the holy book of Islam, revered by Muslims worldwide as the divine word of God",
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
            // Add other card data here
        ];

        const cardDetail = document.querySelector('.card-detail');
        const cardImage = document.getElementById('card-image');
        const cardDate = document.getElementById('card-date');
        const cardTitle = document.getElementById('card-title');
        const cardContent = document.getElementById('card-content');

        const selectedCard = cardData.find(card => card.id === parseInt(cardId, 10));
        if (selectedCard) {
            cardImage.src = selectedCard.imgSrc;
            cardDate.textContent = selectedCard.date;
            cardTitle.textContent = selectedCard.title;
            cardContent.textContent = selectedCard.content;
        } else {
            cardDetail.innerHTML = '<p>Card not found.</p>';
        }