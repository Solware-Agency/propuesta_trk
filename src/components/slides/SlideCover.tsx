import Card from "../Card";

const SlideCover = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl w-full space-y-8">
        {/* Title */}
        <h1 className="text-center text-foreground">
          Agente de Voz para TRAKI
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-center text-primary font-semibold mb-12">
          Propuesta presentada por Solware
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem Card */}
          <Card variant="glass" className="space-y-4">
            <h3 className="text-primary text-xl font-semibold">EL PROBLEMA</h3>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
              Traki recibe diariamente cientos de consultas de clientes que quedan sin respuesta inmediata, generando frustración, saturación del personal en tiendas y pérdida de oportunidades de venta.
            </p>
          </Card>

          {/* Solution Card */}
          <Card variant="glass" className="space-y-4">
            <h3 className="text-primary text-xl font-semibold">LA SOLUCIÓN = NUESTRA PROPUESTA</h3>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
              Implementar un agente inteligente de atención telefónica llamado "Nadia" que responde de forma automática y natural a consultas sobre horarios, ubicaciones, promociones y productos, disponible 24/7 con capacidad multillamada.
            </p>
          </Card>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideCover;
