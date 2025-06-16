# Alamo - Teste Técnico

Projeto Next.js 15 com App Router para gerenciamento de rotinas, contemplando sidebar, header, busca, listagem agrupada por horário e modal de cadastro. Os dados são mockados localmente e gerenciados com React Query e Zustand para estado global.

---

## Tecnologias usadas

* **Next.js 15 (App Router)** — estrutura principal do projeto
* **React 18** — biblioteca UI
* **TailwindCSS** — estilização utilitária
* **ShadCN/UI** — componentes UI pré-estilizados
* **Zustand** — gerenciamento global de estado (rotinas, modais, filtros)
* **React Query** — simulação de consumo assíncrono (fetch de dados mockados)
* **nanoid** — geração de IDs únicos para rotinas
* **TypeScript** — tipagem estática

---

## Funcionalidades

* Layout com **sidebar de navegação** e **cabeçalho**
* Botão "**+ Adicionar Rotina**" no topo direito para abrir modal de cadastro
* Campo de busca para **filtrar rotinas localmente** por título e horário
* Listagem das rotinas agrupadas por horário
* Exibição detalhada das informações de cada rotina
* Modal para criação de novas rotinas
* Estado global gerenciado via Zustand
* Dados simulados (mock) e carregados via React Query com delay para simular API local


---

## Como rodar

1. Clone o repositório:

```bash
git clone
cd alamo

2. Instale as dependências:

```bash
npm install


3. Rode o projeto localmente:

```bash
npm run dev


4. Acesse no navegador:

```
http://localhost:3000
```

---

## Estrutura principal

* `src/app/page.tsx` — página principal que carrega e filtra as rotinas, inclui layout geral
* `src/components/` — componentes UI como `Header`, `Sidebar`, `RoutineCard`, `AddRoutineModal`
* `src/stores/useRoutineStore.ts` — Zustand store para gerenciar rotinas, filtros e modal
* Configuração TailwindCSS e ShadCN/UI para design

---

## Detalhes técnicos

* **Busca/Filtro:** Implementada localmente filtrando rotinas por título e horário no estado global
* **Modal:** Componente controlado via Zustand, abre ao clicar no botão adicionar
* **React Query:** Simula fetch assíncrono dos dados mockados com timeout
* **Zustand:** Armazena rotinas, estado do modal, termo de busca e métodos para adicionar
* **IDs:** Gerados dinamicamente com `nanoid` para garantir unicidade e evitar conflitos no React

---

## Possíveis melhorias futuras

* Validação avançada no formulário de cadastro
* Editar rotinas existentes
* Ordenar rotinas por horário ou categoria
* Testes unitários e de integração
* Autenticação de usuário para persistência em backend real
