// const ages = [12, 13, 15, 16, 14];
// const ages2 = [15, 17, 16];
// const allAges = ages.concat(ages2); // concate two arrays
// console.log(allAges);

// const ages = [12, 13, 15, 16, 14];
// const ages2 = [15, 17, 16];
// const ages3 = [35, 25, 24];
// const allAges = ages.concat(ages2).concat([100]).concat(ages3); // concate four arrays
// console.log(allAges);

// const ages = [12, 13, 15, 16, 14];
// const ages2 = [15, 17, 16];
// const ages3 = [35, 25, 24];
// const allAges = ages.concat(ages2).concat([100]).concat(ages3); // concate four arrays 
// const allAges2 = [...ages,...ages2,...[100],...ages3];
// const allAges3 = [...ages,...ages2,100,...ages3]; //concate three array's value with one number
// console.log(allAges3);

const big = 650;
const bigger = 850;
const biggest = 950;
// const maximum = Math.max(big, bigger, biggest);

const comparision = [650, 850, 950];
const maximum = Math.max(...comparision);
console.log(maximum);