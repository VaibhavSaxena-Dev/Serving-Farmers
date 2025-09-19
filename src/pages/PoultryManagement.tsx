import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Thermometer, Calendar, AlertTriangle, ArrowLeft, Plus } from 'lucide-react';

interface PoultryManagementProps {
  onBack: () => void;
}

const poultryData = [
  {
    type: 'Broiler Chickens',
    count: 150,
    health: 'Excellent',
    lastVaccination: '2024-01-15',
    nextFeed: '6:00 AM',
    status: 'healthy'
  },
  {
    type: 'Layer Hens',
    count: 200,
    health: 'Good',
    lastVaccination: '2024-01-10',
    nextFeed: '6:00 AM',
    status: 'healthy'
  },
  {
    type: 'Ducks',
    count: 50,
    health: 'Needs Attention',
    lastVaccination: '2024-01-05',
    nextFeed: '7:00 AM',
    status: 'warning'
  }
];

const healthAlerts = [
  {
    severity: 'high',
    message: 'Duck pen #3 showing signs of respiratory issues',
    action: 'Schedule veterinary visit'
  },
  {
    severity: 'medium',
    message: 'Broiler feed stock running low',
    action: 'Order new feed batch'
  },
  {
    severity: 'low',
    message: 'Routine vaccination due in 5 days',
    action: 'Schedule with veterinarian'
  }
];

export const PoultryManagement = ({ onBack }: PoultryManagementProps) => {
  const [selectedBird, setSelectedBird] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="outline" onClick={onBack} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">🐓 Poultry Management</h1>
          <p className="text-muted-foreground text-lg">Monitor health, feeding, and vaccination schedules</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Total Birds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">400</div>
              <p className="text-sm text-muted-foreground">Across all pens</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-success" />
                Healthy Birds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">350</div>
              <p className="text-sm text-muted-foreground">87.5% health rate</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Eggs Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">185</div>
              <p className="text-sm text-muted-foreground">From layer hens</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">3</div>
              <p className="text-sm text-muted-foreground">Need attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Poultry Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Poultry List */}
          <div>
            <Card className="shadow-farm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Poultry Inventory</CardTitle>
                  <CardDescription>Manage your birds and their health status</CardDescription>
                </div>
                <Button variant="farm" size="sm" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Birds
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {poultryData.map((bird, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedBird === index ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedBird(index)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{bird.type}</h3>
                          <p className="text-sm text-muted-foreground">{bird.count} birds</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant={bird.status === 'healthy' ? 'default' : 'destructive'}>
                              {bird.health}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div>Next feed: {bird.nextFeed}</div>
                          <div>Last vaccination: {bird.lastVaccination}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Details & Alerts */}
          <div className="space-y-6">
            {/* Health Alerts */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Health Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {healthAlerts.map((alert, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border-l-4 ${
                        alert.severity === 'high' ? 'border-destructive bg-destructive/5' :
                        alert.severity === 'medium' ? 'border-warning bg-warning/5' :
                        'border-primary bg-primary/5'
                      }`}
                    >
                      <div className="font-medium text-sm">{alert.message}</div>
                      <div className="text-xs text-muted-foreground mt-1">{alert.action}</div>
                      <Button size="sm" variant="outline" className="mt-2">
                        Take Action
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Feeding Schedule */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>📅 Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">Morning Feed</div>
                      <div className="text-sm text-muted-foreground">6:00 AM - All pens</div>
                    </div>
                    <Badge variant="default">Completed</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg">
                    <div>
                      <div className="font-medium">Health Check</div>
                      <div className="text-sm text-muted-foreground">10:00 AM - Duck pen</div>
                    </div>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">Evening Feed</div>
                      <div className="text-sm text-muted-foreground">6:00 PM - All pens</div>
                    </div>
                    <Badge variant="secondary">Scheduled</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>⚡ Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="farm" size="sm">
                    Record Feeding
                  </Button>
                  <Button variant="outline" size="sm">
                    Health Check
                  </Button>
                  <Button variant="outline" size="sm">
                    Egg Collection
                  </Button>
                  <Button variant="farm" size="sm">
                    Call Veterinarian
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};