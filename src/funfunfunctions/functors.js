import Promise from 'bluebird'
// a functor implements map
// array.prototype.map
// so array is a functor
let robots = [{name: 'rosie', show: 'jetsons'},
              {name: 'robby', show: 'lost in space'},
              {name: 'r2', show: 'star wars'}]

const getRobots = new Promise((resolve, reject) => {
  setTimeout(() => resolve(robots), 2000);
})

const names = getRobots
                .map(r => r.name)
                .then((result) => console.log(result), (reason) => console.log(reason))
