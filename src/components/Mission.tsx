import React from "react";
import { FaLightbulb, FaUsers, FaChartLine, FaHandshake } from "react-icons/fa";

const translations = {
  en: {
    title: "Making Your Projects Real",
    desc1:
      "At OnnaSoft, we don't just develop software; we transform ideas into tangible realities. Our mission is simple yet powerful: to make your projects real.",
    desc2:
      "We understand that behind every project there's a vision, a goal, and often years of planning and dreaming. That's why we approach each client's project with the dedication and care it deserves.",
    desc3:
      "From concept to completion, we work closely with you to ensure that what we deliver isn't just functional code, but the realization of your vision—brought to life exactly as you imagined it, or even better.",
    items: [
      {
        title: "From Concept to Reality",
        desc: "We take your ideas and transform them into functional, beautiful digital solutions that exceed expectations.",
      },
      {
        title: "Client-Centered Approach",
        desc: "Your vision guides our work. We listen, understand, and collaborate to ensure your goals are met and exceeded.",
      },
      {
        title: "Tangible Results",
        desc: "We focus on delivering measurable outcomes that drive real business value and help you achieve your objectives.",
      },
      {
        title: "Long-Term Partnership",
        desc: "We're committed to your success beyond project completion, providing ongoing support and evolving with your needs.",
      },
    ],
  },
  es: {
    title: "Hacemos Realidad Tus Proyectos",
    desc1:
      "En OnnaSoft, no solo desarrollamos software; transformamos ideas en realidades tangibles. Nuestra misión es simple pero poderosa: hacer realidad tus proyectos.",
    desc2:
      "Sabemos que detrás de cada proyecto hay una visión, una meta y, a menudo, años de planificación y sueños. Por eso abordamos cada proyecto con la dedicación y el cuidado que merece.",
    desc3:
      "Desde el concepto hasta la entrega, trabajamos contigo para asegurarnos de que lo que entregamos no sea solo código funcional, sino la realización de tu visión, tal como la imaginaste o incluso mejor.",
    items: [
      {
        title: "Del Concepto a la Realidad",
        desc: "Tomamos tus ideas y las transformamos en soluciones digitales funcionales y hermosas que superan expectativas.",
      },
      {
        title: "Enfoque Centrado en el Cliente",
        desc: "Tu visión guía nuestro trabajo. Escuchamos, entendemos y colaboramos para asegurar que tus objetivos se cumplan y superen.",
      },
      {
        title: "Resultados Tangibles",
        desc: "Nos enfocamos en entregar resultados medibles que generen verdadero valor de negocio y te ayuden a alcanzar tus objetivos.",
      },
      {
        title: "Alianza a Largo Plazo",
        desc: "Estamos comprometidos con tu éxito más allá de la entrega del proyecto, brindando soporte continuo y evolucionando contigo.",
      },
    ],
  },
  fr: {
    title: "Rendre Vos Projets Réels",
    desc1:
      "Chez OnnaSoft, nous ne faisons pas que développer des logiciels ; nous transformons des idées en réalités tangibles. Notre mission est simple mais puissante : concrétiser vos projets.",
    desc2:
      "Nous comprenons que derrière chaque projet se cache une vision, un objectif et souvent des années de planification et de rêve. C'est pourquoi nous abordons chaque projet avec le soin et la dévotion qu'il mérite.",
    desc3:
      "Du concept à la réalisation, nous travaillons avec vous pour livrer non seulement du code fonctionnel, mais une vision concrétisée – fidèle à votre imagination, voire meilleure.",
    items: [
      {
        title: "Du Concept à la Réalité",
        desc: "Nous transformons vos idées en solutions numériques fonctionnelles et esthétiques qui dépassent les attentes.",
      },
      {
        title: "Approche Centrée sur le Client",
        desc: "Votre vision guide notre travail. Nous écoutons, comprenons et collaborons pour dépasser vos objectifs.",
      },
      {
        title: "Résultats Concrets",
        desc: "Nous nous concentrons sur des résultats mesurables qui apportent une réelle valeur commerciale.",
      },
      {
        title: "Partenariat à Long Terme",
        desc: "Nous nous engageons à vos côtés au-delà du projet avec un soutien continu et une évolution commune.",
      },
    ],
  },
  ja: {
    title: "あなたのプロジェクトを現実に",
    desc1:
      "OnnaSoftでは、単なるソフトウェア開発ではなく、アイデアを現実の形に変えます。私たちのミッションはシンプルかつ力強いものです：あなたのプロジェクトを現実にすること。",
    desc2:
      "すべてのプロジェクトの背後には、ビジョンや目標、そして何年にもわたる計画と夢があります。そのため、私たちはすべてのクライアントのプロジェクトに真摯に向き合います。",
    desc3:
      "企画から完成まで、私たちはあなたと密に連携し、ただのコードではなく、あなたのビジョンをそのまま、あるいはそれ以上に具現化します。",
    items: [
      {
        title: "コンセプトから現実へ",
        desc: "あなたのアイデアを、機能的で美しいデジタルソリューションへと変換します。",
      },
      {
        title: "顧客中心のアプローチ",
        desc: "あなたのビジョンが私たちの指針です。目標の達成に向けて共に取り組みます。",
      },
      {
        title: "具体的な成果",
        desc: "ビジネス価値を高める成果を提供し、目標達成を支援します。",
      },
      {
        title: "長期的なパートナーシップ",
        desc: "プロジェクト終了後も、継続的にサポートし、共に成長していきます。",
      },
    ],
  },
  zh: {
    title: "让你的项目成真",
    desc1:
      "在 OnnaSoft，我们不仅开发软件，更将创意转化为现实。我们的使命简单而有力：让你的项目成真。",
    desc2:
      "我们明白，每个项目背后都有一个愿景、一个目标，甚至是多年的计划和梦想。因此我们全心投入每一个项目。",
    desc3:
      "从概念到完成，我们与你紧密合作，确保交付的不仅是代码，更是你梦想的实现，甚至超出你的期待。",
    items: [
      {
        title: "从构想到现实",
        desc: "我们将你的创意转化为功能强大且美观的数字化解决方案。",
      },
      {
        title: "以客户为中心",
        desc: "你的愿景引导我们的工作。我们倾听、理解并协作实现目标。",
      },
      {
        title: "实实在在的成果",
        desc: "我们专注于交付可衡量的成果，带来真正的商业价值。",
      },
      {
        title: "长期合作伙伴关系",
        desc: "我们致力于在项目交付之后，继续支持并与你共同成长。",
      },
    ],
  },
};

const Mission: React.FC<{ language: string }> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="section bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative lg:p-4">
              <div
                className="absolute -inset-4 bg-primary text-white rounded-xl transform rotate-3 lg:mr-0 mr-5"
              ></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-xl">
                  {t.desc1}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t.desc2}
                </p>
                <p className="text-gray-600 dark:text-gray-300">{t.desc3}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[FaLightbulb, FaUsers, FaChartLine, FaHandshake].map(
                (Icon, i) => (
                  <div
                    key={t.items[i].title}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-4 p-3 bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center">
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {t.items[i].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t.items[i].desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
