function onPageLoaded() {
  const exist = document.querySelector(".existence-amount");
  const cardContainer = document.querySelector(".catalog__cards");
  const allBtn = document.querySelector(".all");
  const availableBtn = document.querySelector(".available");
  const nonAvailableBtn = document.querySelector(".nonavailable");
  const availableLink = document.querySelector(".car-status-available");
  const nonAvailableLink = document.querySelector(".car-status-order");
  const btn = document.querySelector(".button");
  const selectors = document.querySelector(".selectors-options");
  // Отрисовка карточек
  const renderCards = (cards) => {
    cardContainer.innerHTML = "";
    cards.forEach((car) => {
      const card = document.createElement("div");
      card.classList.add("catalog__cards-card");
      card.innerHTML = `
        <div class="card-photo">
              <img src="${car.photo}" alt="${car.name}">
            </div>
            <div class="card-info">
              <span class="car-name">
                <span class="car-mark">${car.mark}</span>
                <span class="car-model">${car.model}</span>
              </span>
                 <div class="card-options">
                <div class="option1">
                  <span class="text">Объём двигателя:&nbsp; <p class="amount">${car.amount}</p></span>
                  <span class="text">Год:&nbsp; <p class="year">${car.year}</p></span>
                  <span class="text">Пробег:&nbsp; <p class="mileage">${car.mileage}</p></span>
                  <p class="amount tax-text">${car.taxText}</p>
                </div>
                <div class="option2">
                  <span class="text">Привод:&nbsp; <p class="drive">${car.drive}</p></span>
                  <span class="text">КПП:&nbsp; <p class="transmission">${car.transmission}</p></span>
                </div>
                <div class="price">
                  <span class="text">Стоимость во Владивостоке</span>
                  <span class="car-price">${car.price} ₽</span>
                  <div class="${car.status}">${car.available}</div>
                </div>
              </div>
            </div>
      `;
      cardContainer.append(card);
    });
  };

  // Получение Dанных
  const getData = (category) => {
    fetch("./db/db.json")
      .then((res) => res.json())
      .then((data) => {
        data = data.db;
        exist.innerHTML = data.length;
        const array = category
          ? data.filter((item) => item.available === category)
          : data;
        console.log(array); // Фильтрация входящих данных по запросу
        localStorage.setItem("data", JSON.stringify(array));
        renderCards(JSON.parse(localStorage.getItem("data")));
      });
  };
  getData();

  document.addEventListener("click", (event) => {
    if (event.target == allBtn) {
      cardContainer.innerHTML = "";
      localStorage.clear();
      getData();
    } else if (event.target == availableBtn) {
      cardContainer.innerHTML = "";
      localStorage.clear();
      const availableText = availableLink.textContent;
      getData(availableText.toString());
    } else if (event.target == nonAvailableBtn) {
      cardContainer.innerHTML = "";
      localStorage.clear();
      const nonAvailableText = nonAvailableLink.textContent;
      getData(nonAvailableText.toString());
    }
  });

  const selectCards = () => {};

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    selectCards();
  });
}

document.addEventListener("DOMContentLoaded", onPageLoaded);
