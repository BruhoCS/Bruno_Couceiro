import { Component } from '@angular/core';

type SkillGroup = { title: string; skills: string[] };

type Project = {
  title: string;
  description: string;
  url: string;
  label: string;
  highlight: boolean;
};

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Stack', href: '#stack' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' }
  ];

  protected readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'RxJS']
    },
    {
      title: 'Backend',
      skills: ['.NET 8/.NET 10', 'Blazor', 'Laravel', 'Java', 'SQL / MySQL']
    },
    {
      title: 'Herramientas',
      skills: ['Git', 'Docker', 'Linux', 'Postman', 'Azure', 'N8N', 'Power Platform']
    }
  ];

  protected readonly productionProjects: Project[] = [
    {
      title: 'Materiales Construcción Leal',
      description: 'Web corporativa de venta de materiales de construcción. Página viva, en producción, con catálogo orientado a captación de clientes.',
      url: 'https://materialesconstruccionleal.com',
      label: 'En producción',
      highlight: true
    },
    {
      title: 'NS Escuela de Psicoterapia',
      description: 'Plataforma de venta de cursos online de psicoterapia. Formación digital para profesionales, en funcionamiento real.',
      url: 'https://nsescuelapsicoterapia.com',
      label: 'En producción',
      highlight: true
    },
    {
      title: 'Laser Iberic',
      description: 'Web de venta y reparación de maquinaria láser industrial. Presencia comercial activa para un negocio técnico.',
      url: 'https://laseriberic.es',
      label: 'En producción',
      highlight: true
    }
  ];

  protected readonly codingProjects: Project[] = [
    {
      title: 'Este portfolio',
      description: 'SPA en Angular 21 (standalone) con diseño responsive, despliegue continuo en Vercel y buenas prácticas de usabilidad. Mi prueba pública de código frontend.',
      url: '#inicio',
      label: 'Código propio',
      highlight: false
    },
    {
      title: 'Proyectos fullstack (GitHub)',
      description: 'Aplicaciones fullstack del FP (Angular + Laravel) y demos .NET/Blazor, documentadas como casos de estudio: problema resuelto, stack y cómo se usa.',
      url: 'https://github.com/BruhoCS',
      label: 'Código propio',
      highlight: false
    }
  ];

  protected readonly socials = [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bruno-couceiro',
      icon: 'linkedin'
    },
    {
      label: 'GitHub',
      url: 'https://github.com/BruhoCS',
      icon: 'github'
    },
    {
      label: 'Email',
      url: 'mailto:sande.couceiro@gmail.com',
      icon: 'mail'
    }
  ];

  protected readonly cvUrl = 'assets/CV_Bruno_Couceiro_Sande.pdf';

  protected scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
