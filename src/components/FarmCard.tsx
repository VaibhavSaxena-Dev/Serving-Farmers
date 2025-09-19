import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FarmCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'featured';
  style?: React.CSSProperties;
}

export const FarmCard = ({ 
  title, 
  description, 
  icon: Icon, 
  onClick, 
  className,
  variant = 'default',
  style
}: FarmCardProps) => {
  return (
    <Card 
      className={cn(
        'group cursor-pointer transition-all duration-300 hover:shadow-hover animate-fade-in',
        variant === 'featured' && 'border-accent bg-gradient-card',
        className
      )}
      style={style}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className={cn(
            'p-2 rounded-lg transition-all duration-300 group-hover:scale-110',
            variant === 'featured' ? 'bg-accent/10' : 'bg-primary/10'
          )}>
            <Icon className={cn(
              'h-6 w-6',
              variant === 'featured' ? 'text-accent' : 'text-primary'
            )} />
          </div>
          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
        <Button 
          variant={variant === 'featured' ? 'farm' : 'ghost'} 
          size="sm" 
          className="mt-4 w-full group-hover:shadow-card transition-all duration-300"
        >
          Open Module
        </Button>
      </CardContent>
    </Card>
  );
};