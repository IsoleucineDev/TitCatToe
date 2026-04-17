import { Cat, Article } from './types';

// Mock data store
class Store {
  private cats: Cat[] = [
    {
      id: '1',
      name: 'Luna',
      age: 2,
      breed: 'Siamés',
      health_status: 'healthy',
      arrival_date: '2024-01-15',
      description: 'Luna es una gatita dulce y juguetona que adora las ventanas soleadas.',
      adopted: false,
    },
    {
      id: '2',
      name: 'Michi',
      age: 4,
      breed: 'Persa',
      health_status: 'treatment',
      arrival_date: '2024-02-20',
      description: 'Michi está en recuperación pero ya está mucho mejor.',
      adopted: false,
    },
    {
      id: '3',
      name: 'Garfield',
      age: 5,
      breed: 'Naranja',
      health_status: 'healthy',
      arrival_date: '2023-12-01',
      description: 'Garfield ama la comida y las siestas largas.',
      adopted: true,
    },
    {
      id: '4',
      name: 'Shadow',
      age: 1,
      breed: 'Negro',
      health_status: 'critical',
      arrival_date: '2024-03-10',
      description: 'Shadow necesita cuidados especiales pero es muy valiente.',
      adopted: false,
    },
  ];

  private articles: Article[] = [
    {
      id: '1',
      title: '5 Consejos para Adoptar un Gato',
      content: 'Adoptar un gato es una decisión importante que cambiará tu vida para siempre. Aquí te compartimos los mejores consejos para prepararte...',
      user_id: 'volunteer_01',
      created_at: '2024-01-10',
      preview: 'Adoptar un gato es una decisión importante que cambiará tu vida para siempre...',
    },
    {
      id: '2',
      title: 'Historia de Luna: De las Calles al Hogar',
      content: 'Luna llegó a nosotros en enero con miedo y desconfianza. Hoy es la reina de su nuevo hogar...',
      user_id: 'volunteer_02',
      created_at: '2024-02-15',
      preview: 'Luna llegó a nosotros en enero con miedo y desconfianza...',
    },
  ];

  // CATS CRUD
  getCats(): Cat[] {
    return [...this.cats];
  }

  getCat(id: string): Cat | undefined {
    return this.cats.find(c => c.id === id);
  }

  createCat(cat: Omit<Cat, 'id'>): Cat {
    const newCat = {
      ...cat,
      id: Date.now().toString(),
    };
    this.cats.push(newCat);
    return newCat;
  }

  updateCat(id: string, updates: Partial<Cat>): Cat | undefined {
    const index = this.cats.findIndex(c => c.id === id);
    if (index === -1) return undefined;
    this.cats[index] = { ...this.cats[index], ...updates };
    return this.cats[index];
  }

  deleteCat(id: string): boolean {
    const index = this.cats.findIndex(c => c.id === id);
    if (index === -1) return false;
    this.cats.splice(index, 1);
    return true;
  }

  // ARTICLES CRUD
  getArticles(): Article[] {
    return [...this.articles];
  }

  getArticle(id: string): Article | undefined {
    return this.articles.find(a => a.id === id);
  }

  createArticle(article: Omit<Article, 'id'>): Article {
    const newArticle = {
      ...article,
      id: Date.now().toString(),
      created_at: new Date().toISOString().split('T')[0],
    };
    this.articles.push(newArticle);
    return newArticle;
  }

  updateArticle(id: string, updates: Partial<Article>): Article | undefined {
    const index = this.articles.findIndex(a => a.id === id);
    if (index === -1) return undefined;
    this.articles[index] = { ...this.articles[index], ...updates };
    return this.articles[index];
  }

  deleteArticle(id: string): boolean {
    const index = this.articles.findIndex(a => a.id === id);
    if (index === -1) return false;
    this.articles.splice(index, 1);
    return true;
  }
}

export const store = new Store();
