import React, { useState } from 'react';

interface SalesPlay {
    id: string;
    title: string;
    category: 'Prospecting' | 'Discovery' | 'Demo' | 'Negotiation' | 'Closing' | 'Expansion';
    situation: string;
    objective: string;
    steps: {
        step: number;
        action: string;
        tips: string[];
    }[];
    tools: string[];
    successMetrics: string[];
    commonMistakes: string[];
}

const SalesPlays: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Prospecting');
    const [expandedPlay, setExpandedPlay] = useState<string | null>(null);

    const salesPlays: SalesPlay[] = [
        {
            id: '1',
            title: 'Inbound Lead Follow-up Play',
            category: 'Prospecting',
            situation: 'Lead inbound que descargó contenido o solicitó información',
            objective: 'Calificar el lead y agendar primera llamada de discovery en <48h',
            steps: [
                {
                    step: 1,
                    action: 'Email inmediato (dentro de 5 min)',
                    tips: [
                        'Personalizar con el recurso descargado',
                        'Ofrecer valor adicional relacionado',
                        'CTA claro: agendar llamada'
                    ]
                },
                {
                    step: 2,
                    action: 'Llamada de seguimiento (+2h)',
                    tips: [
                        'Referencia al contenido descargado',
                        'Preguntas de calificación BANT básicas',
                        'Proponer horarios específicos'
                    ]
                },
                {
                    step: 3,
                    action: 'Email de valor (+24h si no contacto)',
                    tips: [
                        'Compartir caso de éxito relevante',
                        'Video personalizado (Loom)',
                        'Nuevo intento de agenda'
                    ]
                },
                {
                    step: 4,
                    action: 'Última llamada (+48h)',
                    tips: [
                        'Mensaje de voz profesional',
                        'Mencionar intentos previos',
                        'Ofrecer alternativa (email, LinkedIn)'
                    ]
                }
            ],
            tools: ['HubSpot Sequences', 'Calendly', 'Loom'],
            successMetrics: ['Tasa de respuesta >40%', 'Llamadas agendadas >25%', 'Tiempo de contacto <48h'],
            commonMistakes: [
                'Esperar demasiado para el primer contacto',
                'Email genérico sin personalización',
                'No ofrecer valor en cada touchpoint'
            ]
        },
        {
            id: '2',
            title: 'Cold Outbound Play',
            category: 'Prospecting',
            situation: 'Prospección en frío a cuenta target del ICP',
            objective: 'Generar interés y agendar discovery call',
            steps: [
                {
                    step: 1,
                    action: 'Research profundo (15-20 min)',
                    tips: [
                        'LinkedIn: rol, antigüedad, posts recientes',
                        'Website empresa: noticias, productos',
                        'Identificar trigger events'
                    ]
                },
                {
                    step: 2,
                    action: 'Email personalizado',
                    tips: [
                        'Subject line con trigger event o pain point',
                        'Máximo 75 palabras',
                        'Una pregunta específica, no CTA genérico'
                    ]
                },
                {
                    step: 3,
                    action: 'LinkedIn connection (+1 día)',
                    tips: [
                        'Nota personalizada mencionando email',
                        'Comentar en sus posts',
                        'Compartir contenido relevante'
                    ]
                },
                {
                    step: 4,
                    action: 'Llamada (+3 días)',
                    tips: [
                        'Referencia a email y LinkedIn',
                        'Abrir con insight o pregunta provocadora',
                        'Objetivo: conversación, no venta'
                    ]
                }
            ],
            tools: ['LinkedIn Sales Navigator', 'Apollo.io', 'HubSpot'],
            successMetrics: ['Tasa de respuesta >15%', 'Conexiones LinkedIn >30%', 'Llamadas agendadas >10%'],
            commonMistakes: [
                'Pitch de producto en primer contacto',
                'No personalizar suficientemente',
                'Rendirse después de 1-2 intentos'
            ]
        },
        {
            id: '3',
            title: 'Discovery Call Framework',
            category: 'Discovery',
            situation: 'Primera llamada de descubrimiento con prospect calificado',
            objective: 'Entender situación actual, pain points y criterios de decisión (MEDDICC)',
            steps: [
                {
                    step: 1,
                    action: 'Apertura y agenda (3 min)',
                    tips: [
                        'Agradecer el tiempo',
                        'Confirmar duración (45 min)',
                        'Establecer agenda clara'
                    ]
                },
                {
                    step: 2,
                    action: 'Situación actual (10 min)',
                    tips: [
                        '¿Cómo gestionan hoy [proceso]?',
                        '¿Qué herramientas utilizan?',
                        '¿Cuántas personas involucradas?'
                    ]
                },
                {
                    step: 3,
                    action: 'Pain points (15 min)',
                    tips: [
                        '¿Qué no funciona bien?',
                        '¿Cuál es el impacto en el negocio?',
                        '¿Cuánto les cuesta este problema?'
                    ]
                },
                {
                    step: 4,
                    action: 'Criterios de decisión (10 min)',
                    tips: [
                        '¿Qué debe tener la solución ideal?',
                        '¿Quién más está involucrado en la decisión?',
                        '¿Cuál es el proceso de aprobación?'
                    ]
                },
                {
                    step: 5,
                    action: 'Next steps (5 min)',
                    tips: [
                        'Resumir lo aprendido',
                        'Proponer demo personalizada',
                        'Agendar en el momento'
                    ]
                }
            ],
            tools: ['Zoom', 'HubSpot (toma de notas)', 'MEDDICC Scorecard'],
            successMetrics: ['MEDDICC score >20/35', 'Demo agendada >80%', 'Multi-threading iniciado'],
            commonMistakes: [
                'Hablar más que escuchar (regla 80/20)',
                'No profundizar en impacto económico',
                'Terminar sin next step claro'
            ]
        },
        {
            id: '4',
            title: 'Demo Personalizada Play',
            category: 'Demo',
            situation: 'Demo después de discovery exitosa',
            objective: 'Mostrar cómo BeyondCX resuelve sus pain points específicos',
            steps: [
                {
                    step: 1,
                    action: 'Pre-demo preparation',
                    tips: [
                        'Revisar notas de discovery',
                        'Personalizar demo con su industria',
                        'Preparar datos/ejemplos relevantes'
                    ]
                },
                {
                    step: 2,
                    action: 'Recap de discovery (5 min)',
                    tips: [
                        'Resumir pain points identificados',
                        'Confirmar prioridades',
                        'Establecer agenda de demo'
                    ]
                },
                {
                    step: 3,
                    action: 'Demo enfocada (25 min)',
                    tips: [
                        'Mostrar solo features relevantes',
                        'Usar sus datos/ejemplos',
                        'Conectar cada feature con pain point'
                    ]
                },
                {
                    step: 4,
                    action: 'Q&A y objeciones (10 min)',
                    tips: [
                        'Invitar preguntas específicas',
                        'Manejar objeciones con empatía',
                        'Documentar concerns'
                    ]
                },
                {
                    step: 5,
                    action: 'Next steps (5 min)',
                    tips: [
                        'Proponer POC o propuesta',
                        'Identificar stakeholders faltantes',
                        'Agendar follow-up'
                    ]
                }
            ],
            tools: ['Demo environment', 'Screen recording', 'ROI Calculator'],
            successMetrics: ['Propuesta solicitada >70%', 'Champion identificado', 'Timeline definido'],
            commonMistakes: [
                'Demo genérica sin personalización',
                'Mostrar demasiadas features',
                'No conectar con ROI'
            ]
        },
        {
            id: '5',
            title: 'Competitive Displacement Play',
            category: 'Negotiation',
            situation: 'Prospect usa solución de competidor y considera cambio',
            objective: 'Posicionar BeyondCX como alternativa superior',
            steps: [
                {
                    step: 1,
                    action: 'Entender situación actual',
                    tips: [
                        '¿Qué competidor usan?',
                        '¿Qué les gusta de la solución actual?',
                        '¿Qué les frustra?'
                    ]
                },
                {
                    step: 2,
                    action: 'Identificar gaps',
                    tips: [
                        'Usar Competitive Battlecard',
                        'Hacer preguntas que expongan debilidades',
                        'No criticar directamente al competidor'
                    ]
                },
                {
                    step: 3,
                    action: 'Posicionar diferenciadores',
                    tips: [
                        'Enfocarse en 2-3 diferenciadores clave',
                        'Usar casos de éxito de migraciones',
                        'Cuantificar el valor diferencial'
                    ]
                },
                {
                    step: 4,
                    action: 'Mitigar riesgo de cambio',
                    tips: [
                        'Ofrecer migración asistida',
                        'Plan de onboarding acelerado',
                        'Garantías de performance'
                    ]
                }
            ],
            tools: ['Competitive Battlecards', 'Migration case studies', 'ROI comparison'],
            successMetrics: ['Win rate vs competidor >50%', 'Tiempo de decisión <30 días'],
            commonMistakes: [
                'Criticar al competidor agresivamente',
                'No reconocer fortalezas del competidor',
                'Subestimar el coste de cambio'
            ]
        }
        // Templates for remaining 15 plays
    ];

    // Add 15 more template plays
    const templatePlays: SalesPlay[] = [
        { id: '6', title: 'Executive Sponsorship Play', category: 'Discovery', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '7', title: 'Stalled Deal Revival Play', category: 'Negotiation', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '8', title: 'Expansion/Upsell Play', category: 'Expansion', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '9', title: 'Multi-threading Play', category: 'Discovery', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '10', title: 'Objection Handling Play', category: 'Negotiation', situation: '[Definir situación]', objetivo: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '11', title: 'POC/Pilot Play', category: 'Demo', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '12', title: 'Proposal Delivery Play', category: 'Negotiation', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '13', title: 'Negotiation Play', category: 'Negotiation', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '14', title: 'Contract Review Play', category: 'Closing', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '15', title: 'Closing Play', category: 'Closing', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '16', title: 'Renewal Play', category: 'Expansion', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '17', title: 'Cross-sell Play', category: 'Expansion', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '18', title: 'Champion Development Play', category: 'Discovery', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '19', title: 'Deal Acceleration Play', category: 'Closing', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] },
        { id: '20', title: 'Lost Deal Re-engagement Play', category: 'Prospecting', situation: '[Definir situación]', objective: '[Definir objetivo]', steps: [], tools: [], successMetrics: [], commonMistakes: [] }
    ];

    const allPlays = [...salesPlays, ...templatePlays];

    const categories = ['Prospecting', 'Discovery', 'Demo', 'Negotiation', 'Closing', 'Expansion'];

    const filteredPlays = allPlays.filter(play => play.category === selectedCategory);

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f8f9fa] min-h-screen">
            <header className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-[#3F3F3F] tracking-tight mb-4" style={{fontFamily: 'Outfit, sans-serif'}}>
                    Sales Plays Library
                </h1>
                <p className="text-xl text-[#B1B1B0] max-w-3xl mx-auto">
                    Playbooks tácticos para cada situación del ciclo de ventas
                </p>
            </header>

            {/* Category Filter */}
            <div className="flex justify-center mb-12 overflow-x-auto">
                <div className="bg-white rounded-lg shadow-sm p-2 inline-flex gap-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                                selectedCategory === category
                                    ? 'bg-[#6D84E3] text-white shadow-sm'
                                    : 'text-[#3F3F3F] hover:bg-[#E4E3E3]'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sales Plays List */}
            <div className="max-w-5xl mx-auto space-y-4">
                {filteredPlays.map((play) => (
                    <div key={play.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                        {/* Play Header */}
                        <button
                            onClick={() => setExpandedPlay(expandedPlay === play.id ? null : play.id)}
                            className="w-full p-6 flex items-center justify-between hover:bg-[#E4E3E3] transition-colors"
                        >
                            <div className="flex items-center gap-4 text-left">
                                <div className="bg-gradient-to-br from-[#6D84E3] to-[#3F3F3F] text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold">
                                    {play.id}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#3F3F3F]" style={{fontFamily: 'Outfit, sans-serif'}}>
                                        {play.title}
                                    </h3>
                                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mt-2">
                                        {play.category}
                                    </span>
                                </div>
                            </div>
                            <svg
                                className={`w-6 h-6 text-gray-400 transition-transform ${expandedPlay === play.id ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>

                        {/* Play Details */}
                        {expandedPlay === play.id && play.steps.length > 0 && (
                            <div className="p-6 border-t border-gray-200 bg-[#E4E3E3]">
                                {/* Situation & Objective */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h4 className="font-bold text-[#3F3F3F] mb-2 flex items-center gap-2">
                                            <span>📋</span> Situación
                                        </h4>
                                        <p className="text-[#3F3F3F] text-sm">{play.situation}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#3F3F3F] mb-2 flex items-center gap-2">
                                            <span>🎯</span> Objetivo
                                        </h4>
                                        <p className="text-[#3F3F3F] text-sm">{play.objective}</p>
                                    </div>
                                </div>

                                {/* Steps */}
                                <div className="mb-8">
                                    <h4 className="font-bold text-[#3F3F3F] mb-4 text-lg">Pasos a Seguir</h4>
                                    <div className="space-y-4">
                                        {play.steps.map((step) => (
                                            <div key={step.step} className="bg-white p-4 rounded-lg border border-gray-200">
                                                <div className="flex items-start gap-3">
                                                    <div className="bg-[#6D84E3] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                                        {step.step}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="font-bold text-[#3F3F3F] mb-2">{step.action}</h5>
                                                        <ul className="space-y-1">
                                                            {step.tips.map((tip, idx) => (
                                                                <li key={idx} className="text-sm text-[#B1B1B0] flex items-start gap-2">
                                                                    <span className="text-green-600 mt-1">✓</span>
                                                                    <span>{tip}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tools, Metrics, Mistakes */}
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="font-bold text-[#3F3F3F] mb-3 text-sm">🛠️ Herramientas</h4>
                                        <ul className="space-y-1">
                                            {play.tools.map((tool, idx) => (
                                                <li key={idx} className="text-sm text-[#B1B1B0] bg-white px-3 py-1 rounded">
                                                    {tool}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#3F3F3F] mb-3 text-sm">📊 Métricas de Éxito</h4>
                                        <ul className="space-y-1">
                                            {play.successMetrics.map((metric, idx) => (
                                                <li key={idx} className="text-sm text-green-700 flex items-start gap-1">
                                                    <span>✓</span>
                                                    <span>{metric}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#3F3F3F] mb-3 text-sm">⚠️ Errores Comunes</h4>
                                        <ul className="space-y-1">
                                            {play.commonMistakes.map((mistake, idx) => (
                                                <li key={idx} className="text-sm text-red-700 flex items-start gap-1">
                                                    <span>✗</span>
                                                    <span>{mistake}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Template indicator */}
                        {expandedPlay === play.id && play.steps.length === 0 && (
                            <div className="p-6 border-t border-gray-200 bg-yellow-50">
                                <p className="text-center text-[#B1B1B0]">
                                    📝 <strong>Template pendiente de completar</strong> - Este play necesita ser desarrollado con contenido específico
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Summary */}
            <div className="mt-16 bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-[#3F3F3F] mb-4 text-center" style={{fontFamily: 'Outfit, sans-serif'}}>
                    Cómo Usar Esta Biblioteca
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                        <div className="text-4xl mb-2">1️⃣</div>
                        <h3 className="font-bold text-[#3F3F3F] mb-2">Identifica la Situación</h3>
                        <p className="text-sm text-[#B1B1B0]">Encuentra el play que coincide con tu escenario actual</p>
                    </div>
                    <div>
                        <div className="text-4xl mb-2">2️⃣</div>
                        <h3 className="font-bold text-[#3F3F3F] mb-2">Sigue los Pasos</h3>
                        <p className="text-sm text-[#B1B1B0]">Ejecuta cada paso con los tips proporcionados</p>
                    </div>
                    <div>
                        <div className="text-4xl mb-2">3️⃣</div>
                        <h3 className="font-bold text-[#3F3F3F] mb-2">Mide Resultados</h3>
                        <p className="text-sm text-[#B1B1B0]">Compara tus métricas con los benchmarks de éxito</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesPlays;
