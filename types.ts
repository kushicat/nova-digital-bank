import React from 'react';

export enum Page {
  HOME = 'HOME',
  FEATURES = 'FEATURES',
  TRUST = 'TRUST',
  FREELANCERS = 'FREELANCERS',
  BUSINESS = 'BUSINESS',
  SUPPORT = 'SUPPORT'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}