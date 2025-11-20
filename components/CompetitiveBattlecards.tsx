import React, { useState } from 'react';

interface Competitor {
    id: string;
    name: string;
    logo: string;
    positioning: string;
    strengths: string[];
    weaknesses: string[];
    pricing: {
        model: string;
        range: string;
        notes: string;
    };
    targetCustomer: string;
    killerQuestions: string[];
    winStrategies: string[];
    lossPatterns: string[];
    differentiators: {
        feature: string;
        us: string;
        them: string;
        impact: 'high' | 'medium' | 'low';
    }[];
}

const CompetitiveBattlecards: React.FC = () => {
    const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor | null>(null);

    const competitors: Competitor[] = [
        {
            id: '1',
            name: 'Competitor A - Legacy Contact Center',
            logo: '🏢',
            positioning: 'Proveedor tradicional de contact center con soluciones on-premise y cloud híbrido',
            strengths: [
                'Marca establecida con 20+ años en el mercado',
                'Amplia base de clientes enterprise',
                'Integraciones con sistemas legacy',
                'Soporte 24/7 en múltiples idiomas',
                'Capacidades omnicanal maduras'
            ],
            weaknesses: [
                'Tecnología legacy, arquitectura monolítica',
                'Implementaciones largas (6-12 meses)',
                'Costes ocultos (licencias, mantenimiento, upgrades)',
                'IA limitada, principalmente rule-based',
                'Interfaz de usuario anticuada',
                'Vendor lock-in con contratos plurianuales'
            ],
            pricing: {
                model: 'Licencia perpetua + mantenimiento anual',
                range: '€150-300K implementación + €50-100K/año mantenimiento',
                notes: 'Costes adicionales por módulos, usuarios concurrentes, y customizaciones'
            },
            targetCustomer: 'Grandes empresas (>1000 empleados) con contact centers complejos y requisitos de compliance estrictos',
            killerQuestions: [
                '¿Cuánto tiempo tomó su última implementación? ¿Cumplieron el timeline inicial?',
                '¿Qué porcentaje de sus llamadas se resuelven automáticamente sin intervención humana?',
                '¿Cuánto les cuesta cada upgrade o nueva funcionalidad?',
                '¿Qué tan rápido pueden implementar cambios en los flujos conversacionales?',
                '¿Su solución actual puede escalar automáticamente en picos de demanda?',
                '¿Cuántos FTEs dedican a mantener y administrar la plataforma?'
            ],
            winStrategies: [
                'Enfatizar time-to-value: 4-6 semanas vs 6-12 meses',
                'Demostrar IA conversacional real vs reglas estáticas',
                'Modelo de pricing transparente y predecible',
                'Agilidad: cambios en minutos vs semanas',
                'TCO 40-60% menor en 3 años',
                'Casos de éxito de migraciones desde legacy'
            ],
            lossPatterns: [
                'Cliente tiene inversión masiva en infraestructura legacy',
                'Requerimientos de compliance muy específicos (financiero, salud)',
                'Necesidad de on-premise por políticas internas',
                'Resistencia al cambio del equipo IT',
                'Contrato plurianual vigente con penalizaciones altas'
            ],
            differentiators: [
                {
                    feature: 'Time to Value',
                    us: '4-6 semanas',
                    them: '6-12 meses',
                    impact: 'high'
                },
                {
                    feature: 'IA Conversacional',
                    us: 'NLU avanzado, aprendizaje continuo',
                    them: 'Rule-based, árboles de decisión',
                    impact: 'high'
                },
                {
                    feature: 'Modelo de Pricing',
                    us: 'SaaS transparente, pago por uso',
                    them: 'Licencias + mantenimiento + extras',
                    impact: 'high'
                },
                {
                    feature: 'Agilidad de Cambios',
                    us: 'Minutos (no-code)',
                    them: 'Semanas (requiere IT)',
                    impact: 'medium'
                },
                {
                    feature: 'Escalabilidad',
                    us: 'Automática, ilimitada',
                    them: 'Manual, limitada por licencias',
                    impact: 'medium'
                }
            ]
        },
        {
            id: '2',
            name: 'Competitor B - Chatbot Platform',
            logo: '🤖',
            positioning: 'Plataforma de chatbots y automatización conversacional',
            strengths: [
                'Interfaz no-code intuitiva',
                'Rápida implementación (2-4 semanas)',
                'Pricing accesible para SMB',
                'Integraciones pre-built con CRMs populares',
                'Comunidad activa y marketplace de templates'
            ],
            weaknesses: [
                'Limitado a texto, voz no nativa',
                'IA superficial, alta tasa de fallback a humano',
                'No diseñado para contact centers complejos',
                'Reporting y analytics básicos',
                'Escalabilidad limitada (>100K conversaciones/mes)',
                'Soporte limitado, principalmente self-service'
            ],
            pricing: {
                model: 'SaaS por conversación',
                range: '€0.02-0.10 por conversación',
                notes: 'Costes escalan rápidamente con volumen. Límites en features avanzados.'
            },
            targetCustomer: 'SMB y startups con volúmenes bajos-medios (<50K conversaciones/mes)',
            killerQuestions: [
                '¿Qué porcentaje de conversaciones requieren escalamiento a humano?',
                '¿Cómo manejan conversaciones complejas multi-turn?',
                '¿Su chatbot puede gestionar llamadas de voz, no solo texto?',
                '¿Qué pasa cuando el volumen crece 10x? ¿El coste escala linealmente?',
                '¿Tienen capacidades de análisis de sentimiento y calidad de conversaciones?',
                '¿Cómo integran con sistemas enterprise (SAP, Oracle, etc.)?'
            ],
            winStrategies: [
                'Demostrar capacidades de voz nativas',
                'Enfatizar IA avanzada con menor fallback rate',
                'Mostrar analytics y reporting enterprise-grade',
                'Pricing más predecible a escala',
                'Casos de uso complejos (no solo FAQ)',
                'Soporte dedicado y SLAs enterprise'
            ],
            lossPatterns: [
                'Cliente solo necesita chatbot simple de FAQ',
                'Presupuesto muy limitado (<€500/mes)',
                'No tienen volumen suficiente para justificar nuestra solución',
                'Equipo técnico prefiere DIY con herramientas no-code'
            ],
            differentiators: [
                {
                    feature: 'Canales',
                    us: 'Voz + texto nativos',
                    them: 'Principalmente texto',
                    impact: 'high'
                },
                {
                    feature: 'Tasa de Resolución',
                    us: '70-85% automatizada',
                    them: '40-60% automatizada',
                    impact: 'high'
                },
                {
                    feature: 'Complejidad',
                    us: 'Multi-turn, contextual',
                    them: 'Simple, FAQ-style',
                    impact: 'high'
                },
                {
                    feature: 'Analytics',
                    us: 'Enterprise-grade, BI integrado',
                    them: 'Básico, dashboards simples',
                    impact: 'medium'
                },
                {
                    feature: 'Escalabilidad',
                    us: 'Millones de conversaciones',
                    them: 'Limitado a <100K/mes',
                    impact: 'medium'
                }
            ]
        },
        {
            id: '3',
            name: 'Competitor C - [Template]',
            logo: '🏷️',
            positioning: '[Definir posicionamiento del competidor]',
            strengths: [
                '[Fortaleza 1]',
                '[Fortaleza 2]',
                '[Fortaleza 3]'
            ],
            weaknesses: [
                '[Debilidad 1]',
                '[Debilidad 2]',
                '[Debilidad 3]'
            ],
            pricing: {
                model: '[Modelo de pricing]',
                range: '[Rango de precios]',
                notes: '[Notas adicionales]'
            },
            targetCustomer: '[Definir cliente ideal del competidor]',
            killerQuestions: [
                '[Pregunta 1]',
                '[Pregunta 2]',
                '[Pregunta 3]'
            ],
            winStrategies: [
                '[Estrategia 1]',
                '[Estrategia 2]',
                '[Estrategia 3]'
            ],
            lossPatterns: [
                '[Patrón de pérdida 1]',
                '[Patrón de pérdida 2]'
            ],
            differentiators: []
        }
    ];

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f8f9fa] min-h-screen">
            <header className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                    Competitive Battlecards
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Inteligencia competitiva para ganar deals contra cualquier competidor
                </p>
            </header>

            {/* Competitors Grid */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
                {competitors.map((competitor) => (
                    <div
                        key={competitor.id}
                        onClick={() => setSelectedCompetitor(competitor)}
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6 cursor-pointer hover:shadow-lg hover:border-[#1e3a5f] transition-all text-center"
                    >
                        <div className="text-6xl mb-4">{competitor.logo}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                            {competitor.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            {competitor.positioning}
                        </p>
                        <button className="bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white font-semibold py-2 px-6 rounded-lg transition-all text-sm">
                            Ver Battlecard
                        </button>
                    </div>
                ))}
            </div>

            {/* Battlecard Detail */}
            {selectedCompetitor && (
                <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-12">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white p-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="text-5xl">{selectedCompetitor.logo}</div>
                                <div>
                                    <h2 className="text-3xl font-bold mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                                        {selectedCompetitor.name}
                                    </h2>
                                    <p className="opacity-90">{selectedCompetitor.positioning}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedCompetitor(null)}
                                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="p-8 space-y-8">
                        {/* SWOT Analysis */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Strengths */}
                            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                                    <span>💪</span> Fortalezas
                                </h3>
                                <ul className="space-y-2">
                                    {selectedCompetitor.strengths.map((strength, idx) => (
                                        <li key={idx} className="text-sm text-green-800 flex items-start gap-2">
                                            <span className="text-green-600 mt-0.5">+</span>
                                            <span>{strength}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Weaknesses */}
                            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                                    <span>⚠️</span> Debilidades
                                </h3>
                                <ul className="space-y-2">
                                    {selectedCompetitor.weaknesses.map((weakness, idx) => (
                                        <li key={idx} className="text-sm text-red-800 flex items-start gap-2">
                                            <span className="text-red-600 mt-0.5">−</span>
                                            <span>{weakness}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                                <span>💰</span> Pricing
                            </h3>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <div>
                                    <div className="font-semibold text-blue-800 mb-1">Modelo</div>
                                    <div className="text-blue-700">{selectedCompetitor.pricing.model}</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-blue-800 mb-1">Rango</div>
                                    <div className="text-blue-700">{selectedCompetitor.pricing.range}</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-blue-800 mb-1">Notas</div>
                                    <div className="text-blue-700">{selectedCompetitor.pricing.notes}</div>
                                </div>
                            </div>
                        </div>

                        {/* Target Customer */}
                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                            <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
                                <span>🎯</span> Cliente Ideal
                            </h3>
                            <p className="text-sm text-purple-800">{selectedCompetitor.targetCustomer}</p>
                        </div>

                        {/* Killer Questions */}
                        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                            <h3 className="text-lg font-bold text-yellow-900 mb-4 flex items-center gap-2">
                                <span>❓</span> Killer Questions
                            </h3>
                            <p className="text-xs text-yellow-700 mb-4">Preguntas para exponer debilidades del competidor durante discovery</p>
                            <ul className="space-y-3">
                                {selectedCompetitor.killerQuestions.map((question, idx) => (
                                    <li key={idx} className="text-sm text-yellow-900 flex items-start gap-3 bg-white p-3 rounded">
                                        <span className="font-bold text-yellow-700 flex-shrink-0">Q{idx + 1}</span>
                                        <span>{question}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Win Strategies */}
                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                            <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                                <span>🏆</span> Estrategias para Ganar
                            </h3>
                            <ul className="space-y-2">
                                {selectedCompetitor.winStrategies.map((strategy, idx) => (
                                    <li key={idx} className="text-sm text-green-800 flex items-start gap-2">
                                        <span className="text-green-600 mt-0.5">✓</span>
                                        <span>{strategy}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Loss Patterns */}
                        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                            <h3 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
                                <span>⚡</span> Patrones de Pérdida
                            </h3>
                            <p className="text-xs text-orange-700 mb-4">Situaciones donde típicamente perdemos contra este competidor</p>
                            <ul className="space-y-2">
                                {selectedCompetitor.lossPatterns.map((pattern, idx) => (
                                    <li key={idx} className="text-sm text-orange-800 flex items-start gap-2">
                                        <span className="text-orange-600 mt-0.5">!</span>
                                        <span>{pattern}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Differentiators Table */}
                        {selectedCompetitor.differentiators.length > 0 && (
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <span>⚖️</span> Comparativa de Diferenciadores
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b-2 border-gray-200 bg-gray-50">
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Feature</th>
                                                <th className="text-left py-3 px-4 font-semibold text-green-700">BeyondCX</th>
                                                <th className="text-left py-3 px-4 font-semibold text-red-700">{selectedCompetitor.name}</th>
                                                <th className="text-center py-3 px-4 font-semibold text-gray-700">Impacto</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedCompetitor.differentiators.map((diff, idx) => (
                                                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-3 px-4 font-medium text-gray-900">{diff.feature}</td>
                                                    <td className="py-3 px-4 text-green-700">{diff.us}</td>
                                                    <td className="py-3 px-4 text-red-700">{diff.them}</td>
                                                    <td className="py-3 px-4 text-center">
                                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                                            diff.impact === 'high' ? 'bg-red-100 text-red-800' :
                                                            diff.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-gray-100 text-gray-800'
                                                        }`}>
                                                            {diff.impact.toUpperCase()}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Usage Guide */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
                    Cómo Usar las Battlecards
                </h2>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                        <div className="text-3xl mb-2">1️⃣</div>
                        <h3 className="font-bold text-gray-800 mb-2 text-sm">Research</h3>
                        <p className="text-xs text-gray-600">Identifica qué competidor está evaluando el prospect</p>
                    </div>
                    <div>
                        <div className="text-3xl mb-2">2️⃣</div>
                        <h3 className="font-bold text-gray-800 mb-2 text-sm">Killer Questions</h3>
                        <p className="text-xs text-gray-600">Usa las preguntas en discovery para exponer gaps</p>
                    </div>
                    <div>
                        <div className="text-3xl mb-2">3️⃣</div>
                        <h3 className="font-bold text-gray-800 mb-2 text-sm">Posiciona</h3>
                        <p className="text-xs text-gray-600">Enfatiza diferenciadores de alto impacto</p>
                    </div>
                    <div>
                        <div className="text-3xl mb-2">4️⃣</div>
                        <h3 className="font-bold text-gray-800 mb-2 text-sm">Anticipa</h3>
                        <p className="text-xs text-gray-600">Conoce patrones de pérdida y mitiga riesgos</p>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-700">
                        <strong>💡 Pro Tip:</strong> Nunca hables mal del competidor directamente. Usa las killer questions para que el prospect descubra las limitaciones por sí mismo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CompetitiveBattlecards;
