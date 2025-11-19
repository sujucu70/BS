
import React, { useState, useMemo } from 'react';
import Accordion from './shared/Accordion';
import { PlaybookSection } from '../types';

interface ConversationArsenalProps {
    onNavigate: (section: PlaybookSection) => void;
}

// Data structures moved outside component for clarity, or kept inside if static. 
// Ideally, these would be in a separate data file, but keeping here for simplicity of the edit.

const painPoints = [
    { id: 'ivr', label: 'IVR Frustrante', impact: 'Alta tasa de abandono (~30%), bajo CSAT y daño a la marca.', solution: 'Beyond-IVR', argument: '"Frente a su menú de opciones, nuestra IA conversacional reduce el abandono en un 90% y mejora el NPS en +25 puntos."' },
    { id: 'espera', label: 'Largas Esperas', impact: 'Abandono de llamadas, bajo CSAT, pérdida de oportunidades de venta.', solution: 'Beyond-IVR / FCR', argument: '"Atendemos el 100% de las interacciones al instante, 24/7, eliminando los tiempos de espera y resolviendo la mayoría sin necesidad de un agente."' },
    { id: 'agentes', label: 'Agentes Quemados', impact: 'Alta rotación, costes de contratación, inconsistencia en el servicio.', solution: 'BPO 2.0', argument: '"Automatizamos las tareas repetitivas y de bajo valor, permitiendo que sus agentes se centren en casos complejos donde realmente aportan. Reducimos la carga rutinaria en un 80%."' },
    { id: 'picos', label: 'Picos de Demanda', impact: 'Llamadas perdidas, SLAs incumplidos, mala experiencia en momentos clave.', solution: 'BPO 2.0', argument: '"Nuestra plataforma elástica escala automáticamente para absorber picos de demanda (Black Friday, campañas) sin necesidad de contratar personal temporal."' },
    { id: 'citas', label: 'Caos en Citas', impact: 'Alta tasa de no-shows, personal sobrecargado y pérdida de ingresos.', solution: 'Beyond-Booking', argument: '"En lugar de la gestión manual, nuestro ciclo automatizado 24/7 reduce los no-shows en un 30% y libera el 60% del tiempo de su personal."' },
    { id: 'pedidos', label: 'Errores en Pedidos', impact: 'Errores en la entrega, costes de logística inversa y clientes insatisfechos.', solution: 'Beyond-Order', argument: '"Contra los errores del proceso manual, nuestro servicio omnicanal procesa pedidos sin errores, aumentando la productividad en más de un 50%."' },
    { id: 'sistemas', label: 'Sistemas Desconectados', impact: 'Procesos manuales, errores, agentes sin contexto del cliente.', solution: 'BPO 2.0', argument: '"Actuamos como la capa de inteligencia que orquesta sus sistemas (CRM, ERP), entregando el contexto completo para una resolución sin fisuras."' },
    { id: 'datos', label: 'Decisiones a Ciegas', impact: 'Incapacidad de mejorar, desconocimiento de la causa raíz de los problemas.', solution: 'BPO 2.0', argument: '"Le entregamos un dashboard con analíticas de causa raíz en tiempo real para que sepa exactamente por qué le contactan y dónde mejorar."' },
];

const discoveryScripts = [
    { title: '📊 M - METRICS (Métricas)', tags: ['metricas', 'kpi', 'medicion'], content: <div><p className="font-bold text-[#6D84E3] mb-4">Objetivo: Cuantificar el estado actual y establecer una base para calcular el ROI.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"><div><h4 className="font-bold mb-2">Preguntas de Situación Actual:</h4><ul className="list-disc list-inside space-y-2"><li>¿Cuántas interacciones gestionáis al mes y cómo se distribuyen (voz, chat, email)?</li><li>¿Qué métricas de eficiencia usáis hoy (tiempo de espera, FCR, tasa de abandono)?</li><li>¿Cómo medís la satisfacción (CSAT, NPS) y cuáles son los resultados?</li><li>¿Qué horario de atención tenéis? ¿Sabéis cuántas oportunidades perdéis fuera de horario?</li></ul></div><div><h4 className="font-bold mb-2">Preguntas de Impacto de Negocio:</h4><ul className="list-disc list-inside space-y-2"><li>Si pudieras mejorar UNA métrica, ¿cuál sería y por qué?</li><li>¿Habéis calculado el coste de [métrica problemática] para el negocio?</li><li>¿Qué nivel de mejora necesitaríais para considerar que la inversión ha valido la pena?</li><li>Si el volumen crece un 30% el próximo año, ¿vuestra operación actual puede absorberlo?</li></ul></div></div><div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-800 text-sm rounded"><p className="font-bold">Señales de Alerta:</p><ul className="list-disc list-inside ml-4"><li>No miden nada más allá del "número de llamadas".</li><li>No conocen su coste por contacto.</li><li>No tienen objetivos o targets claros.</li></ul></div></div> },
    { title: '💰 E - ECONOMIC BUYER (Comprador Económico)', tags: ['presupuesto', 'dinero', 'decisor', 'cfo'], content: <div><p className="font-bold text-[#6D84E3] mb-4">Objetivo: Identificar quién firma el cheque y entender su agenda.</p><ul className="list-disc list-inside space-y-2 text-sm"><li>Aparte de ti, ¿quién más en la organización estaría interesado en el impacto de negocio de mejorar [métrica específica]?</li><li>¿Quién tiene el P&L (profit & loss) de la operación de atención al cliente?</li><li>Si hablamos de una inversión de [rango estimado] mensual, ¿quién tendría que dar el OK final?</li><li>¿Cuáles son las prioridades estratégicas de [CEO/CFO/COO] este año?</li><li>Si encontramos la solución perfecta, ¿tendrías capacidad para aprobarla o necesitamos involucrar a más personas?</li></ul><div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-800 text-sm rounded"><p className="font-bold">Señales de Alerta:</p><ul className="list-disc list-inside ml-4"><li>Hablas con alguien varios niveles por debajo del decisor sin un plan de acceso.</li><li>"No sé quién aprobaría esto".</li><li>El Economic Buyer no está involucrado y no hay plan para hacerlo.</li></ul></div></div> },
    { title: '🎯 D - DECISION CRITERIA (Criterios de Decisión)', tags: ['criterios', 'requisitos', 'evaluacion'], content: <div><p className="font-bold text-[#6D84E3] mb-4">Objetivo: Entender QUÉ es importante para ellos al evaluar soluciones.</p><ul className="list-disc list-inside space-y-2 text-sm"><li>¿Qué es lo más importante para vosotros al evaluar un partner para vuestro CX: ROI rápido, mejor experiencia de cliente o menor riesgo de implementación?</li><li>¿Hay algún requisito técnico o de integración que sea innegociable?</li><li>¿Qué opciones estáis considerando (BPO tradicional, in-house, otro software de IA)?</li><li>¿Qué os ha gustado y qué no de lo que habéis visto hasta ahora en el mercado?</li></ul><div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-800 text-sm rounded"><p className="font-bold">Señales de Alerta:</p><ul className="list-disc list-inside ml-4"><li>Solo se fijan en el precio, ignoran el valor/ROI.</li><li>Criterios vagos como "queremos lo mejor".</li><li>Cambios constantes de prioridades (falta de alineación interna).</li></ul></div></div> },
    { title: '🔄 D - DECISION PROCESS (Proceso de Decisión)', tags: ['proceso', 'tiempos', 'firma', 'legal'], content: <div> <p className="font-bold text-[#6D84E3] mb-4">Objetivo: Mapear CÓMO y CUÁNDO se toma la decisión.</p><ul className="list-disc list-inside space-y-2 text-sm"><li>¿Cuál es vuestro timeline ideal para tomar una decisión sobre esto? ¿Hay alguna fecha límite que genere urgencia?</li><li>¿Cuáles son los pasos típicos que seguís para aprobar un proyecto de este tipo?</li><li>¿Quién más necesita dar su visto bueno (IT, Legal, Seguridad, Compras)?</li><li>¿Qué podría frenar o retrasar esta decisión?</li><li>¿Te parece bien que co-creemos un plan con hitos y fechas para tener claridad de los próximos pasos?</li></ul><div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-800 text-sm rounded"><p className="font-bold">Señales de Alerta:</p><ul className="list-disc list-inside ml-4"><li>"No sé cuánto tardaremos".</li><li>Proceso descrito es &gt; 6 meses.</li><li>Múltiples stakeholders con poder de veto y sin alineación.</li></ul></div></div>},
    { title: '🔥 I - IDENTIFY PAIN (Identificar el Dolor)', tags: ['dolor', 'problema', 'urgencia'], content: <div><p className="font-bold text-[#6D84E3] mb-4">Objetivo: Descubrir el dolor REAL y su impacto emocional y de negocio.</p><ul className="list-disc list-inside space-y-2 text-sm"><li>¿Qué te hizo empezar a explorar soluciones como la nuestra? ¿Qué no está funcionando hoy?</li><li>¿Desde cuándo es esto un problema y qué habéis intentado para resolverlo?</li><li>¿Cuánto os está costando este problema al mes/año (en clientes perdidos, horas extra, etc.)?</li><li>¿Cómo te hace sentir a ti personalmente esta situación? ¿Hay presión para que lo resuelvas?</li><li>Del 1 al 10, ¿qué tan urgente es resolver esto? ¿Qué pasa si NO lo resolvéis?</li></ul><div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-800 text-sm rounded"><p className="font-bold">Señales de Alerta:</p><ul className="list-disc list-inside ml-4"><li>Dolor superficial ("sería bueno mejorar" vs. "es crítico").</li><li>No pueden cuantificar el impacto (no hay urgencia real).</li><li>"Todo funciona bien, solo estamos explorando".</li></ul></div></div> },
    { title: '🏆 C - CHAMPION (Campeón Interno)', tags: ['champion', 'aliado', 'promotor'], content: <div><p className="font-bold text-[#6D84E3] mb-4">Objetivo: Encontrar y habilitar a tu aliado interno que empujará el cambio.</p><ul className="list-disc list-inside space-y-2 text-sm"><li>¿Quién dentro de la organización está más comprometido con resolver [problema]?</li><li>¿Estarías dispuesto a presentar esta solución al [Economic Buyer]?</li><li>¿Qué puedo prepararte para que puedas vender esto internamente (un business case, un resumen ejecutivo)?</li><li>¿Quién podría oponerse a esto internamente y por qué?</li><li>¿Cómo impactaría en tu carrera si este proyecto es un éxito?</li></ul><div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-800 text-sm rounded"><p className="font-bold">Señales de Alerta:</p><ul className="list-disc list-inside ml-4"><li>No hay un champion claro.</li><li>El champion no tiene influencia real o credibilidad.</li><li>Es entusiasta pero no está dispuesto a "mojarse" internamente.</li></ul></div></div> },
    { title: '🥊 C - COMPETITION (Competencia)', tags: ['competencia', 'rivales', 'alternativas'], content: <div><p className="font-bold text-[#6D84E3] mb-4">Objetivo: Entender con qué o quién compites realmente (incluido el status quo).</p><ul className="list-disc list-inside space-y-2 text-sm"><li>¿Qué otras opciones estáis evaluando? ¿Habéis hablado con otros BPOs o proveedores de IA?</li><li>Si tenéis un proveedor actual, ¿qué os gusta y qué no? ¿Cuánto tiempo os queda de contrato?</li><li>¿Qué os haría elegir un proveedor nuevo vs. quedaros con lo conocido?</li><li>¿Cuál es el riesgo de no hacer nada? ¿Por qué no seguir como estáis?</li></ul><div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-800 text-sm rounded"><p className="font-bold">Señales de Alerta:</p><ul className="list-disc list-inside ml-4"><li>Están evaluando más de 5 proveedores sin criterios claros.</li><li>"Solo queremos comparar precios".</li><li>El status quo es muy cómodo (el dolor no es real).</li></ul></div></div> }
];

const objections = [
    { title: '"Es muy caro" / "No tenemos presupuesto"', tags: ['precio', 'caro', 'presupuesto', 'coste'], content: <div className="text-sm"><p className="font-bold text-[#3F3F3F]">Filosofía: Reencuadrar de coste a inversión.</p><blockquote><p className="font-bold">Respuesta Clave:</p><p>"Entiendo perfectamente la sensibilidad al precio. Por eso nosotros no hablamos de coste, sino de retorno. Basado en tus métricas de [métrica de dolor, ej: FCR del 65%], estimamos que podrías estar perdiendo [cálculo rápido de impacto] € al mes. Nuestro modelo busca autofinanciarse con los ahorros que genera. ¿Qué te parece si preparamos un business case rápido con tus propios números para ver en cuántos meses tendrías el ROI?"</p></blockquote><p className="mt-4 text-xs"><strong className="text-[#6D84E3]">Puntos de Refuerzo:</strong> Modelo OPEX vs CAPEX, no vendemos horas sino resultados, el coste de no hacer nada es mayor.</p></div> },
    { title: '"Ya tenemos un proveedor de BPO" / "Estamos contentos"', tags: ['proveedor', 'bpo', 'competencia'], content: <div className="text-sm"><p className="font-bold text-[#3F3F3F]">Filosofía: Validar y diferenciar, no atacar.</p><blockquote><p className="font-bold">Respuesta Clave:</p><p>"No me sorprende, [Proveedor Actual] es un actor conocido. No buscamos reemplazar lo que ya funciona, sino potenciarlo. Nosotros nos definimos como un BPO 2.0. Mientras los BPO tradicionales escalan añadiendo personas, nosotros escalamos con inteligencia. ¿Puedo preguntarte qué tan satisfecho estás, del 1 al 10, con su capacidad para innovar y reducir proactivamente tu coste por contacto?"</p></blockquote><p className="mt-4 text-xs"><strong className="text-[#6D84E3]">Puntos de Refuerzo:</strong> Modelo híbrido, tecnología agnóstica, no somos un BPO tradicional, mejora continua incluida en la suscripción.</p></div> },
    { title: '"Sois muy nuevos/pequeños" / "Necesito referencias"', tags: ['riesgo', 'experiencia', 'referencias', 'pequeños'], content: <div className="text-sm"><p className="font-bold text-[#3F3F3F]">Filosofía: Convertir el "riesgo" en una ventaja exclusiva.</p><blockquote><p className="font-bold">Respuesta Clave:</p><p>"Entiendo tu preocupación. Es cierto que no somos una multinacional, y eso es precisamente nuestra mayor ventaja. Para nosotros, cada cliente es una referencia vital. Recibirás un nivel de atención, personalización y acceso a nuestro equipo senior que es imposible para los grandes proveedores. Para mitigar cualquier riesgo, nuestro modelo de suscripción es flexible y sin fricción. No hay un gran proyecto inicial; empezamos probando el valor en un área concreta y escalamos con los resultados. ¿Qué te parece si empezamos con un piloto de 90 días enfocado en [proceso específico] para que veas el impacto sin ningún compromiso a largo plazo?"</p></blockquote><p className="mt-4 text-xs"><strong className="text-[#6D84E3]">Puntos de Refuerzo:</strong> Flexibilidad, acceso a expertos, modelo sin riesgo, agilidad, cada cliente es un partner estratégico.</p></div> },
    { title: '"Mis clientes prefieren hablar con humanos" / "¿Y si la IA se equivoca?"', tags: ['ia', 'humanos', 'calidad', 'error'], content: <div className="text-sm"><p className="font-bold text-[#3F3F3F]">Filosofía: Educar sobre el modelo híbrido y el valor de la IA.</p><blockquote><p className="font-bold">Respuesta Clave:</p><p>"Estoy 100% de acuerdo. Para las interacciones complejas y emocionales, nada sustituye a un humano experto. Nuestra filosofía no es reemplazar a los humanos, sino potenciarlos. Usamos la IA para lo que es buena: resolver de forma instantánea el 80% de las consultas repetitivas (dónde está mi pedido, agendar una cita). Esto libera a tus agentes para que dediquen más tiempo y calidad a los casos que de verdad requieren empatía. Además, nuestro sistema tiene supervisión humana y aprende continuamente, garantizando una transición natural y segura. Se trata de tener lo mejor de ambos mundos."</p></blockquote><p className="mt-4 text-xs"><strong className="text-[#6D84E3]">Puntos de Refuerzo:</strong> Modelo híbrido, IA para lo repetitivo, humanos para lo complejo, mejora la calidad del trabajo de los agentes, supervisión constante.</p></div> },
    { title: '"No tengo tiempo para un proyecto de implementación ahora"', tags: ['tiempo', 'recursos', 'implementacion'], content: <div className="text-sm"><p className="font-bold text-[#3F3F3F]">Filosofía: Posicionar Beyond como un servicio gestionado, no un proyecto de IT.</p><blockquote><p className="font-bold">Respuesta Clave:</p><p>"Esa es la belleza de nuestro modelo. Esto no es un proyecto de software tradicional que consumirá a tu equipo de IT durante meses. Es un servicio gestionado. Nosotros nos encargamos de toda la complejidad de la integración y la puesta en marcha. Lo que necesitamos de tu parte es una sesión de arranque para definir los objetivos y el acceso a los sistemas necesarios. A partir de ahí, nuestro equipo se encarga de todo. Es una transformación 'fricción cero'. Precisamente lo diseñamos para empresas como la tuya que necesitan resultados sin añadir más carga a sus equipos."</p></blockquote><p className="mt-4 text-xs"><strong className="text-[#6D84E3]">Puntos de Refuerzo:</strong> Servicio gestionado ("done-for-you"), fricción cero, no es un proyecto de IT, nos integramos a lo que ya tienes.</p></div> },
];

const battleCards = [
    { title: '🥊 vs. BPO Tradicional (Concentrix, Teleperformance)', tags: ['bpo', 'tradicional', 'coste'], content: <div className="text-sm">
        <p className="mb-2"><strong className="text-[#3F3F3F]">Cómo se Venden:</strong> "Te ahorramos costes moviendo tu operación a un lugar más barato. Escalamos añadiendo personas."</p>
        <p className="mb-4"><strong className="text-[#3F3F3F]">Su Punto Débil:</strong> Su modelo es lineal (más volumen = más personas = más coste). Son lentos para innovar y su tecnología suele ser una capa superficial sobre procesos antiguos.</p>
        <h4 className="font-bold text-[#6D84E3] mb-2">Nuestras Balas de Plata:</h4>
        <ul className="list-disc list-inside space-y-2">
            <li>
                <strong className="font-bold">Foco en Valor, no en Arbitraje:</strong> Su propuesta es el arbitraje de costes laborales ('te ahorramos €270k/año'). La nuestra es la creación de valor amplificando la inteligencia: "mejoramos tu CSAT un 40%, reducimos TMO un 60% y optimizamos costes un 30%, todo simultáneamente".
            </li>
            <li>
                <strong className="font-bold">Transformación vs. Optimización Reactiva:</strong> Un BPO tradicional se enfoca en la optimización reactiva (hacer más eficiente lo que ya existe). Nosotros nos centramos en la transformación proactiva, creando nuevas capacidades de negocio que te dan una ventaja competitiva real.
            </li>
            <li>
                <strong className="font-bold">Escalado Inteligente vs. Lineal:</strong> Ellos escalan con personas, resultando en costos lineales y tiempos de implementación altos. Nosotros escalamos con inteligencia colaborativa humano-IA: los costos crecen logarítmicamente, la calidad mejora con la escala y el time-to-market se reduce drásticamente.
            </li>
        </ul>
    </div> },
    { title: '🥊 vs. Consultora Tecnológica (Accenture, Deloitte)', tags: ['consultora', 'estrategia', 'caro'], content: <div className="text-sm"><p className="mb-2"><strong className="text-[#3F3F3F]">Cómo se Venden:</strong> "Diseñamos tu estrategia de transformación digital y te recomendamos la mejor tecnología."</p><p className="mb-4"><strong className="text-[#3F3F3F]">Su Punto Débil:</strong> Son excelentes para la estrategia, pero no para la ejecución del día a día. Te entregan un plan (un PowerPoint) y se van. La responsabilidad de la operación sigue siendo tuya.</p><h4 className="font-bold text-[#6D84E3] mb-2">Nuestras Balas de Plata:</h4><ul className="list-disc list-inside space-y-2"><li><strong className="font-bold">Operación vs. Estrategia:</strong> "Ellos te entregan un mapa, nosotros conducimos el coche contigo. No solo diseñamos la estrategia, sino que la operamos de principio a fin, garantizando los resultados."</li><li><strong className="font-bold">Responsabilidad Única:</strong> "Con ellos, gestionas una estrategia, un proveedor de software y tu equipo interno. Con nosotros, tienes un único socio responsable de los KPIs de negocio de principio a fin."</li><li><strong className="font-bold">Modelo de Resultados:</strong> "Ellos facturan por horas de consultor. Nosotros facturamos por resultados alcanzados. Nuestro éxito está 100% alineado con el tuyo."</li></ul></div> },
    { title: '🥊 vs. Solución de IA "Caja Negra" (Chatbots, Plataformas SaaS)', tags: ['ia', 'bot', 'saas'], content: <div className="text-sm"><p className="mb-2"><strong className="text-[#3F3F3F]">Cómo se Venden:</strong> "Nuestro software de IA automatizará tu atención al cliente. Es fácil de instalar."</p><p className="mb-4"><strong className="text-[#3F3F3F]">Su Punto Débil:</strong> Venden una herramienta, no una solución. La carga de la integración, el entrenamiento de la IA, la gestión de excepciones y la supervisión humana recae sobre el cliente. El 17% de los casos que la IA no puede resolver se convierten en un problema tuyo.</p><h4 className="font-bold text-[#6D84E3] mb-2">Nuestras Balas de Plata:</h4><ul className="list-disc list-inside space-y-2"><li><strong className="font-bold">Servicio Gestionado vs. Herramienta:</strong> "Ellos te venden una herramienta y te desean suerte. Nosotros te entregamos un proceso funcionando. Nos encargamos de la tecnología, la operación y la mejora continua."</li><li><strong className="font-bold">Modelo Híbrido Real:</strong> "Su solución falla cuando la IA no sabe responder. Nuestro modelo híbrido está diseñado para eso: los casos complejos se escalan de forma transparente a nuestros agentes expertos, manteniendo siempre el contexto."</li><li><strong className="font-bold">Tecnología Agnóstica:</strong> "Ellos te encierran en su tecnología. Nosotros somos agnósticos: integramos la mejor IA del mercado para tu caso de uso específico, asegurando que siempre tengas la tecnología más puntera sin tener que cambiar de proveedor."</li></ul></div> },
];

const SolutionVPCard: React.FC<{ title: string; description: string; section: PlaybookSection; onNavigate: (section: PlaybookSection) => void; icon: React.ReactNode; }> = ({ title, description, section, onNavigate, icon }) => (
    <div className="bg-[#e3e3e3] p-6 rounded-lg text-center flex flex-col items-center transition-transform transform hover:-translate-y-2 shadow-md h-full">
        <div className="mx-auto bg-blue-100 text-[#6D84E3] w-16 h-16 rounded-full flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[#3F3F3F] mb-2">{title}</h3>
        <p className="text-sm text-gray-600 flex-grow mb-4">{description}</p>
        <button onClick={() => onNavigate(section)} className="mt-auto inline-block bg-[#6D84E3] hover:bg-[#5a6fbf] text-white font-bold py-2 px-6 rounded-lg text-md shadow-lg hover:shadow-xl transition-all">
            Ver Propuesta de Valor
        </button>
    </div>
);


const ConversationArsenal: React.FC<ConversationArsenalProps> = ({ onNavigate }) => {
    const [activePainPoint, setActivePainPoint] = useState(painPoints[0].id);
    const [searchTerm, setSearchTerm] = useState('');

    const currentPainPoint = painPoints.find(p => p.id === activePainPoint) || painPoints[0];

    // Filter logic for the search tool
    const filteredScripts = useMemo(() => {
        if (!searchTerm) return discoveryScripts;
        return discoveryScripts.filter(item => 
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags?.some(tag => tag.includes(searchTerm.toLowerCase()))
        );
    }, [searchTerm]);

    const filteredObjections = useMemo(() => {
        if (!searchTerm) return objections;
        return objections.filter(item => 
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags?.some(tag => tag.includes(searchTerm.toLowerCase()))
        );
    }, [searchTerm]);

    const filteredBattleCards = useMemo(() => {
        if (!searchTerm) return battleCards;
        return battleCards.filter(item => 
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags?.some(tag => tag.includes(searchTerm.toLowerCase()))
        );
    }, [searchTerm]);

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#e3e3e3]">
             <header className="text-center py-12 relative">
                <h1 className="text-4xl md:text-6xl font-bold text-[#000000]">Arsenal de Conversación</h1>
                <p className="text-xl md:text-2xl text-[#6D84E3] mt-4">Herramienta de Batalla: Busca, Encuentra, Gana.</p>
                
                {/* Search Bar - The "Consultant" Upgrade */}
                <div className="max-w-2xl mx-auto mt-8 relative">
                    <input 
                        type="text"
                        placeholder="🔍 Busca por objeción, métrica o dolor (ej: 'precio', 'ivr', 'competencia')..."
                        className="w-full p-4 rounded-full border-2 border-[#6D84E3] shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>

            <main>
                {searchTerm ? (
                    // Search Results View
                    <div className="space-y-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-bold text-[#6D84E3] mb-4">Resultados de Búsqueda</h3>
                            {filteredScripts.length === 0 && filteredObjections.length === 0 && filteredBattleCards.length === 0 ? (
                                <p className="text-center text-gray-500">No se encontraron resultados. Prueba con otra palabra clave.</p>
                            ) : (
                                <div className="space-y-6">
                                    {filteredObjections.length > 0 && (
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2 border-b pb-2">Manejo de Objeciones</h4>
                                            <Accordion items={filteredObjections} />
                                        </div>
                                    )}
                                    {filteredScripts.length > 0 && (
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2 border-b pb-2">Guiones de Descubrimiento</h4>
                                            <Accordion items={filteredScripts} />
                                        </div>
                                    )}
                                     {filteredBattleCards.length > 0 && (
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2 border-b pb-2">Battle Cards</h4>
                                            <Accordion items={filteredBattleCards} />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    // Default View
                    <>
                        <section id="uvp" className="mb-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                            <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Propuesta Única de Valor (UVP) y Elevator Pitch</h2>
                            <p className="text-center text-lg text-[#6D84E3] mb-12">Nuestros mensajes clave, pulidos y memorizables.</p>
                            <div className="bg-[#e3e3e3] p-6 rounded-lg border-l-4 border-[#6D84E3] mb-8"><h3 className="text-2xl font-bold text-[#3F3F3F] mb-4">Propuesta Única de Valor (UVP)</h3><p className="text-[#3F3F3F]">Para empresas que buscan escalar su atención al cliente de forma inteligente, <strong>Beyond es el socio operativo que transforma sus costes fijos en resultados variables</strong>. A diferencia de los BPO tradicionales que escalan con personas, nosotros lo hacemos con inteligencia, combinando un ecosistema de IA y agentes humanos expertos en un modelo de suscripción flexible y de cero fricción. <strong>No vendemos horas, entregamos impacto.</strong></p></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-[#e3e3e3] p-6 rounded-lg"><h3 className="text-2xl font-bold text-[#3F3F3F] mb-4">Elevator Pitch (30 Segundos)</h3><p className="text-[#3F3F3F] mb-4">¿Tu atención al cliente te cuesta cada vez más y no da los resultados que esperas? En Beyond, reinventamos el juego.</p><p className="text-[#3F3F3F] mb-4">Transformamos tu operación en un motor de eficiencia con un modelo <strong>BPO 2.0</strong> que combina lo mejor de la IA y el talento humano. Olvídate de los grandes proyectos y los costes fijos. Con nosotros, adoptas el futuro de forma progresiva, pagando solo por resultados.</p><blockquote className="font-bold">Dejamos de escalar con personas para escalar con inteligencia.</blockquote></div>
                                <div className="bg-[#e3e3e3] p-6 rounded-lg"><h3 className="text-2xl font-bold text-[#3F3F3F] mb-4">Elevator Pitch (2 Minutos)</h3><p className="text-[#3F3F3F] mb-4">Sé que tu atención al cliente se enfrenta a una presión constante: reducir costes, mejorar la satisfacción y escalar sin perder el control. Los BPO tradicionales ofrecen más personas; las tecnológicas, proyectos largos y arriesgados.</p><p className="text-[#3F3F3F] mb-4">En Beyond rompemos ese dilema. Somos un socio operativo BPO 2.0 que vende resultados medibles a través de tres pilares:</p><ul className="space-y-3 text-sm text-[#3F3F3F]"><li><strong className="text-[#6D84E3]">1. Ecosistema Tecnológico Agéntico:</strong> IA y automatización que funcionan como una extensión de tu equipo para liberar a tu gente.</li><li><strong className="text-[#6D84E3]">2. Modelo Operativo Híbrido:</strong> IA y humanos colaborando en sintonía para máxima eficiencia y una experiencia natural.</li><li><strong className="text-[#6D84E3]">3. Suscripción Flexible:</strong> Sin grandes inversiones ni proyectos interminables. Es una transformación sin fricciones y sin riesgos.</li></ul><blockquote className="font-bold mt-4">Mientras otros te ofrecen un centro de costes, nosotros te damos una ventaja competitiva.</blockquote></div>
                            </div>
                        </section>
                        
                        <section id="solution-vps" className="mb-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                            <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Propuestas de Valor por Solución</h2>
                            <p className="text-center text-lg text-[#6D84E3] mb-12">Profundiza en la propuesta de valor específica para cada una de nuestras soluciones clave.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <SolutionVPCard
                                    title="Beyond-Booking"
                                    description="Revoluciona la gestión de citas con una solución híbrida de IA y talento humano que reduce no-shows, elimina esperas y libera tu equipo."
                                    section={PlaybookSection.BOOKING_VP}
                                    onNavigate={onNavigate}
                                    icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>}
                                />
                                <SolutionVPCard
                                    title="Beyond-FCR"
                                    description="Transforma tu soporte resolviendo más del 90% de las consultas en el primer contacto. Reduce costes, aumenta la satisfacción y libera a tu equipo."
                                    section={PlaybookSection.FCR_VP}
                                    onNavigate={onNavigate}
                                    icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>}
                                />
                                <SolutionVPCard
                                    title="Beyond-IVR"
                                    description="Reemplaza tu IVR tradicional por una experiencia de IA conversacional 24/7 que dispara la satisfacción del cliente y reduce los tiempos de espera en un 90%."
                                    section={PlaybookSection.IVR_VP}
                                    onNavigate={onNavigate}
                                    icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2 2m-2-2v2.5a4.5 4.5 0 01-9 0V6m0 0l2 2m-2-2l-2-2"></path></svg>}
                                />
                                <SolutionVPCard
                                    title="Beyond-Order"
                                    description="Automatiza y simplifica el ciclo completo de gestión de pedidos. Multiplica la eficiencia, elimina errores y ofrece un servicio omnicanal 24/7."
                                    section={PlaybookSection.ORDER_VP}
                                    onNavigate={onNavigate}
                                    icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>}
                                />
                            </div>
                        </section>

                        <section id="matriz" className="mb-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                            <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Matriz Interactiva de Dolor y Solución</h2>
                            <p className="text-center text-lg text-[#6D84E3] mb-8">Usa esta herramienta durante tus llamadas para conectar directamente un dolor con nuestra solución y un argumento clave.</p>
                            <div className="flex flex-wrap justify-center gap-3 mb-8">
                                {painPoints.map(p => (
                                    <button 
                                        key={p.id}
                                        onClick={() => setActivePainPoint(p.id)}
                                        className={`transition-all duration-200 ease-in-out text-xs md:text-sm py-2 px-3 rounded-lg border-2 ${activePainPoint === p.id ? 'bg-[#6D84E3] text-white border-[#6D84E3] transform scale-105 shadow-lg' : 'bg-[#e3e3e3] text-[#3F3F3F] border-[#B1B1B0] hover:bg-gray-300'}`}
                                    >
                                        {p.label}
                                    </button>
                                ))}
                            </div>

                            <div className="bg-[#e3e3e3] p-6 rounded-lg min-h-[150px] flex items-center">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-center w-full">
                                    <div><h4 className="font-bold text-lg text-[#3F3F3F]">Impacto en Negocio</h4><p className="mt-2 text-gray-700">{currentPainPoint.impact}</p></div>
                                    <div><h4 className="font-bold text-lg text-[#6D84E3]">Nuestra Solución</h4><p className="mt-2 font-bold text-2xl text-[#6D84E3]">{currentPainPoint.solution}</p></div>
                                    <div><h4 className="font-bold text-lg text-[#3F3F3F]">Argumento Clave (Bala de Plata)</h4><p className="mt-2 text-gray-700">{currentPainPoint.argument}</p></div>
                                </div>
                            </div>
                        </section>

                        <section id="battle-cards" className="mb-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                            <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Battle Cards de Competencia</h2>
                            <p className="text-center text-lg text-[#6D84E3] mb-12">Nuestra ventaja competitiva de un vistazo.</p>
                            
                            <div className="overflow-x-auto mb-12">
                                <table className="w-full text-sm text-left text-gray-700 bg-white rounded-lg shadow-inner border">
                                    <thead className="text-xs text-gray-800 uppercase bg-[#e3e3e3]">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 rounded-tl-lg">Tipo de Competidor</th>
                                            <th scope="col" className="px-6 py-3">Su Pitch</th>
                                            <th scope="col" className="px-6 py-3">Nuestra Bala de Plata</th>
                                            <th scope="col" className="px-6 py-3 rounded-tr-lg">Argumento Clave</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b"><td className="px-6 py-4 font-bold align-top">BPO Tradicional</td><td className="px-6 py-4 align-top">"Escalamos con personas, más barato."</td><td className="px-6 py-4 text-[#6D84E3] font-bold align-top">Escalado Inteligente</td><td className="px-6 py-4 align-top">"Ellos escalan con personas, nosotros con inteligencia. Nuestro coste no es lineal."</td></tr>
                                        <tr className="border-b"><td className="px-6 py-4 font-bold align-top">Consultora Tecnológica</td><td className="px-6 py-4 align-top">"Te entregamos la estrategia (un PPT)."</td><td className="px-6 py-4 text-[#6D84E3] font-bold align-top">Operación vs. Estrategia</td><td className="px-6 py-4 align-top">"Ellos te dan el mapa, nosotros conducimos el coche contigo. Somos responsables del resultado."</td></tr>
                                        <tr className=""><td className="px-6 py-4 font-bold align-top">Software de IA (SaaS)</td><td className="px-6 py-4 align-top">"Nuestra herramienta lo automatiza todo."</td><td className="px-6 py-4 text-[#6D84E3] font-bold align-top">Servicio Gestionado vs. Herramienta</td><td className="px-6 py-4 align-top">"Ellos te venden el software y te dejan solo. Nosotros te entregamos un proceso funcionando de principio a fin."</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <Accordion items={battleCards} />
                        </section>

                        <section id="materials" className="mb-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                            <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Materiales de Apoyo</h2>
                            <p className="text-center text-lg text-[#6D84E3] mb-12">Recursos clave para preparar tus reuniones.</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-[#e3e3e3] p-6 rounded-lg text-center flex flex-col items-center transition-transform transform hover:-translate-y-2">
                                    <div className="mx-auto bg-blue-100 text-[#6D84E3] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#3F3F3F] mb-2">Biblioteca de Contenido</h3>
                                    <p className="text-sm text-gray-600 flex-grow mb-4">Accede a la carpeta compartida con las últimas presentaciones, whitepapers y casos de estudio.</p>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#6D84E3] hover:bg-[#5a6fbf] text-white font-bold py-2 px-6 rounded-lg text-md shadow-lg hover:shadow-xl transition-all">
                                        Abrir Carpeta
                                    </a>
                                </div>
                                <div className="bg-[#e3e3e3] p-6 rounded-lg text-center flex flex-col items-center transition-transform transform hover:-translate-y-2">
                                    <div className="mx-auto bg-blue-100 text-[#6D84E3] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#3F3F3F] mb-2">Videoteca de Demos</h3>
                                    <p className="text-sm text-gray-600 flex-grow mb-4">Utiliza nuestras demos pre-grabadas y personalizables para mostrar el poder de Beyond a tus clientes.</p>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#6D84E3] hover:bg-[#5a6fbf] text-white font-bold py-2 px-6 rounded-lg text-md shadow-lg hover:shadow-xl transition-all">
                                        Ver Demos
                                    </a>
                                </div>
                                <div className="bg-[#e3e3e3] p-6 rounded-lg text-center flex flex-col items-center transition-transform transform hover:-translate-y-2">
                                    <div className="mx-auto bg-blue-100 text-[#6D84E3] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#3F3F3F] mb-2">Calculadora de ROI</h3>
                                    <p className="text-sm text-gray-600 flex-grow mb-4">Una herramienta interactiva para construir un business case sólido junto a tu cliente en tiempo real.</p>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#6D84E3] hover:bg-[#5a6fbf] text-white font-bold py-2 px-6 rounded-lg text-md shadow-lg hover:shadow-xl transition-all">
                                        Usar Calculadora
                                    </a>
                                </div>
                            </div>
                        </section>
                        
                        <section id="objections" className="mb-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                            <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Manejo de Objeciones</h2>
                            <p className="text-center text-lg text-[#6D84E3] mb-12">Respuestas estándar a las preocupaciones más comunes.</p>
                            <Accordion items={objections} />
                        </section>

                        <section id="discovery" className="mb-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                            <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Guiones de Descubrimiento (Discovery Scripts)</h2>
                            <p className="text-center text-lg text-[#6D84E3] mb-12">Framework de preguntas MEDDICC para diagnosticar antes que prescribir.</p>
                            <Accordion items={discoveryScripts} />
                        </section>
                    </>
                )}

                 <footer className="text-center py-8 border-t border-[#B1B1B0] mt-12">
                    <p className="text-xl font-bold text-[#3F3F3F]">BeyondCX: Vendemos Resultados.</p>
                </footer>
            </main>
        </div>
    );
};

export default ConversationArsenal;
