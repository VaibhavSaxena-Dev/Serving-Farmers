import { Button } from '@/components/ui/button';
import { Sprout, Users, Brain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeroSectionProps {
  onLogin: () => void;
  onRegister: () => void;
}

export const HeroSection = ({ onLogin, onRegister }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <Sprout className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold text-primary-foreground">FarmPortal</span>
        </div>
        <LanguageSelector />
      </header>

      {/* Hero Content */}
      <div className="relative z-10 px-6 pb-20 pt-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary-foreground/10 rounded-full">
                <Sprout className="h-6 w-6 text-accent" />
              </div>
              <span className="text-sm text-primary-foreground/80 font-medium">Smart Farming</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary-foreground/10 rounded-full">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <span className="text-sm text-primary-foreground/80 font-medium">AI Powered</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary-foreground/10 rounded-full">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <span className="text-sm text-primary-foreground/80 font-medium">Community</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={onLogin}
            >
              {t('button.login')}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={onRegister}
            >
              {t('button.register')}
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </div>
  );
};