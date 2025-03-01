for (let i = 1; i <= 10; i++) {
  if (i <= 10) {
    console.log(i);
  }
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 10; i >= 1; i--) {
  if (i >= 1) {
    console.log(i);
  }
}

const myGarage = [
  { brand: "Toyota", model: "Corolla", year: 2022 },
  { brand: "Honda", model: "Civic", year: 2021 },
  { brand: "Ford", model: "Mustang", year: 2020 },
  { brand: "Chevrolet", model: "Camaro", year: 2019 },
  { brand: "BMW", model: "X5", year: 2023 },
  { brand: "Mercedes-Benz", model: "C-Class", year: 2022 },
  { brand: "Audi", model: "A4", year: 2021 },
  { brand: "Tesla", model: "Model 3", year: 2023 },
  { brand: "Nissan", model: "Altima", year: 2020 },
  { brand: "Hyundai", model: "Sonata", year: 2021 },
  { brand: "Kia", model: "Sorento", year: 2022 },
  { brand: "Volkswagen", model: "Passat", year: 2019 },
  { brand: "Mazda", model: "CX-5", year: 2023 },
  { brand: "Subaru", model: "Outback", year: 2021 },
  { brand: "Lexus", model: "RX 350", year: 2022 },
  { brand: "Dodge", model: "Charger", year: 2020 },
  { brand: "Jeep", model: "Wrangler", year: 2023 },
  { brand: "Porsche", model: "911", year: 2023 },
  { brand: "Ferrari", model: "488", year: 2021 },
  { brand: "Lamborghini", model: "Huracan", year: 2022 },
];

for (let i = 0; i < myGarage.length; i++) {
  console.log(myGarage[i].brand, myGarage[i].model);
}

for (let i = 0; i < myGarage.length; i++) {
  if (myGarage[i].year >= 2022) {
    console.log(myGarage[i]);
  }
}

let oldCars = 0;
for (let i = 0; i < myGarage.length; i++) {
  if (myGarage[i].year <= 2020) {
    oldCars++;
  }
}
console.log(oldCars);

for (let i = myGarage.length - 1; i >= 0; i--) {
  console.log(myGarage[i]);
}

for (let i = myGarage.length - 1; i >= 0; i--) {
  console.log(myGarage[i].brand);
}
