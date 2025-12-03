import Card from "../Card";
import { Phone, Clock, MapPin, Tag, Users, FileText } from "lucide-react";

const SlideObjectives = () => {
  const objectives = [
    {
      icon: Phone,
      text: "Atención 24/7 por voz sin intervención humana, actuando como primer punto de contacto para consultas de clientes de Traki.",
    },
    {
      icon: Clock,
      text: "Responder consultas sobre horarios de atención por tienda, adaptándose a la ubicación específica solicitada por el cliente.",
    },
    {
      icon: MapPin,
      text: "Proporcionar información sobre ubicación y contacto de todas las sedes de Traki a nivel nacional de forma instantánea.",
    },
    {
      icon: Tag,
      text: "Responder preguntas frecuentes sobre promociones, eventos especiales y campañas vigentes en las tiendas.",
    },
    {
      icon: Users,
      text: "Capacidad multillamada simultánea para atender múltiples clientes al mismo tiempo sin tiempos de espera.",
    },
    {
      icon: FileText,
      text: "Generación de informes mensuales sobre interacciones, preguntas más frecuentes y comportamiento del cliente para optimización continua."
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Nuestra Propuesta: Agente de Voz "Nadia"</h2>

        <Card variant="glass" className="space-y-6">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
                </div>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed pt-2 text-justify">
                  {objective.text}
                </p>
              </div>
            );
          })}
        </Card>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>

      <img
        src="/image.png"
        alt="Info"
        className="absolute bottom-4 right-4 w-48 h-auto sm:w-64 opacity-90"
      />
    </div>
  );
};

export default SlideObjectives;
