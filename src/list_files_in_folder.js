const fs = require('fs');

fs.readdir('C:\\Users\\ejohn\\Dropbox\\dev\\', (err, data) => {
	  if (err) throw err;
	  console.log(data);
});
