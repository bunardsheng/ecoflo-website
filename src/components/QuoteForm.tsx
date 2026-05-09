"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else throw new Error();
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all duration-200" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all duration-200" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
        <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all duration-200" />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">What would you like washed?</label>
        <select id="service" name="service" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all duration-200">
          <option value="">Select a service type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="fleet">Fleet</option>
          <option value="agricultural">Agricultural</option>
          <option value="industrial">Industrial</option>
          <option value="new-construction">New Construction</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all duration-200 resize-none" />
      </div>
      <button type="submit" disabled={status === "sending"} className="w-full bg-brand-green text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-200 cursor-pointer disabled:opacity-70">
        {status === "sending" ? "Sending..." : status === "sent" ? "Sent! We'll be in touch." : status === "error" ? "Error - please call us" : "Get My Free Quote"}
      </button>
    </form>
  );
}
