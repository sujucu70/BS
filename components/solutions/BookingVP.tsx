import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col text-center items-center h-full">
        <div className="mx-auto bg-blue-100 text-[#6D84E3] w-16 h-16 rounded-full flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[#3F3F3F] mb-2">{title}</h3>
        <div className="text-sm text-gray-600 flex-grow">{children}</div>
    </div>
);

const ImpactCard: React.FC<{ title: string; items: { value: string, label: string }[] }> = ({ title, items }) => (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
        <h3 className="text-xl font-bold text-[#6D84E3] mb-4 text-center">{title}</h3>
        <ul className="space-y-4">
            {items.map(item => (
                <li key={item.label} className="flex items-center">
                    <span className="text-3xl font-bold text-[#3F3F3F] w-24">{item.value}</span>
                    <span className="text-sm text-gray-600">{item.label}</span>
                </li>
            ))}
        </ul>
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


const BookingVP: React.FC = () => {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <header className="text-center py-12 bg-gray-800 text-white rounded-lg shadow-2xl" style={{background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8)), url(https://images.unsplash.com/photo-1556761175-57738b4c09d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80) center/cover'}}>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Beyond-Booking</h1>
                <p className="text-xl md:text-2xl text-blue-300 mt-4 font-light">Gestión de Citas Inteligente para Cualquier Negocio</p>
                <p className="mt-6 max-w-3xl mx-auto">Transformamos la experiencia del cliente y la eficiencia de tu negocio con una solución de IA Híbrida que reduce no-shows en un 35%, aumenta las citas atendidas en un 25% y automatiza hasta el 90% de las interacciones de agendamiento.</p>
            </header>

            <main>
                <section id="challenges" className="my-16">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">El Diagnóstico: Puntos de Dolor en la Gestión de Citas</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">La gestión tradicional de citas impacta directamente en tus ingresos, la eficiencia y la satisfacción del cliente.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <InfoCard title="Altas Tasas de No-Shows" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>}>
                           <p>Las citas perdidas representan una pérdida significativa de ingresos y recursos valiosos, además de generar huecos improductivos en la agenda.</p>
                        </InfoCard>
                         <InfoCard title="Experiencia del Cliente Deficiente" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}>
                           <p>Largos tiempos de espera telefónica y horarios limitados para gestionar citas generan frustración y una percepción negativa del servicio.</p>
                        </InfoCard>
                         <InfoCard title="Sobrecarga del Personal Administrativo" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 004.77-9.582M15 21a6 6 0 00-6.471-3.328"></path></svg>}>
                           <p>Tu equipo dedica un tiempo considerable a tareas repetitivas de agendamiento, desviando recursos de la atención directa al cliente.</p>
                        </InfoCard>
                         <InfoCard title="Procesos Manuales y Fragmentados" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>}>
                           <p>La dependencia de sistemas obsoletos o procesos manuales genera errores, ineficiencias y altos costes administrativos.</p>
                        </InfoCard>
                    </div>
                </section>
                
                <section id="solution" className="my-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Nuestra Solución: Inteligencia Híbrida para la Gestión de Citas</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">Combinamos la eficiencia de la IA con la supervisión humana para una gestión de citas robusta y eficaz.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <InfoCard title="Agente Conversacional 24/7" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}>
                            <p>Una IA que entiende el lenguaje natural para gestionar solicitudes de citas, reprogramaciones y cancelaciones a cualquier hora del día, sin esperas.</p>
                        </InfoCard>
                        <InfoCard title="Optimización Inteligente de Agendas" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>}>
                            <p>Verifica disponibilidad en tiempo real en tu sistema de gestión (CRM, Calendario), sugiere alternativas y aplica reglas de negocio para optimizar los horarios de los profesionales.</p>
                        </InfoCard>
                         <InfoCard title="Comunicación Proactiva y Automatizada" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>}>
                            <p>Envío de confirmaciones, recordatorios inteligentes personalizables e instrucciones previas a la cita para reducir drásticamente los no-shows.</p>
                        </InfoCard>
                    </div>
                </section>
                
                 <section id="comparison" className="my-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Análisis Competitivo</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">No somos otra herramienta de agenda. Somos tu socio operativo.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-full text-sm text-left text-gray-700 bg-white rounded-lg shadow-inner border">
                            <thead className="text-xs text-gray-800 uppercase bg-[#e3e3e3]">
                                <tr>
                                    <th scope="col" className="px-6 py-3 w-1/4 rounded-tl-lg">Criterio</th>
                                    <th scope="col" className="px-6 py-3 w-1/4 text-center bg-red-50">Software de Agenda SaaS (ej. Calendly)</th>
                                    <th scope="col" className="px-6 py-3 w-1/4 text-center bg-yellow-50">Desarrollo a Medida con IA (Build)</th>
                                    <th scope="col" className="px-6 py-3 w-1/4 text-center bg-green-50 rounded-tr-lg">Beyond-Booking (PaaS)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b"><td className="px-6 py-4 font-bold">Modelo de Servicio</td><td className="px-6 py-4 text-center bg-red-50">Herramienta (SaaS)</td><td className="px-6 py-4 text-center bg-yellow-50">Proyecto de Desarrollo (DIY)</td><td className="px-6 py-4 text-center bg-green-50 font-semibold">Servicio Gestionado "Done-for-you"</td></tr>
                                <tr className="border-b"><td className="px-6 py-4 font-bold">Inteligencia y Automatización</td><td className="px-6 py-4 text-center bg-red-50">Básica (Recordatorios, links)</td><td className="px-6 py-4 text-center bg-yellow-50">Potencialmente alta, pero compleja</td><td className="px-6 py-4 text-center bg-green-50 font-semibold">IA Conversacional y Orquestación de Procesos</td></tr>
                                <tr className="border-b"><td className="px-6 py-4 font-bold">Gestión de Excepciones</td><td className="px-6 py-4 text-center bg-red-50">Manual (responsabilidad del cliente)</td><td className="px-6 py-4 text-center bg-yellow-50">Requiere desarrollo y personal propio</td><td className="px-6 py-4 text-center bg-green-50 font-semibold">Integrada en el servicio (Modelo Híbrido)</td></tr>
                                <tr className="border-b"><td className="px-6 py-4 font-bold">Implementación y Esfuerzo</td><td className="px-6 py-4 text-center bg-red-50">Bajo (auto-configuración)</td><td className="px-6 py-4 text-center bg-yellow-50">Muy Alto (meses/años de desarrollo)</td><td className="px-6 py-4 text-center bg-green-50 font-semibold">Cero Fricción (nos encargamos de todo)</td></tr>
                                <tr><td className="px-6 py-4 font-bold rounded-bl-lg">Coste Total de Propiedad (TCO)</td><td className="px-6 py-4 text-center bg-red-50">Licencia + coste oculto del tiempo del personal</td><td className="px-6 py-4 text-center bg-yellow-50">Alto CAPEX + costes de mantenimiento y equipo</td><td className="px-6 py-4 text-center bg-green-50 font-semibold rounded-br-lg">Suscripción predecible con ROI claro</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="impact" className="my-16">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">El Resultado: Un Impacto Directo en tus KPIs</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">No es una mejora tecnológica, es una transformación estratégica con beneficios cuantificables.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ImpactCard title="Impacto en Negocio" items={[
                            { value: '-35%', label: 'Reducción de no-shows (citas canceladas o no presentadas)' },
                            { value: '+25%', label: 'Volumen de citas atendidas gracias a la disponibilidad 24/7' },
                            { value: '✓', label: 'Optimización de la ocupación de agendas y recursos' },
                        ]} />
                        <ImpactCard title="Mejora de Eficiencia Operativa" items={[
                            { value: '70-90%', label: 'de las interacciones de agendamiento automatizadas' },
                            { value: '✓', label: 'Reducción drástica del Tiempo Medio de Operación (TMO)' },
                            { value: '✓', label: 'Ahorro significativo en horas de personal administrativo' },
                        ]} />
                        <ImpactCard title="Satisfacción del Cliente" items={[
                            { value: '24/7', label: 'Disponibilidad para autogestión de citas' },
                            { value: '✓', label: 'Mejora en resolución en primer contacto (FCR)' },
                            { value: '✓', label: 'Comunicación proactiva y personalizada' },
                        ]} />
                    </div>
                </section>
                
                <section id="differentiators" className="my-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                     <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Nuestra Diferencia: Por Qué "Beyond"</h2>
                     <p className="text-center text-lg text-[#6D84E3] mb-12">No ofrecemos un simple software de agenda. Nos convertimos en el socio estratégico que opera, optimiza y transforma tu proceso de gestión de citas.</p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DifferentiatorCard number={1} title="Transformación Operativa, No Solo Tecnología">
                           No vendemos licencias de software; operamos y transformamos integralmente el proceso de gestión de citas. Asumimos la responsabilidad de la ejecución y la optimización continua.
                        </DifferentiatorCard>
                         <DifferentiatorCard number={2} title="Inteligencia Híbrida (IA + Talento Humano)">
                           Nuestra plataforma utiliza IA para máxima eficiencia, pero se complementa con la intervención humana cualificada para los casos que lo requieran. Esto asegura escalabilidad sin perder la empatía.
                        </DifferentiatorCard>
                         <DifferentiatorCard number={3} title="Modelo Process-as-a-Service con Impacto Real">
                           Ofrecemos la gestión de citas como un servicio con SLA y tarifas predecibles, eliminando la incertidumbre del ROI, los costes ocultos y la necesidad de contratar personal especializado.
                        </DifferentiatorCard>
                         <DifferentiatorCard number={4} title="Solución Integral y Orquestada">
                           Integramos agentes conversacionales y RPA con tus sistemas existentes (CRM, calendarios, etc.) para una gestión end-to-end y sin fisuras del ciclo completo de la cita.
                        </DifferentiatorCard>
                     </div>
                </section>
            </main>
        </div>
    );
};

export default BookingVP;