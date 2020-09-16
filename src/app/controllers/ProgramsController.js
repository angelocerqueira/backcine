import Movie from '../models/Movie';
import File from '../models/File';
import Category from '../models/Category';

class ProgramsController {
  async index(req, res) {
    const { id } = req.params;

    const movies = await Movie.findAll({
      where: { category_id: id },
      attributes: [
        'id',
        'title',
        'subtitle',
        'url',
        'sinopse',
        'dir',
        'duration',
        'publication',
        'longa',
        'category_id',
        'file_id',
      ],
      order: [['title', 'ASC']],
      include: [
        {
          model: File,
          as: 'image',
          attributes: ['url', 'id', 'name', 'path'],
        },
        { model: Category, as: 'category', attributes: ['id', 'name'] },
      ],
    });

    return res.json(movies);
  }

  async show(req, res) {
    const { id } = req.params;
    const movie = await Movie.findByPk(id, {
      attributes: [
        'id',
        'title',
        'subtitle',
        'url',
        'sinopse',
        'dir',
        'duration',
        'publication',
        'longa',
        'category_id',
        'file_id',
      ],
      include: [
        {
          model: File,
          as: 'image',
          attributes: ['url', 'id', 'name', 'path'],
        },
        { model: Category, as: 'category', attributes: ['id', 'name'] },
      ],
    });

    return res.json(movie);
  }

  async store(req, res) {
    const resposta = req.body;

    const movie = await Movie.create(resposta);

    return res.json(movie);
  }

  async update(req, res) {
    const { id } = req.params;
    const resposta = req.body;

    const movieExists = await Movie.findByPk(id);

    if (!movieExists) {
      return res.json({ error: 'video não encontrado' });
    }

    const movies = await movieExists.update(resposta);
    return res.json(movies);
  }
}

export default new ProgramsController();
