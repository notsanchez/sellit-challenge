import { AppError } from "@/infra/middlewares/error-handler";
import { Product } from "../domain/entitites/product";
import { productRepository } from "../repositories/product-repository";

export const createProductUseCase = async (product: Product): Promise<void> => {
  try {
    const now = new Date();
    if (!product.updated_at) {
      product.updated_at = now;
    }
    if (!product.created_at) {
      product.created_at = now;
    }

    await productRepository.insert(product);
  } catch (err) {
    throw new AppError("Erro ao criar produto.", 500, err);
  }
};
