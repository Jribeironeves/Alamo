"use client";

import React from "react";

interface Routine {
  id: string;
  time: string;
  title: string;
  details: string[];
  cho: string;
  ptn: string;
  lip: string;
  mAU: string;
}

interface RoutineCardProps {
  routine: Routine;
}

export default function RoutineCard({ routine }: RoutineCardProps) {
  const observacaoIndices = routine.details
    .map((line, idx) =>
      line.toLowerCase().startsWith("observação") ? idx : -1
    )
    .filter((idx) => idx !== -1);

  const lastObservacaoIndex =
    observacaoIndices.length > 0
      ? observacaoIndices[observacaoIndices.length - 1]
      : -1;

  const penultimateIndex = routine.details.length - 2;

  return (
    <div
      className="scroll-container custom-scroll"
      style={{
        maxHeight: "249px",
        overflowY: "auto",
        paddingRight: "6px",
        maxWidth: "868px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div
        className={`flex justify-between p-4 mb-4 ${
          parseInt(routine.id) % 2 === 0 ? "bg-[#F5F6F8]" : "bg-white"
        }`}
        style={{
          height: 187,
          borderRadius: 9,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div className="overflow-hidden pr-2">
          <h3
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#414552",
              marginBottom: 4,
            }}
          >
            {routine.time} – {routine.title}
          </h3>

          <ul className="pl-4 list-none space-y-0.5">
            {routine.details.map((line, idx) => {
              const isLastObservacao = idx === lastObservacaoIndex;
              const isPenultimate = idx === penultimateIndex;

              return (
                <li
                  key={idx}
                  style={{
                    fontSize: isLastObservacao ? 12 : 14,
                    fontWeight: 400,
                    color: "#374151",
                    paddingLeft: isPenultimate ? "1.2rem" : undefined,
                  }}
                >
                  {line}
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="flex flex-col text-right overflow-y-auto w-36"
          style={{
            maxHeight: "100%",
            paddingRight: "4px",
            gap: "1.4rem",
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 500, color: "#414552" }}>
            CHO: {routine.cho}
          </div>
          <div style={{ fontSize: 12, fontWeight: 500, color: "#414552" }}>
            PTN: {routine.ptn}
          </div>
          <div style={{ fontSize: 12, fontWeight: 500, color: "#414552" }}>
            LIP: {routine.lip}
          </div>
          <div
            className="cursor-pointer"
            style={{ fontSize: 12, fontWeight: 500, color: "#675DFF" }}
          >
            {routine.mAU}
          </div>
        </div>
      </div>
    </div>
  );
}
