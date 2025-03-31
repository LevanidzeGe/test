export interface SubService {
  title: { [key: string]: string };
  description: { [key: string]: string };
  image: string;
}

export interface Service {
  title: { [key: string]: string };
  slug: string;
  description: { [key: string]: string };
  image: string;
  subServices: SubService[];
}
