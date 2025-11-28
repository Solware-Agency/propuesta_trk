import Card from "../Card";
import { Brain, Mic, Database, Phone, Clock, MapPin, Tag, AlertCircle } from "lucide-react";

const SlideWebsite = () => {
  const designFeatures = [
    {
      icon: Brain,
      text: "Procesamiento de lenguaje natural avanzado que permite al agente Nadia comprender y responder consultas de forma conversacional y humana.",
    },
    {
      icon: Mic,
      text: "Interacción por voz completamente natural con síntesis de voz de alta calidad, creando una experiencia de atención cálida y profesional.",
    },
    {
      icon: Database,
      text: "Entrenamiento inicial con información corporativa actualizada de Traki: horarios, ubicaciones, promociones y políticas de atención.",
    },
  ];

  const sections = [
    { icon: Phone, title: "Integración Telefónica", desc: "Conexión con línea VoIP" },
    { icon: Clock, title: "Horarios", desc: "Consulta por tienda" },
    { icon: MapPin, title: "Ubicaciones", desc: "Información de sedes" },
    { icon: Tag, title: "Disponibilidad Genérica", desc: "Según árbol de categorías" },
    { icon: AlertCircle, title: "Limitación Fase 1", desc: "Sin conexión SAP" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full space-y-8">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-foreground">Características del Agente de Voz Nadia</h2>
          <p className="text-secondary text-lg">Fase 1 - Capacidades Iniciales</p>
        </div>

        {/* Design & UX Section */}
        <div className="space-y-6 mb-10">
          <h3 className="text-primary text-center">Tecnología e Inteligencia Artificial</h3>
          <Card variant="glass" className="space-y-4">
            {designFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-secondary" aria-hidden="true" />
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed pt-1 text-justify">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </Card>
        </div>

        {/* Suggested Structure Section */}
        <div className="space-y-6">
          <h3 className="text-primary text-center">Capacidades de Consulta</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} variant="neuo" className="text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground">{section.title}</h4>
                  <p className="text-xs sm:text-sm text-foreground/70">{section.desc}</p>
                </Card>
            );
            })}
          </div>
        </div>

        {/* Important Note */}
        <Card variant="glass" className="mt-8 border-l-4 border-l-primary">
          <p className="text-foreground/90 text-sm leading-relaxed">
            <span className="font-semibold text-primary">Nota Importante:</span> En esta fase, Nadia no estará conectada al sistema SAP de Traki, por lo que no podrá dar información sobre disponibilidad o inventario de productos específicos.
          </p>
        </Card>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideWebsite;
