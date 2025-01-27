import { AppError } from "@/infra/middlewares/error-handler";
import { Product } from "../domain/entitites/product";
import { productRepository } from "../repositories/product-repository";

export const searchProduct = async (search: string): Promise<Product[]> => {
  try {
    return await productRepository.searchByNameOrProducer(search);
  } catch (err) {
    throw new AppError("Erro ao buscar produto.", 500, err);
  }
};
