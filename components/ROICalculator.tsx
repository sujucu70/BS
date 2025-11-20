import React, { useState, useMemo } from 'react';

interface ROIInputs {
    monthlyCallVolume: number;
    avgHandleTime: number; // minutes
    costPerAgent: number; // €/hour
    currentCSAT: number; // %
    automationRate: number; // %
}

const ROICalculator: React.FC = () => {
    const [inputs, setInputs] = useState<ROIInputs>({
        monthlyCallVolume: 10000,
        avgHandleTime: 6,
        costPerAgent: 25,
        currentCSAT: 75,
        automationRate: 60
    });

    const [implementationCost] = useState(50000); // One-time
    const [monthlyLicense] = useState(3000);

    const results = useMemo(() => {
        const { monthlyCallVolume, avgHandleTime, costPerAgent, currentCSAT, automationRate } = inputs;

        // Current state calculations
        const currentMonthlyHours = (monthlyCallVolume * avgHandleTime) / 60;
        const currentMonthlyCost = currentMonthlyHours * costPerAgent;
        const currentAnnualCost = currentMonthlyCost * 12;

        // With BeyondCX calculations
        const automatedCalls = monthlyCallVolume * (automationRate / 100);
        const remainingCalls = monthlyCallVolume - automatedCalls;
        
        // Assumptions: automated calls reduce AHT by 80%, remaining calls by 25%
        const automatedHours = (automatedCalls * avgHandleTime * 0.2) / 60;
        const remainingHours = (remainingCalls * avgHandleTime * 0.75) / 60;
        const newMonthlyHours = automatedHours + remainingHours;
        const newMonthlyCost = newMonthlyHours * costPerAgent + monthlyLicense;
        const newAnnualCost = newMonthlyCost * 12 + implementationCost;

        // Savings
        const monthlySavings = currentMonthlyCost - newMonthlyCost;
        const annualSavings = currentAnnualCost - newAnnualCost;
        const savingsPercentage = (monthlySavings / currentMonthlyCost) * 100;

        // ROI
        const totalInvestment = implementationCost + (monthlyLicense * 12);
        const roi = ((annualSavings - totalInvestment) / totalInvestment) * 100;
        const paybackMonths = totalInvestment / monthlySavings;

        // CSAT improvement (assumption: +15 points with automation)
        const newCSAT = Math.min(currentCSAT + 15, 100);

        // Productivity gains
        const hoursSaved = currentMonthlyHours - newMonthlyHours;
        const fteReduction = hoursSaved / 160; // assuming 160h/month per FTE

        return {
            current: {
                monthlyHours: currentMonthlyHours,
                monthlyCost: currentMonthlyCost,
                annualCost: currentAnnualCost,
                csat: currentCSAT
            },
            withBeyondCX: {
                monthlyHours: newMonthlyHours,
                monthlyCost: newMonthlyCost,
                annualCost: newAnnualCost,
                csat: newCSAT,
                automatedCalls
            },
            savings: {
                monthly: monthlySavings,
                annual: annualSavings,
                percentage: savingsPercentage,
                hoursSaved,
                fteReduction
            },
            roi: {
                value: roi,
                paybackMonths,
                totalInvestment
            }
        };
    }, [inputs, implementationCost, monthlyLicense]);

    const handleInputChange = (field: keyof ROIInputs, value: number) => {
        setInputs(prev => ({ ...prev, [field]: value }));
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
    };

    const formatNumber = (value: number) => {
        return new Intl.NumberFormat('es-ES', { maximumFractionDigits: 1 }).format(value);
    };

    return (
        <div className="container mx-auto p-4 md:p-8 bg-[#f8f9fa] min-h-screen">
            <header className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-[#3F3F3F] tracking-tight mb-4" style={{fontFamily: 'Outfit, sans-serif'}}>
                    ROI Calculator
                </h1>
                <p className="text-xl text-[#B1B1B0] max-w-3xl mx-auto">
                    Calcula el retorno de inversión de implementar BeyondCX en tu contact center
                </p>
            </header>

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Input Panel */}
                    <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
                        <h2 className="text-2xl font-bold text-[#3F3F3F] mb-6" style={{fontFamily: 'Outfit, sans-serif'}}>
                            Datos de tu Operación
                        </h2>

                        <div className="space-y-6">
                            {/* Monthly Call Volume */}
                            <div>
                                <label className="block text-sm font-semibold text-[#3F3F3F] mb-2">
                                    Volumen mensual de llamadas
                                </label>
                                <input
                                    type="number"
                                    value={inputs.monthlyCallVolume}
                                    onChange={(e) => handleInputChange('monthlyCallVolume', Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6D84E3] focus:border-transparent"
                                />
                                <p className="text-xs text-[#B1B1B0] mt-1">Número total de llamadas recibidas al mes</p>
                            </div>

                            {/* Avg Handle Time */}
                            <div>
                                <label className="block text-sm font-semibold text-[#3F3F3F] mb-2">
                                    Tiempo medio de operación (minutos)
                                </label>
                                <input
                                    type="number"
                                    step="0.5"
                                    value={inputs.avgHandleTime}
                                    onChange={(e) => handleInputChange('avgHandleTime', Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6D84E3] focus:border-transparent"
                                />
                                <p className="text-xs text-[#B1B1B0] mt-1">TMO promedio por llamada</p>
                            </div>

                            {/* Cost per Agent */}
                            <div>
                                <label className="block text-sm font-semibold text-[#3F3F3F] mb-2">
                                    Coste por agente (€/hora)
                                </label>
                                <input
                                    type="number"
                                    value={inputs.costPerAgent}
                                    onChange={(e) => handleInputChange('costPerAgent', Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6D84E3] focus:border-transparent"
                                />
                                <p className="text-xs text-[#B1B1B0] mt-1">Coste total por hora (salario + cargas + overhead)</p>
                            </div>

                            {/* Current CSAT */}
                            <div>
                                <label className="block text-sm font-semibold text-[#3F3F3F] mb-2">
                                    CSAT actual (%)
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={inputs.currentCSAT}
                                    onChange={(e) => handleInputChange('currentCSAT', Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6D84E3] focus:border-transparent"
                                />
                                <p className="text-xs text-[#B1B1B0] mt-1">Satisfacción actual del cliente</p>
                            </div>

                            {/* Automation Rate */}
                            <div>
                                <label className="block text-sm font-semibold text-[#3F3F3F] mb-2">
                                    Tasa de automatización objetivo (%)
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        min="30"
                                        max="80"
                                        value={inputs.automationRate}
                                        onChange={(e) => handleInputChange('automationRate', Number(e.target.value))}
                                        className="flex-1"
                                    />
                                    <span className="text-2xl font-bold text-[#6D84E3] w-16 text-right">
                                        {inputs.automationRate}%
                                    </span>
                                </div>
                                <p className="text-xs text-[#B1B1B0] mt-1">% de llamadas que pueden ser automatizadas</p>
                            </div>
                        </div>

                        {/* Investment Summary */}
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h3 className="font-bold text-[#3F3F3F] mb-2">Inversión BeyondCX</h3>
                            <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-[#B1B1B0]">Implementación (one-time):</span>
                                    <span className="font-semibold">{formatCurrency(implementationCost)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[#B1B1B0]">Licencia mensual:</span>
                                    <span className="font-semibold">{formatCurrency(monthlyLicense)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Panel */}
                    <div className="space-y-6">
                        {/* ROI Highlight */}
                        <div className="bg-gradient-to-br from-[#6D84E3] to-[#3F3F3F] text-white rounded-xl shadow-lg p-8">
                            <h2 className="text-3xl font-bold mb-2" style={{fontFamily: 'Outfit, sans-serif'}}>
                                ROI Anual
                            </h2>
                            <div className="text-6xl font-bold mb-4">
                                {formatNumber(results.roi.value)}%
                            </div>
                            <div className="flex items-center gap-2 text-lg">
                                <span>Payback en</span>
                                <span className="font-bold text-2xl">{formatNumber(results.roi.paybackMonths)}</span>
                                <span>meses</span>
                            </div>
                        </div>

                        {/* Savings */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h3 className="text-xl font-bold text-[#3F3F3F] mb-4" style={{fontFamily: 'Outfit, sans-serif'}}>
                                Ahorro Proyectado
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                                    <span className="text-[#3F3F3F] font-medium">Ahorro mensual</span>
                                    <span className="text-2xl font-bold text-green-700">
                                        {formatCurrency(results.savings.monthly)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                                    <span className="text-[#3F3F3F] font-medium">Ahorro anual</span>
                                    <span className="text-2xl font-bold text-green-700">
                                        {formatCurrency(results.savings.annual)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                                    <span className="text-[#3F3F3F] font-medium">Reducción de costes</span>
                                    <span className="text-2xl font-bold text-blue-700">
                                        {formatNumber(results.savings.percentage)}%
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Operational Impact */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h3 className="text-xl font-bold text-[#3F3F3F] mb-4" style={{fontFamily: 'Outfit, sans-serif'}}>
                                Impacto Operacional
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-[#E4E3E3] rounded-lg">
                                    <div className="text-sm text-[#B1B1B0] mb-1">Llamadas automatizadas</div>
                                    <div className="text-2xl font-bold text-[#6D84E3]">
                                        {formatNumber(results.withBeyondCX.automatedCalls)}
                                    </div>
                                    <div className="text-xs text-[#B1B1B0]">{inputs.automationRate}% del volumen</div>
                                </div>
                                <div className="p-4 bg-[#E4E3E3] rounded-lg">
                                    <div className="text-sm text-[#B1B1B0] mb-1">Horas ahorradas/mes</div>
                                    <div className="text-2xl font-bold text-[#6D84E3]">
                                        {formatNumber(results.savings.hoursSaved)}
                                    </div>
                                    <div className="text-xs text-[#B1B1B0]">{formatNumber(results.savings.fteReduction)} FTE</div>
                                </div>
                                <div className="p-4 bg-[#E4E3E3] rounded-lg">
                                    <div className="text-sm text-[#B1B1B0] mb-1">CSAT actual</div>
                                    <div className="text-2xl font-bold text-[#B1B1B0]">
                                        {results.current.csat}%
                                    </div>
                                </div>
                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="text-sm text-[#B1B1B0] mb-1">CSAT proyectado</div>
                                    <div className="text-2xl font-bold text-green-700">
                                        {results.withBeyondCX.csat}%
                                    </div>
                                    <div className="text-xs text-green-600">+{results.withBeyondCX.csat - results.current.csat} puntos</div>
                                </div>
                            </div>
                        </div>

                        {/* Comparison Table */}
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h3 className="text-xl font-bold text-[#3F3F3F] mb-4" style={{fontFamily: 'Outfit, sans-serif'}}>
                                Comparativa
                            </h3>
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b-2 border-gray-200">
                                        <th className="text-left py-2 text-[#B1B1B0]">Métrica</th>
                                        <th className="text-right py-2 text-[#B1B1B0]">Actual</th>
                                        <th className="text-right py-2 text-green-700">Con BeyondCX</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 text-[#3F3F3F]">Horas/mes</td>
                                        <td className="text-right font-semibold">{formatNumber(results.current.monthlyHours)}</td>
                                        <td className="text-right font-semibold text-green-700">{formatNumber(results.withBeyondCX.monthlyHours)}</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 text-[#3F3F3F]">Coste mensual</td>
                                        <td className="text-right font-semibold">{formatCurrency(results.current.monthlyCost)}</td>
                                        <td className="text-right font-semibold text-green-700">{formatCurrency(results.withBeyondCX.monthlyCost)}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 text-[#3F3F3F]">Coste anual</td>
                                        <td className="text-right font-semibold">{formatCurrency(results.current.annualCost)}</td>
                                        <td className="text-right font-semibold text-green-700">{formatCurrency(results.withBeyondCX.annualCost)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold text-[#3F3F3F] mb-4" style={{fontFamily: 'Outfit, sans-serif'}}>
                        ¿Quieres validar estos números con tu caso específico?
                    </h2>
                    <p className="text-[#B1B1B0] mb-6 max-w-2xl mx-auto">
                        Agenda una sesión con nuestro equipo para un análisis personalizado de tu operación
                    </p>
                    <button className="bg-[#6D84E3] hover:bg-[#3F3F3F] text-white font-bold py-4 px-10 rounded-lg text-lg shadow-md hover:shadow-lg transition-all">
                        Solicitar Análisis Personalizado
                    </button>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 text-center text-xs text-[#B1B1B0] max-w-4xl mx-auto">
                    <p>
                        * Los resultados son estimaciones basadas en promedios de la industria y casos reales. 
                        Los resultados específicos pueden variar según la complejidad de tu operación, tipo de interacciones y nivel de integración.
                        Las asunciones incluyen: 80% reducción de AHT en llamadas automatizadas, 25% reducción en llamadas no automatizadas, 
                        y mejora promedio de 15 puntos en CSAT.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;
