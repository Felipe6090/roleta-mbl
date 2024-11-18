import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const tags = await prisma.tag.findMany();
    return NextResponse.json(tags);
  } catch (error) {
    return NextResponse.json(
      { error: `Erro ao buscar tags.\n${error}` },
      { status: 500 }
    );
  }
}
