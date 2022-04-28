const advice_api = "https://api.adviceslip.com/advice";
const dice = document.getElementsByClassName("dice-container")[0];
const advice_id = document.getElementsByClassName("card__id")[0];
const advice = document.getElementsByClassName("advice")[0];

const getAdvice = () => {
  fetch(advice_api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.slip);
      advice_id.innerHTML = "ADVICE " + data.slip.id;
      advice.innerHTML = data.slip.advice;
    })
    .catch((error) => {
      console.log(error);
    });
};

dice.addEventListener("click", getAdvice);
