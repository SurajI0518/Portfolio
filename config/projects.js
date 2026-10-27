Portfolio.projects = {
  enabled: true, id: "projects", defaultCategory: "all",
  background: { enabled: true, colors: ["#020202"], angle: 0, opacity: 1 },
  style: {},
  eyebrow: { enabled: true, value: " SELECTED WORK", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", color: "#afafaf" },
  title: { enabled: true, value: "Featured Work", fontSize: "clamp(42px, 5.3vw, 76px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.045em" },
  description: { enabled: true, value: "Experiments, systems, and worlds.\nA selection of what happens when art meets code.", color: "#8b8b8b", fontSize: "0.9rem", whiteSpace: "pre-line" },
  categoriesBar: { enabled: true, style: { gap: "8px" } },
  categoryDefaults: {
    enabled: true, text: { enabled: true, fontSize: "0.78rem", color: "#f5f5f5", fontWeight: 500 },
    background: { enabled: true, colors: ["transparent"], angle: 0, opacity: 1 },
    hoverBackground: { enabled: true, colors: ["#5f5f5f9c"], angle: 0, opacity: 1 },
    activeBackground: { enabled: true, colors: ["#dadada"], angle: 0, opacity: 1 },
    activeText: { color: "#192113" },
    icon: { enabled: false }, style: { padding: "10px 18px", borderRadius: "2px", minHeight: "44px" }
  },
  categories: [
    { enabled: true, id: "all", all: true, text: { enabled: true, value: "All work" } },
    { enabled: true, id: "shaders", text: { enabled: true, value: "Shaders & VFX" } },
    { enabled: true, id: "tools", text: { enabled: true, value: "3D & Texturing" } },
    { enabled: true, id: "procedural", text: { enabled: true, value: "Procedural Art" } },
    
  ],
  grid: { enabled: true, desktopColumns: 3, tabletColumns: 2, mobileColumns: 1, gap: "28px" },
  cardDefaults: {
    enabled: true,
    background: { enabled: true, colors: ["#030303"], angle: 130, opacity: 1 },
    hoverBackground: { enabled: true, colors: ["#1a1a1a"], angle: 130, opacity: 1 },
    style: { border: "1px solid #ffffff8c", borderRadius: "5px" },
    thumbnail: { enabled: true, aspectRatio: "16 / 10", objectFit: "contain", objectPosition: "center" },
    body: { enabled: true, style: { padding: "24px" } },
    kicker: { enabled: true, color: "#8c9b7d", fontSize: "0.61rem", letterSpacing: "0.13em", fontWeight: 600 },
    title: { enabled: true, color: "#edf0e7", fontSize: "clamp(21px, 1.7vw, 27px)", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.025em" },
    description: { enabled: true, color: "#a0a997", fontSize: "0.85rem", lineHeight: 1.7 },
    arrow: { enabled: true, value: "↗", color: "#b5c7a0", fontSize: "1.35rem" },
    tags: { enabled: true, style: { gap: "6px" } },
    tagDefaults: { enabled: true, text: { enabled: true, color: "#a8b59c", fontSize: "0.61rem", fontWeight: 500 }, background: { enabled: true, colors: ["#242b20"], angle: 0, opacity: 1 }, style: { padding: "4px 8px", borderRadius: "2px" } }
  },
  detail: {
    enabled: true,
    navigation: { enabled: true, top: { enabled: true }, bottom: { enabled: true }, style: {} },
    breadcrumb: { enabled: true, separator: " > ", fontSize: "0.82rem", color: "#eeeeee" },
    backButton: { enabled: true, text: { enabled: true, value: "Back to projects" }, icon: { enabled: true, value: "←" }, style: { padding: "10px 16px" } },
    title: { enabled: true, fontSize: "clamp(34px, 5vw, 64px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.04em" },
    description: { enabled: true, fontSize: "1.05rem", color: "#c8c9c8", lineHeight: 1.8 },
    tags: { enabled: true },
    sectionDefaults: {
      enabled: true,
      background: { enabled: true, colors: ["#080808"], angle: 135, opacity: 1 },
      style: { padding: "clamp(20px, 4vw, 48px)", borderRadius: "5px", border: "1px solid #d4d4d4" },
      title: { enabled: true, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.03em" },
      description: { enabled: true, fontSize: "0.95rem", color: "#d3d3d3", whiteSpace: "pre-line" },
      mediaGrid: { enabled: true, columns: 2, gap: "16px" },
      imageDefaults: { enabled: true, thumbnail: { enabled: true, objectFit: "cover", aspectRatio: "16 / 10" }, caption: { enabled: true, fontSize: "0.8rem", color: "#a6b29b" } },
      videoDefaults: {
        enabled: true, thumbnail: { enabled: true, aspectRatio: "16 / 9", objectFit: "cover" },
        playButton: { enabled: true, text: { enabled: true, value: "Play video" }, icon: { enabled: true, value: "▷" } },
        caption: { enabled: true, fontSize: "0.8rem", color: "#a6b29b" },
        error: { enabled: true, value: "Add a valid YouTube URL in the project config.", color: "#d4f694" }
      },
      codeDefaults: {
        enabled: true, header: { enabled: true },
        name: { enabled: true, fontSize: "0.8rem", color: "#c6d7b5", fontWeight: 600 },
        text: { enabled: true, fontFamily: null, fontSize: "0.84rem", lineHeight: 1.8, color: "#d1e4bf", whiteSpace: "pre" },
        background: { enabled: true, colors: ["#10160e"], angle: 0, opacity: 1 },
        copyButton: { enabled: true, text: { enabled: true, value: "Copy" }, copiedText: { enabled: true, value: "Copied" }, icon: { enabled: false }, style: { padding: "6px 12px", minHeight: "36px" } }
      }
    }
  },
  emptyMessage: { enabled: true, value: "More experiments are on the way. Explore another category.", color: "#998c8c" },
  items: [
    {
      enabled: true, id: "terrain", categoryIds: ["shaders"],//PROCEDURAL WATER SHADER
      thumbnail: { enabled: true, src: "assets/images/water.svg", alt: "Layered green procedural landscape" },
      kicker: { enabled: true, value: "01 / PROCEDURAL WATER SHADER" },
      title: { enabled: true, value: "Customizable Water Shader" },
      description: { enabled: true, value: "A customizable water shader with dynamic properties." },
      tags: [{ enabled: true, text: { value: "Substance Painter" } }, { enabled: true, text: { value: "Unity Engine" } }, { enabled: true, text: { value: "Procedural" } }]
    },
    {
      enabled: true, id: "iridescence", categoryIds: ["shaders"],//Procedural 2D Wind Shader in Unity
      thumbnail: { enabled: true, src: "assets/images/Wind.svg", alt: "Iridescent material sphere" },
      kicker: { enabled: true, value: "02 / PROCEDURAL WIND SHADER " },
      title: { enabled: true, value: "Procedural 2D Wind Shader in Unity" },
      description: { enabled: true, value: "A customizable Wind shader with dynamic properties." },
      background: { enabled: true, colors: ["#20221c", "#161b17"], angle: 145, opacity: 1 },
      tags: [{ enabled: true, text: { value: "Photoshiop" } }, { enabled: true, text: { value: "Unity Engine" } },  { enabled: true, text: { value: "Shader" } }]
    },
    {
      enabled: true, id: "AdvancedTriplanarMapping", categoryIds: [ "shaders"],//Advanced Triplanar Mapping in Unity Shader Graph
      thumbnail: { enabled: true, src: "assets/images/Mountain.svg", alt: "Stylized luminous portal in a geometric landscape" },
      kicker: { enabled: true, value: "03 / PROCEDURAL TRIPLANAR MAPPING SHADER" },
      title: { enabled: true, value: " Advanced Triplanar Mapping in Unity Shader Graph"},
      description: { enabled: true, value: "Procedural Dissolve and Wind Shader in Unity." },
      tags: [{ enabled: true, text: { value: "unity Engine" } }, { enabled: true, text: { value: "Blender" } }, { enabled: true, text: { value: "Shader Graph" } }]
    },
    {
      enabled: true, id: "DisolveWindShader", categoryIds: [ "shaders"],//Dissolve Shader in Unity
      thumbnail: { enabled: true, src: "assets/images/Dissolve.svg", alt: "Stylized luminous portal in a geometric landscape" },
      kicker: { enabled: true, value: "04 / DISSOLVE SHADER" },
      title: { enabled: true, value: "Dissolve Shader in Unity" },
      description: { enabled: true, value: "Procedural Dissolve and Wind Shader in Unity." },
      tags: [{ enabled: true, text: { value: "unity Engine" } }, { enabled: true, text: { value: "Photoshop" } }, { enabled: true, text: { value: "Photoshop" } }]
    },
     {
      enabled: true, id: "OutlineinShader", categoryIds: [ "shaders"],//Outline SHADER Shader in Unity
      thumbnail: { enabled: true, src: "assets/images/Outline.svg", alt: "Stylized luminous portal in a geometric landscape" },
      kicker: { enabled: true, value: "05 / OUTLINE SHADER" },
      title: { enabled: true, value: "Outline Shader in Unity" },
      description: { enabled: true, value: "Procedural Outline Shader in Unity." },
      tags: [{ enabled: true, text: { value: "unity Engine" } }, { enabled: true, text: { value: "Shader Graph" } }, { enabled: true, text: { value: "" } }]
    },
    {
      enabled: true, id: "CrossHatchingShader", categoryIds: [ "shaders"],//CROSSHATCH SHADER Shader in Unity
      thumbnail: { enabled: true, src: "assets/images/CrossHatching.svg", alt: "Stylized luminous portal in a geometric landscape" },
      kicker: { enabled: true, value: "06 /  CROSSHATCH SHADER" },
      title: { enabled: true, value: "CROSSHATCH SHADER in Unity" },
      description: { enabled: true, value: "Procedural CROSSHATCH SHADER in Unity." },
      tags: [{ enabled: true, text: { value: "unity Engine" } }, { enabled: true, text: { value: "Shader Graph" } }, { enabled: true, text: { value: "" } }]
    },

    {
      enabled: true, id: "FresnelShader", categoryIds: [ "shaders"],//FRESNEL SHADER Shader in Unity
      thumbnail: { enabled: true, src: "assets/images/Fresnel Shader.svg", alt: "Stylized luminous portal in a geometric landscape" },
      kicker: { enabled: true, value: "0 /  FRESNEL SHADER" },
      title: { enabled: true, value: "FRESNEL SHADER in Unity" },
      description: { enabled: true, value: " A customizable Fresnel Shader in Unity featuring glowing edges, adjustable colors, and real-time property controls." },
      tags: [{ enabled: true, text: { value: "unity Engine" } }, { enabled: true, text: { value: "Shader Graph" } }, { enabled: true, text: { value: "" } }]
    }, 

    {
      enabled: true, id: "particles", categoryIds: ["shaders"],//ORB vfx in Unity
      thumbnail: { enabled: true, src: "assets/images/Orb.svg", alt: "Warm flowing particle trails" }, 
      kicker: { enabled: true, value: "08 / REAL-TIME VFX" },
      title: { enabled: true, value: "ORB vfx in Unity" },
      description: { enabled: true, value: "Finding rhythm in the unpredictable. A study of particles, flow, and motion." },
      tags: [{ enabled: true, text: { value: "Niagara" } }, { enabled: true, text: { value: "VFX" } }]
    },
    {
      enabled: true, id: "Flower", categoryIds: ["tools"],//modeling and texturing Flower Asset
      thumbnail: { enabled: true, src: "assets/images/Flower Render.webp", alt: "Connected nodes forming a procedural tool graph" },
      kicker: { enabled: true, value: "09 /3D Modeling & Texturing" },
      title: { enabled: true, value: "Flower Asset" },
      description: { enabled: true, value: "A showcase of 3D models and game assets, highlighting my approach to modeling, texturing, materials, and visual presentation." },
      tags: [{ enabled: true, text: { value: "Blender,Maya," } }, { enabled: true, text: { value: "Substance Painter,Photoshop" } }, { enabled: true, text: { value: "Vray" } }]
    },
    {
      enabled: true, id: "plate", categoryIds: ["tools"],//modeling and texturing Natural Plate 
      thumbnail: { enabled: true, src: "assets/images/Natural Plate Render.webp", alt: "Connected nodes forming a procedural tool graph" },
      kicker: { enabled: true, value: "10 / 3D Modeling & Texturing" },
      title: { enabled: true, value: "Natural plate" },
      description: { enabled: true, value: "A showcase of 3D models and game assets, highlighting my approach to modeling, texturing, materials, and visual presentation" },
        tags: [{ enabled: true, text: { value: "Blender,Maya,Zbrush" } }, { enabled: true, text: { value: "Substance Painter,Photoshop" } }, { enabled: true, text: { value: "Vray" } }]
      },
    {
      enabled: true, id: "Wreath", categoryIds: ["tools"],// modeling and texturing Wreath 
      thumbnail: { enabled: true, src: "assets/images/Wreath Render.webp", alt: "Connected nodes forming a procedural tool graph" },
      kicker: { enabled: true, value: "11 / 3D Modeling & Texturing" },
      title: { enabled: true, value: "Wreath Asset" },
      description: { enabled: true, value: "A showcase of 3D models and game assets, highlighting my approach to modeling, texturing, materials, and visual presentation." },
      tags: [{ enabled: true, text: { value: "Blender,maya" } }, { enabled: true, text: { value: "Substance Painter,Photoshop" } }, { enabled: true, text: { value: "Vray" } }]
    },

    {
      enabled: true, id: "Toster", categoryIds: ["tools"],// modeling and texturing Toster  
      thumbnail: { enabled: true, src: "assets/images/Toster Render.webp", alt: "Connected nodes forming a procedural tool graph" },
      kicker: { enabled: true, value: "12 / 3D Modeling & Texturing" },
      title: { enabled: true, value: "Toster Asset" },
      description: { enabled: true, value: "A showcase of 3D models and game assets, highlighting my approach to modeling, texturing, materials, and visual presentation." },
      tags: [{ enabled: true, text: { value: "Blender,maya" } }, { enabled: true, text: { value: "Substance Painter,Photoshop" } }, { enabled: true, text: { value: "Vray" } }]
    },

    {
      enabled: true, id: "Chair", categoryIds: ["tools"],// modeling and texturing Chair  
      thumbnail: { enabled: true, src: "assets/images/Chair Render.webp", alt: "Connected nodes forming a procedural tool graph" },
      kicker: { enabled: true, value: "13 / 3D Modeling & Texturing" },
      title: { enabled: true, value: "Chair Asset" },
      description: { enabled: true, value: "A showcase of 3D models and game assets, highlighting my approach to modeling, texturing, materials, and visual presentation." },
      tags: [{ enabled: true, text: { value: "Blender,maya" } }, { enabled: true, text: { value: "Substance Painter,Photoshop" } }, { enabled: true, text: { value: "Vray" } }]
    },

    {
      enabled: true, id: "Moss", categoryIds: ["tools"],// modeling and texturing Moss  
      thumbnail: { enabled: true, src: "assets/images/Moss render.webp", alt: "Connected nodes forming a procedural tool graph" },
      kicker: { enabled: true, value: "14 / 3D Modeling & Texturing" },
      title: { enabled: true, value: "Moss Asset" },
      description: { enabled: true, value: "A showcase of 3D models and game assets, highlighting my approach to modeling, texturing, materials, and visual presentation." },
      tags: [{ enabled: true, text: { value: "Blender,maya" } }, { enabled: true, text: { value: "Substance Painter,Photoshop" } }, { enabled: true, text: { value: "Vray" } }]
    },

    {
      enabled: true, id: "ToyHouse", categoryIds: ["tools"],// modeling and texturing ToyHouse  
      thumbnail: { enabled: true, src: "assets/images/ToyHouse Render01.webp", alt: "Connected nodes forming a procedural tool graph" },
      kicker: { enabled: true, value: "15 / 3D Modeling & Texturing" },
      title: { enabled: true, value: "ToyHouse Asset" },
      description: { enabled: true, value: "A showcase of 3D models and game assets, highlighting my approach to modeling, texturing, materials, and visual presentation." },
      tags: [{ enabled: true, text: { value: "Blender,maya" } }, { enabled: true, text: { value: "Substance Painter,Photoshop" } }, { enabled: true, text: { value: "Vray" } }]
    },

    {
      enabled: true, id: "Plant", categoryIds: ["tools"],// modeling and texturing Plant  
      thumbnail: { enabled: true, src: "assets/images/plant Render 01.webp", alt: "Connected nodes forming a procedural tool graph" },
      kicker: { enabled: true, value: "16 / 3D Modeling & Texturing" },
      title: { enabled: true, value: "Plant Asset" },
      description: { enabled: true, value: "A showcase of 3D models and game assets, highlighting my approach to modeling, texturing, materials, and visual presentation." },
      tags: [{ enabled: true, text: { value: "Blender,maya" } }, { enabled: true, text: { value: "Substance Painter,Photoshop" } }, { enabled: true, text: { value: "Vray" } }]
    },

     {
      enabled: true, id: "Witch", categoryIds: ["tools"],// modeling and texturing witch  
      thumbnail: { enabled: true, src: "assets/images/witch Render01.webp", alt: "Connected nodes forming a procedural tool graph" },
      kicker: { enabled: true, value: "17 / 3D Modeling & Texturing" },
      title: { enabled: true, value: "Witch Asset" },
      description: { enabled: true, value: "A showcase of 3D models and game assets, highlighting my approach to modeling, texturing, materials, and visual presentation." },
      tags: [{ enabled: true, text: { value: "Blender,Maya,ZBrush" } }, { enabled: true, text: { value: "Substance Painter,Photoshop" } }, { enabled: true, text: { value: "Vray" } }]
    },

    {
      enabled: true, id: "PavingStones01", categoryIds: ["procedural"],
      thumbnail: { enabled: true, src: "assets/images/Paving Stones01.webp", alt: "Procedurally scattered forms on an isometric grid" },
      kicker: { enabled: true, value: "07 / ARTIST TOOLS" },
      title: { enabled: true, value: "Scatter studio" },
      description: { enabled: true, value: "hand-painted paving stone texture and a seamless tiling material, focusing on surface details and a stylized look for 3D environments." },
      tags: [{ enabled: true, text: { value: "Substance " } }, { enabled: true, text: { value: "Photoshop" } }]
    },



    {
      enabled: true, id: "PavingStones02", categoryIds: ["procedural"],
      thumbnail: { enabled: true, src: "assets/images/Paving Stones 02.webp", alt: "Procedurally scattered forms on an isometric grid" },
      kicker: { enabled: true, value: "07 / ARTIST TOOLS" },
      title: { enabled: true, value: "Scatter studio" },
      description: { enabled: true, value: "hand-painted paving stone texture and a seamless tiling material, focusing on surface details and a stylized look for 3D environments." },
      tags: [{ enabled: true, text: { value: "Substance " } }, { enabled: true, text: { value: "Photoshop" } }]
    },

  ]
};
