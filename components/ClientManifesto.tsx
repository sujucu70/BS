import React from 'react';
import Accordion from './shared/Accordion';

const PersonaCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-[#e3e3e3] p-6 rounded-lg flex flex-col h-full">
        <h3 className="text-2xl font-bold text-[#6D84E3] text-center mb-4">{title}</h3>
        <div className="text-sm space-y-4 flex-grow">{children}</div>
    </div>
);

const advancedResearchGuide = [
    {
        title: 'Guía de Investigación Avanzada: Checklist Pre-Llamada',
        content: (
            <div className="text-sm text-gray-700 space-y-6">
                <p className="italic">Usa este protocolo para pasar de un 'cold call' a una conversación de valor. Dedica 15-20 minutos a esta investigación antes de contactar.</p>

                <div>
                    <h4 className="font-bold text-lg text-[#3F3F3F] mb-2">1. Investigación de la Empresa (Nivel Macro)</h4>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li><strong>Últimas Noticias:</strong> Busca en Google News el nombre de la empresa. ¿Han anunciado rondas de financiación, expansiones, nuevos productos o cambios directivos?</li>
                        <li><strong>Informe Anual / Resultados:</strong> Si es pública, revisa el último informe. Busca frases del CEO sobre "eficiencia", "experiencia de cliente" o "transformación digital".</li>
                        <li><strong>Ofertas de Empleo:</strong> Revisa su página de empleo o LinkedIn. ¿Buscan roles como 'Customer Experience Manager' o 'Jefe de Operaciones'? Esto indica un área de inversión y dolor.</li>
                        <li><strong>Modelo de Negocio:</strong> ¿Cómo ganan dinero? Entender esto te ayuda a alinear tu propuesta con sus KPIs de ingresos.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg text-[#3F3F3F] mb-2">2. Investigación de la Persona (Nivel Micro)</h4>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>
                            <strong>Perfil de LinkedIn:</strong>
                            <ul className="list-['-_'] list-inside space-y-1 pl-6 mt-1">
                                <li><strong>Actividad Reciente:</strong> ¿Ha publicado, comentado o compartido algo relevante? Menciónalo. <em>"Vi que compartiste un artículo sobre IA en CX..."</em></li>
                                <li><strong>Experiencia y Antigüedad:</strong> ¿Es nuevo en el cargo? (Probablemente quiera mostrar resultados rápidos). ¿Lleva mucho tiempo? (Puede estar abierto a innovar o ser resistente al cambio).</li>
                                <li><strong>Conexiones Comunes:</strong> ¿Tenemos a alguien en común que pueda hacer una introducción o darnos contexto?</li>
                            </ul>
                        </li>
                        <li><strong>Otras Redes Sociales (ej. Twitter):</strong> ¿Participa en conversaciones del sector? ¿Qué temas le interesan?</li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold text-lg text-[#3F3F3F] mb-2">3. Investigación del Mercado y Competencia (Nivel Contexto)</h4>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li><strong>Principales Competidores:</strong> ¿Quiénes son sus rivales? ¿Cómo se posicionan ellos en atención al cliente?</li>
                        <li><strong>Tendencias del Sector:</strong> Busca informes de consultoras (Gartner, Forrester) sobre su industria. ¿Cuáles son los principales desafíos en CX para su sector? (ej. 'la personalización en el retail').</li>
                        <li><strong>Regulación:</strong> ¿Hay cambios regulatorios que afecten a su forma de interactuar con clientes?</li>
                    </ul>
                </div>
            </div>
        )
    }
];

const ClientManifesto: React.FC = () => {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <header className="text-center py-12">
                <h1 className="text-4xl md:text-6xl font-bold text-[#000000]">Manifiesto del Cliente - BeyondCX</h1>
                <p className="text-xl md:text-2xl text-[#6D84E3] mt-4">Nuestro cliente ideal, donde encontrarlo, como cuantificarlo y que decirle</p>
            </header>

            <main>
                <section id="icp" className="mb-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Perfil de Cliente Ideal (ICP)</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">Criterios para identificar y cualificar una oportunidad de alto valor.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        <div className="bg-[#e3e3e3] p-6 rounded-lg"><h3 className="text-2xl font-bold text-[#3F3F3F] mb-4">Perfil Firmográfico</h3><ul className="space-y-3 text-[#3F3F3F] text-sm"><li><strong className="text-[#6D84E3]">Sectores Prioritarios:</strong> Sanidad Privada, Utilities, Telcos, Hospitalidad.</li><li><strong className="text-[#6D84E3]">Facturación Anual:</strong> <span className="font-bold">€10M - €30M</span> (Sweet Spot).</li><li><strong className="text-[#6D84E3]">Empleados:</strong> 50 - 500 personas.</li><li><strong className="text-[#6D84E3]">Volumen Interacción:</strong> ≥ 10,000 contactos/mes.</li><li><strong className="text-[#6D84E3]">Geografía:</strong> Foco en <span className="font-bold">España y Colombia</span>.</li></ul></div>
                        <div className="bg-[#e3e3e3] p-6 rounded-lg"><h3 className="text-2xl font-bold text-[#3F3F3F] mb-4">Madurez y Tecnología</h3><ul className="space-y-3 text-[#3F3F3F] text-sm"><li><strong className="text-[#6D84E3]">Situación Actual:</strong> CC interno (3-15 agentes) o BPO tradicional insatisfactorio.</li><li><strong className="text-[#6D84E3]">IVR/Chat:</strong> Usan sistemas tradicionales o chatbots básicos.</li><li><strong className="text-[#6D84E3]">CRM:</strong> Tienen CRM implementado (Salesforce, HubSpot, Zendesk).</li><li><strong className="text-[#6D84E3]">Métricas:</strong> Miden CSAT/NPS, pero con resultados estancados.</li><li><strong className="text-[#6D84E3]">Oportunidad:</strong> <span className="font-bold">NO tienen IA conversacional</span> avanzada.</li></ul></div>
                        <div className="bg-[#e3e3e3] p-6 rounded-lg"><h3 className="text-2xl font-bold text-[#3F3F3F] mb-4">Señales de Dolor (KPIs Críticos)</h3><div className="bg-red-50 border border-red-200 p-4 rounded-lg"><h4 className="font-bold text-red-700">🔴 Indicadores de Dolor Agudo</h4><ul className="list-disc list-inside mt-2 text-red-900 text-sm"><li>CSAT &lt; 75% o NPS &lt; 30</li><li>Tiempo Medio Espera &gt; 3 min</li><li>First Contact Resolution &lt; 60%</li><li>Abandono de Llamadas &gt; 15%</li><li>Coste por Contacto &gt; €8</li><li>Imposibilidad de atender 24/7</li></ul></div></div>
                    </div>
                </section>

                <section id="personas" className="mb-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                     <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Buyer Personas: Perfiles Psico-Profesionales</h2>
                     <p className="text-center text-lg text-[#6D84E3] mb-12">Adapta tu mensaje y tu prueba de valor a cada interlocutor.</p>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PersonaCard title="El Director de Operaciones (COO)">
                            <div>
                                <h4 className="font-bold text-[#3F3F3F]">Su Mundo:</h4>
                                <p>Obsesionado con la eficiencia, la escalabilidad y la reducción de costes. Gestiona el "motor" de la empresa. Su bono depende de la optimización de recursos.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#3F3F3F] mt-4">Qué le Importa (KPIs):</h4>
                                <ul className="list-disc list-inside">
                                    <li>Coste por Contacto</li>
                                    <li>First Contact Resolution (FCR)</li>
                                    <li>Productividad del Agente</li>
                                    <li>Escalabilidad de la Operación</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#3F3F3F] mt-4">Nuestro Ángulo:</h4>
                                <p className="font-bold text-[#6D84E3]">"Te damos una operación que escala con inteligencia, no con personas. Reducimos tu coste por contacto en un 30% mientras mejoramos el FCR."</p>
                            </div>
                        </PersonaCard>

                        <PersonaCard title="El Director Financiero (CFO)">
                             <div>
                                <h4 className="font-bold text-[#3F3F3F]">Su Mundo:</h4>
                                <p>Centrado en el ROI, la predictibilidad de los ingresos y el control de costes. Ve la empresa como un balance financiero. Prefiere OPEX a CAPEX.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#3F3F3F] mt-4">Qué le Importa (KPIs):</h4>
                                <ul className="list-disc list-inside">
                                    <li>Retorno de la Inversión (ROI)</li>
                                    <li>Coste Total de Propiedad (TCO)</li>
                                    <li>Predictibilidad del Gasto</li>
                                    <li>Impacto en el P&amp;L</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#3F3F3F] mt-4">Nuestro Ángulo:</h4>
                                <p className="font-bold text-[#6D84E3]">"Transformamos un centro de coste impredecible en una inversión OPEX con ROI medible. Nuestro modelo se autofinancia con los ahorros que genera."</p>
                            </div>
                        </PersonaCard>

                        <PersonaCard title="El Director de Cliente (CCO/CXO)">
                            <div>
                                <h4 className="font-bold text-[#3F3F3F]">Su Mundo:</h4>
                                <p>Su misión es proteger la marca y aumentar la lealtad del cliente. Vive y muere por las métricas de satisfacción. Es el "guardián de la experiencia".</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#3F3F3F] mt-4">Qué le Importa (KPIs):</h4>
                                <ul className="list-disc list-inside">
                                    <li>Net Promoter Score (NPS)</li>
                                    <li>Customer Satisfaction (CSAT)</li>
                                    <li>Tasa de Retención de Clientes</li>
                                    <li>Customer Lifetime Value (CLV)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#3F3F3F] mt-4">Nuestro Ángulo:</h4>
                                <p className="font-bold text-[#6D84E3]">"Elevamos tu NPS en +20 puntos en 6 meses. No solo resolvemos problemas, creamos experiencias memorables que fidelizan."</p>
                            </div>
                        </PersonaCard>
                     </div>
                </section>
                
                <section id="advanced-research" className="mb-16 bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-center text-[#000000] mb-2">Protocolo de Investigación Avanzada</h2>
                    <p className="text-center text-lg text-[#6D84E3] mb-12">Cómo preparar cada interacción para maximizar el valor.</p>
                    <Accordion items={advancedResearchGuide} />
                </section>

            </main>
            <footer className="text-center py-8 border-t border-gray-200 mt-8">
                <p className="text-xl font-medium text-gray-700">Conocer a tu cliente es el primer paso para ganar.</p>
            </footer>
        </div>
    );
};

export default ClientManifesto;