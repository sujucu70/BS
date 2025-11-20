
import React from 'react';

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="mb-8 border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-lg text-[#6D84E3] font-medium mt-1">{subtitle}</p>
    </div>
);

const KpiCard: React.FC<{ label: string; value: string; subtext?: string; highlight?: boolean }> = ({ label, value, subtext, highlight }) => (
    <div className={`p-4 rounded-lg border ${highlight ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200 shadow-sm'}`}>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-bold text-gray-800 my-1">{value}</p>
        {subtext && <p className="text-xs text-gray-600">{subtext}</p>}
    </div>
);

const Matrix2x2 = () => (
    <div className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-[400px] flex flex-col">
        <h3 className="text-center font-bold text-gray-800 mb-4">Matriz de Priorización Estratégica</h3>
        <div className="flex-grow relative border-l-2 border-b-2 border-gray-300 m-4">
            {/* Labels Axis */}
            <div className="absolute -left-8 top-1/2 transform -rotate-90 text-xs font-bold text-gray-500 text-center w-full">Ineficiencia Operativa (Dolor)</div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-500">Volumen / Complejidad</div>

            {/* Quadrants */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-green-50 border border-green-100 flex flex-col justify-center items-center p-2 text-center">
                <span className="font-bold text-green-700 text-sm">SWEET SPOT</span>
                <span className="text-xs text-green-600 leading-tight mt-1">Alto Volumen + Alta Ineficiencia.<br/>Venta de Valor (ROI).</span>
            </div>
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-yellow-50 border border-yellow-100 flex flex-col justify-center items-center p-2 text-center">
                <span className="font-bold text-yellow-700 text-sm">INCUBAR</span>
                <span className="text-xs text-yellow-600 leading-tight mt-1">Ineficiente pero pequeño.<br/>Escalar con crecimiento.</span>
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-orange-50 border border-orange-100 flex flex-col justify-center items-center p-2 text-center">
                <span className="font-bold text-orange-700 text-sm">COMMODITY</span>
                <span className="text-xs text-orange-600 leading-tight mt-1">Alto Volumen + Eficiente.<br/>Guerra de precios (Evitar).</span>
            </div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gray-100 border border-gray-200 flex flex-col justify-center items-center p-2 text-center">
                <span className="font-bold text-gray-500 text-sm">IGNORAR</span>
                <span className="text-xs text-gray-400 leading-tight mt-1">Bajo Volumen + Eficiente.<br/>Sin caso de negocio.</span>
            </div>
            
            {/* Ideal Client Indicator */}
            <div className="absolute top-[20%] right-[20%] w-4 h-4 bg-[#6D84E3] rounded-full shadow-lg border-2 border-white animate-pulse"></div>
            <div className="absolute top-[20%] right-[20%] transform translate-x-3 -translate-y-3 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-90 whitespace-nowrap">
                Tu Objetivo
            </div>
        </div>
    </div>
);

const ClientManifesto: React.FC = () => {
    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f3f4f6]">
            <header className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Estrategia de Segmentación y Targeting</h1>
                <p className="text-xl text-[#6D84E3] mt-4 font-medium">Dónde jugar y cómo ganar: Definición operativa del mercado objetivo.</p>
            </header>

            <main className="space-y-12 max-w-7xl mx-auto">
                
                {/* SECCION A: DEFINICION DEL MERCADO */}
                <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
                    <SectionHeader title="A. Definición del Mercado (Macro-Segmentación)" subtitle="Foco Geográfico y Product-Market Fit por Sector" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                                <span className="text-2xl mr-2">🌍</span> Geografía
                            </h3>
                            <ul className="space-y-2">
                                <li className="flex items-center justify-between"><span className="text-gray-700">España</span> <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Prioridad 1</span></li>
                                <li className="flex items-center justify-between"><span className="text-gray-700">Colombia</span> <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Prioridad 1</span></li>
                                <li className="flex items-center justify-between"><span className="text-gray-400">Resto Latam</span> <span className="bg-gray-100 text-gray-500 text-xs font-bold px-2 py-1 rounded">Reactivo</span></li>
                            </ul>
                        </div>
                        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <div className="bg-white border border-[#6D84E3] p-4 rounded-lg shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 bg-[#6D84E3] text-white text-xs px-2 py-1 rounded-bl">High Fit</div>
                                <h4 className="font-bold text-gray-800">Sanidad Privada</h4>
                                <p className="text-xs text-gray-500 mb-2">Hospitales, Clínicas, Aseguradoras</p>
                                <div className="mt-3 pt-3 border-t border-dashed border-gray-200">
                                    <p className="text-xs font-bold text-[#6D84E3]">Producto Core:</p>
                                    <p className="text-sm font-medium">Beyond-Booking (Citas)</p>
                                </div>
                             </div>
                             <div className="bg-white border border-[#6D84E3] p-4 rounded-lg shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 bg-[#6D84E3] text-white text-xs px-2 py-1 rounded-bl">High Fit</div>
                                <h4 className="font-bold text-gray-800">Retail & E-commerce</h4>
                                <p className="text-xs text-gray-500 mb-2">Moda, Electrónica, Marketplaces</p>
                                <div className="mt-3 pt-3 border-t border-dashed border-gray-200">
                                    <p className="text-xs font-bold text-[#6D84E3]">Producto Core:</p>
                                    <p className="text-sm font-medium">Beyond-Order (Pedidos)</p>
                                </div>
                             </div>
                             <div className="bg-white border-l-4 border-l-gray-300 border p-4 rounded-r-lg shadow-sm">
                                <h4 className="font-bold text-gray-800">Utilities & Telco</h4>
                                <p className="text-xs text-gray-500 mb-2">Energía, Agua, Internet</p>
                                <div className="mt-3 pt-3 border-t border-dashed border-gray-200">
                                    <p className="text-xs font-bold text-[#6D84E3]">Producto Core:</p>
                                    <p className="text-sm font-medium">Beyond-FCR + IVR</p>
                                </div>
                             </div>
                             <div className="bg-white border-l-4 border-l-gray-300 border p-4 rounded-r-lg shadow-sm">
                                <h4 className="font-bold text-gray-800">Hospitality & Travel</h4>
                                <p className="text-xs text-gray-500 mb-2">Hoteles, OTAs</p>
                                <div className="mt-3 pt-3 border-t border-dashed border-gray-200">
                                    <p className="text-xs font-bold text-[#6D84E3]">Producto Core:</p>
                                    <p className="text-sm font-medium">Beyond-Booking + IVR</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </section>

                {/* SECCION B: ICP QUANTITATIVO */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8 border border-gray-200">
                         <SectionHeader title="B. Perfil de Cliente Ideal (ICP)" subtitle="Criterios Cuantitativos de Cualificación" />
                         
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="font-bold text-gray-800 border-b pb-2">🏢 Firmográficos (El Filtro Duro)</h3>
                                <KpiCard label="Volumen Interacciones" value="> 20.000" subtext="mensuales (voz + digital)" highlight />
                                <KpiCard label="Equipo Atención" value="> 50 FTEs" subtext="empleados dedicados a soporte" />
                                <KpiCard label="Facturación Empresa" value="> €10M" subtext="anual" />
                            </div>
                            
                            <div className="space-y-4">
                                <h3 className="font-bold text-gray-800 border-b pb-2">⚙️ Operativos (El Dolor Real)</h3>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                    <ul className="space-y-2 text-sm text-red-800">
                                        <li className="flex items-center">⚠️ <strong>Llamadas Perdidas:</strong> &gt; 10-15%</li>
                                        <li className="flex items-center">⚠️ <strong>FCR (Resolución):</strong> &lt; 65%</li>
                                        <li className="flex items-center">⚠️ <strong>TMO (Duración):</strong> &gt; 4 minutos</li>
                                        <li className="flex items-center">⚠️ <strong>Rotación Agentes:</strong> &gt; 25% anual</li>
                                    </ul>
                                </div>
                                <h3 className="font-bold text-gray-800 border-b pb-2 mt-6">💻 Tecnológicos</h3>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    <li>Dependencia de <strong>IVR tradicional</strong> (DTMF).</li>
                                    <li><strong>IT Saturado:</strong> Backlog de &gt;6 meses.</li>
                                    <li>Sin capacidad interna de IA.</li>
                                    <li>CRM implementado pero desconectado (Silos).</li>
                                </ul>
                            </div>
                         </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                        <Matrix2x2 />
                    </div>
                </section>

                {/* SECCION C: PRIORIZACION */}
                <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
                    <SectionHeader title="C. Sistema de Priorización (Account Scoring)" subtitle="Calculadora de Viabilidad de Cuentas" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <table className="w-full text-sm text-left text-gray-600">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3">Criterio</th>
                                        <th className="px-6 py-3 text-right">Puntos</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-medium">Volumen &gt; 20k interacciones/mes</td><td className="px-6 py-3 text-right text-[#6D84E3] font-bold">+20</td></tr>
                                    <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-medium">Sector Prioritario (Sanidad/Retail)</td><td className="px-6 py-3 text-right text-[#6D84E3] font-bold">+15</td></tr>
                                    <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-medium">Dolor Financiero Identificado (Coste/Churn)</td><td className="px-6 py-3 text-right text-[#6D84E3] font-bold">+20</td></tr>
                                    <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-medium">Acceso Directo a C-Level (COO/CFO)</td><td className="px-6 py-3 text-right text-[#6D84E3] font-bold">+15</td></tr>
                                    <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-medium">Tecnología Obsoleta (IVR antiguo)</td><td className="px-6 py-3 text-right text-[#6D84E3] font-bold">+10</td></tr>
                                    <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-medium">Urgencia (Necesidad en &lt;3 meses)</td><td className="px-6 py-3 text-right text-[#6D84E3] font-bold">+10</td></tr>
                                    <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-medium">Presupuesto "Opex" disponible</td><td className="px-6 py-3 text-right text-[#6D84E3] font-bold">+10</td></tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="flex flex-col justify-center space-y-6">
                             <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-bold text-green-800">PRIORIDAD ALTA (Tier 1)</h4>
                                    <span className="text-2xl font-black text-green-600">&gt; 70 pts</span>
                                </div>
                                <p className="text-sm text-green-700 mt-1">Asignar AE Senior. Visita presencial obligatoria. Crear Business Case completo.</p>
                             </div>
                             <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-bold text-yellow-800">PRIORIDAD MEDIA (Tier 2)</h4>
                                    <span className="text-2xl font-black text-yellow-600">40 - 70 pts</span>
                                </div>
                                <p className="text-sm text-yellow-700 mt-1">Cualificar en Discovery. Validar si el dolor es suficiente para movilizar recursos.</p>
                             </div>
                             <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-r-lg opacity-70">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-bold text-gray-800">PRIORIDAD BAJA (Tier 3)</h4>
                                    <span className="text-2xl font-black text-gray-600">&lt; 40 pts</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">Nurturing automatizado. No invertir tiempo activo de ventas.</p>
                             </div>
                        </div>
                    </div>
                </section>

                {/* SECCION D: RED FLAGS */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
                        <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center">🚫 Red Flags (Descalificación Temprana)</h3>
                        <div className="overflow-hidden rounded-lg border border-gray-200">
                            <table className="min-w-full text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-bold text-gray-700">Señal (Red Flag)</th>
                                        <th className="px-4 py-3 text-left font-bold text-gray-700">Acción</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr><td className="px-4 py-3">Volumen &lt; 8k / mes</td><td className="px-4 py-3 text-gray-600">Descartar (ROI insuficiente).</td></tr>
                                    <tr><td className="px-4 py-3">Busca "solo tecnología/software" (DIY)</td><td className="px-4 py-3 text-gray-600">Descartar (Somos Servicio Gestionado).</td></tr>
                                    <tr><td className="px-4 py-3">Tiene equipo interno de Data Science/IA</td><td className="px-4 py-3 text-gray-600">Alerta Roja (Competencia interna).</td></tr>
                                    <tr><td className="px-4 py-3">Expectativa 100% Automatización</td><td className="px-4 py-3 text-gray-600">Educar o Descartar (Irreal).</td></tr>
                                    <tr><td className="px-4 py-3">Sin acceso a datos/APIs (IT Bloqueante)</td><td className="px-4 py-3 text-gray-600">Pausar hasta resolver acceso.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-xl shadow-lg p-8 text-white flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-blue-300 mb-6">👮 Reglas Operativas del Equipo</h3>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-start">
                                <span className="mr-3 text-green-400">✓</span>
                                <p>No invertir tiempo en cuentas con <strong>Scoring &lt; 40 puntos</strong>.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-green-400">✓</span>
                                <p>No avanzar a Demo sin validar al menos <strong>3 dolores operativos</strong> claros.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-green-400">✓</span>
                                <p>Siempre priorizar sectores con casos de uso replicables (Booking y Order).</p>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-green-400">✓</span>
                                <p>Vendemos <strong>Impacto (ROI)</strong>, no tecnología. Si no hay métrica, no hay deal.</p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* SECCION E: ANEXO - MATERIAL DE REFERENCIA CUALITATIVO (RESTORED CONTENT) */}
                <section className="bg-gray-50 rounded-xl shadow-inner p-8 border border-gray-200">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-600">📚 Anexo: Profundización Cualitativa</h2>
                        <p className="text-gray-500 mt-2">Buyer Personas detallados y eventos disparadores de compra para enriquecer la estrategia.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Persona 1: Ops */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-center mb-3">
                                <div className="bg-blue-100 p-2 rounded-full mr-3"><span className="text-xl">👤</span></div>
                                <h4 className="text-lg font-bold text-[#6D84E3]">El Champion (COO / Dir. CX)</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4 italic border-l-2 border-gray-300 pl-2">"Necesito que esto funcione ya y sin darme problemas."</p>
                            <ul className="text-sm space-y-2 text-gray-700">
                                <li><strong>Motivación:</strong> Cumplir SLAs, reducir quejas, dormir tranquilo.</li>
                                <li><strong>Miedo:</strong> Una implementación fallida que pare la operación.</li>
                                <li><strong>Mensaje Clave:</strong> "Nosotros operamos por ti. Tú controlas, nosotros remamos."</li>
                            </ul>
                        </div>
                        {/* Persona 2: Finance */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-center mb-3">
                                <div className="bg-green-100 p-2 rounded-full mr-3"><span className="text-xl">💰</span></div>
                                <h4 className="text-lg font-bold text-[#6D84E3]">El Economic Buyer (CFO)</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4 italic border-l-2 border-gray-300 pl-2">"¿Cuánto me voy a ahorrar y cuándo?"</p>
                            <ul className="text-sm space-y-2 text-gray-700">
                                <li><strong>Motivación:</strong> Variabilizar costes, ROI rápido, eliminar CAPEX.</li>
                                <li><strong>Miedo:</strong> Costes ocultos y contratos largos sin salida.</li>
                                <li><strong>Mensaje Clave:</strong> "Autofinanciado con ahorros. Sin inversión inicial."</li>
                            </ul>
                        </div>
                        {/* Persona 3: Tech */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-center mb-3">
                                <div className="bg-purple-100 p-2 rounded-full mr-3"><span className="text-xl">🛡️</span></div>
                                <h4 className="text-lg font-bold text-[#6D84E3]">El Gatekeeper (CTO / IT)</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4 italic border-l-2 border-gray-300 pl-2">"No toquéis mi infraestructura sin permiso."</p>
                            <ul className="text-sm space-y-2 text-gray-700">
                                <li><strong>Motivación:</strong> Seguridad, integridad de datos, menos tickets de soporte.</li>
                                <li><strong>Miedo:</strong> Brechas de seguridad, 'Shadow IT', integraciones chapuceras.</li>
                                <li><strong>Mensaje Clave:</strong> "API-first, Compliance certificado (GDPR/ISO), carga cero para tu equipo."</li>
                            </ul>
                        </div>
                    </div>

                    {/* Trigger Events */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                         <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center"><span className="mr-2">⚡</span> Eventos Desencadenantes (Trigger Events)</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                            <div className="flex items-start">
                                <div className="min-w-[24px] mt-1 mr-2 text-orange-500 font-bold">01</div>
                                <div>
                                    <strong className="block text-gray-800">Crisis de Relaciones Públicas</strong>
                                    <p className="text-gray-600">Una oleada de quejas en redes sociales por malos tiempos de espera o errores en pedidos.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="min-w-[24px] mt-1 mr-2 text-orange-500 font-bold">02</div>
                                <div>
                                    <strong className="block text-gray-800">Renovación BPO Actual</strong>
                                    <p className="text-gray-600">3-6 meses antes de que venza el contrato con proveedores tradicionales (Concentrix, Teleperformance).</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="min-w-[24px] mt-1 mr-2 text-orange-500 font-bold">03</div>
                                <div>
                                    <strong className="block text-gray-800">Pico Estacional Inminente</strong>
                                    <p className="text-gray-600">Necesidad urgente de escalar para Black Friday, Rebajas o Campaña de Navidad sin contratar personal.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="min-w-[24px] mt-1 mr-2 text-orange-500 font-bold">04</div>
                                <div>
                                    <strong className="block text-gray-800">Expansión o Lanzamiento</strong>
                                    <p className="text-gray-600">Entrada en un nuevo mercado o lanzamiento de producto que el equipo actual no puede absorber.</p>
                                </div>
                            </div>
                         </div>
                    </div>
                </section>

            </main>
            <footer className="text-center py-8 border-t border-gray-300 mt-12">
                <p className="text-gray-600 font-medium">BeyondCX Targeting Strategy | <span className="text-[#6D84E3]">Confidential & Internal Use Only</span></p>
            </footer>
        </div>
    );
};

export default ClientManifesto;
