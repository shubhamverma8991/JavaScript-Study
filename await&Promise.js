function asynchronous_operational_method() {
  let first_promise = new Promise((resolve, reject) => {
    console.log("zero");
    resolve("Hello");
  });
  let second_promise = new Promise((resolve, reject) => {
    console.log("first");
    setTimeout(() => {
      resolve(" GeeksforGeeks..");
    }, 1000);
  });
  let combined_promise = Promise.all([first_promise, second_promise]);
  console.log("second");
  return combined_promise;
}

async function display() {
  console.log("Start");
  let data = await asynchronous_operational_method();
  console.log("third");
  console.log(data);
}

display();
