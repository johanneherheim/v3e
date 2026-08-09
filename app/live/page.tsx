export default function Live() {
  return (
    <main className="min-h-screen bg-gray-950 px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-3xl font-bold">
          Voss 3-etappars: Fellesstart
        </h1>

        <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
          <iframe
            src="https://player.twitch.tv/?channel=vossevangenck&parent=www.v3e.no&parent=v3e.no"
            className="h-full w-full"
            allowFullScreen
            title="Voss 3-etappars: Fellesstart"
          />
        </div>
      </div>
    </main>
  );
}
