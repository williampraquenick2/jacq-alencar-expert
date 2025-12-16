import React from 'react';
import { Heart, Gift, PackageCheck, MessageCircle, Star, Clock } from 'lucide-react';
import { ImageData, Feature, Step } from './types';

// Expert Info
export const EXPERT_INFO = {
  name: "Jacq Alencar",
  headline: "Eu sou a Jacq Alencar, confeiteira especializada em doces personalizados",
  subheadline: "Doces feitos com carinho para surpreender quem você ama",
  whatsappLink: "https://api.whatsapp.com/message/QEQBS3VUEFYTH1?autoload=1&app_absent=0&utm_source=ig",
  instagramLink: "https://www.instagram.com/jacqalencaroficial/",
  location: "Rua Chiquinha Gonzaga, 146 – Jardim Paraventi – Guarulhos/SP",
  copyright: "© Jacq Alencar"
};

// Images
export const IMAGES = {
  hero: "https://i.imgur.com/m9i6koH.png",
  about: "https://i.imgur.com/Uok0eBj.png",
  gallery: [
    { src: "https://i.imgur.com/l1cH8fV.png", alt: "Bento Cake com frase divertida" },
    { src: "https://i.imgur.com/A49O2ul.png", alt: "Caixa de doces para presente" },
    { src: "https://i.imgur.com/fnF0QCN.png", alt: "Bolo decorado com morangos" },
    { src: "https://i.imgur.com/zsdkre7.png", alt: "Kit festa na caixa completo" },
    { src: "https://i.imgur.com/UJgn3Cz.png", alt: "Cupcakes personalizados" },
    { src: "https://i.imgur.com/kxATQxE.png", alt: "Doces finos para festa" },
  ] as ImageData[]
};

// Features / Trust Cards
export const TRUST_FEATURES: Feature[] = [
  {
    id: 1,
    title: "Atendimento Humanizado",
    icon: <Heart className="w-6 h-6 text-brand-600" />
  },
  {
    id: 2,
    title: "Carinho em cada detalhe",
    icon: <Star className="w-6 h-6 text-brand-600" />
  },
  {
    id: 3,
    title: "O que você vê é o que recebe",
    icon: <PackageCheck className="w-6 h-6 text-brand-600" />
  },
  {
    id: 4,
    title: "Pontualidade na entrega",
    icon: <Clock className="w-6 h-6 text-brand-600" />
  }
];

// Steps
export const ORDER_STEPS: Step[] = [
  {
    id: 1,
    title: "Me chame no WhatsApp",
    description: "Clique no botão para iniciar nossa conversa direto comigo."
  },
  {
    id: 2,
    title: "Conheça o Catálogo",
    description: "Veja as opções de sabores, tamanhos e personalizações."
  },
  {
    id: 3,
    title: "Faça seu pedido",
    description: "Combinamos os detalhes e a data de entrega ou retirada."
  }
];

// About Bullets
export const ABOUT_BULLETS = [
  "Pedidos 100% personalizados",
  "Especialista em Festa na Caixa e Café da Manhã",
  "Bento Cakes exclusivos e criativos",
  "Atendimento direto comigo, sem robôs"
];