import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', discord: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы скоро с вами свяжемся.');
    setFormData({ name: '', discord: '', message: '' });
  };

  const members = [
    { name: 'IRONWOLF', role: 'Лидер', kills: 1247 },
    { name: 'SHADOW', role: 'Заместитель', kills: 1089 },
    { name: 'VIPER', role: 'Снайпер', kills: 956 },
    { name: 'TANK', role: 'Штурмовик', kills: 834 },
    { name: 'PHOENIX', role: 'Разведчик', kills: 721 },
    { name: 'GHOST', role: 'Боец', kills: 689 },
  ];

  const rules = [
    'Уважение к членам клана обязательно',
    'Активность более 10ч в день',
    'Участие в рейдах по расписанию',
    'Помощь новичкам клана',
    'Запрещено соло-игра с ресурсами клана',
    'Общение в Discord обязательно',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/19be6d50-2ede-4e8d-bc71-5521dd18923d/files/96333c19-a4e8-46b6-bf6a-0af972574ba3.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 bg-primary/20 border-4 border-primary flex items-center justify-center">
              <span className="text-6xl font-bold text-primary">DST</span>
            </div>
          </div>
          <h1 className="text-7xl md:text-9xl font-bold text-primary mb-4 tracking-wider drop-shadow-[0_0_20px_rgba(255,107,53,0.8)]">
            КЛАН DST
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-light">
            ВЫЖИВАЕМ ВМЕСТЕ В МИРЕ RUST
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 shadow-[0_0_30px_rgba(255,107,53,0.5)] hover:shadow-[0_0_40px_rgba(255,107,53,0.7)] transition-all"
            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="UserPlus" className="mr-2" size={24} />
            ВСТУПИТЬ В КЛАН
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-primary" />
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-primary">
            О КЛАНЕ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-2 border-border hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Icon name="Target" className="text-primary mr-3" size={32} />
                  <h3 className="text-2xl font-bold">НАША МИССИЯ</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  DST - это команда хардкорных игроков Rust, которые знают цену каждому ресурсу и каждой пуле. 
                  Мы не просто выживаем - мы доминируем на серверах, строим неприступные базы и проводим 
                  масштабные рейды.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-2 border-border hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Icon name="Trophy" className="text-primary mr-3" size={32} />
                  <h3 className="text-2xl font-bold">ДОСТИЖЕНИЯ</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={20} />
                    15+ успешных рейдов в месяц
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={20} />
                    ТОП-3 клан на 5 серверах
                  </li>
                  <li className="flex items-center">25+ активных участников</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-primary">
            ПРАВИЛА КЛАНА
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {rules.map((rule, index) => (
              <Card 
                key={index} 
                className="bg-card border-l-4 border-primary hover:bg-card/80 transition-colors"
              >
                <CardContent className="p-6 flex items-start">
                  <span className="text-3xl font-bold text-primary mr-4">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <p className="text-foreground pt-1">{rule}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      <section id="join" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
            ВСТУПИТЬ В КЛАН
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Присоединяйся к нам в Discord
          </p>
          <Card className="bg-card border-2 border-primary">
            <CardContent className="p-12">
              <div className="mb-8">
                <Icon name="MessageCircle" className="text-primary mx-auto mb-4" size={80} />
                <p className="text-foreground text-lg mb-2">
                  Все обсуждения и заявки проходят в нашем Discord-сервере
                </p>
                <p className="text-muted-foreground">
                  Присоединяйся и стань частью команды DST
                </p>
              </div>
              <Button 
                size="lg" 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 shadow-[0_0_20px_rgba(255,107,53,0.4)] hover:shadow-[0_0_30px_rgba(255,107,53,0.6)]"
              >
                <a href="https://discord.gg/qcu8n8rRg6" target="_blank" rel="noopener noreferrer">
                  <Icon name="ExternalLink" className="mr-2" size={20} />
                  ПРИСОЕДИНИТЬСЯ К DISCORD
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-card/50 border-t-2 border-primary">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">© 2024 КЛАН DST • RUST </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;