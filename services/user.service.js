const boom = require('@hapi/boom');
const  bcrypt = require('bcrypt');

//const getConnection = require('../libs/postgres');
//const pool = require('../libs/postgres.pool');
const { models } = require('./../libs/sequelize');

class UserService {
  constructor() {
    //this.pool = pool;
    //this.pool.on('error', (err) => console.log(err));
  }

  async create(data) {
    const hash = await bcrypt.hash(data.password,10);
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    //const client = await getConnection();
    //const rta = await client.query('SELECT * FROM task');
    //const query = 'SELECT * FROM task';
    const rta = await models.User.findAll({
      include: ['customer']
    });
    //const rta = await pool.query(query);
    return rta;
  }

  async findByEmail(email) {
    const rta = await models.User.findOne({
      where: { email }
    });
    //const rta = await pool.query(query);
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    user.destroy();
    return { id };
  }
}

module.exports = UserService;
