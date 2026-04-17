export interface Cat {
  id: number;
  name: string;
  age: string;
  breed: string;
  health_status: 'healthy' | 'treatment' | 'critical';
  arrival_date: string;
  image: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  user_id: number;
  category?: string;
}

export interface News {
  id: number;
  title: string;
  date: string;
  category: string;
}

export const cats: Cat[] = [
  {
    id: 1,
    name: 'LUNA',
    age: '2 años',
    breed: 'Siamés',
    health_status: 'healthy',
    arrival_date: '15 Mar 2026',
    image: 'siamese cat portrait',
  },
  {
    id: 2,
    name: 'MOCHI',
    age: '6 meses',
    breed: 'Calico',
    health_status: 'treatment',
    arrival_date: '02 Abr 2026',
    image: 'calico kitten playful',
  },
  {
    id: 3,
    name: 'SHADOW',
    age: '4 años',
    breed: 'Negro',
    health_status: 'healthy',
    arrival_date: '20 Feb 2026',
    image: 'black cat elegant',
  },
  {
    id: 4,
    name: 'NEKO',
    age: '1 año',
    breed: 'Tabby',
    health_status: 'healthy',
    arrival_date: '10 Abr 2026',
    image: 'orange tabby cat',
  },
  {
    id: 5,
    name: 'KIKI',
    age: '3 años',
    breed: 'Persa',
    health_status: 'treatment',
    arrival_date: '28 Mar 2026',
    image: 'persian cat fluffy',
  },
  {
    id: 6,
    name: 'MISO',
    age: '8 meses',
    breed: 'Mestizo',
    health_status: 'healthy',
    arrival_date: '05 Abr 2026',
    image: 'domestic shorthair cat',
  },
];

export const articles: Article[] = [
  {
    id: 1,
    title: 'CÓMO PREPARAR TU CASA PARA UN GATO NUEVO',
    content: 'Adoptar un gato es una decisión maravillosa. Aquí te compartimos los elementos esenciales que necesitarás: arenero, comedero, bebedero, rascador, juguetes y un espacio seguro donde pueda adaptarse...',
    user_id: 12,
    category: 'Guía',
  },
  {
    id: 2,
    title: 'LA IMPORTANCIA DE LA ESTERILIZACIÓN',
    content: 'La esterilización no solo previene embarazos no deseados, sino que también reduce el riesgo de enfermedades y comportamientos agresivos. Es un acto de amor y responsabilidad...',
    user_id: 8,
    category: 'Salud',
  },
  {
    id: 3,
    title: 'HISTORIAS DE ÉXITO: ADOPCIONES DEL MES',
    content: 'Este mes celebramos 15 adopciones exitosas. Cada gato encontró su hogar perfecto. Luna ahora vive con una familia de tres, Mochi tiene un jardín enorme para explorar...',
    user_id: 15,
    category: 'Historia',
  },
  {
    id: 4,
    title: 'NUTRICIÓN FELINA: QUÉ DEBES SABER',
    content: 'Una dieta equilibrada es fundamental para la salud de tu gato. Aprende sobre proteínas, hidratación, y cómo leer las etiquetas de alimento comercial...',
    user_id: 12,
    category: 'Guía',
  },
];

export const news: News[] = [
  {
    id: 1,
    title: 'Nuevo programa de voluntariado abierto',
    date: '12 Abr 2026',
    category: 'Voluntariado',
  },
  {
    id: 2,
    title: 'Jornada de esterilización gratuita - 20 de abril',
    date: '08 Abr 2026',
    category: 'Evento',
  },
  {
    id: 3,
    title: '¡Recaudamos $5000 en la feria del mes pasado!',
    date: '05 Abr 2026',
    category: 'Logro',
  },
  {
    id: 4,
    title: 'Nuevas instalaciones inauguradas',
    date: '01 Abr 2026',
    category: 'Instalaciones',
  },
];
