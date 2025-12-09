import React, { useState } from 'react';
import { Sparkles, Send, Copy, RefreshCw } from 'lucide-react';
import { MessageTone } from '../types';
import { generateBirthdayMessage } from '../services/geminiService';
import { FRIEND_NAME } from '../constants';

const AIMessageGenerator: React.FC = () => {
  const [memory, setMemory] = useState('');
  const [tone, setTone] = useState<MessageTone>(MessageTone.SENTIMENTAL);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!memory.trim()) return;
    
    setLoading(true);
    const msg = await generateBirthdayMessage(FRIEND_NAME, tone, memory);
    setGeneratedMessage(msg);
    setLoading(false);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-100">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-100 rounded-full text-brand-500">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Asistente de Felicitación con IA</h3>
                <p className="text-sm text-gray-500">¿No sabes qué escribir en la tarjeta? Deja que Gemini te ayude.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿De qué recuerdo quieres hablar?
                </label>
                <input
                  type="text"
                  value={memory}
                  onChange={(e) => setMemory(e.target.value)}
                  placeholder="Ej: Cuando fuimos al concierto, nuestras charlas nocturnas..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Qué tono prefieres?
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.values(MessageTone).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        tone === t
                          ? 'bg-brand-500 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading || !memory.trim()}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gray-900 hover:bg-black text-white rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <RefreshCw className="animate-spin w-5 h-5" />
                ) : (
                  <Sparkles className="w-5 h-5" />
                )}
                {loading ? 'Creando magia...' : 'Generar Mensaje Especial'}
              </button>
            </div>

            {generatedMessage && (
              <div className="mt-8 p-6 bg-brand-50 rounded-xl border border-brand-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-gray-700 italic text-lg leading-relaxed mb-4 font-serif">
                  "{generatedMessage}"
                </p>
                <div className="flex justify-end">
                  <button 
                    onClick={() => navigator.clipboard.writeText(generatedMessage)}
                    className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-800 font-medium"
                  >
                    <Copy size={16} /> Copiar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMessageGenerator;