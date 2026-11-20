let Descirption = [
  {
    CityNumber: "01/04",
    CityName: "FRANCE",
    City: "Paris",
    CityDescription:
      "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
    Continent: "Europe",
    Food: "Food",
    Place: "Eiffel Tower",
    Language: "French",
    CityImage: "img/paris.jpg",
    NumberImage: "01",
  },
  {
    CityNumber: "02/04",
    CityName: "JAPAN",
    City: "Tokyo",
    CityDescription:
      "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
    Continent: "Asia",
    Food: "Sushi, Ramen",
    Place: "Tokyo Tower",
    Language: "Japanese",
    CityImage: "img/tokyo.jpg",
    NumberImage: "02",
  },
  {
    CityNumber: "03/04",
    CityName: "ITALY",
    City: "Rome",
    CityDescription:
      "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
    Continent: "Europe",
    Food: "Pizza, Pasta",
    Place: "Colosseum",
    Language: "Italian",
    CityImage: "img/roma.jpg",
    NumberImage: "03",
  },
  {
    CityNumber: "04/04",
    CityName: "EGYPT",
    City: "Cairo",
    CityDescription:
      "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
    Continent: "Africa",
    Food: "Koshari, Foul",
    Place: "Pyramids",
    Language: "Arabic",
    CityImage: "img/cairo.jpg",
    NumberImage: "04",
  },
];

let information = [
  {
    Discover: "Discover Paris in France",
    FamousPlace: "Famous Place: Eiffle Tower",
  },
  {
    Discover: "Discover Tokyo in Japan",
    FamousPlace: "Famous Place: Tokyo Tower",
  },
  {
    Discover: "Discover Rome in Italy",
    FamousPlace: "Famous Place: Colosseum",
  },
  {
    Discover: "Discover Cairo in Egypt",
    FamousPlace: "Famous Place: Pyramids",
  },
];
function UpdateData() {
  document.getElementById("CityNumber").innerHTML =
    Descirption[currentIndex].CityNumber;

  document.getElementById("CityName").innerHTML =
    Descirption[currentIndex].CityName;

  document.getElementById("City").innerHTML = Descirption[currentIndex].City;

  document.getElementById("CityDescription").innerHTML =
    Descirption[currentIndex].CityDescription;

  document.getElementById("Continent").innerHTML =
    Descirption[currentIndex].Continent;

  document.getElementById("Food").innerHTML = Descirption[currentIndex].Food;

  document.getElementById("Place").innerHTML = Descirption[currentIndex].Place;

  document.getElementById("Language").innerHTML =
    Descirption[currentIndex].Language;

  document.getElementById("CityImage").src =
    Descirption[currentIndex].CityImage;

  document.getElementById("NumberImage").innerHTML =
    Descirption[currentIndex].NumberImage;
}
let currentIndex = 0;
function Next() {
  currentIndex++;

  if (currentIndex >= Descirption.length) {
    currentIndex = 0;
  }
  UpdateData();
  UpdateDots();
}
function Previous() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = Descirption.length - 1;
  }
  UpdateData();
  UpdateDots();
}

function UpdateInformation() {
  window.alert(
    information[currentIndex].Discover +
      "\n" +
      information[currentIndex].FamousPlace,
  );
}

function ExploreMore() {
  UpdateInformation();
}

function UpdateDots() {
  let dots = document.querySelectorAll(".dot");

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function GoToSlide(index) {
  currentIndex = index;
  UpdateData();
  UpdateDots();
}
