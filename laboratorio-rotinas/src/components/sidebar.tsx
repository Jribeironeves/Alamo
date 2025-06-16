/* eslint-disable @next/next/no-img-element */
export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md h-screen p-6 flex flex-col border-r border-gray-200">
      <div className="flex items-center gap-3 mb-10 pb-6">
        <img
          src="/perfil.svg"
          alt="Avatar"
          className="rounded-full"
          style={{ width: 22, height: 22 }}
        />
        <span
          className="font-semibold"
          style={{ color: "#414552", fontSize: 14 }}
        >
          Marcelo Cavalcante
        </span>
      </div>

      <nav className="flex flex-col gap-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="/home.svg"
            alt="Página Inicial"
            style={{ width: 16, height: 16 }}
          />
          <span
            className="font-semibold"
            style={{ color: "#414552", fontSize: 14 }}
          >
            Página Inicial
          </span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="/clientes.svg"
            alt="Clientes"
            style={{ width: 16.5, height: 18.5 }}
          />
          <span
            className="font-semibold"
            style={{ color: "#414552", fontSize: 14 }}
          >
            Clientes
          </span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="/agenda.svg"
            alt="Agenda"
            style={{ width: 14.65, height: 17.75 }}
          />
          <span
            className="font-semibold"
            style={{ color: "#414552", fontSize: 14 }}
          >
            Agenda
          </span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="/financeiro.svg"
            alt="Financeiro"
            style={{ width: 16, height: 16 }}
          />
          <span
            className="font-semibold"
            style={{ color: "#414552", fontSize: 14 }}
          >
            Financeiro
          </span>
        </div>

        <div className="relative top-[4rem]">
          <div className="flex items-center gap-2 mb-1 cursor-pointer">
            <img
              src="/cadastros.svg"
              alt="Cadastros"
              style={{ width: "15.75px", height: "16.74px" }}
            />
            <span
              className="font-semibold"
              style={{ fontSize: 14, color: "#414552" }}
            >
              Cadastros
            </span>
          </div>

          <div
            className="pl-8 font-semibold cursor-pointer"
            style={{ fontSize: 14, color: "#675DFF" }}
          >
            Rotinas
          </div>
        </div>
      </nav>
    </aside>
  );
}
