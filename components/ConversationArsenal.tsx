
import React, { useState, useMemo } from 'react';
import Accordion from './shared/Accordion';
import { PlaybookSection } from '../types';

interface ConversationArsenalProps {
    onNavigate: (section: PlaybookSection) => void;
}

// --- DATA STRUCTURES ---

const messageHouse = {
    core: "No vendemos software, operamos tu futuro. Somos el primer BPO 2.0 que combina Inteligencia Artificial Generativa + Agentes Humanos Expertos para entregar resultados de negocio reales (ROI) desde el primer día.",
    pillars: [
        {
            title: "Operación Gestionada End-to-End",
            desc: "No te entregamos una herramienta SaaS para que tú la configures. Asumimos la responsabilidad total del proceso, desde la integración tecnológica hasta la ejecución operativa y la mejora continua.",
            icon: "⚙️"
        },
        {
            title: "Modelo Híbrido: IA + Humanos",
            desc: "La eficiencia escalar de la IA para el 80% del volumen, respaldada por la empatía y el juicio crítico de agentes humanos para casos complejos. Calidad garantizada, sin alucinaciones.",
            icon: "🧠"
        },
        {
            title: "Suscripción Flexible & Impacto Day-1",
            desc: "Modelo OPEX sin grandes inversiones iniciales (CAPEX). Escalabilidad elástica que convierte tus costes fijos en variables. ROI medible desde el primer mes.",
            icon: "🚀"
        }
    ],
    evidence: [
        { label: "Reducción TMO", value: "-40%", desc: "En tiempos de resolución" },
        { label: "Automatización", value: "70-90%", desc: "De interacciones rutinarias" },
        { label: "Satisfacción", value: "+25pts", desc: "Incremento en NPS" },
        { label: "Eficiencia", value: "-30%", desc: "Reducción coste por contacto" }
    ]
};

const personas = {
    CEO: {
        role: "CEO / Director General",
        focus: "Rentabilidad (EBITDA), Valor para Accionistas, Escalabilidad, Riesgo.",
        pains: [
            "Costes fijos operativos creciendo más rápido que los ingresos.",
            "Incapacidad de escalar la operación sin disparar la contratación (Linealidad).",
            "Riesgo reputacional por mala experiencia de cliente.",
            "Falta de agilidad para adaptarse a cambios del mercado."
        ],
        kpis: ["EBITDA", "CAC (Coste de Adquisición)", "LTV (Lifetime Value)", "Margen Operativo"],
        valueProp: "Convertimos tu centro de costes en una ventaja competitiva escalable, variabilizando gastos y mejorando márgenes.",
        products: ["BPO 2.0 Completo", "Beyond-Order"],
        elevatorPitch: "Ayudamos a empresas como la tuya a romper la relación lineal entre crecimiento y costes. Implementamos un modelo operativo híbrido donde la IA absorbe el volumen y los humanos aportan valor, mejorando tu EBITDA y asegurando escalabilidad infinita sin aumentar plantilla.",
        keyMessage: "No estamos comprando tecnología, estamos comprando apalancamiento operativo.",
        objections: [
            { q: "Es muy caro / No hay presupuesto.", a: "No es un coste adicional, es una reasignación de recursos más eficiente. El modelo se autofinancia con el ahorro operativo generado (OPEX vs CAPEX)." },
            { q: "Es demasiado arriesgado cambiar ahora.", a: "El mayor riesgo es mantener una estructura de costes rígida en un mercado volátil. Nuestro modelo flexible reduce tu exposición al riesgo financiero." }
        ]
    },
    COO: {
        role: "COO / Director de Operaciones",
        focus: "Eficiencia, Productividad, SLAs, Estabilidad, Reducción de Errores.",
        pains: [
            "Alta rotación de personal (Burnout) y costes de formación constantes.",
            "Procesos manuales propensos a errores (Pedidos, Citas).",
            "Incapacidad de manejar picos de demanda (Black Friday, Campañas).",
            "Sistemas desconectados (Silos de datos)."
        ],
        kpis: ["TMO (Tiempo Medio Operación)", "FCR (Resolución Primer Contacto)", "Coste por Ticket", "Tasa de Error"],
        valueProp: "Eliminamos el caos operativo automatizando lo repetitivo y empoderando a tu equipo para gestionar solo lo importante.",
        products: ["Beyond-FCR", "Beyond-Order", "Beyond-Booking"],
        elevatorPitch: "Eliminamos los cuellos de botella de tu operación. Nuestra plataforma gestiona automáticamente el 80% de las tareas repetitivas (citas, pedidos, dudas frecuentes) con precisión cero-errores, permitiendo que tu equipo actual sea 5 veces más productivo.",
        keyMessage: "Te doy el control y la visibilidad que hoy no tienes, eliminando el ruido de la operación diaria.",
        objections: [
            { q: "¿Qué pasa si la IA falla?", a: "Nuestro modelo 'Humano en el Bucle' garantiza que cualquier excepción que la IA no entienda se derive instantáneamente a un agente humano experto." },
            { q: "No tengo tiempo para implementaciones largas.", a: "Es un servicio gestionado, no un proyecto de IT. Nosotros nos encargamos de la configuración y puesta en marcha. Tú solo defines las reglas." }
        ]
    },
    CXO: {
        role: "CXO / Director de Experiencia",
        focus: "Satisfacción (CSAT), Lealtad (NPS), Retención, Personalización.",
        pains: [
            "Largas esperas telefónicas y IVRs frustrantes.",
            "Inconsistencia en las respuestas de los agentes.",
            "Falta de atención 24/7.",
            "Clientes que tienen que repetir su problema múltiples veces."
        ],
        kpis: ["NPS (Net Promoter Score)", "CSAT", "Churn Rate", "CES (Customer Effort Score)"],
        valueProp: "Ofrecemos una experiencia fluida, inmediata y personalizada 24/7 que fideliza a tus clientes.",
        products: ["Beyond-IVR", "Beyond-FCR"],
        elevatorPitch: "Imagina que cada uno de tus clientes fuera atendido en el primer tono, por su nombre y con su problema resuelto al instante, 24/7. Eso hacemos con Beyond-IVR y FCR, eliminando la fricción y convirtiendo el soporte en un motor de lealtad.",
        keyMessage: "La mejor experiencia es la que no requiere esfuerzo. Hacemos el servicio invisible y sin fricción.",
        objections: [
            { q: "Mis clientes prefieren humanos.", a: "Tus clientes prefieren soluciones inmediatas. Para empatía, tienen a nuestros agentes; para velocidad, tienen a nuestra IA. Es lo mejor de ambos mundos." },
            { q: "La automatización se siente robótica.", a: "Nuestra IA conversacional utiliza procesamiento de lenguaje natural avanzado, permitiendo diálogos fluidos, no comandos rígidos." }
        ]
    }
};

const storylines = [
    {
        title: "Storyline CEO: El Caso de Negocio (EBITDA)",
        steps: [
            { stage: "Problema", text: "El coste de servicio crece linealmente con las ventas, erosionando márgenes." },
            { stage: "Causa Raíz", text: "Dependencia intensiva de mano de obra humana para tareas de bajo valor." },
            { stage: "Oportunidad", text: "La IA Generativa permite desacoplar el crecimiento del coste laboral." },
            { stage: "Solución Beyond", text: "Implementación de BPO 2.0: Capa de IA para volumen + Capa Humana para valor." },
            { stage: "Impacto", text: "Reducción del 30% en OPEX operativo y mejora del EBITDA." },
            { stage: "Next Step", text: "Análisis de Viabilidad Económica (Business Case)." }
        ]
    },
    {
        title: "Storyline COO: La Eficiencia Operativa",
        steps: [
            { stage: "Problema", text: "Cuellos de botella en picos de demanda y alta tasa de errores manuales." },
            { stage: "Causa Raíz", text: "Procesos manuales, sistemas desconectados y rigidez de plantilla." },
            { stage: "Oportunidad", text: "Automatización inteligente end-to-end de flujos de trabajo (Pedidos/Citas)." },
            { stage: "Solución Beyond", text: "Orquestación de procesos con Beyond-Order/Booking. Escalabilidad infinita." },
            { stage: "Impacto", text: "Eliminación del 90% de errores y capacidad de absorber picos sin contratación." },
            { stage: "Next Step", text: "Mapeo de Procesos Críticos." }
        ]
    },
    {
        title: "Storyline CXO: La Experiencia sin Fricción",
        steps: [
            { stage: "Problema", text: "Clientes frustrados por esperas y repetición de información (Alto Churn)." },
            { stage: "Causa Raíz", text: "Canales de atención saturados y tecnología IVR obsoleta." },
            { stage: "Oportunidad", text: "Atención inmediata 24/7 personalizada y contextual." },
            { stage: "Solución Beyond", text: "Beyond-IVR + FCR: Resolución al primer contacto con contexto total." },
            { stage: "Impacto", text: "+25 puntos en NPS y reducción drástica del churn." },
            { stage: "Next Step", text: "Auditoría de Experiencia de Cliente (Mystery Shopper)." }
        ]
    }
];

const competitive = [
    {
        competitor: "BPO Tradicional",
        context: "Concentrix, Teleperformance",
        weakness: "Modelo de negocio basado en arbitraje laboral (vender horas). Alta rotación, calidad inconsistente, incentivo perverso (más llamadas = más facturación).",
        beyondEdge: "Escalado Inteligente. Nosotros facturamos por resultados/resolución, no por horas. Nuestro incentivo es resolver rápido (Eficiencia), no alargar la llamada.",
        killerQ: "¿Tu proveedor actual te llama proactivamente para ver cómo reducir el volumen de llamadas, o solo te pide contratar más agentes?"
    },
    {
        competitor: "Chatbots / Software SaaS",
        context: "Intercom bots, soluciones DIY",
        weakness: "Automatización superficial ('Caja Negra'). Alta tasa de abandono por falta de entendimiento. Si el bot falla, el cliente queda abandonado. Requiere configuración interna.",
        beyondEdge: "Servicio Gestionado Híbrido. No te damos una herramienta, te damos un resultado. Si la IA falla, entra un humano nuestro. Garantía de atención 100%.",
        killerQ: "¿Quién gestiona el 20% de las consultas que tu bot no entiende? ¿Se convierten en clientes frustrados o en tickets resueltos?"
    },
    {
        competitor: "Consultoras Tecnológicas",
        context: "Accenture, Deloitte",
        weakness: "Venden estrategia y proyectos de implementación largos (PPTs). No operan el día a día. Costes altísimos y desconexión con la realidad operativa.",
        beyondEdge: "Operadores, no Consultores. Implementamos rápido y operamos el servicio. 'Skin in the game': nuestro éxito depende de tus métricas diarias.",
        killerQ: "¿Ellos se van a quedar a responder las llamadas el Black Friday cuando el sistema falle, o solo te entregarán el informe?"
    }
];

const productImpact = [
    { product: "Beyond-IVR", solve: "IVR rígido, esperas largas", kpi: "Tasa de Abandono / CSAT", impact: "Reducción abandono &lt;5%, Atención inmediata" },
    { product: "Beyond-Booking", solve: "No-shows, agenda caótica", kpi: "Ocupación / Ingresos", impact: "+25% Citas efectivas, -30% No-shows" },
    { product: "Beyond-Order", solve: "Errores en pedidos, lentitud", kpi: "Tasa de Error / Coste Proceso", impact: "-90% Errores, -70% Tiempo gestión" },
    { product: "Beyond-FCR", solve: "Re-llamadas, bajo FCR", kpi: "FCR / Coste por Contacto", impact: "Resolución &gt;85% primer contacto" }
];

// Original Tactical Data (Preserved for Search)
const tacticalScripts = [
     { title: '📊 M - METRICS (Métricas)', tags: ['metricas', 'kpi'], content: "Objetivo: Cuantificar estado actual. Preguntas: ¿Cuántas interacciones/mes? ¿Coste por contacto? ¿NPS actual?" },
     { title: '💰 E - ECONOMIC BUYER', tags: ['presupuesto', 'cfo'], content: "Objetivo: Identificar quién firma. Preguntas: ¿Quién tiene el P&L? ¿Criterios de ROI?" },
     { title: '🥊 C - COMPETITION', tags: ['competencia'], content: "Objetivo: Desbancar status quo. Preguntas: ¿Qué os gusta/disgusta del proveedor actual?" },
     { title: 'Objeción: "Es caro"', tags: ['precio', 'objecion'], content: "Rta: No es coste, es inversión. Hablemos de ROI y coste de inacción." },
     { title: 'Objeción: "Preferimos humanos"', tags: ['humanos', 'ia', 'objecion'], content: "Rta: Nosotros también para lo complejo. Usamos IA para lo repetitivo (velocidad) y humanos para lo emocional (calidad)." }
];


const ConversationArsenal: React.FC<ConversationArsenalProps> = ({ onNavigate }) => {
    const [activePersona, setActivePersona] = useState<'CEO' | 'COO' | 'CXO'>('CEO');
    const [searchTerm, setSearchTerm] = useState('');

    // Search Logic
    const filteredTactics = useMemo(() => {
        if (!searchTerm) return [];
        return tacticalScripts.filter(item => 
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags.some(tag => tag.includes(searchTerm.toLowerCase())) ||
            item.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f8f9fa]">
             <header className="text-center py-12">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">Narrativa de Valor y Mensajería</h1>
                <p className="text-xl text-[#6D84E3] mt-4 font-medium">Guía Estratégica para Comunicar el Valor de BeyondCX</p>
            </header>

            <main className="max-w-7xl mx-auto space-y-16">
                
                {/* SECTION A: MESSAGE HOUSE */}
                <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b pb-4">🏛️ A. La "Message House" de BeyondCX</h2>
                    
                    {/* Roof: Core Message */}
                    <div className="bg-[#6D84E3] text-white p-8 rounded-t-xl text-center shadow-md mb-6">
                        <h3 className="text-lg font-bold uppercase tracking-widest opacity-80 mb-2">Mensaje Principal (Core Message)</h3>
                        <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">
                            "{messageHouse.core}"
                        </p>
                    </div>

                    {/* Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {messageHouse.pillars.map((p, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border-t-4 border-[#6D84E3] shadow-sm hover:shadow-md transition-all">
                                <div className="text-4xl mb-4">{p.icon}</div>
                                <h4 className="font-bold text-lg text-gray-800 mb-3">{p.title}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Foundation: Evidence */}
                    <div className="bg-gray-900 text-white p-6 rounded-b-xl flex flex-wrap justify-around items-center text-center">
                        {messageHouse.evidence.map((e, i) => (
                            <div key={i} className="p-4">
                                <div className="text-3xl font-bold text-[#6D84E3]">{e.value}</div>
                                <div className="text-sm font-bold uppercase">{e.label}</div>
                                <div className="text-xs text-gray-400">{e.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION B: BUYER PERSONA MATRIX */}
                <section className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="p-8 bg-gray-50 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-800 text-center">B. Matriz de Mensajes por Buyer Persona</h2>
                        <p className="text-center text-gray-500 mt-2">Adapta tu discurso a quien tienes delante. No vendas características, vende soluciones a SUS problemas.</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-gray-200">
                        {(['CEO', 'COO', 'CXO'] as const).map(role => (
                            <button
                                key={role}
                                onClick={() => setActivePersona(role)}
                                className={`flex-1 py-6 text-lg font-bold transition-colors ${activePersona === role ? 'bg-white text-[#6D84E3] border-b-4 border-[#6D84E3]' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                            >
                                {role}
                            </button>
                        ))}
                    </div>

                    {/* Persona Content */}
                    <div className="p-8 md:p-10">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-800">{personas[activePersona].role}</h3>
                            <p className="text-[#6D84E3] font-medium">{personas[activePersona].focus}</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-400">
                                    <h4 className="font-bold text-red-800 mb-2">Dolores Principales (Pains)</h4>
                                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                        {personas[activePersona].pains.map((p, i) => <li key={i}>{p}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-2">KPIs que le quitan el sueño</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {personas[activePersona].kpis.map((k, i) => (
                                            <span key={i} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">{k}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400">
                                    <h4 className="font-bold text-blue-800 mb-2">Propuesta de Valor Específica</h4>
                                    <p className="text-sm text-gray-700">{personas[activePersona].valueProp}</p>
                                    <div className="mt-3 pt-3 border-t border-blue-200 text-xs">
                                        <span className="font-bold text-blue-800">Productos Clave: </span>
                                        {personas[activePersona].products.join(", ")}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-[#6D84E3] text-white text-xs px-2 py-1">Elevator Pitch (20s)</div>
                                    <h4 className="font-bold text-blue-300 mb-3">Tu Guion:</h4>
                                    <p className="italic text-sm leading-relaxed">"{personas[activePersona].elevatorPitch}"</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-3">Objeciones Típicas y Respuestas</h4>
                                    <div className="space-y-3">
                                        {personas[activePersona].objections.map((o, i) => (
                                            <div key={i} className="border border-gray-200 rounded p-3 bg-gray-50">
                                                <p className="text-xs font-bold text-red-600 mb-1">" {o.q} "</p>
                                                <p className="text-sm text-gray-700">💡 {o.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION C: STORYLINES */}
                <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">C. Storylines Consultivas</h2>
                    <p className="text-center text-gray-500 mb-8">La secuencia lógica para guiar al cliente desde el problema hasta la solución.</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {storylines.map((story, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-[#6D84E3] mb-4 text-lg">{story.title}</h3>
                                <div className="space-y-4 relative">
                                    {/* Connector Line */}
                                    <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-300"></div>
                                    
                                    {story.steps.map((step, j) => (
                                        <div key={j} className="relative flex items-start">
                                            <div className="w-8 h-8 bg-white border-2 border-[#6D84E3] rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-[#6D84E3] z-10">
                                                {j + 1}
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-xs font-bold text-gray-500 uppercase">{step.stage}</p>
                                                <p className="text-sm text-gray-800 font-medium">{step.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION D: COMPETITIVE */}
                <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">D. Posicionamiento Competitivo</h2>
                    <p className="text-center text-gray-500 mb-8">Por qué ganamos contra las alternativas tradicionales.</p>

                    <div className="overflow-x-auto">
                         <table className="w-full text-sm text-left text-gray-700">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th className="px-6 py-4 w-1/4 rounded-l-lg">Competidor</th>
                                    <th className="px-6 py-4 w-1/4">Su Debilidad (The Gap)</th>
                                    <th className="px-6 py-4 w-1/4 text-[#6D84E3]">Diferencial BeyondCX</th>
                                    <th className="px-6 py-4 w-1/4 rounded-r-lg">Killer Question</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {competitive.map((c, i) => (
                                    <tr key={i} className="bg-white hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <span className="block font-bold text-gray-800 text-lg">{c.competitor}</span>
                                            <span className="text-xs text-gray-500">{c.context}</span>
                                        </td>
                                        <td className="px-6 py-4 text-red-700 bg-red-50 rounded-lg my-2 block md:table-cell">{c.weakness}</td>
                                        <td className="px-6 py-4 font-bold text-[#6D84E3]">{c.beyondEdge}</td>
                                        <td className="px-6 py-4 italic text-gray-600 border-l border-gray-200">"{c.killerQ}"</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* SECTION F: PRODUCT - KPI CONNECTION */}
                <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">F. Conexión Producto → KPI</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {productImpact.map((p, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col">
                                <h3 className="font-bold text-xl text-[#6D84E3] mb-2">{p.product}</h3>
                                <div className="mb-4 flex-grow">
                                    <p className="text-xs text-gray-500 uppercase font-bold">Resuelve:</p>
                                    <p className="text-sm text-gray-800">{p.solve}</p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-xs text-gray-500 uppercase font-bold">KPI Afectado:</p>
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">{p.kpi}</span>
                                </div>
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <p className="text-xs text-green-800 font-bold">Impacto Esperado:</p>
                                    <p className="text-sm font-bold text-green-900">{p.impact}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TACTICAL ARSENAL (SEARCH TOOL) */}
                <section id="tactical-search" className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 mt-12 text-white">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-2">⚡ Arsenal Táctico (Buscador Rápido)</h2>
                        <p className="text-gray-400 text-sm">Encuentra scripts y respuestas a objeciones en tiempo real durante la llamada.</p>
                    </div>
                    
                    <div className="max-w-xl mx-auto mb-8">
                        <input 
                            type="text"
                            placeholder="🔍 Busca: 'precio', 'competencia', 'metricas'..."
                            className="w-full p-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6D84E3]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {searchTerm && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredTactics.length > 0 ? (
                                filteredTactics.map((item, i) => (
                                    <div key={i} className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                                        <h4 className="font-bold text-[#6D84E3] mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-300">{item.content}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500 col-span-2">No se encontraron resultados tácticos.</p>
                            )}
                        </div>
                    )}
                </section>

            </main>
            
            <footer className="text-center py-8 border-t border-gray-200 mt-16">
                <p className="text-gray-600 font-medium">BeyondCX Playbook | <span className="text-[#6D84E3]">Confidential & Internal Use Only</span></p>
            </footer>
        </div>
    );
};

export default ConversationArsenal;
