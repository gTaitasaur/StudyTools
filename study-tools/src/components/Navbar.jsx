function Navbar() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <header className="flex items-center justify-between border-b border-[#f0f2f4] px-10 py-3">
        <div className="flex items-center gap-4 text-[#111418]">
          <h2 className="text-lg font-bold">Study Hub</h2>
        </div>
        <nav className="flex gap-8">
          <a href="#" className="text-sm font-medium">
            Inicio
          </a>
          <a href="#" className="text-sm font-medium">
            Herramientas
          </a>
          <a href="#" className="text-sm font-medium">
            Comunidad
          </a>
          <a href="#" className="text-sm font-medium">
            Recursos
          </a>
        </nav>
      </header>

      <main className="px-40 flex flex-1 justify-center py-5">
        <h2 className="text-[28px] font-bold text-center">
          Herramientas de Estudio
        </h2>
        {/* Aquí pegas tu grid con las tarjetas */}
      </main>
    </div>
  );
}

export default Navbar;
