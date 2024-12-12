const {models} = require('../db/sqlite/index');

class NoteService {
  constructor() {}

  async create(data) {
    const newNote = await models.Note.create({
      ...data,
    });
    return newNote;
  }

  async find() {
    const rta = await models.Note.findAll();
    return rta;
  }

  async findByUserId(userId) {
    const rta = await models.Note.findAll({
      where: { userId }
    });
    return rta;
  }

  async findOne(id) {
    const note = await models.Note.findByPk(id);
    if (!note) {
      throw boom.notFound('note not found');
    }
    return note;
  }

  async update(id, changes) {
    const note = await this.findOne(id);
    const rta = await note.update(changes);
    return rta;
  }

  async delete(id) {
    const note = await this.findOne(id);
    await note.destroy();
    return { id };
  }
}

module.exports = NoteService;
