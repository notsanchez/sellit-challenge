import { AppError } from "@/infra/middlewares/error-handler";
import { Product } from "../domain/entitites/product";
import { productRepository } from "../repositories/product-repository";

export const getProductById = async (id: string): Promise<Product> => {
  try {
    return await productRepository.findById(id);
  } catch (err) {
    throw new AppError("Erro ao buscar produto.", 500, err);
  }
};
