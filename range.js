function *range(from, to) {
    // your code goes here
    while (from <= to) {
        let start = yield from
        from++
    }
  }

  for (var r of range(5, 10)) {
      console.log( r );
  }