

function fetchData(callback)
{
  setTimeout(() => {
    callback && callback('good');
  }, 1000);
}

/*
  Jest会等done回调函数执行结束后，结束测试
*/
test('the data is good', done => {
  function callback(data) {
    try {
      expect(data).toBe('good');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
