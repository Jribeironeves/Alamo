"use client";

import React, { useState } from "react";
import { useRoutineStore } from "@/stores/useRoutineStore";
import { useShallow } from "zustand/react/shallow";

export default function AddRoutineModal() {
  const { isModalOpen, closeModal, addRoutine } = useRoutineStore(
    useShallow((state) => ({
      isModalOpen: state.isModalOpen,
      closeModal: state.closeModal,
      addRoutine: state.addRoutine,
    }))
  );

  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState<string[]>([]);
  const [cho, setCho] = useState("");
  const [ptn, setPtn] = useState("");
  const [lip, setLip] = useState("");
  const [mAU, setMAU] = useState("");

  function handleAddDetail() {
    setDetails([...details, ""]);
  }

  function handleDetailChange(index: number, value: string) {
    const newDetails = [...details];
    newDetails[index] = value;
    setDetails(newDetails);
  }

  function handleSubmit() {
    if (!time || !title) {
      alert("Por favor, preencha o horário e o título");
      return;
    }

    addRoutine({
      time,
      title,
      details,
      cho,
      ptn,
      lip,
      mAU,
    });

    closeModal();
    setTime("");
    setTitle("");
    setDetails([]);
    setCho("");
    setPtn("");
    setLip("");
    setMAU("");
  }

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-lg w-full max-h-[90vh] overflow-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Adicionar Rotina</h2>

        <div className="grid grid-cols-1 gap-5">
          <label className="flex flex-col text-gray-700 font-medium">
            Horário:
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-2 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ex: 10:00"
            />
          </label>

          <label className="flex flex-col text-gray-700 font-medium">
            Título:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Título da rotina"
            />
          </label>

          <div className="flex flex-col text-gray-700 font-medium">
            <span className="mb-2">Detalhes:</span>
            {details.map((detail, idx) => (
              <input
                key={idx}
                type="text"
                value={detail}
                onChange={(e) => handleDetailChange(idx, e.target.value)}
                className="mb-2 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder={`Detalhe #${idx + 1}`}
              />
            ))}
            <button
              type="button"
              onClick={handleAddDetail}
              className="self-start text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              + Adicionar detalhe
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-gray-700 font-medium">
            <label className="flex flex-col">
              CHO:
              <input
                type="text"
                value={cho}
                onChange={(e) => setCho(e.target.value)}
                className="mt-2 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>

            <label className="flex flex-col">
              PTN:
              <input
                type="text"
                value={ptn}
                onChange={(e) => setPtn(e.target.value)}
                className="mt-2 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>

            <label className="flex flex-col">
              LIP:
              <input
                type="text"
                value={lip}
                onChange={(e) => setLip(e.target.value)}
                className="mt-2 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>
          </div>

          <label className="flex flex-col text-gray-700 font-medium">
            mAU:
            <input
              type="text"
              value={mAU}
              onChange={(e) => setMAU(e.target.value)}
              className="mt-2 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={closeModal}
            className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
