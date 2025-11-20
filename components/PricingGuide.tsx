
import React, { useState, useMemo } from 'react';

// --- UI COMPONENTS ---

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
    <div className="mb-8 text-center md:text-left border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
        {subtitle && <p className="text-lg text-[#6D84E3] font-medium mt-2">{subtitle}</p>}
    </div>
);

const LeverCard: React.FC<{ icon: string; title: string; kpis: string[]; impact: string }> = ({ icon, title, kpis, impact }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col h-full transition-all hover:shadow-md hover:border-[#6D84E3]">
        <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">{icon}</span>
            <h3 className="font-bold text-xl text-gray-800">{title}</h3>
        </div>
        <div className="mb-4 flex-grow">
            <p className="text-xs font-bold text-gray-400 uppercase mb-2">KPIs Afectados:</p>
            <div className="flex flex-wrap gap-2">
                {kpis.map((k, i) => <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{k}</span>)}
            </div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-xs font-bold text-blue-800 uppercase">Impacto Beyond:</p>
            <p className="text-sm text-blue-900 font-medium">{impact}</p>
        </div>
    </div>
);

// --- INTERACTIVE COMPONENTS ---

const DiagnosticCheckitem: React.FC<{ 
    label: string; 
    subtext: string; 
    checked: boolean; 
    onChange: () => void; 
}> = ({ label, subtext, checked, onChange }) => (
    <div 
        onClick={onChange}
        className={`flex items-start p-3 border-b border-gray-100 last:border-0 cursor-pointer transition-colors ${checked ? 'bg-green-50' : 'hover:bg-gray-50'}`}
    >
        <div className={`mt-1 min-w-[20px] h-5 w-5 rounded border-2 flex items-center justify-center mr-3 transition-colors ${checked ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
            {checked && <span className="text-white text-xs font-bold">✓</span>}
        </div>
        <div className={checked ? 'opacity-50' : ''}>
            <p className={`text-sm font-bold ${checked ? 'text-green-800 line-through' : 'text-gray-800'}`}>{label}</p>
            <p className="text-xs text-gray-500">{subtext}</p>
        </div>
    </div>
);

const ScoreRow: React.FC<{ 
    label: string; 
    description: string; 
    value: number; 
    onChange: (val: number) => void 
}> = ({ label, description, value, onChange }) => (
    <div className="flex flex-col sm:flex-row justify-between items-center py-3 border-b border-gray-700 last:border-0">
        <div className="mb-2 sm:mb-0 sm:mr-4 text-center sm:text-left">
            <p className="font-bold text-sm">{label}</p>
            <p className="text-xs text-gray-400">{description}</p>
        </div>
        <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((score) => (
                <button
                    key={score}
                    onClick={() => onChange(score)}
                    className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                        value >= score 
                            ? 'bg-[#6D84E3] text-white scale-110' 
                            : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                    }`}
                >
                    {score}
                </button>
            ))}
        </div>
    </div>
);

// --- MAIN COMPONENT ---

const PricingGuide: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'diagnosis' | 'roi' | 'presentation'>('diagnosis');

    // State for Checklist
    const [checklist, setChecklist] = useState({
        volumetry: false,
        kpis: false,
        costs: false,
        stack: false,
        capacity: false
    });

    const checklistProgress = useMemo(() => {
        const total = Object.keys(checklist).length;
        const checked = Object.values(checklist).filter(Boolean).length;
        return Math.round((checked / total) * 100);
    }, [checklist]);

    const toggleCheck = (key: keyof typeof checklist) => {
        setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
    };

    // State for Scorecard
    const [scores, setScores] = useState({
        urgency: 0,
        maturity: 0,
        roi: 0,
        alignment: 0
    });

    const totalScore = useMemo(() => Object.values(scores).reduce((a: number, b: number) => a + b, 0), [scores]);

    const scoreVerdict = useMemo(() => {
        if (totalScore === 0) return { text: "Pendiente de puntuar", color: "text-gray-400" };
        if (totalScore < 12) return { text: "🚫 Descalificar / Nurturing", color: "text-red-400" };
        if (totalScore < 15) return { text: "⚠️ Oportunidad Media (Validar)", color: "text-yellow-400" };
        return { text: "🚀 Prioridad Alta (Deal)", color: "text-green-400" };
    }, [totalScore]);

    const updateScore = (key: keyof typeof scores, val: number) => {
        setScores(prev => ({ ...prev, [key]: val }));
    };

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f8f9fa] min-h-screen">
            
            <header className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Diagnóstico Comercial y ROI</h1>
                <p className="text-xl text-[#6D84E3] mt-4 font-medium">De la Venta de Features a la Venta de Impacto Económico.</p>
            </header>

            {/* NAVIGATION */}
            <div className="flex justify-center mb-8">
                <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
                    <button onClick={() => setActiveTab('diagnosis')} className={`px-6 py-2 rounded-md text-sm font-bold transition-colors ${activeTab === 'diagnosis' ? 'bg-[#6D84E3] text-white' : 'text-gray-600 hover:bg-gray-100'}`}>1. Diagnóstico y Palancas</button>
                    <button onClick={() => setActiveTab('roi')} className={`px-6 py-2 rounded-md text-sm font-bold transition-colors ${activeTab === 'roi' ? 'bg-[#6D84E3] text-white' : 'text-gray-600 hover:bg-gray-100'}`}>2. ROI Canvas y Precios</button>
                    <button onClick={() => setActiveTab('presentation')} className={`px-6 py-2 rounded-md text-sm font-bold transition-colors ${activeTab === 'presentation' ? 'bg-[#6D84E3] text-white' : 'text-gray-600 hover:bg-gray-100'}`}>3. Narrativa y Cierre</button>
                </div>
            </div>

            <main className="max-w-6xl mx-auto">

                {/* --- TAB 1: DIAGNOSIS & LEVERS --- */}
                {activeTab === 'diagnosis' && (
                    <div className="space-y-12 animate-fade-in">
                        
                        {/* A. PRINCIPIO GENERAL */}
                        <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
                            <SectionTitle title="A. Filosofía Consultiva" subtitle="Nuestro enfoque: Diagnosticar antes de Prescribir" />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div className="p-4">
                                    <div className="text-3xl mb-3">💡</div>
                                    <h3 className="font-bold text-gray-800">Valor antes que Precio</h3>
                                    <p className="text-sm text-gray-600 mt-2">El precio es irrelevante sin contexto. Nuestra misión es cuantificar el coste del problema antes de hablar de nuestra tarifa.</p>
                                </div>
                                <div className="p-4 border-x border-gray-100">
                                    <div className="text-3xl mb-3">📉</div>
                                    <h3 className="font-bold text-gray-800">Vendemos ROI, no Horas</h3>
                                    <p className="text-sm text-gray-600 mt-2">No somos un centro de coste (BPO tradicional). Somos un motor de eficiencia. Cada propuesta debe tener un retorno claro.</p>
                                </div>
                                <div className="p-4">
                                    <div className="text-3xl mb-3">🤝</div>
                                    <h3 className="font-bold text-gray-800">Conversación, no Listado</h3>
                                    <p className="text-sm text-gray-600 mt-2">Nunca enviamos un PDF de precios en frío. Presentamos la inversión como la conclusión lógica de un Business Case conjunto.</p>
                                </div>
                            </div>
                        </section>

                        {/* B. 4 PALANCAS */}
                        <section>
                            <SectionTitle title="B. Las 4 Palancas de Impacto Económico" subtitle="¿Dónde generamos dinero para el cliente?" />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <LeverCard 
                                    icon="💰" title="COSTE" 
                                    kpis={['Coste por Contacto', 'Headcount', 'Rotación']}
                                    impact="Reducción del 30-40% en OPEX mediante automatización y variabilización."
                                />
                                <LeverCard 
                                    icon="⚡" title="CAPACIDAD" 
                                    kpis={['Llamadas Perdidas', 'Nivel de Servicio', '% Automatización']}
                                    impact="Atención 24/7 y escalabilidad infinita para picos sin contratar personal."
                                />
                                <LeverCard 
                                    icon="⭐" title="CALIDAD" 
                                    kpis={['FCR (First Contact Resolution)', 'Tasa de Error']}
                                    impact="Eliminación de errores manuales y consistencia en cada interacción."
                                />
                                <LeverCard 
                                    icon="❤️" title="EXPERIENCIA" 
                                    kpis={['NPS / CSAT', 'Tiempo de Espera', 'CES']}
                                    impact="Atención inmediata y personalizada que fideliza y reduce el churn."
                                />
                            </div>
                        </section>

                        {/* C. ARBOL DE DECISIÓN */}
                        <section className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                            <div className="p-6 bg-gray-50 border-b border-gray-200">
                                <h2 className="text-xl font-bold text-gray-800">C. Árbol de Diagnóstico (Dolor → Solución)</h2>
                            </div>
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-bold">
                                    <tr>
                                        <th className="px-6 py-3">Dolor del Cliente</th>
                                        <th className="px-6 py-3">Causa Raíz (Diagnóstico)</th>
                                        <th className="px-6 py-3">Palanca</th>
                                        <th className="px-6 py-3 text-[#6D84E3]">Solución BeyondCX</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr><td className="px-6 py-4 font-bold">"Perdemos muchas llamadas"</td><td className="px-6 py-4">Capacidad finita de agentes, horarios limitados.</td><td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">CAPACIDAD</span></td><td className="px-6 py-4 font-bold text-[#6D84E3]">Beyond-IVR + FCR</td></tr>
                                    <tr><td className="px-6 py-4 font-bold">"Mucho absentismo en citas"</td><td className="px-6 py-4">Proceso de confirmación manual o inexistente.</td><td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">COSTE/INGRESOS</span></td><td className="px-6 py-4 font-bold text-[#6D84E3]">Beyond-Booking</td></tr>
                                    <tr><td className="px-6 py-4 font-bold">"Errores en pedidos y envíos"</td><td className="px-6 py-4">Entrada de datos manual en ERP/CRM.</td><td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">CALIDAD</span></td><td className="px-6 py-4 font-bold text-[#6D84E3]">Beyond-Order</td></tr>
                                    <tr><td className="px-6 py-4 font-bold">"Clientes se quejan de esperas"</td><td className="px-6 py-4">IVR tradicional rígido y colas largas.</td><td className="px-6 py-4"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-bold">EXPERIENCIA</span></td><td className="px-6 py-4 font-bold text-[#6D84E3]">Beyond-IVR</td></tr>
                                </tbody>
                            </table>
                        </section>

                        {/* D. CHECKLIST DIAGNOSTICO INTERACTIVO */}
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                                <div className="flex justify-between items-center mb-4 border-b pb-2">
                                    <h3 className="font-bold text-gray-800">D. Checklist de Inputs Mínimos</h3>
                                    <span className={`text-xs font-bold px-2 py-1 rounded ${checklistProgress === 100 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                                        {checklistProgress}% Completado
                                    </span>
                                </div>
                                
                                {/* Progress Bar */}
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                                    <div className="bg-[#6D84E3] h-2 rounded-full transition-all duration-500" style={{ width: `${checklistProgress}%` }}></div>
                                </div>

                                <div className="space-y-1">
                                    <DiagnosticCheckitem 
                                        label="Volumetría Mensual" 
                                        subtext="Desglose por canal (Voz, Email, Chat) y estacionalidad."
                                        checked={checklist.volumetry}
                                        onChange={() => toggleCheck('volumetry')}
                                    />
                                    <DiagnosticCheckitem 
                                        label="KPIs Actuales" 
                                        subtext="TMO (AHT), FCR, Tasa de Abandono, Nivel de Servicio." 
                                        checked={checklist.kpis}
                                        onChange={() => toggleCheck('kpis')}
                                    />
                                    <DiagnosticCheckitem 
                                        label="Estructura de Costes" 
                                        subtext="Coste por Contacto actual, Headcount dedicado, Coste Hora." 
                                        checked={checklist.costs}
                                        onChange={() => toggleCheck('costs')}
                                    />
                                    <DiagnosticCheckitem 
                                        label="Stack Tecnológico" 
                                        subtext="CRM (Salesforce/HubSpot), ERP, Centralita/CCaaS." 
                                        checked={checklist.stack}
                                        onChange={() => toggleCheck('stack')}
                                    />
                                    <DiagnosticCheckitem 
                                        label="Capacidad de Equipo" 
                                        subtext="Rotación anual, tiempo de formación (Ramp-up)." 
                                        checked={checklist.capacity}
                                        onChange={() => toggleCheck('capacity')}
                                    />
                                </div>
                            </div>

                            {/* CALCULADORA SCORECARD */}
                            <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 text-white">
                                <h3 className="font-bold text-white mb-4 border-b border-gray-600 pb-2">Calculadora de Viabilidad (Scorecard)</h3>
                                <div className="space-y-4">
                                    <ScoreRow 
                                        label="Urgencia del Dolor" 
                                        description="¿Afecta KPIs críticos hoy?" 
                                        value={scores.urgency}
                                        onChange={(v) => updateScore('urgency', v)}
                                    />
                                    <ScoreRow 
                                        label="Madurez Digital" 
                                        description="¿Datos/APIs disponibles?" 
                                        value={scores.maturity}
                                        onChange={(v) => updateScore('maturity', v)}
                                    />
                                    <ScoreRow 
                                        label="Potencial de ROI" 
                                        description="¿Volumen justifica inversión?" 
                                        value={scores.roi}
                                        onChange={(v) => updateScore('roi', v)}
                                    />
                                    <ScoreRow 
                                        label="Alineación" 
                                        description="¿Buscan valor vs. solo precio?" 
                                        value={scores.alignment}
                                        onChange={(v) => updateScore('alignment', v)}
                                    />
                                </div>
                                <div className="mt-6 pt-4 border-t border-gray-600 text-center">
                                    <p className="text-gray-400 text-sm mb-1">Puntuación Total: <span className="text-white font-bold text-lg">{totalScore} / 20</span></p>
                                    <p className={`text-lg font-bold ${scoreVerdict.color} animate-pulse`}>
                                        {scoreVerdict.text}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* --- TAB 2: ROI CANVAS & PRICING --- */}
                {activeTab === 'roi' && (
                    <div className="space-y-12 animate-fade-in">
                        
                        {/* INTRO */}
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-800">E. ROI Canvas y Modelo de Precios</h2>
                            <p className="text-gray-600 mt-2">La herramienta para construir el Business Case. Recuerda: El precio se compone de una <strong>Cuota de Plataforma</strong> (Fija) + <strong>Cuota de Éxito</strong> (Variable).</p>
                        </div>

                        {/* ROI CANVAS */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden">
                            <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
                                <h3 className="font-bold text-lg">📊 BeyondCX ROI Canvas (Hoja de Trabajo)</h3>
                                <span className="text-xs bg-blue-600 px-2 py-1 rounded">Confidencial</span>
                            </div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                                {/* INPUTS */}
                                <div className="p-8 bg-gray-50">
                                    <h4 className="font-bold text-gray-700 mb-6 border-b pb-2">1. Inputs del Cliente (Estado Actual)</h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center p-3 bg-white border rounded">
                                            <span className="text-sm font-medium text-gray-600">Volumen Mensual</span>
                                            <span className="text-gray-400 font-mono">____________ int.</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-white border rounded">
                                            <span className="text-sm font-medium text-gray-600">Coste por Contacto (Actual)</span>
                                            <span className="text-gray-400 font-mono">€ ___________ /ud</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-white border rounded">
                                            <span className="text-sm font-medium text-gray-600">FTEs (Empleados) Dedicados</span>
                                            <span className="text-gray-400 font-mono">____________ px.</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-white border rounded">
                                            <span className="text-sm font-medium text-gray-600">Tasa de Error / Abandono</span>
                                            <span className="text-gray-400 font-mono">____________ %</span>
                                        </div>
                                    </div>

                                    <h4 className="font-bold text-[#6D84E3] mt-8 mb-6 border-b pb-2">2. Variables Beyond (Propuesta)</h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center p-3 bg-blue-50 border border-blue-100 rounded">
                                            <span className="text-sm font-medium text-blue-800">% Automatización Estimada</span>
                                            <span className="text-blue-600 font-bold font-mono">70% - 85%</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-blue-50 border border-blue-100 rounded">
                                            <span className="text-sm font-medium text-blue-800">Coste Blend (IA + Humano)</span>
                                            <span className="text-blue-600 font-bold font-mono">~50% del Actual</span>
                                        </div>
                                    </div>
                                </div>

                                {/* OUTPUTS */}
                                <div className="p-8">
                                    <h4 className="font-bold text-green-700 mb-6 border-b pb-2">3. Resultados Proyectados (El Valor)</h4>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                                            <p className="text-xs text-green-600 uppercase font-bold">Ahorro Anual</p>
                                            <p className="text-2xl font-black text-green-800 mt-1">€ XXX.XXX</p>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                                            <p className="text-xs text-green-600 uppercase font-bold">Payback</p>
                                            <p className="text-2xl font-black text-green-800 mt-1">&lt; 3 Meses</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                                            <p className="text-xs text-blue-600 uppercase font-bold">Mejora Calidad</p>
                                            <p className="text-xl font-bold text-blue-800 mt-1">0% Errores</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                                            <p className="text-xs text-blue-600 uppercase font-bold">Capacidad</p>
                                            <p className="text-xl font-bold text-blue-800 mt-1">24/7 x ∞</p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded text-xs text-gray-500 italic">
                                        * Nota: Estas estimaciones son conservadoras. El impacto en CX (NPS) y reducción de churn genera valor adicional no incluido en este cálculo directo.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SCENARIOS (PRESERVED FROM ORIGINAL) */}
                        <section>
                            <SectionTitle title="Ejemplos Reales de Configuración de Precio" subtitle="Cómo se traduce esto en propuestas concretas" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#6D84E3]">
                                    <h3 className="font-bold text-lg text-gray-800 mb-2">Caso 1: Sweet Spot (Sanidad)</h3>
                                    <p className="text-sm text-gray-500 mb-4">Clínica Privada / 15k interacciones mes</p>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex justify-between border-b border-gray-100 pb-2"><span>Solución:</span> <span className="font-bold">Beyond-Booking + IVR</span></li>
                                        <li className="flex justify-between border-b border-gray-100 pb-2"><span>Cuota Plataforma:</span> <span className="font-bold">~€2,500 / mes</span></li>
                                        <li className="flex justify-between border-b border-gray-100 pb-2"><span>Cuota Éxito:</span> <span className="font-bold">~€0.80 / cita</span></li>
                                        <li className="flex justify-between bg-gray-50 p-2 rounded"><span>MRR Estimado:</span> <span className="font-bold text-[#6D84E3]">&gt; €25,000</span></li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-gray-800">
                                    <h3 className="font-bold text-lg text-gray-800 mb-2">Caso 2: BPO 2.0 (Utilities)</h3>
                                    <p className="text-sm text-gray-500 mb-4">Energética / 50k interacciones mes</p>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex justify-between border-b border-gray-100 pb-2"><span>Solución:</span> <span className="font-bold">Full Service (FCR + Order)</span></li>
                                        <li className="flex justify-between border-b border-gray-100 pb-2"><span>Cuota Plataforma:</span> <span className="font-bold">~€5,000 / mes</span></li>
                                        <li className="flex justify-between border-b border-gray-100 pb-2"><span>Cuota Éxito:</span> <span className="font-bold">Modelo Tiers (Volumen)</span></li>
                                        <li className="flex justify-between bg-gray-50 p-2 rounded"><span>MRR Estimado:</span> <span className="font-bold text-[#6D84E3]">&gt; €25,000</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* --- TAB 3: NARRATIVE & CLOSING --- */}
                {activeTab === 'presentation' && (
                    <div className="space-y-12 animate-fade-in">
                        
                        {/* F. NARRATIVA (The 4 Steps preserved) */}
                        <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
                            <SectionTitle title="F. Guía Narrativa para Presentar el ROI" subtitle="Framework de 4 Pasos para la Conversación de Valor" />
                            
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-gray-100 text-gray-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Anclar en el Dolor (Discovery)</h4>
                                        <p className="text-sm text-gray-600 mt-1">"Entiendo que vuestro principal problema es un FCR bajo (&lt;60%), lo que frustra a los clientes..."</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gray-100 text-gray-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Cuantificar el Coste de Inacción</h4>
                                        <p className="text-sm text-gray-600 mt-1">"Si cada rellamada cuesta 8€ y tenéis 10k llamadas/mes, este problema os cuesta <strong>15.000€ mensuales</strong> hoy."</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gray-100 text-gray-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Presentar la Solución como Puente</h4>
                                        <p className="text-sm text-gray-600 mt-1">"BeyondFCR está diseñado para subir ese KPI al 85% en 90 días, eliminando ese desperdicio y mejorando el CSAT."</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Precio como Inversión Lógica</h4>
                                        <p className="text-sm text-gray-600 mt-1">"Para lograr esto, la inversión es [Precio]. Se autofinancia en 3 meses y luego es pura ganancia. ¿Tiene sentido?"</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* G. BENCHMARKS & NEGOTIATION */}
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            
                            {/* Benchmarks */}
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-800 mb-4">Benchmarks Sectoriales</h3>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-[#6D84E3] pl-4">
                                        <p className="text-xs font-bold text-[#6D84E3]">RETAIL / E-COMMERCE</p>
                                        <p className="text-sm font-bold text-gray-800">Reducción TMO -40%</p>
                                        <p className="text-xs text-gray-500">Automatización de "Dónde está mi pedido".</p>
                                    </div>
                                    <div className="border-l-4 border-[#6D84E3] pl-4">
                                        <p className="text-xs font-bold text-[#6D84E3]">SANIDAD</p>
                                        <p className="text-sm font-bold text-gray-800">No-Shows -30%</p>
                                        <p className="text-xs text-gray-500">Confirmaciones proactivas por WhatsApp/Voz.</p>
                                    </div>
                                    <div className="border-l-4 border-[#6D84E3] pl-4">
                                        <p className="text-xs font-bold text-[#6D84E3]">UTILITIES</p>
                                        <p className="text-sm font-bold text-gray-800">FCR +20 Puntos</p>
                                        <p className="text-xs text-gray-500">Resolución de incidencias masivas por IA.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Negotiation Strategy (Preserved) */}
                            <div className="bg-red-50 rounded-xl shadow-sm p-6 border border-red-100">
                                <h3 className="font-bold text-red-800 mb-4">Estrategia de Cierre: "Give-to-Get"</h3>
                                <p className="text-sm text-red-700 mb-4">Nunca concedas un descuento sin pedir algo a cambio. Protege el valor.</p>
                                <div className="bg-white p-4 rounded border border-red-100 text-sm text-gray-700 italic">
                                    <p className="font-bold not-italic text-gray-900 mb-2">Cliente: "¿Me haces un 10% de descuento?"</p>
                                    "Nuestros márgenes están ajustados al valor que damos. Pero si firmamos un <strong>contrato de 24 meses</strong> en lugar de 12, o realizamos el <strong>pago trimestral por adelantado</strong>, podría justificar ese ajuste internamente. ¿Qué opción te encaja mejor?"
                                </div>
                            </div>

                        </section>
                    </div>
                )}

            </main>
        </div>
    );
};

export default PricingGuide;
