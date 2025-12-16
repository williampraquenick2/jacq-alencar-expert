import React from 'react';

export interface ImageData {
  src: string;
  alt: string;
  caption?: string;
}

export interface Feature {
  id: number;
  title: string;
  icon: React.ReactNode;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}