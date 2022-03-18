export const GRAPH_API = 'http://localhost:4000/graphql';

export const GET_PRODUCTS_QUERY = `
query  {
    products {
        id
        name
        title
        price
        description
        image
    }
}
`;
export const GET_CURRENT_PRODUCT = `
query ($id: ID!) {
    product(id: $id) {
      id
      name
      title
      price
      description
      image
    }
  }`;

export const GET_ARTICLES_QUERY = `
query  {
    articles {
        id
        title
        description
        content
        image
         
    }
}
`;

export const CREATE_ARTICLE = `
mutation CreateArticle($title: String, $description: String, $image: String, $content: String)  {
    createArticle(title: $title, description: $description, image: $image, content: $content) {
     success
    }
  }
  `;
