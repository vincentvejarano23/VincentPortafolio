
import React from 'react';
import Section from './Section';
import InteractiveBentoGallery from './InteractiveBentoGallery';
import { Illustration } from '../types';

interface IllustrationsProps {
  illustrations: Illustration[];
}

const Illustrations: React.FC<IllustrationsProps> = ({ illustrations }) => {
  return (
    <Section className="bg-black bg-opacity-20">
      <div className="text-center mb-12">
        <h2 className="font-anton text-4xl md:text-5xl text-white">ILUSTRACIONES</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Explora la galería completa deslizando hacia abajo. Haz clic en cualquier imagen para verla en detalle.
        </p>
      </div>
      <div className="relative">
        <div className="max-h-[80vh] overflow-y-auto custom-scrollbar pr-2 md:pr-3">
          <InteractiveBentoGallery mediaItems={illustrations} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#101411] to-transparent pointer-events-none" aria-hidden="true" />
      </div>
    </Section>
  );
};

export default Illustrations;