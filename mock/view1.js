
module.exports = {
  [`POST /getView1`](req, res) {
    res.status(200).json({
      data: [
        {
          name: 'zhang san',
          age: 20,
          love: 'sport'
        },
        {
          name: '李四',
          age: 25,
          love: '篮球'
        },
      ],
      status: 0
    });
  }
};