export const modulesData = [
  {
    id: "introducao",
    title: "Introdução ao DocuWare",
    description: "Entenda o que é o DocuWare e como ele revoluciona a gestão documental e a automação de processos na sua empresa.",
    videoTitle: "Vídeo: Introdução ao DocuWare",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    imageLabel: "Tela Inicial e Visão Geral do DocuWare",
    imageName: "introducao.png",
    bullets: [
      "Gestão documental centralizada e 100% segura",
      "Documentos organizados em armários digitais estruturados",
      "Pesquisa inteligente por campos de metadados ou texto completo (OCR)",
      "Conformidade regulatória (LGPD) e controle estrito de acessos"
    ]
  },
  {
    id: "interface",
    title: "Interface Principal",
    description: "Conheça os principais elementos da tela do DocuWare, como a bandeja, os armários de arquivamento, as buscas e as tarefas.",
    videoTitle: "Vídeo: Conhecendo a Interface",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageLabel: "Interface de usuário e painéis principais",
    imageName: "interface.png",
    bullets: [
      "Bandejas de documentos: espaço temporário para captura",
      "Menu de pesquisa: acesso rápido aos armários de arquivo",
      "Lista de tarefas: workflows pendentes de sua ação",
      "Painel de exibição: visualização rápida sem necessidade de download"
    ]
  },
  {
    id: "arquivar",
    title: "Arquivar Documentos",
    description: "Aprenda a importar, indexar e armazenar seus arquivos físicos ou digitais de forma segura e padronizada.",
    videoTitle: "Vídeo: Como Arquivar Documentos",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageLabel: "Formulário de indexação e arquivamento",
    imageName: "arquivar.png",
    bullets: [
      "Importação simples via arrastar e soltar (Drag & Drop)",
      "Indexação automática inteligente com tecnologia One-Click Indexing",
      "Preenchimento de metadados cruciais para organização",
      "Armazenamento imediato em armários protegidos"
    ]
  },
  {
    id: "pesquisar",
    title: "Pesquisar Documentos",
    description: "Encontre qualquer documento em segundos utilizando filtros de metadados ou a pesquisa de texto completo.",
    videoTitle: "Vídeo: Pesquisa Rápida e Avançada",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageLabel: "Tela de pesquisa e resultados de busca",
    imageName: "pesquisar.png",
    bullets: [
      "Busca rápida por palavras-chave em múltiplos campos",
      "Filtros avançados (data, tipo de documento, fornecedor)",
      "Pesquisa de texto completo (Fulltext OCR) dentro dos arquivos",
      "Salvamento de buscas frequentes para acesso rápido"
    ]
  },
  {
    id: "visualizador",
    title: "Visualizador de Documentos",
    description: "Explore os recursos do visualizador nativo: faça anotações, carimbos, assinaturas e navegue pelas páginas.",
    videoTitle: "Vídeo: Recursos do Visualizador",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageLabel: "Visualizador de documentos e barra de ferramentas",
    imageName: "visualizador.png",
    bullets: [
      "Ferramentas de anotação e marca-texto sem alterar o original",
      "Aplicação de carimbos digitais de aprovação ou rejeição",
      "Assinatura eletrônica integrada diretamente na interface",
      "Envio fácil por e-mail ou exportação com/sem anotações"
    ]
  },
  {
    id: "workflows",
    title: "Tarefas e Workflows",
    description: "Entenda como funcionam os fluxos de trabalho automatizados, aprovações de faturas e processos de negócios.",
    videoTitle: "Vídeo: Workflows e Listas de Tarefas",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageLabel: "Painel de tarefas e aprovação de workflows",
    imageName: "workflows.png",
    bullets: [
      "Notificações automáticas de novas tarefas a realizar",
      "Aprovação rápida com cliques simples ou carimbos",
      "Redirecionamento de tarefas para outros colaboradores",
      "Acompanhamento em tempo real do status dos processos"
    ]
  },
  {
    id: "faq",
    title: "FAQ",
    description: "Respostas diretas para as dúvidas mais comuns dos usuários sobre o DocuWare.",
    videoTitle: "",
    videoUrl: "",
    imageLabel: "",
    imageName: "",
    bullets: [],
    isFAQ: true // Flag to render custom FAQ component
  }
];

export const faqData = [
  {
    question: "Como posso recuperar minha senha de acesso ao DocuWare?",
    answer: "Na tela de login do DocuWare, clique em 'Esqueci minha senha'. Você receberá um link no seu e-mail corporativo cadastrado para redefinir as credenciais. Caso não receba, contate o administrador do sistema pelo e-mail suporte@processcloud.app."
  },
  {
    question: "O que é a tecnologia de One-Click Indexing?",
    answer: "É um recurso inteligente que reconhece o texto do documento no visualizador. Ao clicar em uma palavra (como número da nota ou nome do cliente), o DocuWare preenche o campo de indexação automaticamente, evitando digitação manual."
  },
  {
    question: "Posso arquivar múltiplos arquivos de uma vez só?",
    answer: "Sim! Você pode arrastar vários arquivos diretamente para a sua bandeja de documentos. Lá, você pode optar por grampeá-los (combiná-los em um único documento) ou arquivá-los individualmente."
  },
  {
    question: "Como funciona a pesquisa por texto completo?",
    answer: "Ao digitar uma palavra na caixa 'Texto Completo' da pesquisa, o DocuWare varre o conteúdo escrito dentro de todos os PDFs, imagens e planilhas armazenadas no armário, destacando onde a palavra aparece."
  },
  {
    question: "Os carimbos e anotações alteram o documento original?",
    answer: "Não. As anotações e carimbos são aplicados como camadas invisíveis sobre o documento. Você sempre pode ocultar essas anotações ou exportar o PDF original totalmente limpo."
  },
  {
    question: "O DocuWare possui aplicativo para celular?",
    answer: "Sim. Existe o aplicativo oficial do DocuWare para Android e iOS. Com ele, você pode pesquisar documentos, carimbar faturas e concluir tarefas pendentes de workflow diretamente do smartphone."
  }
];
