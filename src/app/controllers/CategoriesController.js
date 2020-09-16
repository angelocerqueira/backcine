import Category from '../models/Category';

class CategoriesController {
  async index(req, res) {
    const categories = await Category.findAll();
    return res.json(categories);
  }

  async store(req, res) {
    const resposta = req.body;

    const { id, name } = await Category.create(resposta);

    return res.json({ id, name });
  }
}

export default new CategoriesController();
