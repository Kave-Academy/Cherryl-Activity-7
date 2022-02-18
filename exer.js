// get all the images at assests folder
var image = [
  '1.jpg',
  '2.jpg',
  '3.png',
  '4.png',
  '5.jpg',
  '6.png',
  '7.jpg'
];

//Call the onClick button named RUN
function run() {

  //random index
  random_index = Math.floor(Math.random() * image);


  //get an image at random index
   selected_image = image[random_index];


   document.getElementById('display_image').src = `./assets/${selected_image }`;


}
