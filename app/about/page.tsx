import { Metadata } from "next";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

export default function AboutPage() {
  const skills = [
    "JavaScript/TypeScript",
    "React & Next.js",
    "Node.js",
    "PostgreSQL & MongoDB",
    "Tailwind CSS",
    "Git & GitHub",
    "Docker",
    "AWS",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre Mí</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
            fill
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hola! Soy {personalInfo.name}
          </h2>

          <p className="text-lg text-gray-700 space-y-4">
            Soy un desarrollador full stack apasionado por crear experiencias
            web excepcionales. Con más de X años de experiencia, me especializo
            en construir aplicaciones modernas y escalables.
            <br />
            <br />
            Mi enfoque está en escribir código limpio, mantenible y eficiente,
            siempre buscando las mejores prácticas y las últimas tecnologías
            para entregar productos de alta calidad.
            <br />
            <br />
            Cuando no estoy programando, me gusta contribuir a proyectos de
            código abierto, escribir artículos técnicos y aprender nuevas
            tecnologías.
          </p>
        </div>
      </div>

      {/* Skills Section con Lazy Loading (implícito ✔) */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Habilidades Técnicas</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <p className="font-semibold text-gray-800">{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
