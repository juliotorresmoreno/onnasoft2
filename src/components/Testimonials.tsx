import React from "react";

const translations = {
  en: {
    title: "What Our Clients Say",
    subtitle:
      "We take pride in the positive impact our solutions have on our clients' businesses. Their satisfaction is our best indicator of success.",
    testimonials: [
      {
        quote:
          "OnnaSoft was key to getting our Odoo infrastructure up and running. Their technical expertise and responsiveness helped us launch Eclosión IR smoothly and on time.",
        author: "Carlos Navarrete",
        position: "Founder, Eclosión IT",
        rating: 5,
      },
      {
        quote:
          "Working with OnnaSoft made all the difference. Although they joined us as backend developers, they proactively set up and optimized our AWS infrastructure, ensuring a robust and scalable environment.",
        author: "Andrea Gutiérrez",
        position: "Technical Lead, Confidential Project",
        rating: 5,
      },
      {
        quote:
          "We’ve partnered with OnnaSoft on multiple education-focused projects. From building data pipelines to developing software for faculty and student assessment, their work has always been efficient and impactful.",
        author: "Roberto Morales",
        position: "Academic Technology Consultant",
        rating: 5,
      },
    ],
  },
  es: {
    title: "Lo Que Dicen Nuestros Clientes",
    subtitle:
      "Nos enorgullece el impacto positivo que nuestras soluciones tienen en los negocios de nuestros clientes. Su satisfacción es nuestro mejor indicador de éxito.",
    testimonials: [
      {
        quote:
          "OnnaSoft fue clave para poner en marcha nuestra infraestructura Odoo. Su experiencia técnica y capacidad de respuesta nos ayudaron a lanzar Eclosión IR de forma fluida y puntual.",
        author: "Carlos Navarrete",
        position: "Fundador, Eclosión IT",
        rating: 5,
      },
      {
        quote:
          "Trabajar con OnnaSoft marcó la diferencia. Aunque se unieron como desarrolladores backend, proactivamente configuraron y optimizaron nuestra infraestructura AWS, asegurando un entorno robusto y escalable.",
        author: "Andrea Gutiérrez",
        position: "Líder Técnico, Proyecto Confidencial",
        rating: 5,
      },
      {
        quote:
          "Hemos colaborado con OnnaSoft en múltiples proyectos educativos. Desde la construcción de pipelines de datos hasta el desarrollo de software para evaluación de profesores y estudiantes, su trabajo siempre ha sido eficiente y de gran impacto.",
        author: "Roberto Morales",
        position: "Consultor de Tecnología Académica",
        rating: 5,
      },
    ],
  },
  fr: {
    title: "Ce Que Disent Nos Clients",
    subtitle:
      "Nous sommes fiers de l'impact positif de nos solutions sur les entreprises de nos clients. Leur satisfaction est notre meilleur indicateur de réussite.",
    testimonials: [
      {
        quote:
          "OnnaSoft a été clé pour lancer notre infrastructure Odoo. Leur expertise technique et leur réactivité nous ont aidés à lancer Eclosión IR en douceur et à temps.",
        author: "Carlos Navarrete",
        position: "Fondateur, Eclosión IT",
        rating: 5,
      },
      {
        quote:
          "Travailler avec OnnaSoft a fait toute la différence. Bien qu'ils soient arrivés en tant que développeurs backend, ils ont mis en place et optimisé notre infrastructure AWS de manière proactive, garantissant un environnement robuste et évolutif.",
        author: "Andrea Gutiérrez",
        position: "Responsable Technique, Projet Confidentiel",
        rating: 5,
      },
      {
        quote:
          "Nous avons collaboré avec OnnaSoft sur plusieurs projets éducatifs. De la construction de pipelines de données au développement de logiciels pour l'évaluation du corps enseignant et des étudiants, leur travail a toujours été efficace et impactant.",
        author: "Roberto Morales",
        position: "Consultant en Technologie Académique",
        rating: 5,
      },
    ],
  },
  ja: {
    title: "お客様の声",
    subtitle:
      "当社のソリューションがクライアントのビジネスに与えるポジティブな影響を誇りに思います。彼らの満足こそが成功の最大の指標です。",
    testimonials: [
      {
        quote:
          "OnnaSoftは私たちのOdooインフラの立ち上げに欠かせない存在でした。彼らの技術的専門知識と迅速な対応により、Eclosión IRをスムーズかつ期限通りにローンチできました。",
        author: "カルロス・ナバレテ",
        position: "創業者、Eclosión IT",
        rating: 5,
      },
      {
        quote:
          "OnnaSoftと仕事をすることで大きな違いが生まれました。バックエンド開発者として参加しましたが、積極的にAWSインフラのセットアップと最適化を行い、堅牢でスケーラブルな環境を実現しました。",
        author: "アンドレア・グティエレス",
        position: "テクニカルリード、機密プロジェクト",
        rating: 5,
      },
      {
        quote:
          "私たちは教育関連の複数のプロジェクトでOnnaSoftと協力しています。データパイプラインの構築から教員・学生の評価ソフトウェア開発まで、彼らの仕事は常に効率的で影響力があります。",
        author: "ロベルト・モラレス",
        position: "アカデミックテクノロジーコンサルタント",
        rating: 5,
      },
    ],
  },
  zh: {
    title: "客户评价",
    subtitle:
      "我们为我们的解决方案对客户业务产生的积极影响感到自豪。客户的满意度是我们成功的最佳指标。",
    testimonials: [
      {
        quote:
          "OnnaSoft是我们启动Odoo基础设施的关键。他们的技术专长和响应速度帮助我们顺利按时推出了Eclosión IR。",
        author: "卡洛斯·纳瓦雷特",
        position: "创始人，Eclosión IT",
        rating: 5,
      },
      {
        quote:
          "与OnnaSoft合作带来了巨大的不同。虽然他们以后端开发人员身份加入，但积极搭建和优化了我们的AWS基础设施，确保了强大且可扩展的环境。",
        author: "安德烈亚·古铁雷斯",
        position: "技术主管，机密项目",
        rating: 5,
      },
      {
        quote:
          "我们与OnnaSoft合作过多个教育项目。从构建数据管道到开发教师和学生评估软件，他们的工作一直高效且有影响力。",
        author: "罗伯托·莫拉莱斯",
        position: "学术技术顾问",
        rating: 5,
      },
    ],
  },
};

interface TestimonialProps {
  readonly language: string;
}

const Testimonials: React.FC<TestimonialProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={"idx" + i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={i < rating ? "text-primary" : "text-gray-300"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ));
  };

  return (
    <section className="section bg-white animate-fade-in-down">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial) => (
            <div key={testimonial.author} className="card">
              <div className="flex text-primary mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
