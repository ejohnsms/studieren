// the image data object
// params: width, height, data
// data is A Uint8ClampedArray representing a one-dimensional array containing
// the data in the RGBA order, with integer values between 0 and 255 (included).

let imagedata = context.createImageData(width, height);
const dataWidth = 4;

let pixelindex = (y * width + x) * dataWidth;
// y gives us the row
// x gives us the column
// dataWidth gives us the offset for the RGBA

// imagedata.data[pixelindex] = red;
// imagedata.data[pixelindex+1] = green;
// imagedata.data[pixelindex+2] = blue;
// imagedata.data[pixelindex+3] = alpha;

// draw a square
// horizontal line for start and end for top and bottom
// a dot at start and end of line for sides
const drawSquare = () => {
  // Get the canvas and context
  var canvas = document.getElementById("viewport");
  var context = canvas.getContext("2d");

  // Define the image dimensions
  var width = canvas.width;
  var height = canvas.height;

  // Create an ImageData object
  var imagedata = context.createImageData(width, height);
  const dataWidth = 4;

  // set pixels for each row
  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width; j += 1) {
      let pixelindex = (i * width + j) * dataWidth;
      if (i === 0 || i === height - 1) {
        imagedata.data[pixelindex] = 255;
        imagedata.data[pixelindex+1] = 255;
        imagedata.data[pixelindex+2] = 255;
        imagedata.data[pixelindex+3] = 255;
      } else {
        if (j === 0 || j === width - 1) {
          imagedata.data[pixelindex] = 255;
          imagedata.data[pixelindex+1] = 255;
          imagedata.data[pixelindex+2] = 255;
          imagedata.data[pixelindex+3] = 255;
        } else {
          imagedata.data[pixelindex] = 0;
          imagedata.data[pixelindex+1] = 0;
          imagedata.data[pixelindex+2] = 0;
          imagedata.data[pixelindex+3] = 0;
        }
      }
    }
  }

  context.putImageData(imagedata, 0, 0);
}

// The function gets called when the window is fully loaded
window.onload = function() {
    // Get the canvas and context
    var canvas = document.getElementById("viewport");
    var context = canvas.getContext("2d");

    // Define the image dimensions
    var width = canvas.width;
    var height = canvas.height;

    // Create an ImageData object
    var imagedata = context.createImageData(width, height);

    // Create the image
    function createImage(offset) {
        // Loop over all of the pixels
        for (var x=0; x<width; x++) {
            for (var y=0; y<height; y++) {
                // Get the pixel index
                var pixelindex = (y * width + x) * 4;

                // Generate a xor pattern with some random noise
                var red = ((x+offset) % 256) ^ ((y+offset) % 256);
                var green = ((2*x+offset) % 256) ^ ((2*y+offset) % 256);
                var blue = 50 + Math.floor(Math.random()*100);

                // Rotate the colors
                blue = (blue + offset) % 256;

                // Set the pixel data
                imagedata.data[pixelindex] = red;     // Red
                imagedata.data[pixelindex+1] = green; // Green
                imagedata.data[pixelindex+2] = blue;  // Blue
                imagedata.data[pixelindex+3] = 255;   // Alpha
            }
        }
    }

    // Main loop
    function main(tframe) {
        // Request animation frames
        window.requestAnimationFrame(main);

        // Create the image
        createImage(Math.floor(tframe / 10));

        // Draw the image data to the canvas
        context.putImageData(imagedata, 0, 0);
    }

    // Call the main loop
    main(0);
};
