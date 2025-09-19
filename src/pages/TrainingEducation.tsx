import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Play, BookOpen, Award, ArrowLeft, Clock, Users } from 'lucide-react';

interface TrainingEducationProps {
  onBack: () => void;
}

const trainingModules = [
  {
    title: 'Biosecurity Fundamentals',
    description: 'Essential practices to protect your farm from diseases',
    duration: '45 min',
    level: 'Beginner',
    completed: true,
    progress: 100,
    language: 'Hindi'
  },
  {
    title: 'Smart Irrigation Techniques',
    description: 'Water-saving methods using modern technology',
    duration: '60 min',
    level: 'Intermediate',
    completed: false,
    progress: 30,
    language: 'Telugu'
  },
  {
    title: 'Crop Disease Identification',
    description: 'AI-powered identification of common crop diseases',
    duration: '90 min',
    level: 'Advanced',
    completed: false,
    progress: 0,
    language: 'English'
  },
  {
    title: 'Market Analysis & Pricing',
    description: 'Understanding market trends and optimal selling times',
    duration: '75 min',
    level: 'Intermediate',
    completed: false,
    progress: 65,
    language: 'Kannada'
  }
];

const certifications = [
  {
    name: 'Organic Farming Certificate',
    issuer: 'Government of India',
    earned: true,
    date: '2024-01-15'
  },
  {
    name: 'Sustainable Agriculture',
    issuer: 'Agricultural University',
    earned: true,
    date: '2023-12-10'
  },
  {
    name: 'Smart Farming Technology',
    issuer: 'Tech Agriculture Institute',
    earned: false,
    date: null
  }
];

export const TrainingEducation = ({ onBack }: TrainingEducationProps) => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

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
          <h1 className="text-3xl font-bold text-foreground mb-2">🎓 Training & Education</h1>
          <p className="text-muted-foreground text-lg">Enhance your farming skills with interactive courses</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">4</div>
              <p className="text-sm text-muted-foreground">Available modules</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="h-5 w-5 text-success" />
                Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">1</div>
              <p className="text-sm text-muted-foreground">With certificate</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                Study Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">12</div>
              <p className="text-sm text-muted-foreground">Hours this month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-warning" />
                Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">156</div>
              <p className="text-sm text-muted-foreground">Fellow learners</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Training Modules */}
          <div>
            <Card className="shadow-farm">
              <CardHeader>
                <CardTitle>📚 Available Courses</CardTitle>
                <CardDescription>Interactive training modules in your preferred language</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trainingModules.map((module, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedModule === index ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedModule(index)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{module.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{module.description}</p>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {module.level}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {module.language}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {module.duration}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          {module.completed ? (
                            <Badge variant="default" className="bg-success">
                              Completed
                            </Badge>
                          ) : (
                            <Button size="sm" variant="farm" className="gap-1">
                              <Play className="h-3 w-3" />
                              {module.progress > 0 ? 'Continue' : 'Start'}
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all ${
                            module.completed ? 'bg-success' : 'bg-primary'
                          }`}
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-xs text-muted-foreground mt-1">
                        {module.progress}% complete
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Certificates */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  My Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border ${
                        cert.earned ? 'border-success bg-success/5' : 'border-border bg-muted/30'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          {cert.earned && cert.date && (
                            <p className="text-xs text-success mt-1">Earned: {cert.date}</p>
                          )}
                        </div>
                        {cert.earned ? (
                          <Badge variant="default" className="bg-success">
                            <Award className="h-3 w-3 mr-1" />
                            Earned
                          </Badge>
                        ) : (
                          <Badge variant="outline">
                            In Progress
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Path */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>🎯 Recommended Learning Path</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <div className="font-medium text-primary">Next: Smart Irrigation</div>
                    <div className="text-sm text-muted-foreground">Continue your water management journey</div>
                    <Button size="sm" variant="farm" className="mt-2">
                      Resume Course
                    </Button>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="font-medium">After That: Crop Disease ID</div>
                    <div className="text-sm text-muted-foreground">Master AI-powered disease detection</div>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="font-medium">Final: Market Analysis</div>
                    <div className="text-sm text-muted-foreground">Optimize your selling strategy</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Features */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>👥 Learning Community</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Discussion Forums</span>
                    <Button size="sm" variant="outline">Join</Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Study Groups</span>
                    <Button size="sm" variant="outline">Find Group</Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Expert Q&A</span>
                    <Button size="sm" variant="farm">Ask Question</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};