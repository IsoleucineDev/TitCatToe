export interface Cat {
  id: string;
  name: string;
  age: number;
  breed: string;
  health_status: 'healthy' | 'treatment' | 'critical';
  arrival_date: string;
  photo?: string;
  description?: string;
  adopted?: boolean;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  user_id: string;
  created_at?: string;
  preview?: string;
}
