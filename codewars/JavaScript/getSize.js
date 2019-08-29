/*
Surface Area and Volume of a Box
Level: 8 kyu
Write a function that returns the total surface area and volume of a box as an array: [area, volume].
*/

function getSize(width, height, depth) {
  const area = ((height * width) + (height * depth) + (width * depth)) * 2;
  const volume = width * height * depth;
  return [area, volume];
}
