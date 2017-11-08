import Bacon from 'baconjs';
// import Promise from 'bluebird'

// a monad is a type of functor
// a functor implements map
// a monad implements flatmap
// flatmap flattens the stream to get the values
let robots = [{name: 'rosie', show: 'jetsons'},
              {name: 'robby', show: 'lost in space'},
              {name: 'r2', show: 'star wars'}]

const getRobotShow = (name) => {
  console.log(name)
  const shows = robots
                  .filter(r => r.name === name)
                  .map(r => r.show)
                  .join()

  const getRobotShow = new Promise((resolve, reject) => {
    setTimeout(() => resolve(shows), 2000);
  })

  const stream = Bacon.fromPromise(getRobotShow)

  return stream
}


const stream = new Bacon.Bus()

  stream
    .flatMap(name => getRobotShow(name))
    .map(name => name.toUpperCase())
    .onValue(name => console.log(name))

  stream.push('r2')
  stream.push('robby')
  stream.push('r2')
  stream.push('rosie')
  stream.push('r2')
