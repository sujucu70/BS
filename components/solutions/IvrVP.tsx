import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col text-center items-center h-full">
        <div className="mx-auto bg-blue-100 text-[#6D84E3] w-16 h-16 rounded-full flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[#3F3F3F] mb-2">{title}</h3>
        <div className="text-sm text-[#B1B1B0] flex-grow">{children}</div>
    </div>
);

const FeatureCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-start text-left h-full transition-transform transform hover:-translate-y-1">
        <div className="bg-blue-100 text-[#6D84E3] w-16 h-16 rounded-lg flex items-center justify-center mb-5">{icon}</div>
        <h3 className="text-xl font-bold text-[#3F3F3F]">{title}</h3>
        <p className="text-[#B1B1B0] font-light mt-2 flex-grow">{children}</p>
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


const IvrVP: React.FC = () => {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <header className="text-center py-12 bg-[#3F3F3F] text-white rounded-lg shadow-2xl" style={{background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8)), url(https://images.unsplash.com/photo-1587582423116-805313391163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80) center/cover'}}>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Beyond-IVR</h1>
                 <p className="text-xl md:text-2xl text-blue-300 mt-4 font-light">La Evolución de la Atención por Voz</p>
                <p className="mt-6 max-w-3xl mx-auto">
                    Una solución de voz conversacional que reemplaza los menús de IVR rígidos. Permite a tus clientes hablar con naturalidad, ser entendidos al instante y ser dirigidos de forma inteligente al agente o canal correcto, solo cuando es necesario.
                </p>
            </header>

            <main>
                <section id="challenges" className="my-16">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">El Problema: Más Allá de los Menús Rígidos</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">Los sistemas tradicionales de atención impactan negativamente en la eficiencia, los costes y la experiencia del cliente.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <InfoCard title="Sistemas IVR Rígidos y Frustrantes" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>}>
                           <p>Los menús de respuesta de voz interactiva tradicionales generan frustración por su estructura rígida, opciones limitadas y falta de comprensión contextual.</p>
                        </InfoCard>
                         <InfoCard title="Experiencia de Cliente Deficiente" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}>
                           <p>Largos tiempos de espera, múltiples transferencias y repetición constante de información generan altos niveles de insatisfacción.</p>
                        </InfoCard>
                         <InfoCard title="Sobrecarga del Personal de Atención" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 004.77-9.582M15 21a6 6 0 00-6.471-3.328"></path></svg>}>
                           <p>Los agentes dedican tiempo a tareas repetitivas de clasificación, desviando recursos de la resolución de problemas complejos.</p>
                        </InfoCard>
                        <InfoCard title="Falta de Accesibilidad 24/7" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}>
                           <p>Los canales tradicionales con horarios limitados impiden a los usuarios resolver consultas cuando más les conviene.</p>
                        </InfoCard>
                        <InfoCard title="Asignación Ineficiente de Recursos" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>}>
                           <p>Dificultad para optimizar la distribución de consultas según especialización y prioridad, resultando en tiempos de resolución prolongados.</p>
                        </InfoCard>
                        <InfoCard title="Procesos Desconectados" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>}>
                           <p>La clasificación y derivación de consultas dependen de procesos manuales o sistemas desconectados, generando errores y altos costes.</p>
                        </InfoCard>
                    </div>
                </section>
                
                <section id="solution" className="my-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Nuestra Propuesta: La Experiencia de Voz Inteligente</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">Modernizamos el primer punto de contacto con una plataforma de voz que entiende, resuelve y escala.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        <FeatureCard title="Conversación Natural" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>}>
                            Los clientes hablan naturalmente sin necesidad de navegar menús complejos. Nuestra IA entiende el contexto y la intención para una experiencia fluida.
                        </FeatureCard>
                        <FeatureCard title="Tipificación Automática" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>}>
                            Clasificación inteligente de consultas en tiempo real para dirigir cada caso al especialista adecuado desde el primer contacto, reduciendo transferencias erróneas.
                        </FeatureCard>
                        <FeatureCard title="Transferencia Omnicanal Inteligente" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h5M20 20v-5h-5M4 10a8 8 0 0114.95-2.95M20 14a8 8 0 01-14.95 2.95"></path></svg>}>
                            Cuando es necesario, transferimos la llamada con todo el contexto a un agente humano o a otro canal (chat, email), garantizando una continuidad perfecta.
                        </FeatureCard>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <FeatureCard title="Supervisión Humana Estratégica" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}>
                            Agentes especializados intervienen únicamente en casos complejos, maximizando la eficiencia y la calidad del servicio, mientras la IA gestiona el volumen.
                        </FeatureCard>
                        <FeatureCard title="Disponibilidad 24/7" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m0 0a9 9 0 019-9m0 9a9 9 0 00-9-9"></path></svg>}>
                            Tu puerta de entrada por voz nunca cierra. Ofrecemos atención continua sin interrupciones, adaptándonos a los horarios de tus clientes globalmente.
                        </FeatureCard>
                    </div>

                    <hr className="my-16 border-gray-200" />
    
                    <h3 className="text-2xl font-bold text-center text-[#3F3F3F] mb-2">Análisis Comparativo</h3>
                    <p className="text-center text-lg text-[#B1B1B0] font-light mb-8">Un cambio fundamental en la experiencia y la eficiencia.</p>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-full text-sm text-left text-[#3F3F3F] bg-white rounded-lg shadow-inner border">
                            <thead className="text-xs text-[#3F3F3F] uppercase bg-[#e3e3e3]">
                                <tr>
                                    <th scope="col" className="px-6 py-3 w-1/3 rounded-tl-lg">Criterio</th>
                                    <th scope="col" className="px-6 py-3 w-1/3 text-center bg-red-50">IVR Tradicional</th>
                                    <th scope="col" className="px-6 py-3 w-1/3 text-center bg-green-50 rounded-tr-lg">Beyond-IVR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-6 py-4 font-bold">Experiencia de Cliente</td>
                                    <td className="px-6 py-4 text-center bg-red-50">Frustrante, basada en menús rígidos ("pulse 1, pulse 2").</td>
                                    <td className="px-6 py-4 text-center bg-green-50 font-semibold">Fluida y natural. El cliente habla, la IA entiende.</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-6 py-4 font-bold">Tasa de Abandono</td>
                                    <td className="px-6 py-4 text-center bg-red-50">Alta (~30-40%), clientes cuelgan por frustración.</td>
                                    <td className="px-6 py-4 text-center bg-green-50 font-semibold">Muy Baja (&lt;5%), resolución rápida que retiene al cliente.</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-6 py-4 font-bold">Capacidad de Resolución</td>
                                    <td className="px-6 py-4 text-center bg-red-50">Baja. Limita a enrutar llamadas, rara vez resuelve.</td>
                                    <td className="px-6 py-4 text-center bg-green-50 font-semibold">Alta. Resuelve +70% de las consultas sin intervención humana.</td>
                                </tr>
                                 <tr className="border-b">
                                    <td className="px-6 py-4 font-bold">Coste Operativo</td>
                                    <td className="px-6 py-4 text-center bg-red-50">Alto. Aumenta el tiempo de llamada y la carga de los agentes.</td>
                                    <td className="px-6 py-4 text-center bg-green-50 font-semibold">Optimizado. Reduce el TMO y el coste por interacción.</td>
                                </tr>
                                 <tr className="border-b">
                                    <td className="px-6 py-4 font-bold">Inteligencia y Contexto</td>
                                    <td className="px-6 py-4 text-center bg-red-50">Nula. No recuerda interacciones previas ni entiende el contexto.</td>
                                    <td className="px-6 py-4 text-center bg-green-50 font-semibold">Total. Mantiene el contexto para transferencias inteligentes y personalización.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold rounded-bl-lg">Escalabilidad</td>
                                    <td className="px-6 py-4 text-center bg-red-50">Rígida. Limitada por el número de líneas telefónicas.</td>
                                    <td className="px-6 py-4 text-center bg-green-50 font-semibold rounded-br-lg">Elástica. Se adapta instantáneamente a picos de demanda.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="impact" className="my-16">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Impacto Cuantificable en tu Negocio</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">Transformamos tu operación con beneficios medibles y tangibles.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         <InfoCard title="Mejora en la Experiencia de Cliente" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}>
                            <ul className="text-left list-disc list-inside space-y-2">
                                <li><strong>+25%</strong> en NPS</li>
                                <li><strong>-60%</strong> en tiempo de espera</li>
                                <li><strong>-40%</strong> en transferencias innecesarias</li>
                                <li><strong>+35%</strong> en FCR</li>
                            </ul>
                        </InfoCard>
                         <InfoCard title="Reducción de Costes Operativos" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>}>
                             <ul className="text-left list-disc list-inside space-y-2">
                                <li><strong>-30-40%</strong> en coste medio por interacción</li>
                                <li><strong>-25%</strong> en tiempo de gestión por consulta</li>
                            </ul>
                        </InfoCard>
                         <InfoCard title="Eficiencia Operativa" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}>
                             <ul className="text-left list-disc list-inside space-y-2">
                                <li>Disponibilidad <strong>24/7</strong></li>
                                <li><strong>-50%</strong> en abandono de interacciones</li>
                                <li>Escalabilidad en picos de demanda</li>
                                <li>Capacidad multilingüe</li>
                            </ul>
                        </InfoCard>
                         <InfoCard title="Insights de Negocio" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>}>
                             <ul className="text-left list-disc list-inside space-y-2">
                                <li>Análisis en tiempo real de patrones</li>
                                <li>Identificación proactiva de problemas</li>
                                <li>Mejora continua mediante aprendizaje automático</li>
                            </ul>
                        </InfoCard>
                    </div>
                </section>
                
                <section id="differentiators" className="my-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                     <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">La Diferencia "Beyond": ¿Por Qué Nosotros?</h2>
                     <p className="text-center text-lg text-[#6D84E3] mb-12">No ofrecemos un chatbot. Somos el socio estratégico que opera, optimiza y transforma tu proceso de atención.</p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DifferentiatorCard number={1} title="Transformación Operativa, No Solo Tecnología">
                           No vendemos licencias; operamos y transformamos integralmente el proceso de atención, asumiendo la responsabilidad de la ejecución y optimización continua.
                        </DifferentiatorCard>
                         <DifferentiatorCard number={2} title="Inteligencia Híbrida Operativa">
                           Nuestra plataforma de IA se complementa con intervención humana cualificada para los casos que lo requieran, asegurando eficiencia y escalabilidad sin perder la empatía.
                        </DifferentiatorCard>
                         <DifferentiatorCard number={3} title="Modelo Process-as-a-Service">
                           Ofrecemos la gestión de consultas como un servicio con SLA y tarifas predecibles, eliminando la incertidumbre del ROI y los costes ocultos.
                        </DifferentiatorCard>
                         <DifferentiatorCard number={4} title="Enfoque en Resultados Medibles">
                           Nuestra metodología se centra en demostrar valor operativo real de forma inmediata. No vendemos un producto, sino resultados medibles.
                        </DifferentiatorCard>
                          <DifferentiatorCard number={5} title="Solución Integral y Orquestada">
                           Nuestra plataforma integra agentes IA, GenRPA y un orquestador IA, capaz de interactuar con los sistemas existentes del cliente para una gestión end-to-end.
                        </DifferentiatorCard>
                         <DifferentiatorCard number={6} title="Capacidad Transaccional Real">
                           A diferencia de chatbots básicos que solo proporcionan información, nuestros agentes IA pueden ejecutar transacciones completas en sistemas backend y resolver problemas.
                        </DifferentiatorCard>
                     </div>
                </section>
            </main>
        </div>
    );
};

export default IvrVP;