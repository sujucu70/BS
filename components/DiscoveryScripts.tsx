import React, { useState } from 'react';

interface DiscoveryCategory {
    id: string;
    title: string;
    icon: string;
    questions: string[];
    tips: string[];
}

const DiscoveryScripts: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<DiscoveryCategory | null>(null);

    const categories: DiscoveryCategory[] = [
        {
            id: 'volumetry',
            title: 'Volumetría y Canales',
            icon: '📊',
            questions: [
                '¿Cuál es el volumen total de interacciones mensuales? (Voz, Chat, Email)',
                '¿Cómo se distribuye ese volumen? (Ej: 70% voz, 30% email)',
                '¿Tienen estacionalidad marcada? (Black Friday, Verano, Campañas)',
                '¿Cuál es la duración media de la llamada (AHT/TMO) actual?',
                '¿Cuál es el horario de atención actual y el deseado (24/7)?',
                '¿Qué % de llamadas son inbound vs outbound?',
                '¿Cuántos idiomas soportan actualmente?'
            ],
            tips: [
                'Pedir números específicos, no estimaciones vagas',
                'Identificar picos de volumen para sizing correcto',
                'Entender distribución por canal para priorizar automatización'
            ]
        },
        {
            id: 'costs',
            title: 'Costes y Eficiencia (Pain)',
            icon: '💰',
            questions: [
                '¿Cuál es el coste por contacto estimado actual? (Interno o externo)',
                '¿Cuántos FTEs (agentes equivalentes) tienen dedicados hoy?',
                '¿Cuál es la tasa de rotación de agentes anual?',
                '¿Qué % de llamadas se abandonan antes de ser atendidas?',
                '¿Cuál es el tiempo medio de espera actual?',
                '¿Qué % del tiempo de agentes es productivo vs administrativo?',
                '¿Cuánto gastan en formación de nuevos agentes?'
            ],
            tips: [
                'Cuantificar el pain en euros/año',
                'Alta rotación = oportunidad para automatización',
                'Abandono >5% indica problema crítico de capacidad'
            ]
        },
        {
            id: 'technology',
            title: 'Tecnología y Stack',
            icon: '🔧',
            questions: [
                '¿Qué CRM utilizan? (Salesforce, HubSpot, Zendesk, Propio)',
                '¿Qué sistema de telefonía/Contact Center tienen?',
                '¿Tienen API disponible para integración?',
                '¿Ya usan algún bot o IVR? ¿Qué tal funciona?',
                '¿Dónde está alojada su infraestructura? (Cloud, On-premise, Híbrido)',
                '¿Quién gestiona la tecnología internamente? (IT, Ops, Externo)',
                '¿Tienen requisitos de compliance específicos? (GDPR, PCI-DSS, etc.)'
            ],
            tips: [
                'Identificar complejidad técnica temprano',
                'Legacy systems = mayor tiempo de implementación',
                'Compliance puede ser deal-breaker, validar early'
            ]
        },
        {
            id: 'metrics',
            title: 'Métricas (MEDDICC - M)',
            icon: '📈',
            questions: [
                '¿Qué KPIs miden actualmente en el contact center?',
                '¿Cuál es su CSAT/NPS actual?',
                '¿Qué métrica es la más crítica para el negocio? (Coste, CSAT, Velocidad)',
                '¿Qué objetivo numérico tienen para este año?',
                '¿Cómo se mide el éxito de proyectos similares en su empresa?',
                '¿Qué mejora justificaría la inversión? (Ej: +10 puntos CSAT, -20% coste)',
                '¿Tienen dashboards de reporting? ¿Quién los ve?'
            ],
            tips: [
                'Anclar la conversación en métricas desde el inicio',
                'Identificar la métrica #1 que mueve la decisión',
                'Usar sus KPIs para construir el business case'
            ]
        },
        {
            id: 'economic-buyer',
            title: 'Economic Buyer (MEDDICC - E)',
            icon: '👔',
            questions: [
                '¿Quién tiene el presupuesto final para este proyecto?',
                '¿Cuál es el proceso de aprobación de inversiones en su empresa?',
                '¿Hay presupuesto aprobado para este año o es para el próximo?',
                '¿De qué departamento sale el presupuesto? (IT, Ops, Marketing)',
                '¿Quién firmó el último contrato de tecnología similar?',
                '¿Necesitan aprobación de comité o junta?',
                '¿Cuál es el rango de inversión que pueden aprobar sin escalamiento?'
            ],
            tips: [
                'Identificar Economic Buyer en primeras 2 llamadas',
                'Si no tienes acceso al EB, el deal está en riesgo',
                'Entender timing de presupuesto (Q4 vs Q1)'
            ]
        },
        {
            id: 'decision-criteria',
            title: 'Decision Criteria (MEDDICC - D)',
            icon: '⚖️',
            questions: [
                '¿Qué es más importante para ustedes: Precio, Tecnología o Confianza?',
                '¿Qué criterios usarán para evaluar las propuestas?',
                '¿Hay algún must-have técnico o funcional?',
                '¿Están evaluando otras soluciones? ¿Cuáles?',
                '¿Qué les gustó y qué no de soluciones anteriores?',
                '¿Quién participará en la decisión final?',
                '¿Hay algún deal-breaker que deba conocer?'
            ],
            tips: [
                'Entender criterios antes de presentar solución',
                'Mapear criterios a nuestras fortalezas',
                'Identificar si hay criterios ocultos (ej: relación con proveedor actual)'
            ]
        },
        {
            id: 'pain',
            title: 'Identify Pain (MEDDICC - I)',
            icon: '🔥',
            questions: [
                '¿Qué problema específico te quita el sueño?',
                '¿Qué pasa si no resuelven esto en los próximos 6 meses?',
                '¿Este problema afecta a clientes finales? ¿Cómo?',
                '¿Han intentado resolver esto antes? ¿Qué pasó?',
                '¿Cuánto tiempo llevan con este problema?',
                '¿Qué impacto tiene en el negocio? (Revenue, Churn, Brand)',
                '¿Por qué es prioritario ahora vs hace 6 meses?'
            ],
            tips: [
                'Profundizar hasta encontrar el pain real (no superficial)',
                'Cuantificar el coste de inacción',
                'Pain emocional > Pain racional para crear urgencia'
            ]
        },
        {
            id: 'champion',
            title: 'Champion (MEDDICC - C)',
            icon: '🦸',
            questions: [
                '¿Quién dentro de tu equipo está más convencido de que necesitan esto?',
                '¿Quién nos vendería internamente cuando no estamos en la sala?',
                '¿Tienes influencia en la decisión final?',
                '¿Qué necesitas de nosotros para convencer a tu jefe/equipo?',
                '¿Has liderado proyectos similares antes?',
                '¿Qué objeciones anticipas de otros stakeholders?',
                '¿Puedes conectarnos con [Economic Buyer/Technical Lead]?'
            ],
            tips: [
                'Sin Champion, el deal muere en silencio',
                'Invertir tiempo en enablement del Champion',
                'Darle herramientas para vender internamente (ROI, slides, casos)'
            ]
        },
        {
            id: 'competition',
            title: 'Competencia',
            icon: '⚔️',
            questions: [
                '¿Están evaluando otras soluciones además de nosotros?',
                '¿Con quién más están hablando?',
                '¿Qué les ha gustado de las otras propuestas?',
                '¿Hay algún incumbent o proveedor actual?',
                '¿Qué les haría elegir a un competidor sobre nosotros?',
                '¿Han trabajado antes con [Competidor X]?',
                '¿Cuál es su percepción de nuestra empresa vs competidores?'
            ],
            tips: [
                'Preguntar directamente, no asumir',
                'Usar Competitive Battlecards para posicionamiento',
                'Si mencionan competidor, hacer killer questions específicas'
            ]
        },
        {
            id: 'timeline',
            title: 'Timeline y Urgencia',
            icon: '⏰',
            questions: [
                '¿Cuál es la fecha ideal de go-live?',
                '¿Hay algún evento que genere urgencia? (Campaña, Black Friday, etc.)',
                '¿Qué pasa si no implementan esto en Q[X]?',
                '¿Cuánto tiempo tienen para evaluar y decidir?',
                '¿Hay alguna fecha límite interna?',
                '¿Qué otros proyectos están compitiendo por recursos/presupuesto?',
                '¿Preferirían empezar con un piloto o full deployment?'
            ],
            tips: [
                'Crear urgencia anclada en eventos de negocio',
                'Timeline vago = deal en riesgo',
                'Proponer piloto si hay resistencia a commitment grande'
            ]
        }
    ];

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f8f9fa] min-h-screen">
            <header className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-[#3F3F3F] tracking-tight mb-4">
                    Discovery Scripts
                </h1>
                <p className="text-xl text-[#B1B1B0] max-w-3xl mx-auto">
                    Guiones estructurados con framework MEDDICC para descubrir necesidades y calificar oportunidades
                </p>
            </header>

            {/* MEDDICC Framework Overview */}
            <div className="max-w-5xl mx-auto mb-12 bg-gradient-to-r from-[#6D84E3] to-[#3F3F3F] text-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Framework MEDDICC</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { letter: 'M', title: 'Metrics', desc: 'KPIs cuantificables' },
                        { letter: 'E', title: 'Economic Buyer', desc: 'Quién aprueba presupuesto' },
                        { letter: 'D', title: 'Decision Criteria', desc: 'Cómo evalúan' },
                        { letter: 'D', title: 'Decision Process', desc: 'Pasos para decidir' },
                        { letter: 'I', title: 'Identify Pain', desc: 'Problema real' },
                        { letter: 'C', title: 'Champion', desc: 'Aliado interno' },
                        { letter: 'C', title: 'Competition', desc: 'Alternativas' }
                    ].map((item, idx) => (
                        <div key={idx} className="text-center">
                            <div className="bg-white/20 rounded-lg p-3 mb-2">
                                <div className="text-3xl font-black">{item.letter}</div>
                            </div>
                            <div className="text-sm font-bold">{item.title}</div>
                            <div className="text-xs opacity-90">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categories Grid */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        onClick={() => setSelectedCategory(category)}
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6 cursor-pointer hover:shadow-lg hover:border-[#6D84E3] transition-all"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-4xl">{category.icon}</span>
                            <h3 className="text-lg font-bold text-[#3F3F3F]">
                                {category.title}
                            </h3>
                        </div>
                        <p className="text-sm text-[#B1B1B0] mb-3">
                            {category.questions.length} preguntas clave
                        </p>
                        <button className="text-sm text-[#6D84E3] font-semibold hover:underline">
                            Ver guión completo →
                        </button>
                    </div>
                ))}
            </div>

            {/* Detail Modal */}
            {selectedCategory && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    onClick={() => setSelectedCategory(null)}
                >
                    <div
                        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-[#6D84E3] to-[#3F3F3F] text-white p-6 rounded-t-xl">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-5xl">{selectedCategory.icon}</span>
                                    <div>
                                        <h2 className="text-2xl font-bold">
                                            {selectedCategory.title}
                                        </h2>
                                        <p className="text-sm opacity-90 mt-1">
                                            {selectedCategory.questions.length} preguntas para descubrir necesidades
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedCategory(null)}
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
                            {/* Questions */}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-[#3F3F3F] mb-4 flex items-center gap-2">
                                    <span>❓</span> Preguntas Clave
                                </h3>
                                <ul className="space-y-3">
                                    {selectedCategory.questions.map((question, idx) => (
                                        <li key={idx} className="flex items-start gap-3 p-4 bg-[#E4E3E3] rounded-lg">
                                            <span className="font-bold text-[#6D84E3] flex-shrink-0 mt-0.5">Q{idx + 1}</span>
                                            <span className="text-[#3F3F3F]">{question}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tips */}
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-[#3F3F3F] mb-4 flex items-center gap-2">
                                    <span>💡</span> Tips de Uso
                                </h3>
                                <ul className="space-y-2">
                                    {selectedCategory.tips.map((tip, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-[#3F3F3F]">
                                            <span className="text-[#6D84E3] mt-0.5">✓</span>
                                            <span>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4">
                                <button
                                    onClick={() => {
                                        const text = `${selectedCategory.title}\n\n${selectedCategory.questions.map((q, i) => `${i + 1}. ${q}`).join('\n')}`;
                                        navigator.clipboard.writeText(text);
                                        alert('Guión copiado al portapapeles');
                                    }}
                                    className="flex-1 bg-[#6D84E3] hover:bg-[#5a6fc7] text-white font-semibold py-3 px-6 rounded-lg transition-all"
                                >
                                    📋 Copiar Guión
                                </button>
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className="px-6 py-3 border-2 border-[#B1B1B0] text-[#3F3F3F] font-semibold rounded-lg hover:bg-[#E4E3E3] transition-all"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Usage Guide */}
            <div className="mt-16 bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-[#3F3F3F] mb-6 text-center">
                    Cómo Usar los Discovery Scripts
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="bg-[#6D84E3] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                            1
                        </div>
                        <h3 className="font-bold text-[#3F3F3F] mb-2">Prepara</h3>
                        <p className="text-sm text-[#B1B1B0]">Revisa las categorías relevantes antes de la llamada</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#6D84E3] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                            2
                        </div>
                        <h3 className="font-bold text-[#3F3F3F] mb-2">Adapta</h3>
                        <p className="text-sm text-[#B1B1B0]">Ajusta las preguntas según el contexto y el interlocutor</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#6D84E3] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                            3
                        </div>
                        <h3 className="font-bold text-[#3F3F3F] mb-2">Documenta</h3>
                        <p className="text-sm text-[#B1B1B0]">Registra respuestas en CRM para seguimiento y análisis</p>
                    </div>
                </div>
                <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-[#3F3F3F]">
                        <strong>⚠️ Importante:</strong> No uses estos scripts como checklist rígida. Son guías para conversaciones naturales. Escucha activamente y profundiza donde detectes pain o interés.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DiscoveryScripts;
