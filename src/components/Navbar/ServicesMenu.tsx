import Link from "next/link";

const translations = {
  en: {
    services: "Services",
    items: [
      {
        name: "Web Development",
        description: "Modern and efficient web apps.",
      },
      { name: "API Integration", description: "Seamless system connections." },
      { name: "Big Data", description: "Large-scale data analysis." },
      { name: "Data Science", description: "Predictive and smart analytics." },
      { name: "IT Outsourcing", description: "On-demand IT talent." },
      { name: "Cloud Migration", description: "Secure cloud transitions." },
      {
        name: "Business Process Automation",
        description: "Automate repetitive tasks and boost efficiency.",
      },
      {
        name: "IT Consulting",
        description: "Strategy and IT project guidance.",
      },
    ],
  },
  es: {
    services: "Servicios",
    items: [
      {
        name: "Desarrollo Web",
        description: "Apps web modernas y eficientes.",
      },
      {
        name: "Integración API",
        description: "Sistemas conectados sin fricción.",
      },
      { name: "Big Data", description: "Análisis de datos a gran escala." },
      {
        name: "Ciencia de Datos",
        description: "Predicción y análisis inteligente.",
      },
      { name: "Outsourcing IT", description: "Talento TI bajo demanda." },
      {
        name: "Migración a la Nube",
        description: "Transición segura a la nube.",
      },
      {
        name: "Automatización de Procesos",
        description: "Automatiza tareas repetitivas y mejora la eficiencia.",
      },
      {
        name: "Consultoría IT",
        description: "Estrategia y guía para tus proyectos IT.",
      },
    ],
  },
  fr: {
    services: "Services",
    items: [
      {
        name: "Développement Web",
        description: "Applications web modernes et efficaces.",
      },
      {
        name: "Intégration d’API",
        description: "Connexion fluide des systèmes.",
      },
      {
        name: "Big Data",
        description: "Analyse de grandes volumes de données.",
      },
      {
        name: "Science des Données",
        description: "Analyse prédictive intelligente.",
      },
      { name: "Externalisation IT", description: "Talents IT à la demande." },
      {
        name: "Migration vers le Cloud",
        description: "Transition cloud sécurisée.",
      },
      {
        name: "Automatisation des Processus",
        description: "Automatisez les tâches et gagnez en efficacité.",
      },
      { name: "Conseil IT", description: "Stratégie et accompagnement IT." },
    ],
  },
  ja: {
    services: "サービス",
    items: [
      { name: "ウェブ開発", description: "モダンで効率的なWebアプリ。" },
      { name: "API統合", description: "スムーズなシステム接続。" },
      { name: "ビッグデータ", description: "大規模なデータ分析。" },
      { name: "データサイエンス", description: "予測とスマート分析。" },
      { name: "ITアウトソーシング", description: "必要なときにIT人材を提供。" },
      { name: "クラウド移行", description: "安全なクラウド移行。" },
      { name: "業務自動化", description: "繰り返し作業を自動化し効率化。" },
      { name: "ITコンサルティング", description: "戦略とITプロジェクト支援。" },
    ],
  },
  zh: {
    services: "服务",
    items: [
      { name: "网站开发", description: "现代高效的网页应用。" },
      { name: "API集成", description: "系统无缝连接。" },
      { name: "大数据", description: "大规模数据分析。" },
      { name: "数据科学", description: "预测和智能分析。" },
      { name: "IT外包", description: "按需提供IT人才。" },
      { name: "云迁移", description: "安全高效的云迁移。" },
      { name: "业务流程自动化", description: "自动化重复任务，提升效率。" },
      { name: "IT咨询", description: "IT项目策略与指导。" },
    ],
  },
};

const hrefs = [
  "/blog/web-development/custom-web-development-create-modern-fast-and-scalable-applications",
  "/blog/api-integration/api-integration-connect-your-systems-and-automate-key-processes",
  "/blog/big-data/big-data-convert-large-amounts-of-data-into-intelligent-decisions",
  "/blog/data-science/data-science-anticipate-the-future-and-make-decisions-based-on-evidence",
  "/blog/it-outsourcing/it-outsourcing-expand-your-team-with-specialized-talent-without-complications",
  "/blog/cloud-migration/cloud-migration-safe-and-efficient-transition-to-modern-infrastructure",
  "/blog/case-studies/business-process-automation-scalability-and-precision-with-tailored-solutions",
  "/blog/it-outsourcing/it-consulting-technology-strategy-for-the-sustainable-growth-of-your-company",
];

interface ServicesMenuProps {
  readonly language: string;
}

export default async function ServicesMenu({ language }: ServicesMenuProps) {
  const t =
    translations[language as keyof typeof translations] || translations.en;
  return (
    <div className="relative group">
      <button className="flex items-center nav-link group-hover:text-primary">
        {t.services}
        <svg
          className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="absolute z-10 mt-1 left-1/2 transform -translate-x-1/2 min-w-[650px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="grid grid-cols-2 p-2">
          {t.items.map((item, i) => (
            <Link
              prefetch={false}
              key={item.name}
              href={`/${language}${hrefs[i]}`}
              className="block px-4 py-2 hover:bg-gray-100"
              role="menuitem"
            >
              <div className="text-gray-900 font-medium">{item.name}</div>
              <div className="text-gray-500 text-sm">{item.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
