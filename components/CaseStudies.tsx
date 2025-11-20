import React, { useState } from 'react';

interface CaseStudy {
    id: string;
    company: string;
    industry: string;
    companySize: string;
    challenge: string;
    solution: string;
    results: {
        metric: string;
        before: string;
        after: string;
        improvement: string;
    }[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
    tags: string[];
}

const CaseStudies: React.FC = () => {
    const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

    // Template data - to be filled with real case studies
    const caseStudies: CaseStudy[] = [
        {
            id: '1',
            company: '[Nombre Cliente]',
            industry: 'Retail',
            companySize: '>500 empleados',
            challenge: 'Alto volumen de llamadas repetitivas sobre estado de pedidos, generando sobrecarga en el contact center y tiempos de espera de más de 10 minutos.',
            solution: 'Implementación de Beyond-Order con IA conversacional para gestión automática de consultas de pedidos, integrado con su sistema ERP.',
            results: [
                { metric: 'Tiempo Medio de Operación (TMO)', before: '8.5 min', after: '3.2 min', improvement: '-62%' },
                { metric: 'Volumen de llamadas', before: '15,000/mes', after: '4,500/mes', improvement: '-70%' },
                { metric: 'CSAT', before: '72%', after: '91%', improvement: '+19pts' },
                { metric: 'Coste por contacto', before: '€4.20', after: '€1.80', improvement: '-57%' }
            ],
            testimonial: {
                quote: 'BeyondCX transformó nuestra operación de atención al cliente. La reducción de llamadas repetitivas nos permitió enfocar a nuestro equipo en casos complejos que realmente requieren empatía humana.',
                author: '[Nombre]',
                role: 'Director de Operaciones'
            },
            tags: ['Beyond-Order', 'Retail', 'Automatización']
        },
        {
            id: '2',
            company: '[Nombre Cliente]',
            industry: 'Sanidad',
            companySize: '200-500 empleados',
            challenge: 'Gestión manual de citas médicas con alta tasa de no-shows y dificultad para pacientes mayores en uso de apps.',
            solution: 'Implementación de Beyond-Booking con asistente conversacional multicanal (voz, WhatsApp, web) para gestión inteligente de citas.',
            results: [
                { metric: 'Tasa de No-Shows', before: '18%', after: '6%', improvement: '-67%' },
                { metric: 'Tiempo de gestión por cita', before: '4.5 min', after: '45 seg', improvement: '-83%' },
                { metric: 'Satisfacción paciente', before: '76%', after: '94%', improvement: '+18pts' },
                { metric: 'Citas gestionadas/día', before: '120', after: '380', improvement: '+217%' }
            ],
            testimonial: {
                quote: 'La solución se adaptó perfectamente a nuestros pacientes mayores. La interfaz conversacional por voz eliminó barreras tecnológicas.',
                author: '[Nombre]',
                role: 'Gerente de Atención al Paciente'
            },
            tags: ['Beyond-Booking', 'Sanidad', 'Multicanal']
        },
        {
            id: '3',
            company: '[Nombre Cliente - Template]',
            industry: 'Utilities',
            companySize: '>1000 empleados',
            challenge: '[Describir el desafío específico del cliente]',
            solution: '[Describir la solución implementada]',
            results: [
                { metric: '[Métrica 1]', before: '[Valor antes]', after: '[Valor después]', improvement: '[% mejora]' },
                { metric: '[Métrica 2]', before: '[Valor antes]', after: '[Valor después]', improvement: '[% mejora]' },
                { metric: '[Métrica 3]', before: '[Valor antes]', after: '[Valor después]', improvement: '[% mejora]' }
            ],
            tags: ['[Tag 1]', '[Tag 2]']
        },
        {
            id: '4',
            company: '[Nombre Cliente - Template]',
            industry: 'Hospitality',
            companySize: '50-200 empleados',
            challenge: '[Describir el desafío específico del cliente]',
            solution: '[Describir la solución implementada]',
            results: [
                { metric: '[Métrica 1]', before: '[Valor antes]', after: '[Valor después]', improvement: '[% mejora]' },
                { metric: '[Métrica 2]', before: '[Valor antes]', after: '[Valor después]', improvement: '[% mejora]' }
            ],
            tags: ['[Tag 1]', '[Tag 2]']
        },
        {
            id: '5',
            company: '[Nombre Cliente - Template]',
            industry: 'E-commerce',
            companySize: '>500 empleados',
            challenge: '[Describir el desafío específico del cliente]',
            solution: '[Describir la solución implementada]',
            results: [
                { metric: '[Métrica 1]', before: '[Valor antes]', after: '[Valor después]', improvement: '[% mejora]' },
                { metric: '[Métrica 2]', before: '[Valor antes]', after: '[Valor después]', improvement: '[% mejora]' }
            ],
            tags: ['[Tag 1]', '[Tag 2]']
        }
    ];

    const industries = ['all', ...Array.from(new Set(caseStudies.map(cs => cs.industry)))];

    const filteredCases = selectedIndustry === 'all' 
        ? caseStudies 
        : caseStudies.filter(cs => cs.industry === selectedIndustry);

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f8f9fa] min-h-screen">
            <header className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                    Case Studies
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Resultados reales de clientes que transformaron sus operaciones con BeyondCX
                </p>
            </header>

            {/* Industry Filter */}
            <div className="flex justify-center mb-12">
                <div className="bg-white rounded-lg shadow-sm p-2 inline-flex gap-2">
                    {industries.map(industry => (
                        <button
                            key={industry}
                            onClick={() => setSelectedIndustry(industry)}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                                selectedIndustry === industry 
                                    ? 'bg-[#1e3a5f] text-white shadow-sm' 
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {industry === 'all' ? 'Todos' : industry}
                        </button>
                    ))}
                </div>
            </div>

            {/* Case Studies Grid */}
            <div className="max-w-6xl mx-auto space-y-12">
                {filteredCases.map((caseStudy, index) => (
                    <div key={caseStudy.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white p-6">
                            <div className="flex items-start justify-between flex-wrap gap-4">
                                <div>
                                    <h2 className="text-2xl font-bold mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                                        {caseStudy.company}
                                    </h2>
                                    <div className="flex flex-wrap gap-3 text-sm">
                                        <span className="bg-white/20 px-3 py-1 rounded-full">{caseStudy.industry}</span>
                                        <span className="bg-white/20 px-3 py-1 rounded-full">{caseStudy.companySize}</span>
                                    </div>
                                </div>
                                <div className="text-4xl font-bold opacity-20">
                                    #{index + 1}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {/* Challenge */}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                                    <span className="text-red-600">⚠️</span> Desafío
                                </h3>
                                <p className="text-gray-700 leading-relaxed bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                                    {caseStudy.challenge}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                                    <span className="text-blue-600">💡</span> Solución
                                </h3>
                                <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                                    {caseStudy.solution}
                                </p>
                            </div>

                            {/* Results */}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <span className="text-green-600">📊</span> Resultados
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {caseStudy.results.map((result, idx) => (
                                        <div key={idx} className="bg-green-50 p-4 rounded-lg border border-green-200">
                                            <div className="text-sm font-semibold text-gray-600 mb-2">{result.metric}</div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm text-gray-500">Antes: {result.before}</span>
                                                <span className="text-sm text-gray-500">Después: {result.after}</span>
                                            </div>
                                            <div className="text-2xl font-bold text-green-700 text-center">
                                                {result.improvement}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonial */}
                            {caseStudy.testimonial && (
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#1e3a5f]">
                                    <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                                        "{caseStudy.testimonial.quote}"
                                    </p>
                                    <div className="text-sm text-gray-600">
                                        <div className="font-bold">{caseStudy.testimonial.author}</div>
                                        <div>{caseStudy.testimonial.role}</div>
                                    </div>
                                </div>
                            )}

                            {/* Tags */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {caseStudy.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center py-16">
                <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white p-12 rounded-xl max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                        ¿Quieres resultados similares?
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        Descubre cómo BeyondCX puede transformar tu operación de atención al cliente
                    </p>
                    <button className="bg-white text-[#1e3a5f] font-bold py-4 px-10 rounded-lg text-lg hover:shadow-xl transition-all">
                        Solicitar Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
