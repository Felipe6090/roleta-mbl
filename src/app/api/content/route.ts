import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const content = await prisma.content.findMany({
      include: {
        tags: {
          include: {
            Tag: true, // Inclui os detalhes das tags relacionadas
          },
        },
      },
    });
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json(
      { error: `Erro ao buscar conteúdos.\n${error}` },
      { status: 500 }
    );
  }
}
