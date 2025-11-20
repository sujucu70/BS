
import React from 'react';
import MeddiccImpactChart from './charts/MeddiccImpactChart';

// --- SUB COMPONENTS ---

const PillarSection: React.FC<{ 
    number: string; 
    title: string; 
    conceptTitle: string; 
    conceptText: string; 
    children: React.ReactNode; 
}> = ({ number, title, conceptTitle, conceptText, children }) => (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-[#E4E3E3] p-4 border-b border-gray-200 flex items-center justify-between">
             <h3 className="text-lg font-bold text-[#3F3F3F] flex items-center">
                <span className="bg-[#6D84E3] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">{number}</span>
                {title}
            </h3>
        </div>
        <div className="p-6 md:p-8">
             <div className="bg-blue-50 border-l-4 border-[#6D84E3] p-4 mb-8 rounded-r-lg">
                <p className="text-xs font-bold text-[#6D84E3] uppercase mb-1">📘 Concepto Clave: {conceptTitle}</p>
                <p className="text-sm text-[#3F3F3F] leading-relaxed">{conceptText}</p>
             </div>
             {children}
        </div>
    </div>
);

// --- MAIN COMPONENT ---

const MethodologyTools: React.FC = () => {
    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f3f4f6] min-h-screen">
            
            {/* HEADER */}
            <header className="text-center py-8">
                <h1 className="text-3xl md:text-5xl font-bold text-[#3F3F3F] tracking-tight">3. Metodología</h1>
                <p className="text-lg text-[#6D84E3] mt-2 font-medium">Los "Cómo" de nuestra venta - Frameworks y principios.</p>
            </header>

            {/* CONTENT AREA */}
            <main className="bg-white rounded-xl shadow-lg p-6 md:p-10 min-h-[500px]">
                
                {/* --- METODOLOGÍA --- */}
                <div className="animate-fade-in space-y-12">
                    <div className="animate-fade-in space-y-12">
                        
                        {/* 1. PRINCIPIOS */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#3F3F3F] mb-6 pb-2 border-b border-gray-200">1. Principios de Nuestra Moción de Venta</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                                {[
                                    { t: "Educación Primero", d: "Creamos categoría. El cliente debe entender el 'Por qué ahora'." },
                                    { t: "Compromiso Mutuo", d: "No trabajamos gratis. Si nosotros invertimos recursos, ellos también." },
                                    { t: "Valor > Precio", d: "Hablamos de ROI y eficiencia, no de coste por hora." },
                                    { t: "Escalabilidad", d: "Procesos diseñados para ser repetibles." },
                                    { t: "Portfolio Entry", d: "Empezamos pequeño (Piloto), escalamos rápido." }
                                ].map((p, i) => (
                                    <div key={i} className="bg-[#E4E3E3] p-4 rounded-lg border border-gray-100 hover:border-[#6D84E3] transition-colors">
                                        <h4 className="font-bold text-[#6D84E3] text-sm mb-2">{p.t}</h4>
                                        <p className="text-xs text-[#B1B1B0]">{p.d}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 2. LOS 3 PILARES */}
                        <section>
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-[#3F3F3F] pb-2 border-b border-gray-200">2. Los 3 Pilares de la Metodología</h2>
                            </div>

                            {/* 2.1 MANIFESTO */}
                            <PillarSection 
                                number="2.1" 
                                title="Manifiesto BPO 2.0" 
                                conceptTitle="¿Qué es BPO 2.0?" 
                                conceptText="Es la evolución del outsourcing tradicional. En lugar de alquilar personas por hora (input), las empresas contratan resultados operativos (output) garantizados por tecnología, pagando por resolución y no por esfuerzo."
                            >
                                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                    <div className="text-5xl">🎯</div>
                                    <div>
                                        <p className="text-xl text-[#3F3F3F] font-medium italic leading-relaxed">"No vendemos servicios, vendemos Resultados de Negocio. Nos posicionamos como educadores que diagnostican y co-crean valor."</p>
                                    </div>
                                </div>
                            </PillarSection>

                            {/* 2.2 FRAMEWORK */}
                            <PillarSection 
                                number="2.2" 
                                title="Venta Consultiva (TOFU-MOFU-BOFU)" 
                                conceptTitle="El Embudo de Ventas" 
                                conceptText="Dividimos el proceso en 3 fases: Top (Consciencia), Middle (Evaluación) y Bottom (Decisión) para aplicar las herramientas correctas en el momento justo."
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                                        <div className="text-blue-600 font-black text-xl mb-1">TOFU</div>
                                        <div className="text-xs font-bold uppercase tracking-wide text-[#B1B1B0]">Educación</div>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
                                        <div className="text-green-600 font-black text-xl mb-1">MOFU</div>
                                        <div className="text-xs font-bold uppercase tracking-wide text-[#B1B1B0]">Cualificación</div>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-center">
                                        <div className="text-orange-600 font-black text-xl mb-1">BOFU</div>
                                        <div className="text-xs font-bold uppercase tracking-wide text-[#B1B1B0]">Cierre</div>
                                    </div>
                                </div>
                            </PillarSection>

                            {/* 2.3 MEDDICC - Rediseñado con 2 columnas */}
                            <PillarSection 
                                number="2.3" 
                                title="Rigor MEDDICC" 
                                conceptTitle="¿Qué es MEDDICC?" 
                                conceptText="Es el checklist mental que nos dice si vamos a ganar o perder un trato. Si no puedes responder a cada letra, estás volando a ciegas."
                            >
                                {/* Layout de 2 Columnas */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    
                                    {/* Columna Izquierda: El Framework */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold text-[#B1B1B0] uppercase tracking-wide mb-4">El Framework</h4>
                                        
                                        {/* M - Metrics */}
                                        <div className="flex items-start gap-3 group">
                                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">M</span>
                                            </div>
                                            <div className="flex-grow">
                                                <h5 className="font-bold text-[#3F3F3F] mb-1">Metrics</h5>
                                                <p className="text-sm text-[#B1B1B0]">KPIs económicos que mejorará el cliente.</p>
                                            </div>
                                        </div>

                                        {/* E - Economic Buyer */}
                                        <div className="flex items-start gap-3 group">
                                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">E</span>
                                            </div>
                                            <div className="flex-grow">
                                                <h5 className="font-bold text-[#3F3F3F] mb-1">Economic Buyer</h5>
                                                <p className="text-sm text-[#B1B1B0]">Quién controla el presupuesto final.</p>
                                            </div>
                                        </div>

                                        {/* D - Decision Criteria */}
                                        <div className="flex items-start gap-3 group">
                                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">D</span>
                                            </div>
                                            <div className="flex-grow">
                                                <h5 className="font-bold text-[#3F3F3F] mb-1">Decision Criteria</h5>
                                                <p className="text-sm text-[#B1B1B0]">Criterios técnicos y de negocio para elegir.</p>
                                            </div>
                                        </div>

                                        {/* D - Decision Process */}
                                        <div className="flex items-start gap-3 group">
                                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">D</span>
                                            </div>
                                            <div className="flex-grow">
                                                <h5 className="font-bold text-[#3F3F3F] mb-1">Decision Process</h5>
                                                <p className="text-sm text-[#B1B1B0]">Pasos formales hasta la firma del contrato.</p>
                                            </div>
                                        </div>

                                        {/* I - Identify Pain */}
                                        <div className="flex items-start gap-3 group">
                                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">I</span>
                                            </div>
                                            <div className="flex-grow">
                                                <h5 className="font-bold text-[#3F3F3F] mb-1">Identify Pain</h5>
                                                <p className="text-sm text-[#B1B1B0]">Problema urgente que les cuesta dinero hoy.</p>
                                            </div>
                                        </div>

                                        {/* C - Champion */}
                                        <div className="flex items-start gap-3 group">
                                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">C</span>
                                            </div>
                                            <div className="flex-grow">
                                                <h5 className="font-bold text-[#3F3F3F] mb-1">Champion</h5>
                                                <p className="text-sm text-[#B1B1B0]">Aliado interno que vende por ti.</p>
                                            </div>
                                        </div>

                                        {/* C - Competition */}
                                        <div className="flex items-start gap-3 group">
                                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">C</span>
                                            </div>
                                            <div className="flex-grow">
                                                <h5 className="font-bold text-[#3F3F3F] mb-1">Competition</h5>
                                                <p className="text-sm text-[#B1B1B0]">Alternativas en evaluación (incluido no hacer nada).</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Columna Derecha: La Evidencia */}
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-indigo-100">
                                        <div className="mb-4">
                                            <h4 className="text-sm font-bold text-[#B1B1B0] uppercase tracking-wide mb-1">Por qué usarlo</h4>
                                            <h5 className="text-lg font-bold text-[#3F3F3F]">Impacto en Win Rate</h5>
                                        </div>
                                        <div className="h-[400px] bg-white rounded-lg p-4 shadow-sm">
                                            <MeddiccImpactChart />
                                        </div>
                                    </div>

                                </div>
                            </PillarSection>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MethodologyTools;
