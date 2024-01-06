import { gql } from '@apollo/client';

export const GET_LIBROS_CATEGORIA = gql`
    query GetLibrosCategoria($categoria: String!) {
        libros(categoria: $categoria) {
            titulo
            autor
            iban
            disponible
        }
    }
`;
