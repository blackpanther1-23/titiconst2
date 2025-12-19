import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Partner {
  name: string;
  icon?: string;
  isTextOnly?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
