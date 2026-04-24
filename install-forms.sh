#!/bin/bash

###############################################################################
# SCRIPT DE INSTALAÇÃO - FORMULÁRIOS MODERNOS
# Instala dependências Composer em todas as cidades
###############################################################################

echo "=========================================="
echo "  Instalação - Formulários Modernos"
echo "  Grupo Ideal Soluções"
echo "=========================================="
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar se o Composer está instalado
if ! command -v composer &> /dev/null; then
    echo -e "${RED}❌ Composer não encontrado!${NC}"
    echo "Instale o Composer primeiro: https://getcomposer.org/"
    exit 1
fi

echo -e "${GREEN}✓ Composer encontrado${NC}"
echo ""

# Lista de cidades
cities=("teralink" "palmacia" "pacoti" "ibicuitinga")

# Contador de sucesso
success=0
total=${#cities[@]}

# Instalar dependências para cada cidade
for city in "${cities[@]}"; do
    echo "----------------------------------------"
    echo "📦 Instalando dependências: $city"
    echo "----------------------------------------"
    
    forms_dir="cidades/$city/forms"
    
    if [ ! -d "$forms_dir" ]; then
        echo -e "${RED}❌ Diretório não encontrado: $forms_dir${NC}"
        continue
    fi
    
    cd "$forms_dir" || exit
    
    # Verificar se composer.json existe
    if [ ! -f "composer.json" ]; then
        echo -e "${RED}❌ composer.json não encontrado${NC}"
        cd - > /dev/null
        continue
    fi
    
    # Instalar dependências
    if composer install --no-dev --optimize-autoloader; then
        echo -e "${GREEN}✓ Dependências instaladas com sucesso!${NC}"
        ((success++))
        
        # Criar .env se não existir
        if [ ! -f ".env" ] && [ -f ".env.example" ]; then
            echo -e "${YELLOW}⚠ Criando .env a partir do .env.example${NC}"
            cp .env.example .env
            echo -e "${YELLOW}⚠ Configure o arquivo .env antes de usar!${NC}"
        fi
    else
        echo -e "${RED}❌ Erro ao instalar dependências${NC}"
    fi
    
    cd - > /dev/null
    echo ""
done

# Resumo
echo "=========================================="
echo "  Resumo da Instalação"
echo "=========================================="
echo -e "Total de cidades: ${total}"
echo -e "Instalações bem-sucedidas: ${GREEN}${success}${NC}"
echo -e "Falhas: ${RED}$((total - success))${NC}"
echo ""

if [ $success -eq $total ]; then
    echo -e "${GREEN}🎉 Todas as dependências foram instaladas com sucesso!${NC}"
    echo ""
    echo "Próximos passos:"
    echo "1. Configure os arquivos .env em cada cidade"
    echo "2. Crie as tabelas no banco de dados"
    echo "3. Teste os formulários localmente"
    echo ""
else
    echo -e "${YELLOW}⚠ Algumas instalações falharam. Verifique os logs acima.${NC}"
fi

echo "=========================================="
