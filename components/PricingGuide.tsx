
import React from 'react';

const PricingGuide: React.FC = () => {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <header className="text-center py-12">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight">El Valor y el Precio</h1>
                <p className="text-xl md:text-2xl text-[#6D84E3] mt-4 font-light">Cómo Comunicamos el Valor y Justificamos la Inversión</p>
            </header>

            <main>
                <section id="philosophy" className="mb-16 bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Nuestra Filosofía de Pricing</h2>
                    <p className="text-center text-lg text-gray-500 font-light mb-8">Nunca lideramos con el precio. Lideramos con el valor.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div><h3 className="text-xl font-bold text-[#6D84E3]">1. Valor Antes que Precio</h3><p className="mt-2 text-gray-600 font-light">El precio es irrelevante sin un contexto de valor. Nuestra primera misión es cuantificar el coste del problema del cliente.</p></div>
                        <div><h3 className="text-xl font-bold text-[#6D84E3]">2. Vendemos ROI, no Horas</h3><p className="mt-2 text-gray-600 font-light">No vendemos un centro de costes. Vendemos un motor de ingresos y eficiencia. Cada propuesta debe tener un ROI claro.</p></div>
                        <div><h3 className="text-xl font-bold text-[#6D84E3]">3. El Precio es una Conversación</h3><p className="mt-2 text-gray-600 font-light">No enviamos listas de precios. Presentamos el precio como la inversión lógica después de haber construido juntos el business case.</p></div>
                    </div>
                </section>

                <section id="framework" className="mb-16 bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Framework de 4 Pasos para la Conversación de Pricing</h2>
                    <div className="space-y-6">
                        <div className="bg-[#e3e3e3] p-6 rounded-lg">
                            <h3 className="font-bold text-xl text-gray-800">Paso 1: Anclar en el Dolor (Discovery)</h3>
                            <p className="mt-2 text-gray-600">Usando las preguntas MEDDICC, identifica el dolor más agudo. Ejemplo: "Entiendo que vuestro principal problema es un FCR por debajo del 60%..."</p>
                        </div>
                        <div className="bg-[#e3e3e3] p-6 rounded-lg">
                            <h3 className="font-bold text-xl text-gray-800">Paso 2: Cuantificar el Costo de la Inacción (The "Why Now")</h3>
                            <p className="mt-2 text-gray-600">Traduce el dolor a euros. "Si cada punto de FCR que no se resuelve requiere una segunda llamada con un coste de 8€, y tenéis 10,000 llamadas al mes, un FCR bajo os está costando más de 15.000€ mensuales. ¿Te parece correcto?"</p>
                        </div>
                        <div className="bg-[#e3e3e3] p-6 rounded-lg">
                            <h3 className="font-bold text-xl text-gray-800">Paso 3: Presentar la Solución como el Puente al ROI</h3>
                            <p className="mt-2 text-gray-600">"Nuestra solución está diseñada para llevar ese FCR al 85% en los primeros 90 días, lo que no solo eliminaría ese coste de 15.000€, sino que generaría un impacto positivo en el CSAT de +20 puntos."</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-bold text-xl text-green-800">Paso 4: Presentar el Precio como una Inversión Lógica</h3>
                            <p className="mt-2 text-green-700">"Para lograr este resultado, la inversión es de [Precio]. Como ves, se autofinancia en menos de [X] meses y a partir de ahí es pura ganancia para vosotros. ¿Tiene sentido?"</p>
                        </div>
                    </div>
                </section>
                
                <section id="scenarios" className="mb-16 bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Componentes y Escenarios de Pricing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Nuestro Modelo de Precios</h3>
                            <p className="text-gray-600 mb-4">Nuestro precio se compone de dos partes, asegurando que nuestro éxito esté alineado con el tuyo:</p>
                            <ul className="space-y-4">
                                <li className="bg-[#e3e3e3] p-4 rounded-md"><p className="font-bold">1. Cuota de Plataforma (Suscripción Fija)</p><p className="text-sm text-gray-600">Cubre el acceso a nuestro ecosistema tecnológico, la inteligencia, el soporte y la mejora continua. Es un coste predecible.</p></li>
                                <li className="bg-[#e3e3e3] p-4 rounded-md"><p className="font-bold">2. Cuota de Éxito (Variable)</p><p className="text-sm text-gray-600">Ligada a un KPI de negocio. Puede ser por interacción resuelta, por cita agendada, por pedido procesado, etc. Si tú no tienes resultados, nosotros tampoco.</p></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Escenarios de Pricing Típicos</h3>
                            <p className="text-gray-600 mb-4">(Estos son ejemplos para guiarte. Cada propuesta es personalizada).</p>
                            <div className="border-t pt-4"><p className="font-bold">Sweet Spot (Sanidad Privada, 15k interacciones/mes)</p><ul className="text-sm text-gray-600 list-disc list-inside"><li><strong>Solución:</strong> Beyond-Booking + Beyond-IVR.</li><li><strong>Cuota Plataforma:</strong> ~€2,500 / mes.</li><li><strong>Cuota Éxito:</strong> ~€0.80 / interacción resuelta.</li><li><strong>MRR Estimado:</strong> €8,000 - €12,000.</li></ul></div>
                            <div className="border-t pt-4 mt-4"><p className="font-bold">BPO 2.0 Completo (Utilities, 50k interacciones/mes)</p><ul className="text-sm text-gray-600 list-disc list-inside"><li><strong>Solución:</strong> Servicio gestionado completo.</li><li><strong>Cuota Plataforma:</strong> ~€5,000 / mes.</li><li><strong>Cuota Éxito:</strong> Modelo por niveles.</li><li><strong>MRR Estimado:</strong> >€25,000.</li></ul></div>
                        </div>
                    </div>
                </section>

                <section id="negotiation" className="bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Estrategias de Negociación</h2>
                     <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                        <h3 className="font-bold text-xl text-red-800">Manejo de la Petición de Descuento</h3>
                        <p className="mt-2 text-red-700">Un descuento sin nada a cambio devalúa nuestro servicio. Usa siempre la técnica del <strong>"Give-to-Get"</strong> (Dar para Recibir).</p>
                        <blockquote>
                            <p className="font-bold">Cliente: "¿Puedes hacerme un descuento del 10%?"</p>
                            <p className="font-bold mt-2">Tu Respuesta:</p>
                            <p>"Aprecio que lo preguntes. Nuestros precios están muy ajustados al valor que entregamos. Sin embargo, valoro mucho la posibilidad de tener una colaboración a largo plazo. Si en lugar de un contrato de 12 meses firmamos uno de 24, podría hablar con finanzas para ver si podemos aplicar un 5% de descuento por ese compromiso extendido. ¿Te parece una buena opción?"</p>
                        </blockquote>
                        <p className="text-sm mt-4 text-red-900"><strong>Otras opciones de "Get":</strong> Un caso de éxito público, un testimonio en video, pago por adelantado del primer trimestre, ser cliente de referencia, etc.</p>
                    </div>
                </section>
            </main>

            <footer className="text-center py-16 mt-8"><p className="text-xl font-medium text-gray-700">BeyondCX: Vendemos Resultados, no Precios.</p></footer>
        </div>
    );
};

export default PricingGuide;