import { TimelineEvent, PhotoMemory } from './types';

// DATOS DE MARISOL
export const FRIEND_NAME = "Marisol";
export const MY_NAME = "Brian";

// Imagen de fondo con girasoles/flores amarillas
export const HERO_IMAGE = "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=1200&auto=format&fit=crop";

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "2024",
    title: "El destino nos cruzó",
    description: "Hace solo 3 años que llegaste a mi vida, pero siento que te conozco de siempre. Fue el inicio de una amistad increíble.",
    icon: "GraduationCap",
    image: "assets/TimeLine_1.jpg"
  },
  {
    year: "2024",
    title: "Primeras aventuras",
    description: "Entre risas, comidas y charlas eternas, me di cuenta de la gran persona que eres. Gracias por dejarme ser tu amigo.",
    icon: "Sparkles",
    image: "assets/TimeLine_2.jpeg"
  },
  {
    year: "2024",
    title: "En las buenas y malas",
    description: "Un año donde nuestra lealtad se hizo más fuerte. Gracias por confiar en mí y dejarme estar ahí para ti.",
    icon: "Heart",
    image: "assets/TimeLine_3.jpg"
  },
  {
    year: "2025",
    title: "¡Felices 27!",
    description: "Hoy celebramos tus 27 primaveras. Que este nuevo año te traiga tantas flores amarillas como te mereces.",
    icon: "Calendar",
    image: "assets/TimeLine_4.jpg"
  }
];

export const GALLERY_DATA: PhotoMemory[] = [
  { url: "assets/Recuerdos_1.jpg", caption: "¡Sonrisa única!", rotation: "rotate-2" },
  { url: "assets/Recuerdos_2.jpg", caption: "Momentos top", rotation: "-rotate-1" },
  { url: "assets/Recuerdos_3.jpg", caption: "Flores para ti", rotation: "rotate-3" },
  { url: "assets/Recuerdos_4.jpg", caption: "Siempre fashion", rotation: "-rotate-2" },
  { url: "assets/Recuerdos_5.jpg", caption: "Nuestras charlas", rotation: "rotate-1" },
  { url: "assets/Recuerdos_7.jpg", caption: "Lloraderas", rotation: "rotate-1" },
  { url: "assets/Recuerdos_9.jpg", caption: "Historias", rotation: "rotate-1" },
  { url: "assets/Recuerdos_8.jpg", caption: "Despedidas", rotation: "rotate-1" },
  { url: "assets/Recuerdos_6.jpg", caption: "Selfie time", rotation: "-rotate-3" },
];