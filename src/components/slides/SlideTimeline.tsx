import Card from "../Card";

const SlideTimeline = () => {
  const phases = [
    {
      week: "Semana 1",
      title: "Levantamiento de Información y Entrenamiento Inicial",
      activities:
        "Recopilación de información corporativa de Traki: horarios por tienda, ubicaciones, promociones vigentes, políticas de atención. Entrenamiento inicial del agente Nadia con esta base de conocimiento.",
    },
    {
      week: "Semana 2",
      title: "Desarrollo y Pruebas del Agente",
      activities:
        "Desarrollo de los flujos conversacionales, configuración de síntesis de voz, pruebas internas de comprensión y respuesta, ajustes de personalidad y tono del agente.",
    },
    {
      week: "Semana 3",
      title: "Integración con Línea Telefónica",
      activities:
        "Configuración de la línea VoIP, integración del agente con el sistema telefónico, pruebas de llamadas reales, ajustes de calidad de audio y tiempos de respuesta.",
    },
    {
      week: "Semana 4",
      title: "Ajustes Finales y Entrega",
      activities: "Refinamiento según feedback de Traki, pruebas de stress con múltiples llamadas simultáneas, documentación y capacitación del equipo, puesta en producción.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Timeline de Implementación (4 semanas)
        </h2>

        <div className="space-y-4">
          {phases.map((phase, index) => (
            <Card key={index} variant="glass" className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-primary font-bold text-lg">{phase.week}</span>
                <h3 className="text-foreground text-lg sm:text-xl font-semibold">
                  {phase.title}
                </h3>
              </div>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed pl-0 sm:pl-20 text-justify">
                {phase.activities}
              </p>
            </Card>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideTimeline;
