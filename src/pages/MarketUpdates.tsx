import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, ArrowLeft } from 'lucide-react';

interface MarketUpdatesProps {
  onBack: () => void;
}

const marketData = [
  { crop: 'Rice', price: '₹2,850', change: '+5.2%', trend: 'up', market: 'Delhi Mandi' },
  { crop: 'Wheat', price: '₹2,120', change: '-2.1%', trend: 'down', market: 'Punjab Mandi' },
  { crop: 'Cotton', price: '₹6,750', change: '+8.7%', trend: 'up', market: 'Gujarat Mandi' },
  { crop: 'Sugarcane', price: '₹3,200', change: '+3.4%', trend: 'up', market: 'UP Mandi' },
  { crop: 'Maize', price: '₹1,890', change: '-1.8%', trend: 'down', market: 'Karnataka Mandi' },
  { crop: 'Tomato', price: '₹4,500', change: '+12.3%', trend: 'up', market: 'Maharashtra Mandi' },
];

export const MarketUpdates = ({ onBack }: MarketUpdatesProps) => {
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
          <h1 className="text-3xl font-bold text-foreground mb-2">📈 Market Updates</h1>
          <p className="text-muted-foreground text-lg">Live prices from mandis across India</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                Trending Up
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">4 Crops</div>
              <p className="text-sm text-muted-foreground">Cotton leading with +8.7%</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-destructive" />
                Trending Down
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">2 Crops</div>
              <p className="text-sm text-muted-foreground">Wheat down by -2.1%</p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent bg-gradient-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Best Selling Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">This Week</div>
              <p className="text-sm text-muted-foreground">For Cotton & Tomato</p>
            </CardContent>
          </Card>
        </div>

        {/* Price Table */}
        <Card className="shadow-farm">
          <CardHeader>
            <CardTitle>Today's Mandi Prices</CardTitle>
            <CardDescription>Last updated: {new Date().toLocaleString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Crop</th>
                    <th className="text-left py-3 px-4 font-semibold">Price (per quintal)</th>
                    <th className="text-left py-3 px-4 font-semibold">Change</th>
                    <th className="text-left py-3 px-4 font-semibold">Market</th>
                    <th className="text-left py-3 px-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {marketData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium">{item.crop}</td>
                      <td className="py-3 px-4 font-bold text-lg">{item.price}</td>
                      <td className="py-3 px-4">
                        <span className={`flex items-center gap-1 ${
                          item.trend === 'up' ? 'text-success' : 'text-destructive'
                        }`}>
                          {item.trend === 'up' ? 
                            <TrendingUp className="h-4 w-4" /> : 
                            <TrendingDown className="h-4 w-4" />
                          }
                          {item.change}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{item.market}</td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="farm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Market Insights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">💡 AI Market Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-success">•</span>
                  <span className="text-sm">Cotton prices expected to rise 15% this month due to export demand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">•</span>
                  <span className="text-sm">Tomato supply chain disrupted - prices may fluctuate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">•</span>
                  <span className="text-sm">Rice harvest season approaching - good time to hold inventory</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">🎯 Selling Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-success/10 rounded-lg">
                  <div className="font-medium text-success">Sell Now: Cotton</div>
                  <div className="text-sm text-muted-foreground">Prices at peak, export season active</div>
                </div>
                <div className="p-3 bg-warning/10 rounded-lg">
                  <div className="font-medium text-warning">Hold: Rice</div>
                  <div className="text-sm text-muted-foreground">Wait for festival season demand</div>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <div className="font-medium text-primary">Monitor: Wheat</div>
                  <div className="text-sm text-muted-foreground">Price stabilizing, watch for trends</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};