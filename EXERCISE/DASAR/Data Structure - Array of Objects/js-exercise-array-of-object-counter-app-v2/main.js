function countryMedals(players, countries) {
  if (!countries) {
      return "Countries not provided";
  }

  const hasil = [];

  countries.forEach((country) => {
      const athletes = players
          .filter((player) => player.country === country)
          .map((player) => player.name);
      const totalMedals = players
          .filter((player) => player.country === country)
          .reduce((acc, cur) => acc + cur.medals, 0);

      hasil.push({
          name: country,
          athlete: athletes,
          totalMedals: totalMedals
      });
  });

  return hasil;
  }

let playerData = [
    {
        name: "Lionel Messi",
        medals: 5,
        country: "Argentina"
    },
    {
        name: "Iker Casillas",
        medals: 7,
        country: "Spain"
    },
    {
        name: "Ahmad Waluyo",
        medals: 5,
        country: "Indonesia"
    },
    {
        name: "Alvin Arkansas",
        medals: 8,
        country: "Indonesia"
    },
    {
        name: "Gabriel Batistuta",
        medals: 1,
        country: "Argentina"
    },
    {
        name: "Xavi Hernandes",
        medals: 9,
        country: "Spain"
    },
    {
        name: "Carles Puyol",
        medals: 5,
        country: "Spain"
    },
    {
        name: "Jatmika Teja",
        medals: 6,
        country: "Indonesia"
    },
    {
        name: "Sergio Aguero",
        medals: 3,
        country: "Argentina"
    },
]

console.log(countryMedals(playerData, ["Indonesia", "Spain"]));
console.log(countryMedals(playerData, ["Argentina", "Spain"]));
console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals