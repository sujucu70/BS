import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col text-center items-center h-full">
        <div className="mx-auto bg-blue-100 text-[#6D84E3] w-16 h-16 rounded-full flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[#3F3F3F] mb-2">{title}</h3>
        <div className="text-sm text-[#B1B1B0] flex-grow">{children}</div>
    </div>
);

const DifferentiatorCard: React.FC<{ title: string; children: React.ReactNode; number: number; }> = ({ title, children, number }) => (
     <div className="bg-white p-6 rounded-lg shadow-md h-full transition-transform transform hover:-translate-y-1">
        <div className="flex items-center mb-3">
            <div className="flex-shrink-0 bg-[#6D84E3] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">{number}</div>
            <h3 className="text-lg font-bold text-[#3F3F3F]">{title}</h3>
        </div>
        <p className="text-sm text-[#B1B1B0]">{children}</p>
    </div>
);


const FcrVP: React.FC = () => {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <header className="text-center py-12 bg-[#3F3F3F] text-white rounded-lg shadow-2xl" style={{background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8)), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80) center/cover'}}>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Beyond-FCR</h1>
                <p className="text-xl md:text-2xl text-blue-300 mt-4 font-light">Resuelve en el Primer Contacto, Transforma tu Soporte</p>
                <p className="mt-6 max-w-3xl mx-auto">BeyondFCR es una solución de "FCR-as-a-Service" que combina IA inteligente con agentes especializados para resolver la mayoría de las consultas en el primer contacto. Reduce costes, aumenta drásticamente la satisfacción y libera a tu equipo para que se centre en lo que de verdad importa.</p>
                <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg">
                    <span><strong className="text-2xl">+25%</strong> en NPS</span>
                    <span><strong className="text-2xl">-40%</strong> Coste por Contacto</span>
                    <span><strong className="text-2xl">24/7</strong> Disponibilidad</span>
                </div>
            </header>

            <main>
                <section id="challenges" className="my-16">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">El Problema: Cuando el Primer Contacto No es el Último</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">Un bajo FCR (First Contact Resolution) genera un ciclo vicioso de costes, frustración de clientes y agotamiento de equipos.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <InfoCard title="Costes Operativos Descontrolados" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>}>
                           <p>Cada vez que un cliente tiene que volver a contactar, el coste de esa interacción se duplica. Un bajo FCR infla los costes y drena recursos valiosos.</p>
                        </InfoCard>
                         <InfoCard title="Fuga de Clientes y Daño a la Reputación" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}>
                           <p>Nada erosiona más la satisfacción que tener que repetir un problema. Cada contacto adicional aumenta la frustración, hunde el CSAT/NPS y provoca una pérdida de clientes (churn).</p>
                        </InfoCard>
                         <InfoCard title="Equipos Desmotivados e Incapaces de Escalar" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H3"></path></svg>}>
                           <p>Un flujo constante de clientes frustrados genera agotamiento y alta rotación en los agentes. Además, las estructuras rígidas son incapaces de escalar para picos de demanda.</p>
                        </InfoCard>
                    </div>
                </section>
                
                <section id="solution" className="my-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Nuestra Solución: El Modelo Híbrido FCR-as-a-Service</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">Combinamos estratégicamente la velocidad y escalabilidad de la IA con la empatía y el juicio crítico de agentes humanos expertos.</p>
                    
                     <div className="overflow-x-auto mb-12">
                        <table className="w-full min-w-full text-sm text-left text-[#3F3F3F] bg-white rounded-lg shadow-inner border">
                            <thead className="text-xs text-[#3F3F3F] uppercase bg-[#e3e3e3]">
                                <tr>
                                    <th scope="col" className="px-6 py-3 rounded-tl-lg">Criterio</th>
                                    <th scope="col" className="px-6 py-3 text-center bg-red-50">Modelo 100% Humano</th>
                                    <th scope="col" className="px-6 py-3 text-center bg-yellow-50">Modelo 100% IA</th>
                                    <th scope="col" className="px-6 py-3 text-center bg-green-50 rounded-tr-lg">Modelo Híbrido (BeyondFCR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b"><td className="px-6 py-4 font-bold">Coste Operativo</td><td className="px-6 py-4 text-center bg-red-50">Alto</td><td className="px-6 py-4 text-center bg-yellow-50">Bajo</td><td className="px-6 py-4 text-center bg-green-50 font-semibold">Moderado y Optimizado</td></tr>
                                <tr className="border-b"><td className="px-6 py-4 font-bold">Disponibilidad 24/7</td><td className="px-6 py-4 text-center bg-red-50">Costosa/Limitada</td><td className="px-6 py-4 text-center bg-yellow-50">Completa</td><td className="px-6 py-4 text-center bg-green-50 font-semibold">Completa</td></tr>
                                <tr className="border-b"><td className="px-6 py-4 font-bold">Gestión Casos Complejos</td><td className="px-6 py-4 text-center bg-red-50">Alta</td><td className="px-6 py-4 text-center bg-yellow-50">Baja</td><td className="px-6 py-4 text-center bg-green-50 font-semibold">Alta (vía agentes humanos)</td></tr>
                                <tr><td className="px-6 py-4 font-bold rounded-bl-lg">Velocidad Tareas Rutinarias</td><td className="px-6 py-4 text-center bg-red-50">Moderada</td><td className="px-6 py-4 text-center bg-yellow-50">Instantánea</td><td className="px-6 py-4 text-center bg-green-50 font-semibold rounded-br-lg">Instantánea (vía IA)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <InfoCard title="IA como Primera Línea" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2m-2-4h.01M12 12h.01M15 12h.01M12 15h.01M12 9h.01M9 12h.01M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z"></path></svg>}>
                            <p>Agentes conversacionales de voz gestionan consultas rutinarias (estado de pedido, saldos) proporcionando respuestas instantáneas 24/7 y filtrando solicitudes.</p>
                        </InfoCard>
                        <InfoCard title="Agentes Humanos Potenciados" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}>
                            <p>Nuestros agentes se centran en problemas complejos, situaciones emocionales y casos únicos, usando su juicio y experiencia para encontrar soluciones personalizadas.</p>
                        </InfoCard>
                         <InfoCard title="Transición sin Fricciones" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}>
                            <p>Un componente crítico del modelo. Cuando un caso escala de la IA a un agente, todo el contexto y el historial se transfieren para evitar que el cliente tenga que repetir su problema.</p>
                        </InfoCard>
                    </div>
                </section>

                 <section id="impact" className="my-16">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Impacto Cuantificable en tu Negocio</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">No es un gasto, es un motor de rentabilidad con un ROI claro.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         <InfoCard title="Mejora de la Experiencia de Cliente" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}>
                            <p className="text-3xl font-bold text-[#3F3F3F]">+25%</p>
                            <p>en NPS (Net Promoter Score) gracias a la inmediatez, precisión y transparencia del servicio.</p>
                        </InfoCard>
                         <InfoCard title="Reducción de Costes y Errores" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>}>
                             <p className="text-3xl font-bold text-[#3F3F3F]">+40%</p>
                             <p>de reducción en el coste de procesamiento de interacciones.</p>
                        </InfoCard>
                         <InfoCard title="Aumento de Eficiencia" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}>
                             <p className="text-3xl font-bold text-[#3F3F3F]">-70%</p>
                             <p>en el tiempo de procesamiento de consultas rutinarias, liberando a los agentes para tareas de alto valor.</p>
                        </InfoCard>
                         <InfoCard title="Escalabilidad" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>}>
                             <p className="text-3xl font-bold text-[#3F3F3F]">24/7</p>
                             <p>Disponibilidad total y capacidad para absorber picos de demanda sin contratar personal temporal.</p>
                        </InfoCard>
                    </div>
                </section>
                
                <section id="differentiators" className="my-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                     <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">La Diferencia "Beyond": Por Qué Somos tu Socio Estratégico</h2>
                     <p className="text-center text-lg text-[#6D84E3] mb-12">No vendemos un chatbot. Operamos, optimizamos y transformamos tu servicio de soporte.</p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DifferentiatorCard number={1} title="Transformación Operativa, No Solo Tecnología">
                           No vendemos licencias. Asumimos la responsabilidad de la ejecución, la monitorización y la optimización continua, convirtiendo la promesa de la tecnología en un valor operativo real y medible.
                        </DifferentiatorCard>
                         <DifferentiatorCard number={2} title="Inteligencia Híbrida Operativa">
                           Nuestra IA procesa automáticamente la gran mayoría de interacciones, pero nuestro sistema integra de forma nativa un "humano en el bucle" para garantizar la máxima eficiencia sin sacrificar la inteligencia contextual.
                        </DifferentiatorCard>
                         <DifferentiatorCard number={3} title="Modelo Process-as-a-Service con ROI Predecible">
                           Ofrecemos el FCR como un servicio, con un SLA claro y una tarifa mensual predecible. Esto elimina la incertidumbre del ROI, los costes ocultos y la necesidad de contratar personal especializado.
                        </DifferentiatorCard>
                         <DifferentiatorCard number={4} title="Orquestación Integral, no Automatización Aislada">
                           A diferencia de los bots que automatizan una tarea aislada, actuamos como un orquestador central que conecta sistemas dispares (CRM, ERP, etc.) en un único flujo de proceso coherente.
                        </DifferentiatorCard>
                     </div>
                </section>
            </main>
        </div>
    );
};

export default FcrVP;
