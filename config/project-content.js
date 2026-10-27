/* Keys match projects.items[].id. Sections appear in list order.
   Duplicate any section or media item. There is no fixed item limit.
   These are illustrative samples, not claims about your past work. */
Portfolio.projectContent = {
  terrain: {// Procedural water shader in Unity
    enabled: true,
    description: { enabled: true, value: "Explore the real-time functionality and visual results of the shader, highlighting its key features, dynamic effects, and customization capabilities in Unity." },
    sections: [
      {
        enabled: false, type: "image", id: "terrain-study",
        title: { enabled: true, value: "Building a world from a simple idea" },
        description: { enabled: true, value: "Start with a broad silhouette, layer in detail, and give artists meaningful controls. These original vector studies stand in for your screenshots and renders." },
        images: [
          { enabled: true, src: "assets/images/Water.svg", alt: "Procedural terrain study", caption: { enabled: true, value: "01 — . Click to expand." } },   
        ]
      },
      {
        enabled: false, type: "code", id: "terrain-code",
        title: { enabled: true, value: "The building blocks" },
        description: { enabled: true, value: "An illustrative layered-noise function. Replace this with your own implementation; code is displayed as text, never executed." },
        blocks: [
          { enabled: true, name: { enabled: true, value: "TerrainNoise.hlsl" }, language: "hlsl", code: "float LayeredNoise(float2 position)\n{\n    float height = 0.0;\n    float amplitude = 0.5;\n    float frequency = 1.0;\n\n    for (int octave = 0; octave < 5; ++octave)\n    {\n        height += Noise(position * frequency) * amplitude;\n        frequency *= 2.0;\n        amplitude *= 0.5;\n    }\n\n    return height;\n}" }
        ]
      },
      {
        enabled: true, type: "video", id: "terrain-video",
        title: { enabled: true, value: "See it in motion" },
        description: { enabled: true, value: "Video slot demonstration: Watch the shader in action, showcasing its visual effects, dynamic features, and real-time customization in Unity." },
        mediaGrid: { columns: 1 },
        videos: [{ enabled: true, url: "https://youtu.be/7dablWvO-4g", title: "Big Buck Bunny — demonstration video", thumbnail: { enabled: true, src: "assets/images/Water.svg", alt: "Demo video placeholder — replace with your own thumbnail" }, caption: { enabled: false, value: "External demo video · Replace before publishing" } }]
      }
      
    ]
  },
  iridescence: {// Procedural 2D Wind Shader in Unity
    enabled: true,
    description: { enabled: true, value: "A sample material exploration. Describe your artistic target, rendering approach, and the compromises you made." },
    sections: [
          
      {
        enabled: true, type: "video", id: "terrain-video",
        title: { enabled: true, value: "See it in motion" },
        description: { enabled: true, value: "Video slot demonstration: Watch the shader in action, showcasing its visual effects, dynamic features, and real-time customization in Unity." },
        mediaGrid: { columns: 1 },
        videos: [{ enabled: true, url: "https://youtu.be/Eu5yPbEBqf8", title: "Demo video", thumbnail: { enabled: true, src: "assets/images/Wind.svg", alt: "Demo video placeholder — replace with your own thumbnail" }, caption: { enabled: false, value: "External demo video · Replace before publishing" } }]
      }
      
    ]
  },
  morphbound: {// Disolve Shader in Unity
    enabled: true,
    description: { enabled: true, value: "Combined procedural Wind and Dissolve effects in Unity Shader Graph to create dynamic 2D sprite animations with customizable wind movement and smooth dissolve transitions." },
    sections: [
      {
        enabled: true, type: "video", id: "terrain-video",
        title: { enabled: true, value: "See it in motion" },
        description: { enabled: true, value: "Video slot demonstration: Watch the shader in action, showcasing its visual effects, dynamic features, and real-time customization in Unity." },
        mediaGrid: { columns: 1 },
        videos: [{ enabled: true, url: "https://youtu.be/4KV15ENQ8oU", title: "Demo video", thumbnail: { enabled: true, src: "assets/images/Dissolve.svg", alt: "Demo video placeholder — replace with your own thumbnail" }, caption: { enabled: false, value: "External demo video · Replace before publishing" } }]
      }
    ]
  },
  scatter: {
    enabled: true,
    description: { enabled: true, value: "A sample artist-tool case study. Explain the manual task you improved and how an artist uses the finished tool." },
    sections: [
      { enabled: true, type: "image", title: { enabled: true, value: "Controlled variation" }, description: { enabled: true, value: "Show the interface, distribution controls, and results side by side." }, mediaGrid: { columns: 1 }, images: [{ enabled: true, src: "assets/images/scatter.svg", alt: "Procedural scatter study" }] },
      { enabled: true, type: "code", title: { enabled: true, value: "Repeatable by design" }, description: { enabled: true, value: "An illustrative seeded point generator. A stable seed makes iteration reproducible." }, blocks: [{ enabled: true, name: { enabled: true, value: "scatter.py" }, language: "python", code: "import random\n\ndef scatter_points(count, seed=42):\n    rng = random.Random(seed)\n    return [(rng.uniform(-1, 1), rng.uniform(-1, 1))\n            for _ in range(count)]" }] }
    ]
  },
  particles: {
    enabled: true, description: { enabled: true, value: "A sample visual effects study. Replace the artwork with captures from your own real-time effects." },
    sections: [{ enabled: true, type: "image", title: { enabled: true, value: "Finding the flow" }, description: { enabled: true, value: "Break down the force fields, timing, and color choices that give the effect its character." }, mediaGrid: { columns: 1 }, images: [{ enabled: true, src: "assets/images/particles.svg", alt: "Flowing particle field" }] }]
  },
  pipeline: {
    enabled: true, description: { enabled: true, value: "A sample pipeline project. Describe the handoff between your DCC tool, validation step, and game engine." },
    sections: [
      { enabled: true, type: "image", title: { enabled: true, value: "Connect the creative process" }, description: { enabled: true, value: "Use diagrams and captures to communicate where your tool fits in the production process." }, mediaGrid: { columns: 1 }, images: [{ enabled: true, src: "assets/images/pipeline.svg", alt: "Connected procedural nodes" }] },
      { enabled: true, type: "code", title: { enabled: true, value: "Validate before export" }, description: { enabled: true, value: "An illustrative validation utility. Document inputs and error cases alongside your code." }, blocks: [{ enabled: true, name: { enabled: true, value: "validate.py" }, language: "python", code: 'def validate_asset(asset):\n    errors = []\n    if not asset.name.startswith("SM_"):\n        errors.append("Use the SM_ naming prefix.")\n    if not asset.materials:\n        errors.append("Assign at least one material.")\n    return errors' }] }
    ]
  }
};
