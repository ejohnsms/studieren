import fs from 'fs';
import highland from 'highland';

highland(fs.createReadStream('data.csv', 'utf8'))
          .split()
          .map(line => line.split(','))
          .map(order => ({
            name: order[0],
            dish: order[1],
            stars: order[2],
            price: order[3]
          }))
          .filter(order => order.stars < 2)
          .map(whimps => whimps.name)
          .each(x => console.log(x))


console.log('after calling readFile');
