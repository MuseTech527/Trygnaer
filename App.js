import React, { useState } from "react";

export default function App() {
  const [checkedIn, setCheckedIn] = useState(null);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">❤️ TrygNær</h1>

      <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-md text-center">
        <p className="text-lg font-medium mb-4">Har du sovet godt i nat?</p>
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setCheckedIn(true)}
            className="bg-blue-600 text-white rounded-xl px-6 py-2 text-lg shadow"
          >
            Ja
          </button>
          <button
            onClick={() => setCheckedIn(false)}
            className="bg-blue-600 text-white rounded-xl px-6 py-2 text-lg shadow"
          >
            Nej
          </button>
        </div>

        <div className="relative w-full h-48 bg-gray-100 rounded-xl flex items-center justify-around">
          <div className="flex flex-col items-center">
            🍲
            <span className="text-sm">Mad</span>
          </div>
          <div className="flex flex-col items-center">
            🏥
            <span className="text-sm">Sundhed</span>
          </div>
          <div className="flex flex-col items-center">
            🚿
            <span className="text-sm">Bad</span>
          </div>
        </div>

        <button className="mt-6 bg-blue-800 text-white px-6 py-3 rounded-full shadow text-lg flex items-center justify-center gap-2 w-full">
          ☎️ Tryghedsopkald
        </button>
      </div>
    </div>
  );
}
