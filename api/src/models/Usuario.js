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
      const session = this.driver.session();
      const result = await session.run(
        'MATCH (u:Usuario {email: $email}) RETURN u',
        { email }
      );
      session.close();
      return result.records[0] ? result.records[0].get('u').properties : null;
    }

    async verificarContrasena(email, contrasena) {
      const usuario = await this.findOne(email);
      if (usuario && usuario.contrasena === contrasena) {
        return usuario;
      }
      return null;
    }
  }

  module.exports = Usuario;