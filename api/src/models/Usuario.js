const bcrypt = require('bcrypt');


class Usuario {
    constructor(driver) {
      this.driver = driver;
    }
  
    async create({ nombre, email, contrasena, rol }) {
      const session = this.driver.session();
      const result = await session.run(
        'CREATE (u:Usuario {nombre: $nombre, email: $email, contrasena: $contrasena, rol: $rol}) RETURN u',
        { nombre, email, contrasena, rol }
      );
      session.close();
      return result.records[0].get('u').properties;
    }
  
    async findOne(email) {
      try {
        const session = this.driver.session();
        const result = await session.run(
          'MATCH (u:Usuario {email: $email}) RETURN u',
          { email }
        );
        session.close();
        return result.records[0] ? result.records[0].get('u').properties : null;
      } catch (error) {
        console.error('Error al buscar el usuario:', error);
      }
    }

    async verificarContrasena(email, contrasena) {
      const usuario = await this.findOne(email);
      if (usuario && bcrypt.compareSync(contrasena, usuario.contrasena)) {
        return usuario;
      }
      return null;
    }
  }

  module.exports = Usuario;