import Promise from 'bluebird'
// a functor an object that implements map
// Array is a functor because it implements Array.prototype.map

let robots = [{name: 'rosie', show: 'jetsons'},
              {name: 'robby', show: 'lost in space'},
              {name: 'r2', show: 'star wars'}]

const getRobots = new Promise((resolve, reject) => {
  setTimeout(() => resolve(robots), 2000);
})

const names = getRobots
                .map(r => r.name)
                .then((result) => console.log(result), (reason) => console.log(reason))
