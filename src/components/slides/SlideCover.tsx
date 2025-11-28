import Card from "../Card";

const SlideCover = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card variant="glass" className="max-w-3xl w-full text-center space-y-6">

        {/* Title */}
        <h1 className="text-foreground">
          Agente de Voz para TRAKI
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-primary font-semibold">
          Propuesta presentada por Solware
        </p>


        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </Card>
    </div>
  );
};

export default SlideCover;
