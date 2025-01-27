import { database } from "@/infra/database/drizzle/database";
import { products } from "@/infra/database/drizzle/schema";
import { AppError } from "@/infra/middlewares/error-handler";
import { eq, ilike, or } from "drizzle-orm";
import { Product } from "../domain/entitites/product";
import { productSchema } from "../validations/schemas/product-schema";

export const productRepository = {
  async insert(product: Product) {
    try {
      const validatedProduct = productSchema.parse(product);

      return await database.insert(products).values(validatedProduct);
    } catch (err) {
      throw new AppError(
        "Erro ao inserir produto no banco de dados.",
        500,
        err
      );
    }
  },

  async findById(id: string): Promise<Product> {
    const result = await database
      .select()
      .from(products)
      .where(eq(products.id, id))
      .limit(1);

    if (result.length === 0) {
      throw new AppError("Produto não encontrado.", 500);
    }

    const product = result[0];

    const mappedProduct: Product = {
      ...product,
      price: !!product.price ? parseFloat(product.price as string) : null,
    };

    return mappedProduct;
  },

  async searchByNameOrProducer(search: string): Promise<Product[]> {
    const results = await database
      .select()
      .from(products)
      .where(
        or(
          ilike(products.name, `%${search}%`),
          ilike(products.producer_name, `%${search}%`)
        )
      );

    const mappedProducts: Product[] = results.map((product) => ({
      ...product,
      price: product.price ? parseFloat(product.price as string) : 0,
    }));

    return mappedProducts;
  },
};
