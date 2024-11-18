import Roulette from "@/components/roulette";

async function fetchContent() {
  const res = await fetch("http://localhost:3000/api/content");
  if (!res.ok) throw new Error("Erro ao carregar conteúdos");
  return res.json();
}

export default async function Home() {
  const content = await fetchContent();

  return (
    <div className="flex flex-col items-center justify-center bg-1B1B1D">
      <main className="flex items-center justify-center w-screen h-screen">
        <Roulette slides={content} />
      </main>
    </div>
  );
}
