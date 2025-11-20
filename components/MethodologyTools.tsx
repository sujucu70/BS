
import React from 'react';

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

const MeddiccCard: React.FC<{ letter: string; title: string }> = ({ letter, title }) => (
    <div className="flex flex-col items-center p-4 bg-[#3F3F3F] rounded-lg border border-[#3F3F3F] text-center min-w-[100px]">
        <span className="text-3xl font-black text-[#6D84E3] mb-1">{letter}</span>
        <span className="text-xs text-white font-medium">{title}</span>
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
                                title="Ciclo Consultivo (TOFU-MOFU-BOFU)" 
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

                            {/* 2.3 MEDDICC */}
                            <PillarSection 
                                number="2.3" 
                                title="Rigor MEDDICC" 
                                conceptTitle="¿Qué es MEDDICC?" 
                                conceptText="Es el checklist mental que nos dice si vamos a ganar o perder un trato. Si no puedes responder a cada letra, estás volando a ciegas."
                            >
                                <div className="bg-[#3F3F3F] rounded-xl p-8 text-white shadow-inner">
                                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                                        <MeddiccCard letter="M" title="Metrics" />
                                        <MeddiccCard letter="E" title="Economic Buyer" />
                                        <MeddiccCard letter="D" title="Decision Criteria" />
                                        <MeddiccCard letter="D" title="Decision Process" />
                                        <MeddiccCard letter="I" title="Identify Pain" />
                                        <MeddiccCard letter="C" title="Champion" />
                                        <MeddiccCard letter="C" title="Competition" />
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
