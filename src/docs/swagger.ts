import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "app/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Sellit API Challenge",
        version: "1.0",
      },
      security: [],
      paths: {
        "/api/products": {
          get: {
            summary: "Buscar produtos",
            description: "Retorna uma lista de todos os produtos com base em uma busca.",
            parameters: [
              {
                name: "search",
                in: "query",
                required: false,
                description: "Filtrar produtos pelo nome ou nome do produtor",
                schema: {
                  type: "string",
                },
              },
            ],
            responses: {
              200: {
                description: "Lista de produtos",
                content: {
                  "application/json": {
                    schema: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: { type: "integer" },
                          name: { type: "string" },
                          price: { type: "number" },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          post: {
            summary: "Criar novo produto",
            description: "Cria um novo produto.",
            requestBody: {
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      id: { type: "string" },
                      category_id: { type: "string" },
                      name: { type: "string" },
                      description: { type: "string" },
                      producer_name: { type: "string" },
                      producer_email: { type: "string" },
                      cover: { type: "string" },
                      thumbnail: { type: "string" },
                      price: { type: "number" },
                      updated_at: { type: "string" },
                      created_at: { type: "string" },
                    },
                    required: [
                      "id",
                      "category_id",
                      "name",
                      "description",
                      "producer_name",
                      "producer_email",
                      "cover",
                      "thumbnail",
                      "price",
                    ],
                  },
                },
              },
            },
            responses: {
              201: {
                description: "Produto criado com sucesso",
              },
            },
          },
        },
        "/api/products/{id}": {
          get: {
            summary: "Buscar um produto pelo ID",
            description: "Retorna um produto específico pelo ID.",
            parameters: [
              {
                name: "id",
                in: "path",
                required: true,
                description: "ID do produto",
                schema: {
                  type: "string",
                },
              },
            ],
            responses: {
              200: {
                description: "Produto encontrado",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        id: { type: "string" },
                        category_id: { type: "string" },
                        name: { type: "string" },
                        description: { type: "string" },
                        producer_name: { type: "string" },
                        producer_email: { type: "string" },
                        cover: { type: "string" },
                        thumbnail: { type: "string" },
                        price: { type: "number" },
                        updated_at: { type: "string" },
                        created_at: { type: "string" },
                      },
                    },
                  },
                },
              },
              404: {
                description: "Produto não encontrado",
              },
            },
          },
        },
      },
    },
  });

  return spec;
};
