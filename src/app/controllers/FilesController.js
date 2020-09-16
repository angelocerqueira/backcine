import File from '../models/File';

class FileController {
  async index(req, res) {
    const { id } = req.params;
    const movies = await File.findByPk(id);

    return res.json(movies);
  }

  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });
    return res.json(file);
  }
}

export default new FileController();
