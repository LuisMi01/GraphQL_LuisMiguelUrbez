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
