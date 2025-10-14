import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col text-center items-center h-full">
        <div className="mx-auto bg-blue-100 text-[#6D84E3] w-16 h-16 rounded-full flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[#3F3F3F] mb-2">{title}</h3>
        <div className="text-sm text-gray-600 flex-grow">{children}</div>
    </div>
);

const StepCard: React.FC<{ step: string; title: string; description: string; }> = ({ step, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
        <div className="mx-auto w-12 h-12 bg-[#6D84E3] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">{step}</div>
        <h3 className="text-lg font-bold text-[#3F3F3F]">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
);

const DifferentiatorCard: React.FC<{ title: string; children: React.ReactNode; number: number; }> = ({ title, children, number }) => (
     <div className="bg-white p-6 rounded-lg shadow-md h-full transition-transform transform hover:-translate-y-1">
        <div className="flex items-center mb-3">
            <div className="flex-shrink-0 bg-[#6D84E3] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">{number}</div>
            <h3 className="text-lg font-bold text-[#3F3F3F]">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{children}</p>
    </div>
);


const OrderVP: React.FC = () => {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <header className="text-center py-12 bg-gray-800 text-white rounded-lg shadow-2xl" style={{background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8)), url(https://images.unsplash.com/photo-1578575437130-5278e6844bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80) center/cover'}}>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Beyond-Order</h1>
                <p className="text-xl md:text-2xl text-blue-300 mt-4 font-light">Gestión de Pedidos Inteligente, Cero Errores</p>
                <p className="mt-6 max-w-3xl mx-auto">Revolucionamos la tramitación de pedidos con un servicio gestionado que automatiza el ciclo de vida completo, desde la recepción omnicanal y la validación inteligente hasta la integración segura con tus sistemas ERP y CRM.</p>
                <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg">
                    <span><strong className="text-2xl">-90%</strong> Errores Manuales</span>
                    <span><strong className="text-2xl">-70%</strong> Tiempo de Procesamiento</span>
                    <span><strong className="text-2xl">24/7</strong> Disponibilidad</span>
                </div>
            </header>

            <main>
                <section id="challenges" className="my-16">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">El Caos de la Gestión Manual de Pedidos</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">Los procesos manuales son un freno para tu crecimiento y una fuente de insatisfacción.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <InfoCard title="Procesos Manuales y Errores" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}>
                           <p>La entrada de datos manual es lenta, tediosa y una fuente constante de errores costosos que afectan a toda la cadena de valor, desde el inventario hasta la facturación.</p>
                        </InfoCard>
                         <InfoCard title="Experiencia de Cliente Deficiente" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}>
                           <p>Retrasos en la confirmación, errores en los productos enviados y falta de visibilidad del estado del pedido generan frustración y dañan la lealtad de tus clientes.</p>
                        </InfoCard>
                         <InfoCard title="Sistemas Desconectados" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>}>
                           <p>Los sistemas de e-commerce, CRM y ERP operan en silos, obligando a transferir información manualmente, lo que provoca ineficiencias e inconsistencias.</p>
                        </InfoCard>
                         <InfoCard title="Incapacidad para Escalar" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>}>
                           <p>La dependencia de procesos manuales hace extremadamente difícil y costoso gestionar los picos de demanda sin sacrificar la calidad del servicio.</p>
                        </InfoCard>
                    </div>
                </section>
                
                <section id="solution" className="my-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">La Evolución de la Gestión de Pedidos</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">Compara nuestro modelo de "Proceso como Servicio" con los enfoques tradicionales.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-full text-sm text-left text-gray-700 bg-white rounded-lg shadow-inner border">
                            <thead className="text-xs text-gray-800 uppercase bg-[#e3e3e3]">
                                <tr>
                                    <th scope="col" className="px-6 py-3 w-1/4 rounded-tl-lg">Criterio</th>
                                    <th scope="col" className="px-6 py-3 w-1/4 text-center bg-red-50">Manual (Email, Hojas de Cálculo)</th>
                                    <th scope="col" className="px-6 py-3 w-1/4 text-center bg-yellow-50">ERP/OMS Tradicional</th>
                                    <th scope="col" className="px-6 py-3 w-1/4 text-center bg-green-50 rounded-tr-lg">BeyondOrder (PaaS)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b"><td className="px-6 py-4 font-bold">Precisión de Datos</td><td className="px-6 py-4 text-center bg-red-50">Muy Baja</td><td className="px-6 py-4 text-center bg-yellow-50">Alta</td><td className="px-6 py-4 text-center bg-green-50 font-semibold">Muy Alta (Validación por IA)</td></tr>
                                <tr className="border-b"><td className="px-6 py-4 font-bold">Velocidad</td><td className="px-6 py-4 text-center bg-red-50">Muy Lenta (Días/Horas)</td><td className="px-6 py-4 text-center bg-yellow-50">Lenta (Horas/Minutos)</td><td className="px-6 py-4 text-center bg-green-50 font-semibold">Casi Instantánea (Minutos/Segundos)</td></tr>
                                <tr className="border-b"><td className="px-6 py-4 font-bold">Coste Implementación</td><td className="px-6 py-4 text-center bg-red-50">Nulo</td><td className="px-6 py-4 text-center bg-yellow-50">Muy Alto (€25k - €100k+)</td><td className="px-6 py-4 text-center bg-green-50 font-semibold">Nulo (Incluido en suscripción)</td></tr>
                                <tr className="border-b"><td className="px-6 py-4 font-bold">Carga Operativa</td><td className="px-6 py-4 text-center bg-red-50">Alta (100% manual)</td><td className="px-6 py-4 text-center bg-yellow-50">Alta (Operación y mantenimiento)</td><td className="px-6 py-4 text-center bg-green-50 font-semibold">Casi Nula (Solo excepciones)</td></tr>
                                <tr className="border-b"><td className="px-6 py-4 font-bold">Escalabilidad</td><td className="px-6 py-4 text-center bg-red-50">Muy Baja</td><td className="px-6 py-4 text-center bg-yellow-50">Limitada (por licencias)</td><td className="px-6 py-4 text-center bg-green-50 font-semibold">Ilimitada y Elástica</td></tr>
                                <tr><td className="px-6 py-4 font-bold rounded-bl-lg">Gestión Excepciones</td><td className="px-6 py-4 text-center bg-red-50">Ad-hoc, ineficiente</td><td className="px-6 py-4 text-center bg-yellow-50">Requiere flujos manuales</td><td className="px-6 py-4 text-center bg-green-50 font-semibold rounded-br-lg">Integrada y Orquestada</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                
                <section id="how-it-works" className="my-16">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Nuestro Ciclo de Automatización Inteligente</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">Gestionamos todo el ciclo de vida del pedido con precisión y eficiencia.</p>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <StepCard step="1" title="Recepción Omnicanal" description="Recibimos pedidos desde cualquier canal (voz, email, PDF, portal web) y los centralizamos en una única plataforma." />
                        <StepCard step="2" title="Validación Inteligente" description="Nuestra IA extrae datos, los valida contra stock, precios y datos del cliente en tu ERP/CRM, previniendo errores." />
                        <StepCard step="3" title="Integración Segura" description="El pedido 100% validado y enriquecido se introduce automáticamente en tus sistemas de gestión sin intervención manual." />
                        <StepCard step="4" title="Gestión de Excepciones" description="Los casos ambiguos se escalan a un supervisor humano a través de un portal de revisión. El sistema aprende de cada corrección." />
                    </div>
                </section>

                <section id="impact" className="my-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Impacto Cuantificable en tu Negocio</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">Transformamos tu operación con beneficios medibles y tangibles.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         <InfoCard title="Reducción de Costes y Errores" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>}>
                            <ul className="text-left list-disc list-inside space-y-2">
                                <li><strong>-90%</strong> en errores de entrada de datos</li>
                                <li><strong>+40%</strong> de reducción en coste de procesamiento</li>
                            </ul>
                        </InfoCard>
                         <InfoCard title="Eficiencia Operativa Radical" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}>
                             <ul className="text-left list-disc list-inside space-y-2">
                                <li><strong>-70-80%</strong> en tiempo de procesamiento</li>
                                <li>Disponibilidad <strong>24/7</strong></li>
                                <li>Escalabilidad instantánea en picos</li>
                            </ul>
                        </InfoCard>
                         <InfoCard title="Mejora de la Experiencia de Cliente" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}>
                            <ul className="text-left list-disc list-inside space-y-2">
                                <li><strong>+25%</strong> en NPS</li>
                                <li>Aceleración drástica del ciclo <strong>Order-to-Cash</strong></li>
                                <li>Mejora de la tasa de pedidos perfectos</li>
                            </ul>
                        </InfoCard>
                         <InfoCard title="Visibilidad y Control" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path></svg>}>
                             <ul className="text-left list-disc list-inside space-y-2">
                                <li>Punto único de verdad para todos los pedidos</li>
                                <li>Análisis en tiempo real de patrones</li>
                                <li>Identificación proactiva de problemas</li>
                            </ul>
                        </InfoCard>
                    </div>
                </section>
                
                <section id="differentiators" className="my-16">
                     <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">La Diferencia "Beyond": Tu Socio Operativo</h2>
                     <p className="text-center text-lg text-[#6D84E3] mb-12">No ofrecemos un "bot con IA". Nos convertimos en el socio estratégico que opera, optimiza y transforma tu gestión de pedidos.</p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DifferentiatorCard number={1} title="Transformación Operativa, No Solo Tecnología">
                           No vendemos licencias de software. Operamos y transformamos integralmente el proceso, asumiendo la responsabilidad de la ejecución, la monitorización y la optimización continua.
                        </DifferentiatorCard>
                         <DifferentiatorCard number={2} title="Inteligencia Híbrida Operativa">
                           Nuestra IA procesa la gran mayoría de los pedidos, mientras que un "humano en el bucle" gestiona las excepciones. Esto garantiza máxima eficiencia sin sacrificar la inteligencia contextual.
                        </DifferentiatorCard>
                         <DifferentiatorCard number={3} title="Modelo Process-as-a-Service con ROI Predecible">
                           Ofrecemos la gestión de pedidos como un servicio, con un SLA claro y una tarifa predecible. Esto elimina la incertidumbre del ROI y los costes ocultos de licencias y mantenimiento.
                        </DifferentiatorCard>
                         <DifferentiatorCard number={4} title="Orquestación Integral, no Automatización Aislada">
                           A diferencia de los bots de RPA, actuamos como un orquestador central que conecta sistemas dispares (e-commerce, CRM, ERP) en un único flujo coherente y automatizado.
                        </DifferentiatorCard>
                     </div>
                </section>
            </main>
        </div>
    );
};

export default OrderVP;