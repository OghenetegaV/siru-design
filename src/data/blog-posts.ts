export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  publishedAt: string;
  excerpt: string;
  image: string;
  categories: string[];
  content: { heading?: string; text: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "design-as-a-journey",
    title: "Design as a Journey: Why Every Space Deserves Intention",
    date: "12th October 2025",
    publishedAt: "2025-10-12",
    excerpt: "Great design doesn't begin with finishes, furniture, or floor plans. It begins with intention.",
    image: "/assets/images/blog/journey-hero.png",
    categories: ["Philosophy", "Design"],
    content: [
      { text: "Great design doesn't begin with finishes, furniture, or floor plans. It begins with intention." },
      { text: "At Siru Design Co, we approach interiors the same way we approach travel — with curiosity, care, and respect for context. Every project starts with a reason for the journey: a need to gather, to rest, to create, or to grow. Our role is to understand that purpose before shaping the space around it." },
      { heading: "Starting with People", text: "People sit at the heart of every space we design. How a room is used, how it feels at different times of day, and how it supports the lives unfolding within it are far more important than trends or aesthetics alone. By listening closely to our clients — whether developers, brands, or private homeowners — we uncover the stories, habits, and ambitions that inform meaningful design decisions." },
      { heading: "Understanding Place", text: "No space exists in isolation. Its location, history, climate, and surrounding architecture all influence how it should be experienced. Working across the UK and Africa has reinforced the importance of context-led design. Rather than applying a single style everywhere, we respond thoughtfully to place — allowing materials, proportions, and layouts to feel grounded and authentic without being overt or presumptive." },
      { heading: "Designing the Journey, Not Just the Destination", text: "While the finished space matters, the journey to get there matters just as much. A well-guided design process brings clarity, confidence, and ease. It allows for collaboration, reflection, and considered decision-making — ensuring that the final outcome feels intentional rather than rushed." },
      { heading: "Spaces That Last", text: "When design is approached with intention, the result is more than a beautiful interior. It's a space that works, adapts, and continues to feel relevant over time. Thoughtful journeys lead to meaningful spaces — and that's the destination we always aim for." }
    ]
  },
  {
    id: "2",
    slug: "the-art-of-slow-living",
    title: "The Art of Slow Living: Stillness in the City",
    date: "15th November 2025",
    publishedAt: "2025-11-15",
    excerpt: "How we use tactile materials and natural light to create sanctuaries in the heart of London.",
    image: "/assets/images/blog/slow-living.jpg",
    categories: ["Lifestyle", "Interior"],
    content: [
      { text: "In an ever-accelerating world, our homes should be the ultimate counterweight. Slow living isn't about doing things at a snail's pace; it's about doing them at the right pace—with intention, presence, and an appreciation for the subtle details that ground us." },
      { text: "At Siru Design Co, we believe the physical environment is the greatest tool for cultivating this lifestyle. When a space is designed for 'slow living,' it doesn't just look quiet; it feels quiet. It invites you to linger over a morning coffee or notice the way shadows move across a plaster wall at dusk." },
      { heading: "Tactile Transitions", text: "We prioritize materials that age gracefully and invite touch. Stone that feels cool underfoot, wood with a visible grain that warms to the hand, and heavy Belgian linens that soften with every wash. These are 'living' materials. Natural materials tell a story over time, rewarding the inhabitant for their presence." },
      { heading: "Designing for Ritual", text: "Slow living is built on daily rituals. Our design process looks for opportunities to elevate these moments. This might mean a perfectly positioned window seat for reading, a kitchen island designed for slow meal preparation, or a bathroom that feels more like a private spa than a utility room." },
      { heading: "The Luxury of Negative Space", text: "Often, the most important part of a design is what we leave out. Negative space allows the eye to rest and the mind to breathe. By curating only what is necessary and beautiful, we remove the visual noise that contributes to mental clutter." }
    ]
  },
  {
    id: "3",
    slug: "sourcing-vintage-in-london",
    title: "Sourcing with Soul: A Guide to London Vintage",
    date: "28th October 2025",
    publishedAt: "2025-10-28",
    excerpt: "A curated list of our favorite hidden corners for finding pieces with history and character.",
    image: "/assets/images/blog/vintage.jpg",
    categories: ["Guides", "Sourcing"],
    content: [
      { text: "Sustainability is often found in the past. Sourcing vintage isn't just an environmental choice; it's a narrative one. To create a space with soul, you must introduce pieces that have already lived a life." },
      { text: "London is a treasure trove for the patient seeker. From the high-end galleries of Pimlico Road to the sprawling markets of Sunbury, the city offers a history of craftsmanship that we constantly draw upon for our projects." },
      { heading: "The Character of Age", text: "A mid-century Danish chair or a foxed Victorian mirror brings a layer of soul to a room that 'new' simply cannot replicate. These pieces act as anchors, providing a sense of permanence and history even in a modern new-build. They break the 'perfection' of a design, making a space feel approachable and lived-in." },
      { heading: "A Sustainable Legacy", text: "Every time we source a vintage piece, we are keeping craftsmanship alive and reducing the demand for mass-produced furniture. In the context of our 'Place' pillar, sourcing locally from London’s antique dealers ensures that the carbon footprint is low while the cultural value is high." },
      { heading: "Blending Eras", text: "The secret to a sophisticated interior is the mix. Pairing a sleek, contemporary sofa with a primitive wooden coffee table creates a tension that is visually exciting. It’s in this contrast between the old and the new that a home’s true personality emerges." }
    ]
  },
  {
    id: "4",
    slug: "light-as-a-material",
    title: "Light as a Material: More Than Just a Fixture",
    date: "5th December 2025",
    publishedAt: "2025-12-05",
    excerpt: "Understanding how natural light shapes the 'Space' pillar of our design philosophy.",
    image: "/assets/images/blog/light-study.png",
    categories: ["Design", "Technical"],
    content: [
      { text: "We treat light as a physical building material, as essential as brick or timber. It is the invisible force that defines the boundaries of 'Space' and the mood of a 'Place'." },
      { heading: "The Rhythm of the Day", text: "Designing for the path of the sun ensures that a home feels vibrant at breakfast and intimate at dusk. We map out the light patterns of a room before we ever select a paint color, ensuring the atmosphere shifts naturally with the time of day." },
      { heading: "Shadow and Depth", text: "Where there is light, there must be shadow. Shadows provide depth and soul to an interior. By using directional lighting and textured surfaces, we create a sense of three-dimensional warmth that flat, overhead lighting simply cannot achieve." }
    ]
  }
];