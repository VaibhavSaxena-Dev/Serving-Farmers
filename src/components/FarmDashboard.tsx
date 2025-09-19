import { useLanguage } from '@/contexts/LanguageContext';
import { FarmCard } from './FarmCard';
import { Wheat, Heart, Droplets, TrendingUp, GraduationCap, MessageSquare } from 'lucide-react';

interface FarmDashboardProps {
  onNavigate: (page: string) => void;
}

export const FarmDashboard = ({ onNavigate }: FarmDashboardProps) => {
  const { t } = useLanguage();

  const farmModules = [
    {
      title: t('dashboard.cropManagement'),
      description: t('dashboard.cropManagement.desc'),
      icon: Wheat,
      variant: 'featured' as const,
      page: 'crops'
    },
    {
      title: t('dashboard.livestock'),
      description: t('dashboard.livestock.desc'),
      icon: Heart,
      variant: 'default' as const,
      page: 'poultry'
    },
    {
      title: t('dashboard.irrigation'),
      description: t('dashboard.irrigation.desc'),
      icon: Droplets,
      variant: 'default' as const,
      page: 'irrigation'
    },
    {
      title: t('dashboard.market'),
      description: t('dashboard.market.desc'),
      icon: TrendingUp,
      variant: 'featured' as const,
      page: 'market'
    },
    {
      title: t('dashboard.training'),
      description: t('dashboard.training.desc'),
      icon: GraduationCap,
      variant: 'default' as const,
      page: 'training'
    },
    {
      title: t('dashboard.community'),
      description: t('dashboard.community.desc'),
      icon: MessageSquare,
      variant: 'default' as const,
      page: 'community'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Welcome Section */}
      <div className="bg-gradient-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {t('dashboard.welcome')}, Farmer! 🌾
              </h1>
              <p className="text-muted-foreground text-lg">
                Manage your farm operations efficiently with our smart tools
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">₹24,500</div>
                <div className="text-sm text-muted-foreground">This Month's Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {farmModules.map((module, index) => (
            <FarmCard
              key={module.title}
              title={module.title}
              description={module.description}
              icon={module.icon}
              variant={module.variant}
              className="transform"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onNavigate(module.page)}
            />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-card border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <Wheat className="h-5 w-5 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Active Crops</div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-card border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Heart className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">45</div>
                <div className="text-sm text-muted-foreground">Livestock</div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-card border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Droplets className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-muted-foreground">Irrigation Eff.</div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-card border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <TrendingUp className="h-5 w-5 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold">+23%</div>
                <div className="text-sm text-muted-foreground">Yield Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};