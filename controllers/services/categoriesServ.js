const Category = require('../../models/categoryModel_27')

exports.fetchCategories = async () => {
    try{
        const [rows] = await Category.fetchAll();
        return rows;
    }catch(err){
        return {massage: 'Error in getting data'}
    }
}