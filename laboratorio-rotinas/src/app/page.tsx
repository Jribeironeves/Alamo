/* eslint-disable react/no-unescaped-entities */
"use client";

import { useQuery } from "@tanstack/react-query";
import { useRoutineStore } from "@/stores/useRoutineStore";
import Header from "@/components/header";
import RoutineCard from "@/components/routine-card";
import AddRoutineModal from "@/components/add-routine-modal";
import Sidebar from "@/components/sidebar";
import React, { useEffect, useState } from "react";

type Routine = {
  id: string;
  time: string;
  title: string;
  details: string[];
  cho: string;
  ptn: string;
  lip: string;
  mAU: string;
};

type RoutinesData = {
  quasar: Routine[];
};

const routinesData: RoutinesData = {
  quasar: [
    {
      id: "1",
      time: "10:00",
      title: "Procedimento Matinal",
      details: [
        "Solução A – 5 mL",
        "Composto B ou C – 250 mg",
        "Reagente Medicida – 2 gotas",
        "Observação: Misturar em recipiente estéril",
        "Catalisador (CATPURE) – 5 mg",
        "Observação: Executar em fluxo laminar",
      ],
      cho: "26g",
      ptn: "25g",
      lip: "1.3g",
      mAU: "215 mAU",
    },
    {
      id: "2",
      time: "13:00",
      title: "Procedimento de Meto-dia",
      details: [
        "Solução B – 10 mL",
        "Composto D ou E – 150 mg",
        "Reagente Oleavíxix – 3 gotas",
        "Estabilizante (STABILAB) – 2 mg",
        "Observação: Agitar por 3 minutos antes de aplicar",
      ],
      cho: "26g",
      ptn: "25g",
      lip: "1.3g",
      mAU: "189 mAU",
    },
    {
      id: "3",
      time: "16:30",
      title: "Teste Térmico",
      details: [
        "Solução Térmica – 7 mL",
        "Agente B ou C – 300 mg",
        "Gotas de Neutralizante – 2 gotas",
        "Controle de Temperatura – 1 unidade",
        "Condutor (HEATPULSE) – 6 mg",
        "Observação: Usar luvas rítmicas reforçadas",
      ],
      cho: "26g",
      ptn: "25g",
      lip: "1.3g",
      mAU: "202 mAU",
    },
    {
      id: "4",
      time: "18:00",
      title: "Finalização do Ciclo",
      details: [
        "Solução de Lavagem – 8 mL",
        "Composto X ou Z – 200 mg",
        "Neutralizante Final – 1 gota",
        "Agente Secativo – 0.2 mL",
        "Catalisador (ENDO-CLEAN) – 4 mg",
        "Observação: Armazenar amostra a 4 °C",
      ],
      cho: "26g",
      ptn: "25g",
      lip: "1.3g",
      mAU: "210 mAU",
    },
  ],
};

export default function HomePage() {
  const { searchTerm, routines: storedRoutines } = useRoutineStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { data, isLoading } = useQuery<RoutinesData>({
    queryKey: ["routines"],
    queryFn: () =>
      new Promise<RoutinesData>((resolve) => {
        setTimeout(() => resolve(routinesData), 500);
      }),
    enabled: isClient,
  });

  const combinedRoutines = [...(data?.quasar || []), ...storedRoutines];

  const filteredRoutines = combinedRoutines.filter(
    (routine) =>
      routine.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      routine.time.includes(searchTerm)
  );

  return (
    <div className="flex min-h-screen bg-gray-100 overflow-hidden">
      <Sidebar />

      <main className="flex-1 py-6 bg-white overflow-hidden">
        <Header />
        <div
          className="max-w-4xl mx-auto overflow-y-auto"
          style={{
            maxHeight: "calc(100vh - 256px)",
            paddingRight: "6px",
          }}
        >
          {!isClient || isLoading ? (
            <div className="max-w-5xl mx-auto mt-10">
              <p className="text-center text-gray-500">Carregando rotinas...</p>
            </div>
          ) : (
            <div className="space-y-4 mt-4">
              {filteredRoutines.length > 0 ? (
                filteredRoutines.map((routine) => (
                  <RoutineCard key={routine.id} routine={routine} />
                ))
              ) : (
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <p className="text-gray-500">
                    Nenhuma rotina encontrada para "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <AddRoutineModal />
      </main>
    </div>
  );
}
