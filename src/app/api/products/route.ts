import { createProductUseCase } from "@/core/use-cases/create-product";
import { searchProduct } from "@/core/use-cases/search-product";
import { AppError } from "@/infra/middlewares/error-handler";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  try {
    await createProductUseCase(data);
    return NextResponse.json({ message: "Produto criado com sucesso!" });
  } catch (err) {
    if (err instanceof AppError) {
      return NextResponse.json(
        {
          message: err.message,
          details: err.details,
        },
        { status: err.statusCode }
      );
    }

    return NextResponse.json(
      { message: "Erro inesperado", details: err },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("search");

  try {
    if (!query) {
      throw new AppError('"search" é obrigatório', 500);
    }

    const products = await searchProduct(query);

    if (products.length === 0) {
      throw new AppError("Nenhum produto encontrado", 500);
    }

    return NextResponse.json(products);
  } catch (err) {
    if (err instanceof AppError) {
      return NextResponse.json(
        {
          message: err.message,
          details: err.details,
        },
        { status: err.statusCode }
      );
    }

    return NextResponse.json(
      { message: "Erro inesperado", details: err },
      { status: 500 }
    );
  }
}
