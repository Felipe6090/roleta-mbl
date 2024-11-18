import Roulette from "@/components/roulette";
import { BASE_API_URL } from "@/utils/constants";

async function fetchContent() {
  const res = await fetch(`${BASE_API_URL}api/content`);
  if (!res.ok) throw new Error("Erro ao carregar conteúdos");
  return res.json();
}

export default async function Home() {
  if (!BASE_API_URL) {
    return null;
  }
  const content = await fetchContent();

  return (
    <div className="flex flex-col items-center justify-center bg-1B1B1D">
      <main className="flex items-center justify-center w-screen h-screen">
        <Roulette slides={content} />
      </main>
    </div>
  );
}
