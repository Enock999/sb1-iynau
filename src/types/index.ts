export interface User {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  subscriptionStatus: 'active' | 'expired' | 'none';
  subscriptionEndDate?: Date;
}

export interface AffiliateUser extends User {
  paypalEmail: string;
  referralCode: string;
  earnings: number;
  clicks: number;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}