import { useState } from 'react';

function App() {
  const [montoCuenta, setMontoCuenta] = useState('');
  const [propinaPorcentaje, setPropinaPorcentaje] = useState(15);

  const cuenta = parseFloat(montoCuenta) || 0;
  const montoPropina = cuenta * (propinaPorcentaje / 100);
  const totalPagar = cuenta + montoPropina;

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 border border-slate-200">
        <h1 className="text-2xl font-bold text-slate-800 text-center mb-2">Calculadora de Propinas</h1>
        <p className="text-sm text-slate-500 text-center mb-6">Herramienta rápida y elegante</p>

        {/* Input del monto de la cuenta */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Monto de la cuenta ($)
          </label>
          <input
            type="number"
            value={montoCuenta}
            onChange={(e) => setMontoCuenta(e.target.value)}
            placeholder="Ej. 500"
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none text-lg text-slate-800"
          />
        </div>

        {/* Botones de porcentaje */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Selecciona el porcentaje de propina
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[10, 15, 20].map((porcentaje) => (
              <button
                key={porcentaje}
                onClick={() => setPropinaPorcentaje(porcentaje)}
                className={`py-3 rounded-xl font-semibold transition-all ${
                  propinaPorcentaje === porcentaje
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {porcentaje}%
              </button>
            ))}
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
          <div className="flex justify-between items-center text-slate-600">
            <span>Propina ({propinaPorcentaje}%):</span>
            <span className="text-lg font-semibold text-slate-800">${montoPropina.toFixed(2)}</span>
          </div>
          <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
            <span className="text-base font-bold text-slate-800">Total a Pagar:</span>
            <span className="text-2xl font-extrabold text-indigo-600">${totalPagar.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
