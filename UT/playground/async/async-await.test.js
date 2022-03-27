function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // do something...
      const err = false;

      if (err) {
        reject("error");
      } else {
        resolve("peanut butter");
      }
    }, 1000);
  });
}


function fetchDataError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // do something...
      const err = true;

      if (err) {
        reject("error");
      } else {
        resolve("peanut butter");
      }
    }, 1000);
  });
}

test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchDataError();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

/*
   async 和 await 联合.resolves or .reject一起使用
*/
test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  await expect(fetchDataError()).rejects.toMatch("error");
});
