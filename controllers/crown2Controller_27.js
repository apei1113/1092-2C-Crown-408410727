const Category_27 = require('../models/categoryModel_27');

exports.getHomepage = async (req, res) => {
  let data;
  try {
    const [rows] = await Category_27.fetchAll();
    data = rows;
    // res.json(data);
    res.render('crown2_27', {
      title: '408410727 (async/await)',
      data,
    });
  } catch (err) {
    console.log('error', err);
  }
};

exports.getProductsByCategory = async (req, res) => {
  console.log('req.params', req.params.product);
  let data = {};
  data.cid = 0;
  if (req.params.product === 'hats') data.cid = 1;
  else if (req.params.product === 'jackets') data.cid = 2;

  res.json(data);
};
