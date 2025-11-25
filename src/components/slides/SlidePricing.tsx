import Card from "../Card";
import { DollarSign, Calendar, Smartphone, Repeat, Telescope } from "lucide-react";

const SlidePricing = () => {
  const items = [
    {
      icon: DollarSign,
      title: "Costo de Implementación Única",
      value: "$3,000 USD - Incluye diseño, desarrollo, entrenamiento del agente Nadia, integración telefónica y pruebas completas.",
    },
    {
      icon: Calendar,
      title: "Forma de Pago",
      value:
        "50% al iniciar el proyecto ($1,500 USD); 50% al entregar el agente en producción ($1,500 USD). Pagos por transferencia en USD o Bs. al tipo de cambio oficial del BCV.",
    },
    {
      icon: Repeat,
      title: "Costo Mensual de Mantenimiento",
      value: "$250 USD mensuales - Incluye mantenimiento técnico del agente, actualización de contenido según necesidades, e informe mensual detallado de uso y comportamiento del cliente.",
    },
    {
      icon: Smartphone,
      title: "Otros Costos (Gestionados por Traki)",
      value: "Compra de número local venezolano (VoIP) y plan de llamadas con proveedor de telefonía asociado. Solware no intermedia ni factura estos costos; se pagan directamente a la plataforma donde estará alojado el agente.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Inversión y Condiciones de Pago
        </h2>

        <div className="space-y-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} variant="neuo" className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-primary text-lg sm:text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed pl-0 sm:pl-16 text-justify">
                  {item.value}
                </p>
              </Card>
            );
          })}
        </div>

        <Card variant="glass" className="mt-8">
          <p className="text-center text-foreground/70 text-sm italic text-justify">
            Esta solución permitirá a Traki ofrecer una atención al cliente moderna, automática y escalable que reduce cargas operativas, mejora la experiencia del usuario y permite conocer mejor lo que los clientes están buscando.
          </p>
        </Card>

        {/* Phase 2 Section */}
        <Card variant="neuo" className="mt-6 border-l-4 border-l-secondary">
          <div className="flex items-center gap-3 mb-3">
            <Telescope className="w-6 h-6 text-secondary" />
            <h3 className="text-secondary text-lg font-semibold">Fase 2 (Opcional y Futura)</h3>
          </div>
          <ul className="space-y-2 text-foreground/80 text-sm">
            <li>• Integración con SAP para consultar inventario en tiempo real por SKU o categoría</li>
            <li>• Agente disponible también por Telegram o WhatsApp (formato texto o voz)</li>
            <li>• Flujos avanzados: consultas por código de barras, seguimiento de pedidos, catálogos automatizados</li>
          </ul>
          <p className="text-foreground/60 text-xs mt-3 italic">
            En esta etapa se presentará una nueva propuesta técnica y económica.
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

export default SlidePricing;
