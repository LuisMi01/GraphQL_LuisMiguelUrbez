import { gql } from '@apollo/client';

export const GET_LIBROS_CATEGORIA = gql`
    query GetLibrosCategoria($nombre: String!) {
        librosPorCategoria(nombre: $nombre) {
        titulo
        autor
        iban
        disponible
        }
    }
`;

export const GET_AUTORES = gql`
    query GetAutores {
    autores {
        nombre
        escritoPorLibros {
            titulo
            autor
            iban
            disponible
        }
    }
    }
`;

export const GET_LIBROS = gql`
    query GetLibros {
        libros {
            titulo
            autor
            iban
            disponible
        }
    }
`;

export const REGISTRAR_USUARIO = gql`
  mutation registrarUsuario($nombre: String!, $email: String!, $contrasena: String!, $rol: String!) {
    registrarUsuario(nombre: $nombre, email: $email, contrasena: $contrasena, rol: $rol) {
      nombre
      contrasena
      email
      rol
    }
  }
`;

export const INICIAR_SESION = gql`
  mutation iniciarSesion($email: String!, $contrasena: String!) {
    iniciarSesion(email: $email, contrasena: $contrasena) {
      email
      contrasena
    }
  }
`;
