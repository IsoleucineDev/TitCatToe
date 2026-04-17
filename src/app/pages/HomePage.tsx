import { HeroSection } from '../components/HeroSection';
import { ConceptoSection } from '../components/ConceptoSection';
import { GatosSection } from '../components/GatosSection';
import { AdoptarSection } from '../components/AdoptarSection';
import { RevistaSection } from '../components/RevistaSection';
import { NoticiasSection } from '../components/NoticiasSection';
import { CreditsSection } from '../components/CreditsSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ConceptoSection />
      <GatosSection />
      <AdoptarSection />
      <RevistaSection />
      <NoticiasSection />
      <CreditsSection />
    </>
  );
}
