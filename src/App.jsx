import React, { useState } from "react";
import candidates2 from "./data/candidates2";
import papeleta from "./assets/papeleta.png";

const App = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-[#1B3A4B] to-[#14532D] text-white shadow-lg">
        <div className="bg-[#17303D] text-gray-300 text-xs py-1 text-center tracking-wide">
          Este proyecto es solo con fines informativos
        </div>

        <div className="container mx-auto flex flex-col items-center py-6 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 mb-3 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 10h16M4 14h16M10 6h4m-2 8v4"
            />
          </svg>

          <h1 className="text-3xl font-bold uppercase text-center">
            Papeleta Electoral
          </h1>
          <p className="text-sm tracking-widest uppercase text-gray-300">
            ¿Qué promesas hacen los candidatos? – Bolivia 2025
          </p>
        </div>
      </header>

      {/* INSTRUCCIONES */}
      
      <div className="container mx-auto px-4 py-3 mt-2 bg-gray-50 rounded-md shadow-sm backdrop-blur-sm">
        <h2 className="flex items-center text-xl font-semibold mb-3 text-gray-900">
          <svg
            className="w-6 h-6 mr-2 text-yellow-500 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
            ></path>
          </svg>
          Instrucciones
        </h2>
        <p className="mb-2 text-gray-700 leading-relaxed">
          Haz click en las áreas de la papeleta para ver las promesas de cada candidato.
        </p>
      </div>


      {/* PAPELETA */}
      <main className="flex-1 container mx-auto px-4 py-6 relative">
        <div className="relative shadow-lg rounded-lg overflow-hidden">
          <img
            src={papeleta}
            alt="Papeleta Electoral"
            className="w-full rounded-lg"
          />

          {/* Áreas interactivas */}
          {candidates2.map((area) => (
            <div
              key={area.id}
              onClick={() => setSelected(area)}
              className={`absolute ${area.style} group cursor-pointer`}
            >
              <div className="w-full h-full bg-transparent border-2 border-transparent group-hover:border-yellow-400 group-hover:bg-black/50 group-hover:backdrop-blur-sm group-hover:scale-105 group-hover:shadow-xl transition duration-200 flex items-center justify-center">
                <span
                  className="opacity-0 group-hover:opacity-100
                      text-white font-bold text-center drop-shadow-lg px-2
                      text-[0.35rem] sm:text-[0.625rem] md:text-[0.75rem] lg:text-base
                    ">
                  {area.nombre}
                  <br />
                  <span className="text-[0.25rem] sm:text-[0.5rem] md:text-[0.625rem] font-normal">
                    Haz click para ver sus promesas
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </main >
      <div className="container mx-auto px-4 py-3 mt-2 bg-gray-50 rounded-md shadow-sm backdrop-blur-sm">
        <h2 className="flex items-center text-xl font-semibold mb-3 text-gray-900">
          Mas información?          
        </h2>
        <p className="mb-2 text-gray-700 leading-relaxed">
          ingresa a: <a class='text-blue-500' target="_blank" href="https://www.chequeatuvoto.chequeabolivia.bo/analisis-comparativo">Chequea Tu Voto!</a>
        </p>
      </div>
      {/* MODAL */}
      {
        selected && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full h-[60vh] overflow-hidden shadow-2xl border-t-4 border-yellow-400">
              <div className="grid grid-cols-1 md:grid-cols-2 h-[60vh]">
                {/* Video */}
                <div className="h-full">
                  <iframe
                    src={selected.video}
                    title="Video Promesas"
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                {/* Promesas */}
                <div className="p-6 flex flex-col justify-between">
                  <div className="p-2 overflow-y-auto">
                    <h2 className="font-bold text-2xl mb-4 text-gray-800">
                      {selected.nombre}
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {selected.promesas.map((p, i) => (
                        <li key={i} className="leading-relaxed">
                          <span dangerouslySetInnerHTML={{ __html: p }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t text-right bg-gray-50">
                    <button
                      onClick={() => setSelected(null)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm px-5 py-2 rounded shadow"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
              {/* Botón cerrar */}

            </div>
          </div>
        )
      }

      {/* FOOTER */}
      <footer className="bg-gray-100 border-t border-gray-200 py-4 mt-6">
        <div className="container mx-auto text-center px-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Datos recopilados de medios públicos – Uso no oficial
          </p>
        </div>
      </footer>
    </div >
  );
};

export default App;
