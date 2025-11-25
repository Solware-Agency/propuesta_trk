import Card from "../Card";

const SlideDiagnosis = () => {
  const challenges = [
    {
      title: "Saturación de Personal en Tiendas",
      description:
        "El personal en tiendas debe atender constantemente llamadas repetitivas sobre horarios, ubicaciones y productos, lo que reduce su capacidad para atender clientes presenciales y afecta la eficiencia operativa.",
    },
    {
      title: "Clientes Insatisfechos por Falta de Respuestas Oportunas",
      description:
        "Sin un canal automatizado de atención, muchos clientes no reciben respuestas inmediatas a sus consultas básicas, generando frustración y afectando la experiencia del cliente.",
    },
    {
      title: "Pérdida de Oportunidades de Venta",
      description:
        "La falta de información oportuna sobre horarios, ubicaciones y promociones ocasiona que potenciales clientes desistan de visitar las tiendas, representando pérdida directa de oportunidades comerciales.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Necesidad Detectada
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <Card key={index} variant="neuo" className="space-y-3">
              <h3 className="text-primary">{challenge.title}</h3>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed text-justify">
                {challenge.description}
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

export default SlideDiagnosis;
