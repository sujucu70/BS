import React, { useState } from 'react';

interface Objection {
    id: string;
    title: string;
    situation: string;
    response: string;
    dosDonts: {
        dos: string[];
        donts: string[];
    };
}

const PricingNegotiation: React.FC = () => {
    const [selectedObjection, setSelectedObjection] = useState<Objection | null>(null);

    const objections: Objection[] = [
        {
            id: '1',
            title: 'Es muy caro',
            situation: 'Cliente dice que el precio es alto sin contexto específico',
            response: `"Entiendo tu preocupación. Déjame ponerlo en perspectiva: actualmente gastas €[X] al año en tu contact center. Nuestra solución reduce ese coste en un [Y]%, lo que significa un ahorro neto de €[Z] desde el primer año. 

La pregunta real no es si es caro, sino cuánto te está costando NO resolver [PAIN_POINT]. Cada mes que esperas, estás perdiendo €[MONTHLY_COST] en ineficiencias.

¿Qué te parece si revisamos juntos los números con tu situación específica?"`,
            dosDonts: {
                dos: [
                    'Reencuadrar como inversión, no gasto',
                    'Anclar en su coste actual y pain cuantificado',
                    'Usar ROI Calculator con sus números reales',
                    'Preguntar: "¿Comparado con qué es caro?"'
                ],
                donts: [
                    'Defender el precio directamente',
                    'Ofrecer descuento inmediatamente',
                    'Comparar con competidores más baratos',
                    'Asumir que no tienen presupuesto'
                ]
            }
        },
        {
            id: '2',
            title: 'No tenemos presupuesto',
            situation: 'Cliente dice que no hay presupuesto aprobado',
            response: `"Entiendo. Déjame preguntarte: ¿no tienen presupuesto porque no está aprobado aún, o porque no hay fondos disponibles?

[Si no está aprobado]
Perfecto. Entonces el siguiente paso es construir el business case juntos. Basado en lo que me compartiste, el coste de inacción es €[X]/año. ¿Qué necesitas de mí para justificar la inversión internamente?

[Si no hay fondos]
Entiendo. ¿Cuándo se abre el próximo ciclo presupuestario? Mientras tanto, podemos hacer un piloto de 2 meses con inversión mínima para demostrar valor. Si funciona, tendrás datos reales para el siguiente presupuesto."`,
            dosDonts: {
                dos: [
                    'Distinguir entre "no aprobado" vs "no disponible"',
                    'Ofrecer ayuda para construir business case',
                    'Proponer piloto como alternativa',
                    'Entender timing de presupuesto (Q4 planning)'
                ],
                donts: [
                    'Aceptar "no hay presupuesto" sin profundizar',
                    'Ofrecer financiación sin entender el problema real',
                    'Esperar pasivamente al próximo año',
                    'Asumir que el deal está muerto'
                ]
            }
        },
        {
            id: '3',
            title: 'Competidor X es más barato',
            situation: 'Cliente menciona que un competidor tiene precio menor',
            response: `"Es una buena observación. Déjame preguntarte: ¿comparaste solo el precio de licencia o el coste total de implementación y operación?

Muchos clientes que vinieron de [COMPETIDOR] nos dijeron que el precio inicial era atractivo, pero luego descubrieron costes ocultos en:
• Implementación (nosotros: 4-6 semanas vs ellos: 6-12 meses)
• Customizaciones (nosotros: incluidas vs ellos: €X por cambio)
• Mantenimiento y upgrades (nosotros: automático vs ellos: €X/año)

El TCO a 3 años de nuestra solución es 40% menor. ¿Quieres que te muestre la comparativa detallada?"`,
            dosDonts: {
                dos: [
                    'Cambiar conversación de precio a TCO',
                    'Usar Competitive Battlecard específica',
                    'Mencionar casos de clientes que migraron',
                    'Ofrecer comparativa detallada'
                ],
                donts: [
                    'Hablar mal del competidor directamente',
                    'Igualar el precio sin justificación',
                    'Asumir que precio es el único criterio',
                    'Entrar en guerra de precios'
                ]
            }
        },
        {
            id: '4',
            title: 'Necesito un descuento',
            situation: 'Cliente pide descuento directamente',
            response: `"Aprecio tu franqueza. Antes de hablar de descuentos, déjame entender: ¿el precio está fuera de tu rango presupuestario, o estás buscando optimizar la inversión?

[Si está fuera de presupuesto]
Entiendo. Tenemos algunas opciones:
• Implementación por fases (empezar con caso de uso más crítico)
• Modelo de pago basado en resultados
• Piloto de 2 meses con inversión reducida

[Si está optimizando]
Perfecto. Nuestro pricing ya es competitivo para el valor que entregamos. Lo que sí puedo hacer es:
• Incluir [EXTRA_FEATURE] sin coste adicional
• Extender el periodo de soporte de 3 a 6 meses
• Priorizar tu implementación para go-live más rápido

¿Cuál de estas opciones te ayudaría a avanzar?"`,
            dosDonts: {
                dos: [
                    'Entender la razón real detrás del pedido',
                    'Ofrecer valor adicional en vez de descuento',
                    'Proponer alternativas creativas',
                    'Mantener el valor percibido'
                ],
                donts: [
                    'Dar descuento sin pedir nada a cambio',
                    'Bajar precio sin entender objeción real',
                    'Usar descuento como primera táctica',
                    'Devaluar tu solución'
                ]
            }
        },
        {
            id: '5',
            title: 'Tenemos que pensarlo',
            situation: 'Cliente pide tiempo para pensar sin razón específica',
            response: `"Por supuesto, es una decisión importante. Déjame preguntarte: ¿hay algo específico que te genera dudas o es más una cuestión de timing?

[Si hay dudas específicas]
Perfecto, ¿qué aspectos quieres revisar? Puedo preparar información adicional sobre [X] para nuestra próxima conversación.

[Si es timing]
Entiendo. Solo para contexto: cada mes que esperas, estás perdiendo €[X] en [PAIN_POINT]. ¿Qué te parece si hacemos un piloto de 2 meses para validar el valor sin compromiso largo?

¿Qué te ayudaría a tomar una decisión más informada?"`,
            dosDonts: {
                dos: [
                    'Identificar la objeción real detrás del stall',
                    'Crear urgencia con coste de inacción',
                    'Proponer next steps concretos',
                    'Mantener momentum con follow-up específico'
                ],
                donts: [
                    'Aceptar "pensarlo" sin profundizar',
                    'Presionar agresivamente',
                    'Dejar el ball en su court sin next step',
                    'Asumir que el deal está perdido'
                ]
            }
        },
        {
            id: '6',
            title: 'Ya tenemos un proveedor',
            situation: 'Cliente tiene incumbent y está satisfecho',
            response: `"Entiendo, y no estoy aquí para que cambies solo por cambiar. Déjame preguntarte: ¿qué tan satisfecho estás en una escala de 1-10?

[Si <8]
Interesante. ¿Qué tendría que pasar para que sea un 10? [Escuchar pain points]

[Si 8-10]
Me alegra que estés satisfecho. Aun así, el mercado evoluciona rápido. Hace 2 años, lo que tienes era state-of-the-art, pero hoy hay tecnologías que pueden [DIFERENCIADOR_CLAVE].

¿Te parece si hacemos una sesión de benchmarking de 30 minutos para que veas qué es posible hoy? Sin compromiso, solo para que tengas visibilidad del mercado."`,
            dosDonts: {
                dos: [
                    'Respetar la relación existente',
                    'Identificar gaps en solución actual',
                    'Ofrecer benchmarking sin compromiso',
                    'Posicionar como evolución, no reemplazo'
                ],
                donts: [
                    'Atacar al proveedor actual',
                    'Asumir que están 100% satisfechos',
                    'Forzar un switch inmediato',
                    'Ignorar el switching cost'
                ]
            }
        }
    ];

    const pricingPrinciples = [
        {
            title: 'Valor > Precio',
            description: 'Siempre anclar la conversación en ROI y valor de negocio, no en coste por hora o licencia',
            icon: '💎'
        },
        {
            title: 'Cuantificar Pain',
            description: 'Traducir pain points a euros perdidos por mes/año para crear urgencia',
            icon: '💰'
        },
        {
            title: 'TCO vs Precio Inicial',
            description: 'Comparar coste total de propiedad a 3 años, no solo precio de entrada',
            icon: '📊'
        },
        {
            title: 'Compromiso Mutuo',
            description: 'Si pedimos descuento, pedir algo a cambio (caso de éxito, referencia, timeline acelerado)',
            icon: '🤝'
        },
        {
            title: 'Piloto como Alternativa',
            description: 'Cuando hay resistencia, proponer piloto de 2 meses para demostrar valor',
            icon: '🧪'
        },
        {
            title: 'Timing de Presupuesto',
            description: 'Entender ciclos presupuestarios (Q4 planning) para timing óptimo',
            icon: '📅'
        }
    ];

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f8f9fa] min-h-screen">
            <header className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-[#3F3F3F] tracking-tight mb-4">
                    Pricing & Negotiation
                </h1>
                <p className="text-xl text-[#B1B1B0] max-w-3xl mx-auto">
                    Herramienta de negociación para manejar objeciones de precio y cerrar deals
                </p>
            </header>

            {/* Pricing Principles */}
            <div className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-[#3F3F3F] mb-8 text-center">Principios de Pricing</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pricingPrinciples.map((principle, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                            <div className="text-4xl mb-3">{principle.icon}</div>
                            <h3 className="text-lg font-bold text-[#3F3F3F] mb-2">{principle.title}</h3>
                            <p className="text-sm text-[#B1B1B0]">{principle.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Objections Library */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-[#3F3F3F] mb-8 text-center">Biblioteca de Objeciones</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {objections.map((objection) => (
                        <div
                            key={objection.id}
                            onClick={() => setSelectedObjection(objection)}
                            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 cursor-pointer hover:shadow-lg hover:border-[#6D84E3] transition-all"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-2xl">🚧</span>
                                <h3 className="text-lg font-bold text-[#3F3F3F]">
                                    "{objection.title}"
                                </h3>
                            </div>
                            <p className="text-sm text-[#B1B1B0] mb-4">
                                {objection.situation}
                            </p>
                            <button className="text-sm text-[#6D84E3] font-semibold hover:underline">
                                Ver respuesta completa →
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Objection Detail Modal */}
            {selectedObjection && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    onClick={() => setSelectedObjection(null)}
                >
                    <div
                        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-[#6D84E3] to-[#3F3F3F] text-white p-6 rounded-t-xl">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-3xl">🚧</span>
                                        <h2 className="text-2xl font-bold">
                                            "{selectedObjection.title}"
                                        </h2>
                                    </div>
                                    <p className="text-sm opacity-90">{selectedObjection.situation}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedObjection(null)}
                                    className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {/* Response */}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-[#3F3F3F] mb-4 flex items-center gap-2">
                                    <span>💬</span> Respuesta Sugerida
                                </h3>
                                <div className="bg-[#E4E3E3] p-6 rounded-lg whitespace-pre-wrap text-[#3F3F3F]">
                                    {selectedObjection.response}
                                </div>
                            </div>

                            {/* Do's and Don'ts */}
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                {/* Do's */}
                                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                    <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                                        <span>✅</span> DO - Hacer
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedObjection.dosDonts.dos.map((item, idx) => (
                                            <li key={idx} className="text-sm text-green-800 flex items-start gap-2">
                                                <span className="text-green-600 mt-0.5">+</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Don'ts */}
                                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                    <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                                        <span>❌</span> DON'T - No Hacer
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedObjection.dosDonts.donts.map((item, idx) => (
                                            <li key={idx} className="text-sm text-red-800 flex items-start gap-2">
                                                <span className="text-red-600 mt-0.5">−</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4">
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(selectedObjection.response);
                                        alert('Respuesta copiada al portapapeles');
                                    }}
                                    className="flex-1 bg-[#6D84E3] hover:bg-[#5a6fc7] text-white font-semibold py-3 px-6 rounded-lg transition-all"
                                >
                                    📋 Copiar Respuesta
                                </button>
                                <button
                                    onClick={() => setSelectedObjection(null)}
                                    className="px-6 py-3 border-2 border-[#B1B1B0] text-[#3F3F3F] font-semibold rounded-lg hover:bg-[#E4E3E3] transition-all"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Quick Reference Card */}
            <div className="mt-16 bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto border-l-4 border-[#6D84E3]">
                <h2 className="text-2xl font-bold text-[#3F3F3F] mb-6">
                    🎯 Framework de Negociación
                </h2>
                <div className="space-y-4 text-sm text-[#3F3F3F]">
                    <div>
                        <strong className="text-[#6D84E3]">1. Escucha y Valida:</strong> "Entiendo tu preocupación..."
                    </div>
                    <div>
                        <strong className="text-[#6D84E3]">2. Profundiza:</strong> "Déjame preguntarte... ¿[pregunta específica]?"
                    </div>
                    <div>
                        <strong className="text-[#6D84E3]">3. Reencuadra:</strong> Cambiar de precio a valor/ROI/TCO
                    </div>
                    <div>
                        <strong className="text-[#6D84E3]">4. Cuantifica:</strong> Usar números específicos (€X ahorrado, Y% mejora)
                    </div>
                    <div>
                        <strong className="text-[#6D84E3]">5. Propón Alternativa:</strong> Piloto, fases, valor adicional
                    </div>
                    <div>
                        <strong className="text-[#6D84E3]">6. Cierra con Next Step:</strong> "¿Qué te parece si...?"
                    </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-[#3F3F3F]">
                        <strong>💡 Pro Tip:</strong> Nunca des descuento sin pedir algo a cambio (caso de éxito, referencia, timeline acelerado, compromiso de volumen). Mantén el valor percibido.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PricingNegotiation;
