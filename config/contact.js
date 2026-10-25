Portfolio.contact = {
  enabled: true, id: "contact",
  background: { enabled: true, colors: ["#070707", "rgba(8, 8, 8, 0.5)"], angle: 180, opacity: 1 },
  style: { borderTop: "1px solid #394232" },
  eyebrow: { enabled: true, value: " CONTACT", color: "#f3eeee", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.14em" },
  title: { enabled: true, value: "Let’s make\nsomething extraordinary.", fontSize: "clamp(38px, 5.2vw, 78px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.045em", whiteSpace: "pre-line" },
  description: { enabled: true, value: "Interested in working together or discussing an opportunity? \nFeel free to reach out. I'd love to connect.", color: "#d4d4d4", fontSize: "1.1rem", whiteSpace: "pre-line" },
  buttonGroup: { enabled: true, style: { gap: "12px" } },
  buttons: [
    { enabled: true, type: "redirect", url: "mailto:Surajsurya0518@gmail.com", text: { enabled: true, value: "Email me" }, textStyle: { color: "#ff0000c7" }, background: { enabled: true, colors: ["transparent"], angle: 0, opacity: 1 }, style: { borderColor: "#ffffff79" } },
    { enabled: true, type: "redirect", url: "https://www.linkedin.com/in/suraj052002/", text: { enabled: true, value: "LinkedIn" }, textStyle: { color: "#1dfc00a9" }, background: { enabled: true, colors: ["transparent"], angle: 0, opacity: 1 }, style: { borderColor: "#ffffff81" } },
    { enabled: true, type: "redirect", url: "https://github.com/", text: { enabled: true, value: "GitHub" }, textStyle: { color: "#0011fdcc" }, background: { enabled: true, colors: ["transparent"], angle: 0, opacity: 1 }, style: { borderColor: "#fcfcfc9a" } }
  ],
  footer: {
    enabled: true, style: { borderTop: "1px solid #fbfcfb62" },
    copyright: { enabled: true, value: "© {year} Suraj A", fontSize: "0.72rem", color: "#ffffff" },
    note: { enabled: true, value: "TECHNICAL ARTIST | SHADERS • VFX • REAL-TIME GRAPHICS", fontSize: "0.62rem", letterSpacing: "0.12em", color: "#ffffff" }
  }
};
