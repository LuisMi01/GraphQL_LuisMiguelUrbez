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