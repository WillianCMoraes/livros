/**
 * ============================================================================
 * CATÁLOGO EDITÁVEL DA LOJA — HAMALLY EDITORA
 * ============================================================================
 * Edite este arquivo manualmente para atualizar títulos, resumos, capas,
 * links de "Conhecer o Livro" e links de "Material de Apoio" sem precisar
 * mexer no HTML ou no CSS da loja.
 *
 * DICA DE CAMINHO DAS IMAGENS:
 * - Se `loja.html` estiver dentro da pasta `marketing/`, use `BASE_ASSETS = "../assets"`.
 * - Se você mover os arquivos de `marketing/` para a raiz do seu site junto com
 *   a pasta `assets/`, altere apenas `BASE_ASSETS` para `"assets"`.
 * ============================================================================
 */

window.LOJA_CONFIG = {
  BASE_ASSETS: "../assets",
  nomeEditora: "Hamally Editora",
  subtituloLoja: "Acervo Técnico, Científico & Editorial",
  taglineHero: "Publicações independentes com rigor técnico, diagramação editorial premium e materiais complementares auditáveis.",
  logoPath: "logo/logo.svg",
  livroDestaqueId: "cafeicultura-moderna",
  rodapeTexto: "© 2026 Hamally Editora • Acervo Editorial Independente"
};

window.CATALOGO_LIVROS = [
  {
    id: "cafeicultura-moderna",
    destaque: true,
    ordem: 1,
    categoria: "Agronomia & Engenharia",
    badge: "Lançamento • Edição Técnica",
    kicker: "ENGENHARIA AGRONÔMICA • ARÁBICA, CONILON & ROBUSTA",
    titulo: "Manual Técnico da Cafeicultura Moderna",
    subtitulo: "Protocolos de Alta Produtividade para Arábica, Conilon e Robusta com Sincronização Lunar, Automação IoT e Pós-Colheita",
    autor: "Willian Corrêa de Moraes",
    edicao: "1ª Edição • 184 páginas • Formato 7\" × 10\"",
    resumo: "Substitui o manejo empírico por protocolos quantitativos auditáveis do viveiro à exportação. Reúne ecofisiologia comparada, nutrição de precisão, sincronização biofísica lunar, RDI, automação IoT em campo, pós-colheita em biorreatores, torra, análise sensorial SCA/CQI e gestão econômica.",
    capa: "capa/arte_capa.png",
    sobreporTituloNaCapa: true,
    qrcode: "capa/qrcode_loja_PT.png",
    urlConhecer: "https://livros.hamally.store/manual-tecnico-da-cafeicultura-moderna",
    urlMaterialApoio: "https://livros.hamally.store/manual-tecnico-da-cafeicultura-moderna#material-apoio",
    textoBotaoConhecer: "Conhecer o Livro",
    textoBotaoApoio: "Material de Apoio",
    topicos: [
      "10 capítulos completos com diagramas técnicos em 300 DPI",
      "Protocolos para Coffea arabica, Conilon e Robusta",
      "Planilhas e materiais complementares de campo e pós-colheita"
    ]
  },
  {
    id: "fim-descarte-digital",
    destaque: false,
    ordem: 2,
    categoria: "Tecnologia & Sustentabilidade",
    badge: "Edição Prática",
    kicker: "MANUTENÇÃO, REAPROVEITAMENTO & ECONOMIA",
    titulo: "O Fim do Descarte Digital",
    subtitulo: "Como Recuperar Computadores, Celulares e Eletrônicos Antigos, Economizar Dinheiro e Vencer a Obsolescência Programada",
    autor: "Willian Corrêa de Moraes",
    edicao: "Edição Técnica Independente",
    resumo: "Guia prático para diagnosticar, restaurar e prolongar a vida útil de notebooks, desktops, smartphones e periféricos, transformando equipamentos considerados obsoletos em máquinas rápidas e produtivas.",
    capa: "indicacoes/ind_1.png",
    sobreporTituloNaCapa: true,
    qrcode: "",
    urlConhecer: "https://ofimdodescatedigital.hamally.store",
    urlMaterialApoio: "https://ofimdodescatedigital.hamally.store#material-apoio",
    textoBotaoConhecer: "Conhecer o Livro",
    textoBotaoApoio: "Material de Apoio",
    topicos: [
      "Diagnóstico de hardware e upgrades de alto custo-benefício",
      "Otimização de sistemas leves e recuperação de celulares",
      "Checklists e ferramentas recomendadas de manutenção"
    ]
  },
  {
    id: "tratado-umbanda",
    destaque: false,
    ordem: 3,
    categoria: "Teologia & Tradição",
    badge: "Obra de Referência",
    kicker: "TEOLOGIA AFRO-BRASILEIRA & LITURGIA",
    titulo: "Tratado Técnico de Umbanda",
    subtitulo: "Teologia Afro-Brasileira, Liturgia Umbandista, Antropologia da Religião e Gestão de Templos",
    autor: "Willian Corrêa de Moraes",
    edicao: "Edição de Referência",
    resumo: "Estudo estruturado sobre os fundamentos teológicos, organização ritualística, antropologia religiosa e administração ética e documental de casas e terreiros.",
    capa: "indicacoes/ind_2.png",
    sobreporTituloNaCapa: true,
    qrcode: "",
    urlConhecer: "https://tratadotecnicoumbanda.hamally.store",
    urlMaterialApoio: "https://tratadotecnicoumbanda.hamally.store#material-apoio",
    textoBotaoConhecer: "Conhecer o Livro",
    textoBotaoApoio: "Material de Apoio",
    topicos: [
      "Fundamentos teológicos e linhas de trabalho",
      "Estrutura litúrgica e rituais comentados",
      "Modelos administrativos e gestão de templos"
    ]
  },
  {
    id: "raiz-e-cruzeiro",
    destaque: false,
    ordem: 4,
    categoria: "Teologia & Tradição",
    badge: "Legado & Práticas",
    kicker: "SABEDORIA ANCESTRAL & ERVAS",
    titulo: "A Raiz e o Cruzeiro",
    subtitulo: "Banhos, Ervas e Ritos de Umbanda e Quimbanda: O Legado de Sabedoria Ancestral, Fundamentos Litúrgicos e Práticas de Cura da Terra",
    autor: "Cristiano Coelho de Moraes (In Memoriam) • Hamally Editora",
    edicao: "Edição Memorial",
    resumo: "Compêndio dedicado às tradições fitoterápicas, banhos ritualísticos, fundamentos litúrgicos e transmissão de saberes ancestrais ligados à terra e à espiritualidade.",
    capa: "indicacoes/ind_3.png",
    sobreporTituloNaCapa: false,
    qrcode: "",
    urlConhecer: "https://raizeocruzeiro.hamally.store",
    urlMaterialApoio: "https://raizeocruzeiro.hamally.store#material-apoio",
    textoBotaoConhecer: "Conhecer o Livro",
    textoBotaoApoio: "Material de Apoio",
    topicos: [
      "Catalogação de ervas, banhos e preparos tradicionais",
      "Fundamentos litúrgicos e preservação do legado familiar",
      "Guias de consulta rápida para estudo"
    ]
  }
];
