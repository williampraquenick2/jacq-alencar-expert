import React, { useState } from 'react';
import { Check, MapPin, Instagram, ArrowRight, Star, MessageCircle } from 'lucide-react';
import { Button } from './components/Button';
import { Lightbox } from './components/Lightbox';
import { EXPERT_INFO, IMAGES, TRUST_FEATURES, ORDER_STEPS, ABOUT_BULLETS } from './constants';
import { ImageData } from './types';

function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const openLightbox = (image: ImageData) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen font-sans text-gray-700 bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-50 pt-8 pb-16 lg:py-0">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-brand-800 uppercase bg-brand-200/50 rounded-full border border-brand-200">
              Confeitaria Afetiva
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight mb-6">
              Eu sou a Jacq Alencar, <span className="text-brand-600">confeiteira especializada</span> em doces personalizados
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              {EXPERT_INFO.subheadline}
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-3 w-full sm:w-auto">
              <Button href={EXPERT_INFO.whatsappLink} fullWidth className="sm:w-auto">
                Conhecer o catálogo
              </Button>
              <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Resposta rápida • Atendimento direto comigo
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-xl">
            <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={IMAGES.hero} 
                alt="Jacq Alencar Confeiteira" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative blob behind */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          
          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-900 mb-10">
            Muito prazer, <br/> eu sou a Jacq Alencar.
          </h2>

          {/* Image */}
          <div className="relative aspect-square max-w-sm w-full rounded-full overflow-hidden border-4 border-brand-100 shadow-xl mb-10">
            <img 
              src={IMAGES.about} 
              alt="Jacq Alencar" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Apaixonada por transformar açúcar em memórias. Minha missão não é apenas entregar um doce, mas proporcionar uma experiência única de afeto e sabor.
            </p>
            <div className="inline-flex flex-col text-left space-y-4">
              {ABOUT_BULLETS.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. GALLERY / PROOF */}
      <section className="py-20 bg-brand-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Resultados Reais
            </h2>
            <p className="text-gray-600">
              Um pouco do carinho que já entregamos por aqui.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {IMAGES.gallery.map((img, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-md bg-white"
                onClick={() => openLightbox(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/90 text-brand-900 px-4 py-2 rounded-full text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Ver detalhe
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-gray-500 mt-8 italic">
            * Resultados podem variar de acordo com cada pedido personalizado.
          </p>
        </div>
      </section>

      {/* 4. TRUST CARDS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-900">
              Por que confiar em mim?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_FEATURES.map((feature) => (
              <div key={feature.id} className="bg-brand-50/50 p-8 rounded-2xl border border-brand-100 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-brand-600">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                <div className="w-12 h-1 bg-brand-200 mx-auto rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERMEDIATE CTA */}
      <section className="py-16 bg-brand-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Quer tirar dúvidas ou ver nosso catálogo?
          </h2>
          <Button 
            variant="white" 
            href={EXPERT_INFO.whatsappLink}
            icon={true}
          >
            Falar comigo no WhatsApp
          </Button>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Como fazer seu pedido
            </h2>
            <p className="text-gray-600">Simples, rápido e direto comigo.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-brand-100 -z-10 border-t-2 border-dashed border-brand-200"></div>

            {ORDER_STEPS.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center bg-white p-6">
                <div className="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg relative z-10">
                  <span className="text-3xl font-serif font-bold text-brand-600">{step.id}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-brand-600 font-medium">
            Qualquer dúvida, é só me chamar 😊
          </p>
        </div>
      </section>

      {/* 7. MORE PROOF CAROUSEL (Simulated with grid for simplicity/performance without heavy libraries) */}
      <section className="py-20 bg-brand-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <h2 className="font-serif text-3xl font-bold text-brand-900">
              Detalhes que encantam
            </h2>
            <span className="text-brand-600 font-medium mt-2 md:mt-0 flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" /> Feito à mão
            </span>
          </div>
          
          {/* Simple scrollable row for mobile feel */}
          <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x">
             {[IMAGES.gallery[3], IMAGES.gallery[4], IMAGES.gallery[0], IMAGES.gallery[5]].map((img, idx) => (
               <div key={idx} className="min-w-[280px] md:min-w-[350px] snap-center">
                 <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] relative">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#fce7f3_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-900 mb-6 leading-tight">
            Seu pedido começa com <br/> uma conversa
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Tire suas dúvidas e veja o catálogo completo agora mesmo.
          </p>
          <div className="flex flex-col items-center">
             <Button href={EXPERT_INFO.whatsappLink} className="text-xl px-10 py-5 shadow-brand-300/50 shadow-2xl">
               Chamar no WhatsApp
             </Button>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h3 className="font-serif text-2xl font-bold text-brand-800 mb-2">{EXPERT_INFO.name}</h3>
          <p className="text-gray-500 mb-6 flex items-center gap-2">
            <MapPin size={16} /> Guarulhos – SP
          </p>
          
          <a 
            href={EXPERT_INFO.instagramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mb-8 text-brand-600 hover:text-brand-800 transition-colors p-3 bg-brand-50 rounded-full"
          >
            <Instagram size={24} />
          </a>
          
          <p className="text-sm text-gray-400">
            {EXPERT_INFO.copyright}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button for Mobile */}
      <a 
        href={EXPERT_INFO.whatsappLink}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-whatsapp hover:bg-whatsappHover text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center lg:hidden"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} fill="white" className="text-white" />
      </a>

      {/* Lightbox Component */}
      <Lightbox 
        isOpen={lightboxOpen} 
        image={selectedImage} 
        onClose={() => setLightboxOpen(false)} 
      />
    </div>
  );
}

export default App;