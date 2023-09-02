const counter = () => {
  let count = 0;
  console.log({ count });

  const closureIncrement = () => {
    // closure function dans la function scope de counter
    count += 1;
    console.log(count);
    return count;
  };
  return closureIncrement;
};

const increment = counter();

increment();
increment();
let final = increment();

console.log({ final });
