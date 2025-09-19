import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FarmDashboard } from '@/components/FarmDashboard';
import { MarketUpdates } from './MarketUpdates';
import { PoultryManagement } from './PoultryManagement';
import { TrainingEducation } from './TrainingEducation';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<string>('hero');

  const handleLogin = () => {
    setCurrentPage('dashboard');
  };

  const handleRegister = () => {
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  if (currentPage === 'market') {
    return <MarketUpdates onBack={handleBackToDashboard} />;
  }

  if (currentPage === 'poultry') {
    return <PoultryManagement onBack={handleBackToDashboard} />;
  }

  if (currentPage === 'training') {
    return <TrainingEducation onBack={handleBackToDashboard} />;
  }

  if (currentPage === 'dashboard') {
    return <FarmDashboard onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen">
      <HeroSection onLogin={handleLogin} onRegister={handleRegister} />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary-hover transition-colors shadow-farm hover:shadow-hover"
          >
            Enter Dashboard (Demo)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
