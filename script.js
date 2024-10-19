function setCategory(radio) {
    console.log("Hello world");
    const categoryField = document.getElementById('category-field');
    categoryField.value = radio.value;
}

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем отправку формы

    // Получаем данные из формы
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    // Создаём новый элемент отзыва
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');

    // Добавляем контент в новый элемент
    reviewElement.innerHTML = `<strong>${name}</strong><p>${review}</p>`;

    // Добавляем элемент в контейнер отзывов
    document.getElementById('reviews-container').appendChild(reviewElement);

    // Очищаем форму после отправки
    document.getElementById('review-form').reset();
});