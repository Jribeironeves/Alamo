/* eslint-disable @next/next/no-img-element */
"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRoutineStore } from "@/stores/useRoutineStore";

export default function Header() {
  const { setSearchTerm, openModal } = useRoutineStore();

  return (
    <header className="max-w-4xl space-y-4 mb-6 mx-auto border-b border-[#E4E4E4] pb-3 font-system">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[#414552]">Cadastros</span>
        <div className="flex items-center">
          <span
            className="text-indigo-600 hover:text-indigo-700"
            style={{
              fontWeight: 600,
              fontSize: 20,
              width: 58,
              height: 14.92,
              display: "inline-block",
              lineHeight: "14.92px",
              userSelect: "none",
              textAlign: "center",
            }}
          >
            Alamo
          </span>

          <Button
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center px-3 text-[14px] font-semibold ml-3"
            style={{
              width: 80,
              height: 23,
              fontWeight: 600,
              fontSize: 14,
              borderRadius: 5,
            }}
          >
            <img
              src="/tarefas.svg"
              alt="Ícone Tarefas"
              style={{ width: 16, height: 16 }}
            />
            <span className="ml-[-2px] text-[14px] font-semibold">Tarefas</span>
          </Button>

          <div className="flex items-center ml-3">
            <Button variant="ghost" size="sm" className="h-8 p-1.5">
              <img
                src="/box.svg"
                alt="Ícone Box"
                style={{ width: 17, height: 15.58 }}
              />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 p-1.5 -ml-1">
              <img
                src="/info.svg"
                alt="Ícone Info"
                style={{ width: 15.3, height: 15.3 }}
              />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 p-1.5 -ml-1">
              <img
                src="/config.svg"
                alt="Ícone Configuração"
                style={{ width: 16.85, height: 16.85 }}
              />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pb-6">
        <h1 className="text-[28px] font-semibold text-[#414552]">
          Gestão de rotinas de laboratório
        </h1>
        <Button
          size="sm"
          className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center px-4"
          onClick={openModal}
          style={{
            width: 158,
            height: 30,
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          <img
            src="/add.svg"
            alt="Adicionar"
            style={{ width: 12, height: 12, marginRight: 2 }}
          />
          Adicionar Rotina
        </Button>
      </div>

      <div className="flex items-center space-x-2 mt-[2rem]">
        <div className="relative" style={{ width: 351, height: 26 }}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#414552] w-4 h-4" />
          <Input
            type="search"
            className="pl-10 text-sm"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 6,
              border: "1px solid #E4E4E4",
              backgroundColor: "#FFFFFF",
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Button
          size="sm"
          className="text-white hover:bg-indigo-700 flex items-center justify-center"
          style={{
            width: 79,
            height: 26,
            backgroundColor: "#4F46E5",
            borderRadius: 6,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Buscar
        </Button>

        <Button
          size="sm"
          className="text-white hover:bg-[#081C30] flex items-center justify-center"
          style={{
            width: 154,
            height: 26,
            backgroundColor: "#0A2540",
            borderRadius: 6,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Filtragem Avançada
        </Button>
      </div>
    </header>
  );
}
