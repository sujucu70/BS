import React, { useState } from 'react';

interface EmailTemplate {
    id: string;
    title: string;
    category: 'Prospecting' | 'Follow-up' | 'Demo' | 'Proposal' | 'Negotiation' | 'Closing' | 'Post-Sale';
    situation: string;
    subject: string;
    body: string;
    variables: string[];
    tips: string[];
}

const EmailTemplates: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const templates: EmailTemplate[] = [
        {
            id: '1',
            title: 'Cold Outreach - Trigger Event',
            category: 'Prospecting',
            situation: 'Empresa target acaba de anunciar expansión/funding/nuevo producto',
            subject: 'Felicidades por {{TRIGGER_EVENT}}',
            body: `Hola {{FIRST_NAME}},

Vi que {{COMPANY}} acaba de {{TRIGGER_EVENT}} - ¡felicidades!

Trabajo con empresas como {{SIMILAR_COMPANY}} que están en fases similares de crecimiento, y un desafío común que enfrentan es gestionar el incremento exponencial de consultas de clientes sin comprometer la calidad del servicio.

¿Es algo que {{COMPANY}} está experimentando también?

Si tiene sentido, me encantaría compartir cómo {{SIMILAR_COMPANY}} logró escalar su operación de soporte un 300% sin aumentar headcount.

¿Tendría 15 minutos esta semana?

Saludos,
{{YOUR_NAME}}`,
            variables: ['{{FIRST_NAME}}', '{{COMPANY}}', '{{TRIGGER_EVENT}}', '{{SIMILAR_COMPANY}}', '{{YOUR_NAME}}'],
            tips: [
                'Investigar el trigger event específico (LinkedIn, prensa)',
                'Mencionar empresa similar del mismo sector',
                'Mantener email <100 palabras',
                'Una pregunta, no múltiples CTAs'
            ]
        },
        {
            id: '2',
            title: 'Inbound Lead - Immediate Follow-up',
            category: 'Follow-up',
            situation: 'Lead descargó whitepaper/ebook o solicitó demo',
            subject: 'Tu {{RESOURCE_NAME}} + próximo paso',
            body: `Hola {{FIRST_NAME}},

Gracias por descargar {{RESOURCE_NAME}}. Espero que encuentres insights valiosos.

Muchos de nuestros clientes que leyeron este recurso tenían preguntas sobre cómo aplicar estas estrategias en su contexto específico.

He preparado un breve video (2 min) mostrando cómo {{SIMILAR_COMPANY}} implementó estas ideas y logró {{SPECIFIC_RESULT}}: [LINK]

Si quieres explorar cómo podría funcionar para {{COMPANY}}, tengo disponibilidad el {{DAY_1}} a las {{TIME_1}} o {{DAY_2}} a las {{TIME_2}}.

¿Te viene bien alguno de estos horarios?

Saludos,
{{YOUR_NAME}}
{{TITLE}}
{{PHONE}}`,
            variables: ['{{FIRST_NAME}}', '{{RESOURCE_NAME}}', '{{SIMILAR_COMPANY}}', '{{SPECIFIC_RESULT}}', '{{COMPANY}}', '{{DAY_1}}', '{{TIME_1}}', '{{DAY_2}}', '{{TIME_2}}', '{{YOUR_NAME}}', '{{TITLE}}', '{{PHONE}}'],
            tips: [
                'Enviar dentro de 5 minutos de la descarga',
                'Video personalizado aumenta respuesta 3x',
                'Ofrecer horarios específicos, no "¿cuándo te viene bien?"',
                'Incluir teléfono para facilitar contacto'
            ]
        },
        {
            id: '3',
            title: 'Post-Discovery - Meeting Recap',
            category: 'Follow-up',
            situation: 'Después de primera llamada de discovery',
            subject: 'Recap: {{COMPANY}} - Próximos pasos',
            body: `Hola {{FIRST_NAME}},

Gracias por la conversación de hoy. Fue muy útil entender los desafíos que {{COMPANY}} está enfrentando con {{MAIN_PAIN_POINT}}.

**Lo que escuché:**
• Situación actual: {{CURRENT_STATE}}
• Principal desafío: {{MAIN_PAIN_POINT}}
• Impacto: {{BUSINESS_IMPACT}}
• Criterios de decisión: {{DECISION_CRITERIA}}

**Lo que propongo:**
Preparar una demo personalizada mostrando específicamente cómo BeyondCX puede:
1. {{SOLUTION_POINT_1}}
2. {{SOLUTION_POINT_2}}
3. {{SOLUTION_POINT_3}}

También incluiré un caso de éxito de {{SIMILAR_COMPANY}} que enfrentó desafíos similares.

**Próximos pasos:**
• Demo personalizada: {{DEMO_DATE}} a las {{DEMO_TIME}}
• Invitar a {{STAKEHOLDER_NAME}} ({{STAKEHOLDER_ROLE}})
• Preparar preguntas sobre {{SPECIFIC_TOPIC}}

¿Algo que deba ajustar o añadir?

Saludos,
{{YOUR_NAME}}`,
            variables: ['{{FIRST_NAME}}', '{{COMPANY}}', '{{MAIN_PAIN_POINT}}', '{{CURRENT_STATE}}', '{{BUSINESS_IMPACT}}', '{{DECISION_CRITERIA}}', '{{SOLUTION_POINT_1}}', '{{SOLUTION_POINT_2}}', '{{SOLUTION_POINT_3}}', '{{SIMILAR_COMPANY}}', '{{DEMO_DATE}}', '{{DEMO_TIME}}', '{{STAKEHOLDER_NAME}}', '{{STAKEHOLDER_ROLE}}', '{{SPECIFIC_TOPIC}}', '{{YOUR_NAME}}'],
            tips: [
                'Enviar dentro de 2 horas de la llamada',
                'Usar sus palabras exactas para pain points',
                'Confirmar entendimiento antes de proponer solución',
                'Identificar stakeholders faltantes'
            ]
        },
        {
            id: '4',
            title: 'Pre-Demo - Agenda & Preparation',
            category: 'Demo',
            situation: '24h antes de demo programada',
            subject: 'Mañana: Demo BeyondCX para {{COMPANY}} - Preparación',
            body: `Hola {{FIRST_NAME}},

Listo para nuestra demo mañana a las {{DEMO_TIME}}.

He personalizado la demo para enfocarnos en:
✓ {{FOCUS_AREA_1}}
✓ {{FOCUS_AREA_2}}
✓ {{FOCUS_AREA_3}}

**Agenda (45 min):**
• 5 min: Recap de discovery
• 25 min: Demo enfocada en tus prioridades
• 10 min: Q&A
• 5 min: Próximos pasos

**Para maximizar el valor:**
¿Podrías compartir:
• Ejemplo de {{SPECIFIC_DATA}} que usas actualmente
• ¿{{STAKEHOLDER}} podrá unirse? Sería valioso tener su perspectiva

Link Zoom: {{ZOOM_LINK}}

¿Alguna pregunta específica que quieras que cubramos?

Nos vemos mañana,
{{YOUR_NAME}}`,
            variables: ['{{FIRST_NAME}}', '{{COMPANY}}', '{{DEMO_TIME}}', '{{FOCUS_AREA_1}}', '{{FOCUS_AREA_2}}', '{{FOCUS_AREA_3}}', '{{SPECIFIC_DATA}}', '{{STAKEHOLDER}}', '{{ZOOM_LINK}}', '{{YOUR_NAME}}'],
            tips: [
                'Enviar 24h antes para dar tiempo de preparación',
                'Confirmar asistentes clave',
                'Pedir datos/ejemplos para personalizar más',
                'Incluir link de Zoom por si lo perdieron'
            ]
        },
        {
            id: '5',
            title: 'Post-Demo - Follow-up with Proposal',
            category: 'Proposal',
            situation: 'Después de demo exitosa, enviando propuesta',
            subject: 'Propuesta BeyondCX para {{COMPANY}}',
            body: `Hola {{FIRST_NAME}},

Gracias por la excelente sesión de ayer. Me alegra que el enfoque en {{KEY_FEATURE}} resonara con tus necesidades.

Adjunto encontrarás la propuesta personalizada para {{COMPANY}}, que incluye:

**Solución propuesta:**
• {{SOLUTION_COMPONENT_1}}
• {{SOLUTION_COMPONENT_2}}
• {{SOLUTION_COMPONENT_3}}

**Inversión:** {{PRICING_SUMMARY}}

**ROI proyectado:**
• Ahorro anual: {{ANNUAL_SAVINGS}}
• Payback: {{PAYBACK_MONTHS}} meses
• Mejora CSAT: +{{CSAT_IMPROVEMENT}} puntos

**Próximos pasos sugeridos:**
1. Revisar propuesta con {{STAKEHOLDER_1}} y {{STAKEHOLDER_2}}
2. POC de 2 semanas (opcional): {{POC_DATES}}
3. Decisión objetivo: {{TARGET_DECISION_DATE}}

¿Tiene sentido agendar 30 min la próxima semana para revisar juntos y responder preguntas?

Propongo {{DAY_1}} a las {{TIME_1}} o {{DAY_2}} a las {{TIME_2}}.

Saludos,
{{YOUR_NAME}}

P.D. También adjunto el caso de éxito de {{SIMILAR_COMPANY}} que mencionaste te interesaba.`,
            variables: ['{{FIRST_NAME}}', '{{COMPANY}}', '{{KEY_FEATURE}}', '{{SOLUTION_COMPONENT_1}}', '{{SOLUTION_COMPONENT_2}}', '{{SOLUTION_COMPONENT_3}}', '{{PRICING_SUMMARY}}', '{{ANNUAL_SAVINGS}}', '{{PAYBACK_MONTHS}}', '{{CSAT_IMPROVEMENT}}', '{{STAKEHOLDER_1}}', '{{STAKEHOLDER_2}}', '{{POC_DATES}}', '{{TARGET_DECISION_DATE}}', '{{DAY_1}}', '{{TIME_1}}', '{{DAY_2}}', '{{TIME_2}}', '{{YOUR_NAME}}', '{{SIMILAR_COMPANY}}'],
            tips: [
                'Enviar propuesta dentro de 24h de la demo',
                'Incluir ROI específico calculado con sus números',
                'Proponer timeline claro',
                'Ofrecer POC si hay dudas sobre fit técnico'
            ]
        },
        {
            id: '6',
            title: 'Objection Handling - Price',
            category: 'Negotiation',
            situation: 'Prospect dice que el precio es alto',
            subject: 'Re: Propuesta BeyondCX - Análisis de inversión',
            body: `Hola {{FIRST_NAME}},

Entiendo tu preocupación sobre la inversión. Es una decisión importante.

Déjame ponerlo en perspectiva con los números que compartiste:

**Tu situación actual:**
• {{CURRENT_COST_METRIC}}: {{CURRENT_VALUE}}
• Coste anual: {{CURRENT_ANNUAL_COST}}

**Con BeyondCX:**
• Inversión anual: {{BEYONDCX_ANNUAL_COST}}
• Ahorro neto año 1: {{NET_SAVINGS}}
• Ahorro neto año 2-3: {{NET_SAVINGS_Y2_Y3}}

**Más allá del ahorro directo:**
• Reducción de churn: {{CHURN_IMPACT}}
• Mejora en NPS: {{NPS_IMPACT}}
• Capacidad de escalar sin headcount

La pregunta real es: ¿cuánto te está costando NO resolver {{MAIN_PAIN_POINT}}?

Si el ROI tiene sentido pero el presupuesto es el obstáculo, podemos explorar:
• Implementación por fases
• Modelo de pago basado en resultados
• Financiación

¿Cuál de estas opciones te ayudaría a avanzar?

Saludos,
{{YOUR_NAME}}`,
            variables: ['{{FIRST_NAME}}', '{{CURRENT_COST_METRIC}}', '{{CURRENT_VALUE}}', '{{CURRENT_ANNUAL_COST}}', '{{BEYONDCX_ANNUAL_COST}}', '{{NET_SAVINGS}}', '{{NET_SAVINGS_Y2_Y3}}', '{{CHURN_IMPACT}}', '{{NPS_IMPACT}}', '{{MAIN_PAIN_POINT}}', '{{YOUR_NAME}}'],
            tips: [
                'No defender el precio, reencuadrar como inversión',
                'Usar sus propios números',
                'Cuantificar el coste de inacción',
                'Ofrecer alternativas de pago si ROI es claro'
            ]
        },
        {
            id: '7',
            title: 'Closing - Final Push',
            category: 'Closing',
            situation: 'Cerca del cierre pero necesitan último empujón',
            subject: '{{COMPANY}} + BeyondCX - ¿Listos para empezar?',
            body: `Hola {{FIRST_NAME}},

Hemos cubierto mucho terreno juntos:
✓ Discovery y alineación en pain points
✓ Demo personalizada
✓ Propuesta con ROI claro: {{ROI_SUMMARY}}
✓ Validación técnica con {{TECHNICAL_STAKEHOLDER}}

Todo está listo para arrancar. Solo falta tu confirmación.

**Si firmamos esta semana:**
• Kick-off: {{KICKOFF_DATE}}
• Go-live: {{GOLIVE_DATE}}
• Resultados medibles: {{RESULTS_DATE}}

Esto significa que para {{TARGET_QUARTER}} estarás viendo:
• {{BENEFIT_1}}
• {{BENEFIT_2}}
• {{BENEFIT_3}}

Cada semana que esperamos es una semana más de {{PAIN_POINT_COST}}.

¿Qué necesitas para tomar la decisión esta semana?

Estoy disponible hoy a las {{TIME_1}} o mañana a las {{TIME_2}} para una llamada rápida y cerrar cualquier duda final.

¿Te viene bien?

Saludos,
{{YOUR_NAME}}`,
            variables: ['{{FIRST_NAME}}', '{{COMPANY}}', '{{ROI_SUMMARY}}', '{{TECHNICAL_STAKEHOLDER}}', '{{KICKOFF_DATE}}', '{{GOLIVE_DATE}}', '{{RESULTS_DATE}}', '{{TARGET_QUARTER}}', '{{BENEFIT_1}}', '{{BENEFIT_2}}', '{{BENEFIT_3}}', '{{PAIN_POINT_COST}}', '{{TIME_1}}', '{{TIME_2}}', '{{YOUR_NAME}}'],
            tips: [
                'Crear urgencia con timeline específico',
                'Resumir todo el valor demostrado',
                'Cuantificar coste de esperar',
                'Preguntar directamente qué falta'
            ]
        },
        {
            id: '8',
            title: 'Post-Sale - Onboarding Kickoff',
            category: 'Post-Sale',
            situation: 'Contrato firmado, iniciando onboarding',
            subject: '¡Bienvenido a BeyondCX! - Próximos pasos',
            body: `Hola {{FIRST_NAME}},

¡Bienvenido oficialmente a la familia BeyondCX! 🎉

Estamos emocionados de ayudar a {{COMPANY}} a {{MAIN_OBJECTIVE}}.

**Tu equipo dedicado:**
• Implementation Manager: {{IM_NAME}} ({{IM_EMAIL}})
• Customer Success Manager: {{CSM_NAME}} ({{CSM_EMAIL}})
• Technical Lead: {{TECH_NAME}} ({{TECH_EMAIL}})

**Roadmap de implementación:**
📅 Semana 1-2: Discovery técnica y configuración
📅 Semana 3-4: Integración y testing
📅 Semana 5-6: Training y go-live
📅 Semana 7-8: Optimización y ajustes

**Próximos pasos inmediatos:**
1. Kickoff call: {{KICKOFF_DATE}} a las {{KICKOFF_TIME}}
2. Completar cuestionario técnico: [LINK]
3. Preparar accesos a sistemas: {{SYSTEMS_LIST}}

{{IM_NAME}} te contactará mañana para coordinar detalles.

¡Gracias por confiar en nosotros!

{{YOUR_NAME}}

P.D. Cualquier duda, estoy aquí. Pero {{IM_NAME}} será tu punto de contacto principal para la implementación.`,
            variables: ['{{FIRST_NAME}}', '{{COMPANY}}', '{{MAIN_OBJECTIVE}}', '{{IM_NAME}}', '{{IM_EMAIL}}', '{{CSM_NAME}}', '{{CSM_EMAIL}}', '{{TECH_NAME}}', '{{TECH_EMAIL}}', '{{KICKOFF_DATE}}', '{{KICKOFF_TIME}}', '{{SYSTEMS_LIST}}', '{{YOUR_NAME}}'],
            tips: [
                'Enviar inmediatamente después de firma',
                'Presentar equipo completo con contactos',
                'Timeline claro y realista',
                'Transición suave a implementation team'
            ]
        }
    ];

    // Add 7 more template placeholders
    const templatePlaceholders: EmailTemplate[] = [
        { id: '9', title: 'Breakup Email - Last Attempt', category: 'Prospecting', situation: '[Definir]', subject: '[Definir]', body: '[Template pendiente]', variables: [], tips: [] },
        { id: '10', title: 'Re-engagement - Dormant Lead', category: 'Follow-up', situation: '[Definir]', subject: '[Definir]', body: '[Template pendiente]', variables: [], tips: [] },
        { id: '11', title: 'Multi-threading - Reaching Executive', category: 'Follow-up', situation: '[Definir]', subject: '[Definir]', body: '[Template pendiente]', variables: [], tips: [] },
        { id: '12', title: 'Competitive Comparison', category: 'Negotiation', situation: '[Definir]', subject: '[Definir]', body: '[Template pendiente]', variables: [], tips: [] },
        { id: '13', title: 'Stalled Deal - Revival', category: 'Negotiation', situation: '[Definir]', subject: '[Definir]', body: '[Template pendiente]', variables: [], tips: [] },
        { id: '14', title: 'Upsell Opportunity', category: 'Post-Sale', situation: '[Definir]', subject: '[Definir]', body: '[Template pendiente]', variables: [], tips: [] },
        { id: '15', title: 'Renewal Reminder', category: 'Post-Sale', situation: '[Definir]', subject: '[Definir]', body: '[Template pendiente]', variables: [], tips: [] }
    ];

    const allTemplates = [...templates, ...templatePlaceholders];

    const categories = ['all', 'Prospecting', 'Follow-up', 'Demo', 'Proposal', 'Negotiation', 'Closing', 'Post-Sale'];

    const filteredTemplates = selectedCategory === 'all'
        ? allTemplates
        : allTemplates.filter(t => t.category === selectedCategory);

    const copyToClipboard = (template: EmailTemplate) => {
        const text = `Subject: ${template.subject}\n\n${template.body}`;
        navigator.clipboard.writeText(text);
        setCopiedId(template.id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f8f9fa] min-h-screen">
            <header className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                    Email Templates Library
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Templates probados para cada etapa del ciclo de ventas
                </p>
            </header>

            {/* Category Filter */}
            <div className="flex justify-center mb-12 overflow-x-auto">
                <div className="bg-white rounded-lg shadow-sm p-2 inline-flex gap-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                                selectedCategory === category
                                    ? 'bg-[#1e3a5f] text-white shadow-sm'
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {category === 'all' ? 'Todos' : category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Templates Grid */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((template) => (
                    <div
                        key={template.id}
                        onClick={() => setSelectedTemplate(template)}
                        className="bg-white rounded-lg shadow-md border border-gray-200 p-6 cursor-pointer hover:shadow-lg hover:border-[#1e3a5f] transition-all"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                                {template.category}
                            </span>
                            {template.body !== '[Template pendiente]' && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        copyToClipboard(template);
                                    }}
                                    className="text-gray-400 hover:text-[#1e3a5f] transition-colors"
                                    title="Copiar"
                                >
                                    {copiedId === template.id ? (
                                        <span className="text-green-600 text-xs font-semibold">✓ Copiado</span>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                        </svg>
                                    )}
                                </button>
                            )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                            {template.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                            {template.situation}
                        </p>
                        {template.body !== '[Template pendiente]' ? (
                            <div className="text-xs text-gray-500">
                                <strong>Subject:</strong> {template.subject}
                            </div>
                        ) : (
                            <div className="text-xs text-yellow-600 bg-yellow-50 p-2 rounded">
                                📝 Template pendiente de completar
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Template Detail Modal */}
            {selectedTemplate && selectedTemplate.body !== '[Template pendiente]' && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    onClick={() => setSelectedTemplate(null)}
                >
                    <div
                        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white p-6 rounded-t-xl">
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                                        {selectedTemplate.category}
                                    </span>
                                    <h2 className="text-2xl font-bold" style={{fontFamily: 'Playfair Display, serif'}}>
                                        {selectedTemplate.title}
                                    </h2>
                                    <p className="text-sm opacity-90 mt-2">{selectedTemplate.situation}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedTemplate(null)}
                                    className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {/* Subject */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject Line</label>
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono text-sm">
                                    {selectedTemplate.subject}
                                </div>
                            </div>

                            {/* Body */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Body</label>
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                                    {selectedTemplate.body}
                                </div>
                            </div>

                            {/* Variables */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">Variables a Personalizar</label>
                                <div className="flex flex-wrap gap-2">
                                    {selectedTemplate.variables.map((variable, idx) => (
                                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-mono">
                                            {variable}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tips */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">Tips de Uso</label>
                                <ul className="space-y-2">
                                    {selectedTemplate.tips.map((tip, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                            <span className="text-green-600 mt-0.5">✓</span>
                                            <span>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4">
                                <button
                                    onClick={() => copyToClipboard(selectedTemplate)}
                                    className="flex-1 bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                                >
                                    {copiedId === selectedTemplate.id ? (
                                        <>
                                            <span>✓</span>
                                            <span>Copiado</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                            </svg>
                                            <span>Copiar Template</span>
                                        </>
                                    )}
                                </button>
                                <button
                                    onClick={() => setSelectedTemplate(null)}
                                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Usage Guide */}
            <div className="mt-16 bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
                    Cómo Usar Estos Templates
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="bg-[#1e3a5f] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                            1
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">Personaliza</h3>
                        <p className="text-sm text-gray-600">Reemplaza todas las variables {{}} con información específica del prospect</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#1e3a5f] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                            2
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">Adapta</h3>
                        <p className="text-sm text-gray-600">Ajusta el tono y contenido según tu estilo y la situación específica</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#1e3a5f] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                            3
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">Mide</h3>
                        <p className="text-sm text-gray-600">Trackea tasas de respuesta y ajusta templates según resultados</p>
                    </div>
                </div>
                <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-gray-700">
                        <strong>⚠️ Importante:</strong> Estos templates son puntos de partida. La personalización genuina basada en research es crítica para el éxito. Nunca envíes un email sin personalizar las variables y adaptar el contenido.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmailTemplates;
