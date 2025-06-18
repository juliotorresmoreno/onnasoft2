import React from "react";
import {
  FaHandshake,
  FaClipboardList,
  FaCode,
  FaSearch,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const translations = {
  en: {
    title: "Our Work Process",
    subtitle:
      "We follow a structured methodology that guarantees exceptional results in every project. Our approach combines technical precision with clear and constant communication.",
    steps: [
      {
        number: "01",
        title: "Initial Consultation",
        description:
          "We begin by listening to your needs and goals. In this phase, we ensure we fully understand your vision and the challenges you face.",
        icon: <FaHandshake className="text-2xl" />,
      },
      {
        number: "02",
        title: "Analysis and Planning",
        description:
          "We develop a detailed strategy and action plan. We define technical requirements, establish timelines, and allocate resources for your project.",
        icon: <FaClipboardList className="text-2xl" />,
      },
      {
        number: "03",
        title: "Development and Implementation",
        description:
          "Our team of experts works on creating your solution, applying agile methodologies to ensure quality and efficiency at every stage.",
        icon: <FaCode className="text-2xl" />,
      },
      {
        number: "04",
        title: "Testing and Optimization",
        description:
          "We conduct thorough testing to ensure everything works perfectly. We optimize performance and refine every detail of the solution.",
        icon: <FaSearch className="text-2xl" />,
      },
      {
        number: "05",
        title: "Delivery and Training",
        description:
          "We implement the final solution and provide the necessary training. Our team ensures your team is comfortable with all features and functionalities.",
        icon: <FaRocket className="text-2xl" />,
      },
      {
        number: "06",
        title: "Ongoing Support and Maintenance",
        description:
          "We continue to offer ongoing support to ensure long-term success. Our maintenance plans keep your solution secure, updated, and performing optimally.",
        icon: <FaHeadset className="text-2xl" />,
      },
    ],
  },
  es: {
    title: "Nuestro Proceso de Trabajo",
    subtitle:
      "Seguimos una metodología estructurada que garantiza resultados excepcionales en cada proyecto. Nuestro enfoque combina precisión técnica con comunicación clara y constante.",
    steps: [
      {
        number: "01",
        title: "Consulta Inicial",
        description:
          "Comenzamos escuchando tus necesidades y objetivos. En esta fase, aseguramos entender completamente tu visión y los desafíos que enfrentas.",
        icon: <FaHandshake className="text-2xl" />,
      },
      {
        number: "02",
        title: "Análisis y Planificación",
        description:
          "Desarrollamos una estrategia detallada y un plan de acción. Definimos requisitos técnicos, establecemos cronogramas y asignamos recursos para tu proyecto.",
        icon: <FaClipboardList className="text-2xl" />,
      },
      {
        number: "03",
        title: "Desarrollo e Implementación",
        description:
          "Nuestro equipo de expertos trabaja en la creación de tu solución, aplicando metodologías ágiles para garantizar calidad y eficiencia en cada etapa.",
        icon: <FaCode className="text-2xl" />,
      },
      {
        number: "04",
        title: "Pruebas y Optimización",
        description:
          "Realizamos pruebas exhaustivas para asegurar que todo funcione perfectamente. Optimizamos el rendimiento y afinamos cada detalle de la solución.",
        icon: <FaSearch className="text-2xl" />,
      },
      {
        number: "05",
        title: "Entrega y Capacitación",
        description:
          "Implementamos la solución final y ofrecemos la capacitación necesaria. Nuestro equipo asegura que tu equipo esté cómodo con todas las funciones.",
        icon: <FaRocket className="text-2xl" />,
      },
      {
        number: "06",
        title: "Soporte y Mantenimiento Continuo",
        description:
          "Ofrecemos soporte continuo para asegurar el éxito a largo plazo. Nuestros planes de mantenimiento mantienen tu solución segura, actualizada y funcionando óptimamente.",
        icon: <FaHeadset className="text-2xl" />,
      },
    ],
  },
  fr: {
    title: "Notre Processus de Travail",
    subtitle:
      "Nous suivons une méthodologie structurée qui garantit des résultats exceptionnels à chaque projet. Notre approche combine précision technique et communication claire et constante.",
    steps: [
      {
        number: "01",
        title: "Consultation Initiale",
        description:
          "Nous commençons par écouter vos besoins et objectifs. À cette étape, nous veillons à bien comprendre votre vision et les défis auxquels vous faites face.",
        icon: <FaHandshake className="text-2xl" />,
      },
      {
        number: "02",
        title: "Analyse et Planification",
        description:
          "Nous développons une stratégie détaillée et un plan d'action. Nous définissons les exigences techniques, établissons les calendriers et allouons les ressources pour votre projet.",
        icon: <FaClipboardList className="text-2xl" />,
      },
      {
        number: "03",
        title: "Développement et Mise en œuvre",
        description:
          "Notre équipe d'experts travaille à la création de votre solution, appliquant des méthodologies agiles pour garantir qualité et efficacité à chaque étape.",
        icon: <FaCode className="text-2xl" />,
      },
      {
        number: "04",
        title: "Tests et Optimisation",
        description:
          "Nous réalisons des tests approfondis pour garantir que tout fonctionne parfaitement. Nous optimisons les performances et affinons chaque détail de la solution.",
        icon: <FaSearch className="text-2xl" />,
      },
      {
        number: "05",
        title: "Livraison et Formation",
        description:
          "Nous mettons en œuvre la solution finale et fournissons la formation nécessaire. Notre équipe veille à ce que votre équipe soit à l'aise avec toutes les fonctionnalités.",
        icon: <FaRocket className="text-2xl" />,
      },
      {
        number: "06",
        title: "Support et Maintenance Continue",
        description:
          "Nous offrons un support continu pour assurer un succès à long terme. Nos plans de maintenance gardent votre solution sécurisée, à jour et performante.",
        icon: <FaHeadset className="text-2xl" />,
      },
    ],
  },
  ja: {
    title: "私たちの作業プロセス",
    subtitle:
      "私たちは、すべてのプロジェクトで卓越した成果を保証する構造化された方法論に従っています。技術的な正確さと明確で継続的なコミュニケーションを組み合わせています。",
    steps: [
      {
        number: "01",
        title: "初回相談",
        description:
          "お客様のニーズと目標を伺います。この段階で、お客様のビジョンと直面している課題を完全に理解することを確実にします。",
        icon: <FaHandshake className="text-2xl" />,
      },
      {
        number: "02",
        title: "分析と計画",
        description:
          "詳細な戦略と行動計画を作成します。技術要件を定義し、タイムラインを設定し、プロジェクトのリソースを割り当てます。",
        icon: <FaClipboardList className="text-2xl" />,
      },
      {
        number: "03",
        title: "開発と実装",
        description:
          "専門チームがソリューションの作成に取り組み、品質と効率を確保するためにアジャイル手法を適用します。",
        icon: <FaCode className="text-2xl" />,
      },
      {
        number: "04",
        title: "テストと最適化",
        description:
          "すべてが完璧に機能することを確認するために徹底的なテストを実施します。パフォーマンスを最適化し、ソリューションの細部を調整します。",
        icon: <FaSearch className="text-2xl" />,
      },
      {
        number: "05",
        title: "納品とトレーニング",
        description:
          "最終ソリューションを実装し、必要なトレーニングを提供します。チームがすべての機能を快適に扱えるようにします。",
        icon: <FaRocket className="text-2xl" />,
      },
      {
        number: "06",
        title: "継続的なサポートと保守",
        description:
          "長期的な成功を確実にするために継続的なサポートを提供します。保守プランでソリューションを安全に、最新の状態に保ち、最適なパフォーマンスを維持します。",
        icon: <FaHeadset className="text-2xl" />,
      },
    ],
  },
  zh: {
    title: "我们的工作流程",
    subtitle:
      "我们遵循结构化的方法，确保每个项目都能取得卓越成果。我们的方式结合了技术精准和清晰持续的沟通。",
    steps: [
      {
        number: "01",
        title: "初步咨询",
        description:
          "我们首先倾听您的需求和目标。在此阶段，我们确保完全理解您的愿景和面临的挑战。",
        icon: <FaHandshake className="text-2xl" />,
      },
      {
        number: "02",
        title: "分析与规划",
        description:
          "我们制定详细的策略和行动计划。定义技术需求，确定时间表，并为您的项目分配资源。",
        icon: <FaClipboardList className="text-2xl" />,
      },
      {
        number: "03",
        title: "开发与实施",
        description:
          "我们的专家团队致力于创建您的解决方案，应用敏捷方法确保每个阶段的质量和效率。",
        icon: <FaCode className="text-2xl" />,
      },
      {
        number: "04",
        title: "测试与优化",
        description:
          "我们进行全面测试，确保一切运行完美。优化性能，完善解决方案的每一个细节。",
        icon: <FaSearch className="text-2xl" />,
      },
      {
        number: "05",
        title: "交付与培训",
        description:
          "我们实施最终解决方案并提供必要的培训，确保您的团队能够熟练使用所有功能。",
        icon: <FaRocket className="text-2xl" />,
      },
      {
        number: "06",
        title: "持续支持与维护",
        description:
          "我们继续提供支持，确保长期成功。我们的维护计划可保持您的解决方案安全、更新及时、性能卓越。",
        icon: <FaHeadset className="text-2xl" />,
      },
    ],
  },
};

interface WorkProcessProps {
  readonly language: string;
}
const WorkProcess: React.FC<WorkProcessProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section id="process" className="section bg-white dark:bg-gray-900 py-16 animate-fade-in-down">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connection line - only visible on larger screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.steps.map((step) => (
              <div key={step.title} className="relative z-10">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-light text-white flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
