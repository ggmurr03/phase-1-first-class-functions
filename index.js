
function cat(){return 1+2};
  function receivesAFunction (cat) {
    return cat()
  }

  function returnsANamedFunction(){
    function namedFunction(){return 1 + 2};
    return namedFunction
  }

  function returnsAnAnonymousFunction(){
    return function(){1+2}
  }