import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const technologies = [
    {
      icon: "Layers",
      title: "FDM печать",
      description: "Высокоточная печать пластиковыми материалами для прототипирования и малых серий"
    },
    {
      icon: "Factory",
      title: "SLS технология",
      description: "Селективное лазерное спекание для производства прочных функциональных деталей"
    },
    {
      icon: "Cpu",
      title: "SLA печать",
      description: "Стереолитография для создания моделей с высокой детализацией"
    },
    {
      icon: "Cog",
      title: "Металл печать",
      description: "Прямая печать металлом для промышленного применения"
    }
  ];

  const services = [
    {
      icon: "Pencil",
      title: "Прототипирование",
      description: "Быстрое создание прототипов для тестирования концепций"
    },
    {
      icon: "Package",
      title: "Серийное производство",
      description: "Производство малых и средних серий изделий"
    },
    {
      icon: "Wrench",
      title: "Инжиниринг",
      description: "Разработка и оптимизация изделий под 3D печать"
    },
    {
      icon: "Globe",
      title: "Консалтинг",
      description: "Консультации по внедрению аддитивных технологий"
    }
  ];

  const projects = [
    {
      title: "Aerospace",
      category: "Авиакосмическая отрасль",
      description: "Лёгкие конструкционные элементы для космических аппаратов"
    },
    {
      title: "Automotive",
      category: "Автомобилестроение",
      description: "Функциональные прототипы деталей двигателя"
    },
    {
      title: "Medical",
      category: "Медицина",
      description: "Индивидуальные медицинские имплантаты"
    },
    {
      title: "Industrial",
      category: "Промышленность",
      description: "Производственная оснастка и инструменты"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-wider text-primary">
              ADDITIVE TECH
            </div>
            <div className="hidden md:flex gap-8">
              {[
                { id: "home", label: "Главная" },
                { id: "technologies", label: "Технологии" },
                { id: "services", label: "Услуги" },
                { id: "projects", label: "Проекты" },
                { id: "about", label: "О компании" },
                { id: "contacts", label: "Контакты" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary text-primary text-sm font-medium">
                ИНДУСТРИЯ 4.0
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                АДДИТИВНЫЕ
                <br />
                <span className="text-primary">ТЕХНОЛОГИИ</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Профессиональная 3D-печать и прототипирование для промышленности. 
                Превращаем цифровые модели в реальные изделия.
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  onClick={() => scrollToSection("contacts")}
                >
                  Получить консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => scrollToSection("projects")}
                >
                  Наши проекты
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
              <div className="relative bg-card border border-border p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-background/50 border border-border">
                    <Icon name="Layers" className="mx-auto mb-3 text-primary" size={32} />
                    <div className="text-3xl font-bold">250+</div>
                    <div className="text-sm text-muted-foreground">Проектов</div>
                  </div>
                  <div className="text-center p-6 bg-background/50 border border-border">
                    <Icon name="Factory" className="mx-auto mb-3 text-accent" size={32} />
                    <div className="text-3xl font-bold">15</div>
                    <div className="text-sm text-muted-foreground">Технологий</div>
                  </div>
                  <div className="text-center p-6 bg-background/50 border border-border">
                    <Icon name="Users" className="mx-auto mb-3 text-primary" size={32} />
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-sm text-muted-foreground">Клиентов</div>
                  </div>
                  <div className="text-center p-6 bg-background/50 border border-border">
                    <Icon name="Award" className="mx-auto mb-3 text-accent" size={32} />
                    <div className="text-3xl font-bold">8</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">ТЕХНОЛОГИИ</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Используем передовые методы аддитивного производства для решения самых сложных задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={index}
                className="group hover:border-primary transition-all duration-300 bg-card border-border cursor-pointer hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-block p-4 bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <Icon name={tech.icon as any} className="text-primary" size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">УСЛУГИ</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный цикл работ от идеи до готового изделия
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:border-accent transition-all duration-300 bg-card border-border cursor-pointer hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon name={service.icon as any} className="text-accent" size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">ПРОЕКТЫ</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реализованные решения для различных отраслей
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-border hover:border-primary transition-all duration-300 cursor-pointer"
              >
                <div className="h-64 bg-gradient-to-br from-muted to-background flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                  <div className="relative text-center">
                    <Icon name="Box" className="mx-auto mb-4 text-primary" size={64} />
                    <div className="text-2xl font-bold">{project.title}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-accent font-medium mb-2">{project.category}</div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">О КОМПАНИИ</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Мы специализируемся на аддитивных технологиях производства с 2016 года. 
                  Наша миссия — делать промышленное 3D-прототипирование доступным и эффективным.
                </p>
                <p className="text-lg">
                  Команда опытных инженеров и технологов работает над самыми сложными проектами 
                  в авиакосмической, автомобильной и медицинской отраслях.
                </p>
                <p className="text-lg">
                  Современное оборудование и собственные разработки позволяют нам гарантировать 
                  высокое качество и точность изделий.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-card border border-border">
                  <Icon name="Shield" className="text-primary mb-3" size={32} />
                  <div className="font-bold mb-1">Сертификаты</div>
                  <div className="text-sm text-muted-foreground">ISO 9001, ISO 14001</div>
                </div>
                <div className="p-6 bg-card border border-border">
                  <Icon name="Zap" className="text-accent mb-3" size={32} />
                  <div className="font-bold mb-1">Технологии</div>
                  <div className="text-sm text-muted-foreground">15+ методов печати</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-accent/20 blur-3xl"></div>
              <div className="relative bg-card border border-border p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-background/50 border-l-4 border-primary">
                    <Icon name="Target" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-bold mb-1">Точность</div>
                      <div className="text-sm text-muted-foreground">
                        Погрешность не более 0.1 мм на большинстве технологий
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-background/50 border-l-4 border-accent">
                    <Icon name="Clock" className="text-accent mt-1" size={24} />
                    <div>
                      <div className="font-bold mb-1">Скорость</div>
                      <div className="text-sm text-muted-foreground">
                        Быстрое прототипирование от 24 часов
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-background/50 border-l-4 border-primary">
                    <Icon name="Sparkles" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-bold mb-1">Качество</div>
                      <div className="text-sm text-muted-foreground">
                        Постобработка и контроль качества каждого изделия
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">КОНТАКТЫ</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <Icon name="Phone" className="mx-auto mb-4 text-primary" size={32} />
                <div className="font-bold mb-2">Телефон</div>
                <div className="text-muted-foreground">+7 (495) 123-45-67</div>
              </CardContent>
            </Card>
            <Card className="text-center border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <Icon name="Mail" className="mx-auto mb-4 text-primary" size={32} />
                <div className="font-bold mb-2">Email</div>
                <div className="text-muted-foreground">info@additive-tech.ru</div>
              </CardContent>
            </Card>
            <Card className="text-center border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={32} />
                <div className="font-bold mb-2">Адрес</div>
                <div className="text-muted-foreground">Москва, ул. Промышленная, 42</div>
              </CardContent>
            </Card>
          </div>
          <Card className="border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="text-xl font-bold mb-2 text-primary">ADDITIVE TECH</div>
          <p className="text-sm">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
