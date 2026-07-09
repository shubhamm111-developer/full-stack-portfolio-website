import { useState } from "react";

const API_URL = "http://localhost:5000/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="module" style={{ borderBottom: "none" }}>
      <div className="container">
        <div className="module-header">
          <span className="module-tag">MOD.04</span>
          <h2 className="module-title">Contact</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label className="field-label" htmlFor="name">NAME</label>
            <input
              className="field-input"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="field-label" htmlFor="email">EMAIL</label>
            <input
              className="field-input"
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="field-label" htmlFor="message">MESSAGE</label>
            <textarea
              className="field-input"
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p className="form-msg success">// message received.</p>}
          {status === "error" && <p className="form-msg error">// failed to send. try again.</p>}
        </form>
      </div>
    </section>
  );
}