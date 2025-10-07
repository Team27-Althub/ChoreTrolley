// types.ts

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
}

export interface Provider {
  id: number;
  firstName: string;
  lastName: string;
  rating: number;
  reviewCount: number;
  address: string;
  state: string;
  city: string;
  phone: string;
  profileImageUrl: string;
  userId: number;
  user: User;
}

export interface ProviderResponse {
  apiVersion: string;
  data: Provider;
}
