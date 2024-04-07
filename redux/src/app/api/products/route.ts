import ProductModel from "@/db/models/Product";

export async function GET(request: Request) {
  const products = await ProductModel.getAllProducts();

  return Response.json(
    {
      data: products,
    },
    { status: 200 }
  );
}