Portfolio.home = {
  enabled: true, id: "home",
  background: { enabled: true, colors: ["#151c18"], angle: 135, opacity: 1 },
  image: { enabled: true, src: "assets/images/hero-terrain3.svg", alt: "Abstract wireframe landscape", objectFit: "cover", objectPosition: "center", opacity: 1

   },
  overlay: { enabled: true, colors: ["#d4d4d400", "#000000"], angle: 180, opacity: 1 },
  style: { textAlign: "center" },
  content: { enabled: true, style: { maxWidth: "1100px" } },
  eyebrow: { enabled: true, value: "ART / CODE / REAL-TIME", color: "#fcfcfc", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.24em", textAlign: "center" },
  name: { enabled: true, value: "Suraj A", fontSize: "clamp(64px, 10.5vw, 156px)", fontWeight: 500, letterSpacing: "-0.065em", lineHeight: 1.25, textAlign: "center" },
  role: { enabled: true, value: "Technical Artist", fontSize: "clamp(20px, 2.3vw, 32px)", fontWeight: 400, letterSpacing: "-0.02em", color: "#c8d1bd", textAlign: "center" },
  description: { enabled: true, value: "Bridging the space between imagination and implementation.", fontSize: "clamp(14px, 1.15vw, 18px)", color: "#b4b4b4", textAlign: "center", lineHeight: 1.6 },
  buttonGroup: { enabled: true, style: { gap: "12px", marginTop: "32px" } },
  buttons: [
    { enabled: true, id: "work", type: "navigate", target: "projects", text: { enabled: true, value: "Explore my work" }, icon: { enabled: true, value: "↓" } },
    {
      enabled: true, id: "about", type: "popup", text: { enabled: true, value: "About me" }, icon: { enabled: true, value: "+" },
      background: { enabled: true, colors: ["#0a0a0a"], angle: 0, opacity: 1 },
      hoverBackground: { enabled: true, colors: ["#3a3a3aa8"], angle: 0, opacity: 1 },
      style: { borderColor: "#fffefe79", backdropFilter: "blur(12px)" },
      textStyle: { color: "#eef0e8" },
      popup: {
        enabled: true,
        eyebrow: { enabled: true, value: "A LITTLE ABOUT ME", color: "#fcfcfc", fontSize: "0.7rem", letterSpacing: "0.18em" },
        title: { enabled: true, value: "Creative thinking. Technical curiosity." },
        background: { enabled: true, colors: ["#0a0a0a"], angle: 0, opacity: 1 },
        hoverBackground: { enabled: true, colors: ["#3a3a3aa8"], angle: 0, opacity: 1 },
        style: { borderColor: "#fffefe7a", backdropFilter: "blur(12px)" },
        content: { enabled: true, value: "I'm a Technical Artist with a background in 3D art & 2D art and a passion for game development.I have over 3.4 years of experience in 3D modeling, texturing and Rendring, materials, and lighting and.\n\n Currently pursuing an M.Sc. in Game Technology, I'm focusing on Unity, Shader Graph, shader development, real-time VFX, and graphics optimization. " },
        buttons: [{ enabled: true, type: "navigate", target: "contact", text: { enabled: true, value: "Let’s connect" } }]
      }
    },
    {
      enabled: true, id: "resume", type: "redirect", url: "assets/documents/resume-placeholder.pdf",
      text: { enabled: true, value: "Resume" }, textStyle: { color: "#eef0e8" },
      background: { enabled: true, colors: ["#0a0a0a"], angle: 0, opacity: 1 },
      style: { borderColor: "#fffefe79", backdropFilter: "blur(12px)" },
      hoverBackground: { enabled: true, colors: ["#ffffff12"], angle: 0, opacity: 1 }
    }
  ],
  footer: {
    enabled: true,
    left: { enabled: true, value: "A PORTFOLIO IN ART & CODE", color: "#eef1eb", fontSize: "0.65rem", letterSpacing: "0.14em" },
    right: { enabled: true, value: "SCROLL TO EXPLORE  ↓", color: "#ffffff", fontSize: "0.65rem", letterSpacing: "0.14em" }
  }
};
