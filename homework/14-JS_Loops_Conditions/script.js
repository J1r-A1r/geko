let numbers = [12, 5, 8, 21, 3, 17, 9, 30, 2, 14];

// Առաջադրանք 1: Արտածել բոլոր թվերը
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Առաջադրանք 1: Արտածել բոլոր թվերը
JavaScript
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// Առաջադրանք 2: Արտածել միայն այն թվերը, որոնք մեծ են 10-ից
JavaScript
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(numbers[i]);
  }
}
// Առաջադրանք 3: Հաշվել բոլոր թվերի գումարը
JavaScript
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Գումարը՝", sum);
// Առաջադրանք 4: Գտնել ամենափոքր թիվը
JavaScript
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log("Ամենափոքր թիվը՝", min);
// Առաջադրանք 5: Հաշվել, թե քանի թիվ է զույգ
JavaScript
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    count++;
  }
}
console.log("Զույգ թվերի քանակը՝", count);