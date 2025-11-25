import Card from "../Card";
import { TrendingDown, Smile, Clock, BarChart3 } from "lucide-react";

const SlideImpact = () => {
  const impacts = [
    {
      icon: TrendingDown,
      title: "Reducción de Carga Operativa",
      description: "Libera al personal de tiendas de atender llamadas repetitivas, permitiéndoles enfocarse en la atención presencial y tareas de mayor valor agregado.",
    },
    {
      icon: Smile,
      title: "Mejora en Experiencia del Cliente",
      description: "Los clientes obtienen respuestas inmediatas y precisas a sus consultas sin tiempos de espera, mejorando significativamente su satisfacción.",
    },
    {
      icon: Clock,
      title: "Disponibilidad Total 24/7",
      description: "Atención continua sin interrupciones, incluso fuera del horario comercial, sin costos adicionales de personal nocturno o fines de semana.",
    },
    {
      icon: BarChart3,
      title: "Análisis de Comportamiento del Cliente",
      description: "Informes mensuales detallados sobre las consultas más frecuentes permiten identificar oportunidades de mejora y optimizar la comunicación comercial.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Impacto Esperado</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <Card key={index} variant="neuo" className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-primary text-lg sm:text-xl">{impact.title}</h3>
                </div>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed text-justify">
                  {impact.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideImpact;
