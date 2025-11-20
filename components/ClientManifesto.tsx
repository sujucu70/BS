
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
                                    <tr className="hover: