import { getProductById } from "@/core/use-cases/get-product-by-id";
import { AppError } from "@/infra/middlewares/error-handler";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    if (!id) {
      throw new AppError("ID é obrigatório", 400);
    }

    const product = await getProductById(id);

    return NextResponse.json(product);
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
