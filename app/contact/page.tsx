"use client";
import React, { useState } from "react";
import { personalInfo } from "@/lib/data";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde sitio: ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}%0AEmail: ${email}%0A%0A${message}`);
    // Abre cliente de correo con mailto
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contacto</h1>

      <p className="text-lg text-gray-700 mb-8">
        ¿Tienes un proyecto o quieres ponerte en contacto conmigo? Rellena el
        formulario y te responderé lo antes posible.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl">
        <label className="block mb-4">
          <span className="text-gray-700">Nombre</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Tu nombre"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="tu@correo.com"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Mensaje</span>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            rows={6}
            placeholder="Cuéntame sobre tu proyecto..."
          />
        </label>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar
          </button>

          <a
            href={`mailto:${personalInfo.email}`}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Enviar por Email
          </a>
        </div>
      </form>
    </div>
  );
}
