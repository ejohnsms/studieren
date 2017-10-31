var MyModules = (function Manager() {
	var modules = {};

	function define(name, deps, impl) {
		for (var i=0; i<deps.length; i++) {
			deps[i] = modules[deps[i]];
		}
		modules[name] = impl.apply( impl, deps );
	}

	function get(name) {
		return modules[name];
	}

	return {
		define: define,
		get: get
	};
})();

MyModules.define('eBrain', [], function(){
  var bootTime = 3;

  function bootUp() {
    console.log('boot started');
    for (var i = 0; i < bootTime; i++) {
      (function(j){
        setTimeout(function(){
            console.log('booting...: ' + j);
        }, i * 1000);
      })(i);
    }
  }

  return {
      bootUp: bootUp
  }
});

MyModules.define('Robot', ['eBrain'], function(cpu) {
  // yo! - the eBrain dependency gets matched up
  // with the cpu param because of impl.apply(impl, deps)
  // deps are passed arguments
  // we could also have zero params and call the following
  // to get an array of the arguments
  // var args = Array.prototype.slice.call(arguments)
  // then we could call args[0].bootUp()

  var model = "nexus 6";
  var name = "";

  function setName(newName) {
    name = newName;
  }

  function getName() {
    return name;
  }

  return {
    model: model,
    setName: setName,
    getName: getName,
    boot: cpu.bootUp
  }
});

var cpu = MyModules.get('eBrain');
var robot = MyModules.get('Robot');

console.log(robot.model);
robot.setName("Pris");
console.log(robot.getName());
robot.boot();
