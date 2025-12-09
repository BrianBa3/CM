import { TimelineEvent, PhotoMemory } from './types';

import imgTimeLine1 from './assets/TimeLine_1.jpg';
import imgTimeLine2 from './assets/TimeLine_2.jpeg';
import imgTimeLine3 from './assets/TimeLine_3.jpg';
import imgTimeLine4 from './assets/TimeLine_4.jpg';

import imgRecuerdo1 from './assets/Recuerdos_1.jpg';
import imgRecuerdo2 from './assets/Recuerdos_2.jpg';
import imgRecuerdo3 from './assets/Recuerdos_3.jpg';
import imgRecuerdo4 from './assets/Recuerdos_4.jpg';
import imgRecuerdo5 from './assets/Recuerdos_5.jpg';
import imgRecuerdo6 from './assets/Recuerdos_6.jpg';
import imgRecuerdo7 from './assets/Recuerdos_7.jpg';
import imgRecuerdo8 from './assets/Recuerdos_8.jpg';
import imgRecuerdo9 from './assets/Recuerdos_9.jpg';

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
    image: imgTimeLine1
  },
  {
    year: "2024",
    title: "Primeras aventuras",
    description: "Entre risas, comidas y charlas eternas, me di cuenta de la gran persona que eres. Gracias por dejarme ser tu amigo.",
    icon: "Sparkles",
    image: imgTimeLine2
  },
  {
    year: "2024",
    title: "En las buenas y malas",
    description: "Un año donde nuestra lealtad se hizo más fuerte. Gracias por confiar en mí y dejarme estar ahí para ti.",
    icon: "Heart",
    image: imgTimeLine3
  },
  {
    year: "2025",
    title: "¡Felices 27!",
    description: "Hoy celebramos tus 27 primaveras. Que este nuevo año te traiga tantas flores amarillas como te mereces.",
    icon: "Calendar",
    image: imgTimeLine4
  }
];

export const GALLERY_DATA: PhotoMemory[] = [
  { url: imgRecuerdo1, caption: "¡Sonrisa única!", rotation: "rotate-2" },
  { url: imgRecuerdo2, caption: "Momentos top", rotation: "-rotate-1" },
  { url: imgRecuerdo3, caption: "Flores para ti", rotation: "rotate-3" },
  { url: imgRecuerdo4, caption: "Siempre fashion", rotation: "-rotate-2" },
  { url: imgRecuerdo5, caption: "Nuestras charlas", rotation: "rotate-1" },
  { url: imgRecuerdo6, caption: "Lloraderas", rotation: "rotate-1" },
  { url: imgRecuerdo7, caption: "Historias", rotation: "rotate-1" },
  { url: imgRecuerdo8, caption: "Despedidas", rotation: "rotate-1" },
  { url: imgRecuerdo9, caption: "Selfie time", rotation: "-rotate-3" },
];