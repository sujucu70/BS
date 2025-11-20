#!/bin/bash

# Script para actualizar colores a paleta corporativa
# Accent 1: #E4E3E3 (gris claro) - reemplaza gray-100, gray-50
# Accent 2: #B1B1B0 (gris medio) - reemplaza gray-500, gray-600
# Accent 3: #6D84E3 (azul corporativo) - ya está en uso
# Accent 4: #3F3F3F (gris oscuro) - reemplaza gray-800, gray-900
# Accent 5: #000000 (negro) - para textos muy oscuros

cd /home/ubuntu/BS/components

# Reemplazar colores de texto
find . -name "*.tsx" -type f -exec sed -i 's/text-gray-900/text-[#3F3F3F]/g' {} \;
find . -name "*.tsx" -type f -exec sed -i 's/text-gray-800/text-[#3F3F3F]/g' {} \;
find . -name "*.tsx" -type f -exec sed -i 's/text-gray-700/text-[#3F3F3F]/g' {} \;
find . -name "*.tsx" -type f -exec sed -i 's/text-gray-600/text-[#B1B1B0]/g' {} \;
find . -name "*.tsx" -type f -exec sed -i 's/text-gray-500/text-[#B1B1B0]/g' {} \;

# Reemplazar colores de fondo
find . -name "*.tsx" -type f -exec sed -i 's/bg-gray-900/bg-[#3F3F3F]/g' {} \;
find . -name "*.tsx" -type f -exec sed -i 's/bg-gray-800/bg-[#3F3F3F]/g' {} \;
find . -name "*.tsx" -type f -exec sed -i 's/bg-gray-100/bg-[#E4E3E3]/g' {} \;
find . -name "*.tsx" -type f -exec sed -i 's/bg-gray-50/bg-[#E4E3E3]/g' {} \;

# Reemplazar gradientes antiguos
find . -name "*.tsx" -type f -exec sed -i 's/from-\[#1e3a5f\] to-\[#2d5a8f\]/from-[#6D84E3] to-[#3F3F3F]/g' {} \;
find . -name "*.tsx" -type f -exec sed -i 's/#1e3a5f/#6D84E3/g' {} \;
find . -name "*.tsx" -type f -exec sed -i 's/#2d5a8f/#3F3F3F/g' {} \;

# Reemplazar borders
find . -name "*.tsx" -type f -exec sed -i 's/border-gray-800/border-[#3F3F3F]/g' {} \;
find . -name "*.tsx" -type f -exec sed -i 's/border-gray-700/border-[#3F3F3F]/g' {} \;

echo "Colores actualizados a paleta corporativa"
