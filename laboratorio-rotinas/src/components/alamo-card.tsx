import React from "react";

interface AlamoItem {
  id: number;
  cho: string;
  ptn: string;
  lip: string;
  mau: string;
}

interface AlamoCardProps {
  item: AlamoItem;
}

export default function AlamoCard({ item }: AlamoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="font-semibold">CHO:</span>
          <span className="text-gray-800">{item.cho}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">PTN:</span>
          <span className="text-gray-800">{item.ptn}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">LIP:</span>
          <span className="text-gray-800">{item.lip}</span>
        </div>
        <div className="text-right">
          <span className="font-bold text-gray-800">{item.mau}</span>
        </div>
      </div>
    </div>
  );
}
