function foo(){
  return bar();
  var bar = function() {
    return 3;
  };
}
console.log(foo());