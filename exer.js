// get all the images at assests folder
const image = [
  '1.jpg',
  '2.jpg',
  '3.png',
  '4.png',
  '5.jpg',
  '6.png',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg'
];

//Call the onClick button named RUN
function run() {

    //get a random index
    random_index = Math.floor(Math.random()*image.length);

   //get an image at the random index 
   selected_image = image[random_index];
   
    //display the image
    document.getElementById('display_image').src = `./assets/${selected_image}`;


}
