import { gql, useMutation } from '@apollo/client';

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
  mutation RegistrarUsuario($nombre: String!, $email: String!, $contrasena: String!, $rol: String!) {
    registrarUsuario(nombre: $nombre, email: $email, contrasena: $contrasena, rol: $rol) {
      id
      nombre
      email
      rol
    }
  }
`;

export const INICIAR_SESION = gql`

`;