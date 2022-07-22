function getIdGeneratorFunction(startFrom) {
  // throw new Error('Not implemented');
  function* constructor() {
    let value = startFrom;
    console.log(value);
    while (true) {
      yield value;
      console.log(value);
      value += 1;
    }
    // for (let a = startFrom; ; a += 1) yield a;
  }
  const generator = constructor();
  return () => generator.next().value;
}

const f0 = getIdGeneratorFunction(0);
for (let i = 0; i < 10; i += 1) {
  f0();
}
