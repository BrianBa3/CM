export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: string;
  image?: string; // URL de la foto del recuerdo
}

export interface PhotoMemory {
  url: string;
  caption: string;
  rotation: string; // Tailwind class for slight rotation
}

export enum MessageTone {
  FUNNY = 'Divertido',
  SENTIMENTAL = 'Sentimental',
  POETIC = 'Poético',
  EMPOWERING = 'Empoderador'
}