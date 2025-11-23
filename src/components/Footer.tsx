import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-7">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos
            reservados.
          </p>

          <ul className="flex gap-6">
            <li>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                Github
              </a>
            </li>

            <li>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition"
                aria-label="Email"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
