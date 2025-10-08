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
      title: "FDM ПЕЧАТЬ",
      description: "Высокоточная печать пластиковыми материалами для прототипирования и малых серий"
    },
    {
      icon: "Factory",
      title: "SLS ТЕХНОЛОГИЯ",
      description: "Селективное лазерное спекание для производства прочных функциональных деталей"
    },
    {
      icon: "Cpu",
      title: "SLA ПЕЧАТЬ",
      description: "Стереолитография для создания моделей с высокой детализацией"
    },
    {
      icon: "Cog",
      title: "МЕТАЛЛ ПЕЧАТЬ",
      description: "Прямая печать металлом для промышленного применения"
    }
  ];

  const services = [
    {
      icon: "Pencil",
      title: "ПРОТОТИПИРОВАНИЕ",
      description: "Быстрое создание прототипов для тестирования концепций"
    },
    {
      icon: "Package",
      title: "СЕРИЙНОЕ ПРОИЗВОДСТВО",
      description: "Производство малых и средних серий изделий"
    },
    {
      icon: "Wrench",
      title: "ИНЖИНИРИНГ",
      description: "Разработка и оптимизация изделий под 3D печать"
    },
    {
      icon: "Globe",
      title: "КОНСАЛТИНГ",
      description: "Консультации по внедрению аддитивных технологий"
    }
  ];

  const projects = [
    {
      title: "AEROSPACE",
      category: "АВИАКОСМИЧЕСКАЯ ОТРАСЛЬ",
      description: "Лёгкие конструкционные элементы для космических аппаратов"
    },
    {
      title: "AUTOMOTIVE",
      category: "АВТОМОБИЛЕСТРОЕНИЕ",
      description: "Функциональные прототипы деталей двигателя"
    },
    {
      title: "MEDICAL",
      category: "МЕДИЦИНА",
      description: "Индивидуальные медицинские имплантаты"
    },
    {
      title: "INDUSTRIAL",
      category: "ПРОМЫШЛЕННОСТЬ",
      description: "Производственная оснастка и инструменты"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(250, 250, 250, 0.03) 2px,
            rgba(250, 250, 250, 0.03) 4px
          )`
        }}
      ></div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b-2 border-primary/40">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <Icon name="Box" className="text-background" size={28} />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight text-foreground leading-none">
                  ADDITIVE TECH
                </div>
                <div className="text-xs text-primary font-semibold tracking-widest">
                  INDUSTRIAL 3D PRINTING
                </div>
              </div>
            </div>
            <div className="hidden md:flex gap-8">
              {[
                { id: "home", label: "ГЛАВНАЯ" },
                { id: "technologies", label: "ТЕХНОЛОГИИ" },
                { id: "services", label: "УСЛУГИ" },
                { id: "projects", label: "ПРОЕКТЫ" },
                { id: "about", label: "О НАС" },
                { id: "contacts", label: "КОНТАКТЫ" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-bold transition-colors hover:text-primary relative ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-5 left-0 right-0 h-0.5 bg-primary"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-40 pb-24 px-6 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-card border-l-4 border-primary">
                <div className="w-2 h-2 bg-primary animate-pulse"></div>
                <span className="text-primary text-sm font-bold tracking-wider">
                  ИНДУСТРИЯ 4.0 • АДДИТИВНОЕ ПРОИЗВОДСТВО
                </span>
              </div>
              <h1 className="text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="text-foreground">СОЗДАЁМ</span>
                <br />
                <span className="text-primary">БУДУЩЕЕ</span>
                <br />
                <span className="text-foreground">СЕГОДНЯ</span>
              </h1>
              <div className="h-1 w-32 bg-primary"></div>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Профессиональная 3D-печать и прототипирование для промышленности. 
                Превращаем цифровые модели в реальные изделия с точностью до микрона.
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-background font-bold tracking-wide px-8 h-14 text-base"
                  onClick={() => scrollToSection("contacts")}
                >
                  ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-bold tracking-wide px-8 h-14 text-base"
                  onClick={() => scrollToSection("projects")}
                >
                  НАШИ ПРОЕКТЫ
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 blur-3xl"></div>
              <div className="relative bg-card border-2 border-border p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background border-l-4 border-primary p-6 relative overflow-hidden group hover:border-accent transition-colors">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:bg-accent/10 transition-colors"></div>
                    <Icon name="Layers" className="mb-4 text-primary group-hover:text-accent transition-colors" size={36} />
                    <div className="text-4xl font-black text-foreground">250+</div>
                    <div className="text-xs text-muted-foreground font-semibold tracking-wider">ПРОЕКТОВ</div>
                  </div>
                  <div className="bg-background border-l-4 border-accent p-6 relative overflow-hidden group hover:border-primary transition-colors">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:bg-primary/10 transition-colors"></div>
                    <Icon name="Factory" className="mb-4 text-accent group-hover:text-primary transition-colors" size={36} />
                    <div className="text-4xl font-black text-foreground">15</div>
                    <div className="text-xs text-muted-foreground font-semibold tracking-wider">ТЕХНОЛОГИЙ</div>
                  </div>
                  <div className="bg-background border-l-4 border-accent p-6 relative overflow-hidden group hover:border-primary transition-colors">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:bg-primary/10 transition-colors"></div>
                    <Icon name="Users" className="mb-4 text-accent group-hover:text-primary transition-colors" size={36} />
                    <div className="text-4xl font-black text-foreground">100+</div>
                    <div className="text-xs text-muted-foreground font-semibold tracking-wider">КЛИЕНТОВ</div>
                  </div>
                  <div className="bg-background border-l-4 border-primary p-6 relative overflow-hidden group hover:border-accent transition-colors">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:bg-accent/10 transition-colors"></div>
                    <Icon name="Award" className="mb-4 text-primary group-hover:text-accent transition-colors" size={36} />
                    <div className="text-4xl font-black text-foreground">8</div>
                    <div className="text-xs text-muted-foreground font-semibold tracking-wider">ЛЕТ ОПЫТА</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technologies" className="py-24 px-6 bg-card/50 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-64 bg-primary"></div>
        <div className="container mx-auto">
          <div className="mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-sm text-primary font-bold tracking-widest">ЧТО МЫ УМЕЕМ</span>
            </div>
            <h2 className="text-6xl font-black mb-6 tracking-tight">ТЕХНОЛОГИИ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Используем передовые методы аддитивного производства для решения самых сложных промышленных задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={index}
                className="group bg-card border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-8xl font-black text-primary/5 leading-none p-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6 inline-block p-4 bg-background border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/5 transition-all">
                    <Icon name={tech.icon as any} className="text-primary" size={40} />
                  </div>
                  <h3 className="text-xl font-black mb-4 tracking-tight">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-64 bg-accent"></div>
        <div className="container mx-auto">
          <div className="mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-accent"></div>
              <span className="text-sm text-accent font-bold tracking-widest">НАШИ УСЛУГИ</span>
            </div>
            <h2 className="text-6xl font-black mb-6 tracking-tight">РЕШЕНИЯ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Полный цикл работ от концепции до готового изделия
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group bg-background border-l-4 border-accent hover:border-primary hover:bg-card transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Icon name={service.icon as any} className="text-accent group-hover:text-primary transition-colors" size={44} />
                  </div>
                  <h3 className="text-lg font-black mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-card/50 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-64 bg-primary"></div>
        <div className="container mx-auto">
          <div className="mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-sm text-primary font-bold tracking-widest">PORTFOLIO</span>
            </div>
            <h2 className="text-6xl font-black mb-6 tracking-tight">ПРОЕКТЫ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Реализованные решения для различных промышленных отраслей
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group overflow-hidden bg-card border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer"
              >
                <div className="h-72 bg-gradient-to-br from-muted via-background to-card flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
                  <div className="absolute top-0 left-0 w-full h-full opacity-10"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        rgba(250, 250, 250, 0.1) 10px,
                        rgba(250, 250, 250, 0.1) 20px
                      )`
                    }}
                  ></div>
                  <div className="relative text-center z-10">
                    <div className="mb-6 inline-block p-6 bg-background/80 border-2 border-primary/50">
                      <Icon name="Box" className="text-primary" size={72} />
                    </div>
                    <div className="text-3xl font-black tracking-tight">{project.title}</div>
                  </div>
                </div>
                <CardContent className="p-8 bg-background">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-0.5 bg-accent"></div>
                    <div className="text-xs text-accent font-bold tracking-widest">{project.category}</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-64 bg-accent"></div>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-accent"></div>
                <span className="text-sm text-accent font-bold tracking-widest">КТО МЫ</span>
              </div>
              <h2 className="text-6xl font-black mb-8 tracking-tight">О КОМПАНИИ</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg border-l-4 border-primary pl-6">
                  Мы специализируемся на аддитивных технологиях производства с 2016 года. 
                  Наша миссия — делать промышленное 3D-прототипирование доступным и эффективным.
                </p>
                <p className="text-lg">
                  Команда опытных инженеров и технологов работает над самыми сложными проектами 
                  в авиакосмической, автомобильной и медицинской отраслях.
                </p>
                <p className="text-lg border-l-4 border-accent pl-6">
                  Современное оборудование и собственные разработки позволяют нам гарантировать 
                  высокое качество и точность изделий.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="p-6 bg-card border-l-4 border-primary">
                  <Icon name="Shield" className="text-primary mb-4" size={36} />
                  <div className="font-black text-lg mb-2">СЕРТИФИКАТЫ</div>
                  <div className="text-sm text-muted-foreground">ISO 9001, ISO 14001</div>
                </div>
                <div className="p-6 bg-card border-l-4 border-accent">
                  <Icon name="Zap" className="text-accent mb-4" size={36} />
                  <div className="font-black text-lg mb-2">ТЕХНОЛОГИИ</div>
                  <div className="text-sm text-muted-foreground">15+ методов печати</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-l from-primary/20 via-transparent to-accent/10 blur-3xl"></div>
              <div className="relative bg-card border-2 border-border p-10">
                <div className="space-y-6">
                  <div className="flex items-start gap-6 p-6 bg-background border-l-4 border-primary">
                    <Icon name="Target" className="text-primary mt-1 flex-shrink-0" size={32} />
                    <div>
                      <div className="font-black text-lg mb-2">ТОЧНОСТЬ</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        Погрешность не более 0.1 мм на большинстве технологий
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 p-6 bg-background border-l-4 border-accent">
                    <Icon name="Clock" className="text-accent mt-1 flex-shrink-0" size={32} />
                    <div>
                      <div className="font-black text-lg mb-2">СКОРОСТЬ</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        Быстрое прототипирование от 24 часов
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 p-6 bg-background border-l-4 border-primary">
                    <Icon name="Sparkles" className="text-primary mt-1 flex-shrink-0" size={32} />
                    <div>
                      <div className="font-black text-lg mb-2">КАЧЕСТВО</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
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

      <section id="contacts" className="py-24 px-6 bg-card/50 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-64 bg-primary"></div>
        <div className="container mx-auto max-w-5xl">
          <div className="mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-sm text-primary font-bold tracking-widest">СВЯЗАТЬСЯ</span>
            </div>
            <h2 className="text-6xl font-black mb-6 tracking-tight">КОНТАКТЫ</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-background border-l-4 border-primary hover:border-accent transition-colors">
              <CardContent className="p-8 text-center">
                <Icon name="Phone" className="mx-auto mb-4 text-primary" size={36} />
                <div className="font-black text-sm mb-3 tracking-wider">ТЕЛЕФОН</div>
                <div className="text-muted-foreground">+7 (495) 123-45-67</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-l-4 border-primary hover:border-accent transition-colors">
              <CardContent className="p-8 text-center">
                <Icon name="Mail" className="mx-auto mb-4 text-primary" size={36} />
                <div className="font-black text-sm mb-3 tracking-wider">EMAIL</div>
                <div className="text-muted-foreground">info@additive-tech.ru</div>
              </CardContent>
            </Card>
            <Card className="bg-background border-l-4 border-primary hover:border-accent transition-colors">
              <CardContent className="p-8 text-center">
                <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={36} />
                <div className="font-black text-sm mb-3 tracking-wider">АДРЕС</div>
                <div className="text-muted-foreground">Москва, ул. Промышленная, 42</div>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-card border-2 border-border">
            <CardContent className="p-10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-3 tracking-wider">ИМЯ</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 bg-background border-2 border-border focus:border-primary focus:outline-none transition-colors font-medium"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3 tracking-wider">EMAIL</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-4 bg-background border-2 border-border focus:border-primary focus:outline-none transition-colors font-medium"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-3 tracking-wider">СООБЩЕНИЕ</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-4 bg-background border-2 border-border focus:border-primary focus:outline-none transition-colors resize-none font-medium"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-background font-black py-6 text-base tracking-wider">
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-10 px-6 border-t-2 border-primary/40 bg-background relative">
        <div className="absolute top-0 left-0 w-32 h-1 bg-primary"></div>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <Icon name="Box" className="text-background" size={24} />
              </div>
              <div>
                <div className="text-xl font-black tracking-tight">ADDITIVE TECH</div>
                <div className="text-xs text-primary font-semibold tracking-widest">INDUSTRIAL 3D PRINTING</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">© 2024 ВСЕ ПРАВА ЗАЩИЩЕНЫ</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
