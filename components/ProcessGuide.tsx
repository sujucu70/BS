import React from 'react';
import MeddiccImpactChart from './charts/MeddiccImpactChart';
import PipelineHealthChart from './charts/PipelineHealthChart';
import Accordion from './shared/Accordion';

const PrincipleCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 h-full flex flex-col">
        <div className="mx-auto bg-blue-100 text-[#6D84E3] w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mt-5">{title}</h3>
        <p className="mt-3 text-gray-600 font-light text-sm flex-grow">{description}</p>
    </div>
);

const StageCard: React.FC<{ stage: string; title: string; objective: string; exitCriteria: React.ReactNode; hubspotMission: React.ReactNode; isLast?: boolean }> = ({ stage, title, objective, exitCriteria, hubspotMission, isLast }) => (
    <div className={`w-full lg:flex-1 bg-[#e3e3e3] p-6 rounded-xl shadow-md border-t-4 ${isLast ? 'border-green-500' : 'border-[#6D84E3]'} flex flex-col transition-transform transform hover:-translate-y-1`}>
        <div className="text-center">
            <div className={`text-2xl font-bold ${isLast ? 'text-green-600' : 'text-[#6D84E3]'}`}>{stage}. {title}</div>
            <p className="text-gray-600 mt-2 text-sm font-light"><strong>OBJETIVO:</strong> {objective}</p>
        </div>
        <div className="mt-4 text-left text-xs bg-white p-3 rounded-md flex-grow">
            <p className="font-bold text-gray-700">CRITERIO DE SALIDA:</p>
            {exitCriteria}
            <p className="font-bold text-gray-700 mt-3">🎯 TU MISIÓN EN HUBSPOT:</p>
            {hubspotMission}
        </div>
    </div>
);

const stages = [
    {
        stage: "1", title: "Lead (MQL)",
        objective: "Realizar el primer contacto y agendar una llamada de descubrimiento.",
        exitCriteria: <ul className="list-disc list-inside mt-1"><li>Llamada de Discovery agendada.</li></ul>,
        hubspotMission: <ul className="list-disc list-inside mt-1"><li>Asegurarte de que el Contacto y Deal estén creados.</li><li>Verificar y completar campos: <code>Origen del Lead</code>, <code>País</code>.</li><li>Registrar la llamada/email y agendar la reunión.</li></ul>,
    },
    {
        stage: "2", title: "Discovery",
        objective: "Diagnosticar, cuantificar el dolor y encontrar un aliado (Champion).",
        exitCriteria: <ul className="list-disc list-inside mt-1"><li>Necesidades de negocio y proceso de decisión documentados.</li></ul>,
        hubspotMission: <ul className="list-disc list-inside mt-1"><li>Rellenar los campos MEDDICC-lite: <code>Pain</code>, <code>Métricas</code>, <code>Champion</code>, etc.</li><li>Documentar los desafíos del cliente en notas detalladas.</li><li>Actualizar el campo <code>Next Step + fecha</code>.</li></ul>,
    },
    {
        stage: "3", title: "Fit & Viabilidad",
        objective: "Confirmar el encaje de la solución y la viabilidad del proyecto.",
        exitCriteria: <ul className="list-disc list-inside mt-1"><li>Encaje de la solución confirmado por el cliente.</li></ul>,
        hubspotMission: <ul className="list-disc list-inside mt-1"><li>Validar y rellenar <code>Criterios y Proceso de Decisión</code>.</li><li>Identificar el <code>Technical Buyer</code> y registrar sus requerimientos.</li><li>Crear y agendar la tarea para la preparación de la Demo.</li></ul>,
    },
    {
        stage: "4", title: "Solución & Demo",
        objective: "Presentar una demo personalizada y acordar un plan de acción.",
        exitCriteria: <ul className="list-disc list-inside mt-1"><li>Demo entregada y criterios de evaluación definidos.</li></ul>,
        hubspotMission: <ul className="list-disc list-inside mt-1"><li>Marcar el campo <code>MAP activo</code> a "Sí".</li><li>Adjuntar el borrador del Plan de Acción Mutuo (MAP).</li><li>Agendar la presentación de la propuesta.</li></ul>,
    },
    {
        stage: "5", title: "Propuesta",
        objective: "Presentar el Business Case con ROI y la propuesta comercial.",
        exitCriteria: <ul className="list-disc list-inside mt-1"><li>Business case presentado, pricing aprobado en principio.</li></ul>,
        hubspotMission: <ul className="list-disc list-inside mt-1"><li>Adjuntar la propuesta final al Deal.</li><li>Actualizar los campos <code>Valor (€ MRR/ACV)</code> y <code>Close Date</code>.</li><li>Registrar la reacción de los stakeholders a la propuesta.</li></ul>,
    },
    {
        stage: "6", title: "Negociación",
        objective: "Resolver objeciones, alinear stakeholders y llegar a un acuerdo final.",
        exitCriteria: <ul className="list-disc list-inside mt-1"><li>Acuerdo verbal y aprobación de compra obtenidos.</li></ul>,
        hubspotMission: <ul className="list-disc list-inside mt-1"><li>Registrar todas las comunicaciones de negociación.</li><li>Iniciar la revisión legal si es necesario y registrarlo.</li><li>Mantener <code>Next Step + fecha</code> actualizado DIARIAMENTE.</li></ul>,
    },
    {
        stage: "7", title: "Cierre (Won/Lost)",
        objective: "Formalizar contrato (Won) o documentar aprendizaje (Lost).",
        exitCriteria: <></>,
        hubspotMission: <ul className="list-disc list-inside mt-1"><li><strong>Ganado (Won):</strong> Agendar Kickoff y rellenar propiedades de Handoff a Operaciones.</li><li><strong>Perdido (Lost):</strong> Rellenar OBLIGATORIAMENTE <code>Motivo de pérdida</code>.</li></ul>,
        isLast: true,
    }
];

const salesProcessContent = (
    <div className="text-sm text-gray-700 space-y-6">
        <p className="italic">Nuestro proceso se divide en 3 fases alineadas con el embudo de ventas B2B, enfocadas en educar, cualificar y demostrar impacto tangible.</p>
        
        <div className="flex flex-col md:flex-row justify-around items-center text-center my-6 p-4 bg-gray-50 rounded-lg space-y-4 md:space-y-0">
            <div><h4 className="font-bold text-blue-600 text-lg">TOFU</h4><p>Educación y Awareness</p></div>
            <div className="text-gray-400 text-2xl hidden md:block">→</div>
            <div><h4 className="font-bold text-green-600 text-lg">MOFU</h4><p>Cualificación y Valor</p></div>
            <div className="text-gray-400 text-2xl hidden md:block">→</div>
            <div><h4 className="font-bold text-orange-600 text-lg">BOFU</h4><p>Negociación e Impacto</p></div>
        </div>

        <div>
            <h4 className="font-bold text-lg text-blue-600 mb-2">Fase 1: TOFU – Educación & Awareness (Crear Demanda)</h4>
            <p className="mb-2"><strong>Qué / Por qué:</strong> Nos dirigimos a una audiencia amplia para generar awareness y educar al mercado sobre los desafíos actuales del CX. Nos posicionamos como un socio consultivo, no como un vendedor.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Objetivos Clave:</strong> Posicionar la categoría BPO 2.0, elevar el "dolor consciente" y convertir Leads en MQLs sin venta directa.</li>
                <li><strong>Estrategias:</strong> Contenido educativo (posts, webinars), assets descargables (benchmarks), y campañas de ABM a cuentas objetivo.</li>
                <li><strong>Handoff a MOFU:</strong> Un MQL se define cuando cumple nuestro perfil de cliente ideal (Fit Score ≥ 60) y ha mostrado intención clara (Intent Score ≥ 40).</li>
            </ul>
        </div>

        <div>
            <h4 className="font-bold text-lg text-green-600 mb-2">Fase 2: MOFU – Cualificación & Hipótesis de Valor</h4>
            <p className="mb-2"><strong>Qué / Por qué:</strong> Mediante conversaciones directas, cualificamos rigurosamente al prospecto para desarrollar la oportunidad. Respondemos a la pregunta: ¿Tiene un problema que podemos resolver con impacto, y está en condiciones de resolverlo ahora?</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Enfoque Metódico:</strong> Validamos con el framework MEDDICC, cuantificamos el impacto (pre-ROI) y co-creamos un Plan de Acción Mutuo (MAP).</li>
                <li><strong>Estrategias:</strong> Discovery consultivo estructurado, entrega de un "Resumen de Descubrimiento", Demo guiada, y borrador de MAP.</li>
                <li><strong>Handoff a BOFU:</strong> Se avanza solo cuando hay un dolor concreto priorizado, viabilidad técnica confirmada, potencial de ROI atractivo y voluntad del cliente de evaluar una propuesta formal.</li>
            </ul>
        </div>

        <div>
            <h4 className="font-bold text-lg text-orange-600 mb-2">Fase 3: BOFU – Propuesta, Negociación & Cierre</h4>
            <p className="mb-2"><strong>Qué / Por qué:</strong> El foco absoluto está en la propuesta de valor personalizada y el impacto tangible para el cliente.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Objetivos Finales:</strong> Formalizar un business case sólido con datos reales, entregar una propuesta comercial convincente y reducir cualquier percepción de riesgo.</li>
                <li><strong>Puntos de Foco (Diferenciadores):</strong> No ofertamos precio, sino transformación con alto ROI. Atamos cada elemento tecnológico a un beneficio de negocio. Ofrecemos impacto sin riesgo a través de una suscripción flexible.</li>
                <li><strong>Handoff a Entrega:</strong> Con el contrato firmado, se entrega una carpeta de traspaso completa a Operaciones para un kickoff en ≤7 días.</li>
            </ul>
        </div>
    </div>
);

const salesProcessAccordion = [{
    title: 'Nuestro Modelo Operativo de Venta',
    content: salesProcessContent
}];


const ProcessGuide: React.FC = () => {
    const firstRowStages = stages.slice(0, 3);
    const secondRowStages = stages.slice(3);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <header className="text-center py-12">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight">Playbook de Ventas Beyond</h1>
                <p className="text-xl md:text-2xl text-[#6D84E3] mt-4 font-light">Tu Guía Práctica para Ejecutar nuestro Proceso Comercial en HubSpot</p>
                <div className="mt-8 bg-white inline-block p-4 rounded-xl shadow-sm">
                    <p className="text-lg font-medium text-gray-700">Nuestra disciplina en el proceso es nuestra mayor ventaja competitiva. <span className="text-[#6D84E3] font-bold">Tu rigor es la estrategia.</span></p>
                </div>
            </header>

            <main>
                <section id="principles" className="mb-16 md:mb-24">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Nuestros Principios de Ejecución</h2>
                    <p className="text-center text-lg text-gray-500 font-light mb-12">La filosofía que define cómo nos presentamos y aportamos valor.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center max-w-7xl mx-auto">
                        <PrincipleCard title="Educación Antes que Venta" description="Lideramos creando la categoría 'BPO 2.0' y educando con thought leadership." icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>} />
                        <PrincipleCard title="Compromiso Antes que Piloto" description="Solo con sponsor, criterios de éxito y timeline acordados antes de invertir recursos." icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>} />
                        <PrincipleCard title="Venta Basada en Valor" description="Cada interacción aporta valor, con un business case cuantificado y foco en outcomes." icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>} />
                        <PrincipleCard title="Escalabilidad por Diseño" description="Todos nuestros procesos y sistemas están diseñados para ser replicables y escalables." icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>} />
                        <PrincipleCard title="Portfolio como Entry Point" description="Usamos soluciones como 'entry points' para co-crear con clientes según sus necesidades." icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>} />
                    </div>
                </section>

                <section id="hubspot-in-action" className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 lg:p-12 mb-16 md:mb-24">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Tu Día a Día en HubSpot</h2>
                    <div className="text-center bg-[#e3e3e3] p-8 rounded-xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Tu Centro de Mando: El Pipeline de Ventas</h3>
                        <p className="text-lg text-gray-500 font-light mb-6 max-w-2xl mx-auto">Aquí es donde ocurre la magia. Accede para gestionar tus oportunidades, planificar tus próximos pasos y visualizar tu progreso.</p>
                        <a href="https://app-na2.hubspot.com/contacts/244100141/objects/0-3/views/all/board" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#ff7a59] hover:bg-[#e06a4c] text-white font-bold py-3 px-8 rounded-lg text-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">🚀 Acceder al Pipeline de Ventas</a>
                        <p className="text-xs text-gray-400 mt-4"><i>(Recuerda: necesitarás tus credenciales de HubSpot para acceder.)</i></p>
                    </div>

                    <hr className="my-12 border-t border-gray-200" />

                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Las 7 Etapas del Pipeline y Tus Acciones Clave</h3>
                        <p className="text-lg text-gray-500 font-light mb-12 text-center">Sigue estos pasos para mover tus oportunidades de MQL a Cierre.</p>
                        
                        <div className="flex flex-col lg:flex-row items-stretch justify-center space-y-8 lg:space-y-0 lg:space-x-6 mb-8">
                            {firstRowStages.map((stage, index) => (
                                <React.Fragment key={stage.stage}>
                                    <StageCard {...stage} />
                                    {index < firstRowStages.length - 1 && <div className="text-3xl text-gray-300 self-center hidden lg:block">➡️</div>}
                                </React.Fragment>
                            ))}
                        </div>
                        
                        <div className="flex flex-col lg:flex-row items-stretch justify-center space-y-8 lg:space-y-0 lg:space-x-6">
                             {secondRowStages.map((stage, index) => (
                                <React.Fragment key={stage.stage}>
                                    <StageCard {...stage} />
                                    {index < secondRowStages.length - 1 && <div className="text-3xl text-gray-300 self-center hidden lg:block">➡️</div>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="buyer-journey" className="mb-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">El Buyer Journey: La Perspectiva del Cliente</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">Entender su viaje es clave para alinear nuestro proceso de venta con sus necesidades reales.</p>
                    <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-4">
                        <div className="flex-1 text-center">
                            <div className="relative mb-4">
                                <div className="absolute w-full top-1/2 h-0.5 bg-gray-300 hidden md:block"></div>
                                <div className="relative mx-auto w-16 h-16 bg-[#6D84E3] text-white rounded-full flex items-center justify-center text-2xl font-bold z-10">1</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mt-4">Concienciación</h3>
                            <div className="bg-[#e3e3e3] p-4 rounded-lg mt-4 text-sm">
                                <p className="font-semibold text-gray-700">"Tengo síntomas de un problema, pero no sé cómo llamarlo. Siento que algo no va bien en mi CX."</p>
                                <hr className="my-2 border-gray-300"/>
                                <p className="font-bold text-[#6D84E3]">Nuestra Acción: Educar</p>
                                <p className="text-xs text-gray-600">Aportar valor con contenido (whitepapers, posts) que ayude a diagnosticar el problema. No vender.</p>
                            </div>
                        </div>
                        
                        <div className="flex-1 text-center">
                             <div className="relative mb-4">
                                <div className="absolute w-full top-1/2 h-0.5 bg-gray-300 hidden md:block"></div>
                                <div className="relative mx-auto w-16 h-16 bg-[#6D84E3] text-white rounded-full flex items-center justify-center text-2xl font-bold z-10">2</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mt-4">Consideración</h3>
                            <div className="bg-[#e3e3e3] p-4 rounded-lg mt-4 text-sm">
                                <p className="font-semibold text-gray-700">"Ok, entiendo mi problema. ¿Qué tipos de soluciones existen? (BPO, In-house, Software, Híbrido)."</p>
                                <hr className="my-2 border-gray-300"/>
                                <p className="font-bold text-[#6D84E3]">Nuestra Acción: Posicionar</p>
                                <p className="text-xs text-gray-600">Presentar nuestro modelo BPO 2.0 como la categoría ganadora. Usar casos de estudio y comparativas.</p>
                            </div>
                        </div>

                        <div className="flex-1 text-center">
                            <div className="relative mb-4">
                                <div className="absolute w-full top-1/2 h-0.5 bg-gray-300 hidden md:block"></div>
                                <div className="relative mx-auto w-16 h-16 bg-[#6D84E3] text-white rounded-full flex items-center justify-center text-2xl font-bold z-10">3</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mt-4">Decisión</h3>
                            <div className="bg-[#e3e3e3] p-4 rounded-lg mt-4 text-sm">
                                <p className="font-semibold text-gray-700">"Necesito comparar proveedores. ¿Quién me da más confianza, el mejor ROI y menor riesgo de implementación?"</p>
                                <hr className="my-2 border-gray-300"/>
                                <p className="font-bold text-[#6D84E3]">Nuestra Acción: Probar</p>
                                <p className="text-xs text-gray-600">Ofrecer demos personalizadas, construir el Business Case juntos. Presentar nuestra propuesta de valor única.</p>
                            </div>
                        </div>
                        
                         <div className="flex-1 text-center">
                            <div className="relative mb-4">
                                <div className="absolute w-full top-1/2 h-0.5 bg-gray-300 hidden md:block"></div>
                                <div className="relative mx-auto w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold z-10">4</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mt-4">Fidelización</h3>
                            <div className="bg-[#e3e3e3] p-4 rounded-lg mt-4 text-sm">
                                <p className="font-semibold text-gray-700">"Hemos elegido. ¿Veremos el valor prometido? ¿Será un partner estratégico que nos ayude a seguir mejorando?"</p>
                                <hr className="my-2 border-gray-300"/>
                                <p className="font-bold text-green-600">Nuestra Acción: Entregar</p>
                                <p className="text-xs text-gray-600">Onboarding sin fricción. Superar las expectativas. Reportar el valor generado y buscar oportunidades de expansión.</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="deep-dive" className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">El Framework en Profundidad</h2>
                    <p className="text-center text-lg text-gray-500 font-light mb-12">Para los curiosos: por qué nuestras metodologías funcionan y cómo se conectan con los resultados.</p>
                    
                    <div className="mb-8 bg-white rounded-xl shadow-lg p-6 md:p-8">
                        <Accordion items={salesProcessAccordion} />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">🔬 El Impacto de la Cualificación Rigurosa (MEDDICC)</h3>
                            <p className="text-gray-600 font-light mb-6">MEDDICC es nuestro "sistema nervioso". Rellenar estos campos en HubSpot no es burocracia, es construir un caso de éxito predecible. Como muestra el gráfico, cada criterio que validas aumenta exponencialmente la probabilidad de cierre.</p>
                            <MeddiccImpactChart />
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">📈 Anatomía de un Pipeline Saludable</h3>
                            <p className="text-gray-600 font-light mb-6">Este gráfico te muestra los dos componentes vitales de un pipeline predecible. Tu objetivo es replicar esta forma:</p>
                            <ul className="text-left text-sm space-y-3 mb-6">
                                <li className="flex items-start"><span className="font-bold text-gray-400 mr-3 text-2xl leading-none">■</span><div><strong>Volumen (Barras):</strong> Representan el nº de oportunidades. Un pipeline sano siempre tiene un volumen alto en las primeras etapas para nutrir los cierres futuros.</div></li>
                                <li className="flex items-start"><span className="font-bold text-[#6D84E3] mr-3 text-2xl leading-none">●</span><div><strong>Eficiencia (Línea):</strong> Es tu tasa de conversión. Una línea alta y estable significa que estás cualificando bien y no pierdes tiempo en malos deals. Es la prueba de que el proceso funciona.</div></li>
                            </ul>
                            <PipelineHealthChart />
                        </div>
                    </div>
                </section>
                
            </main>

            <footer className="text-center py-8 border-t border-gray-200 mt-8"><p className="text-xl font-medium text-gray-700">Beyond: Construyendo un motor de ingresos predecible.</p></footer>
        </div>
    );
};

export default ProcessGuide;