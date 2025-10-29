import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import mascotImage from "@/assets/don-bocatin-mascot.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Floating circles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/20"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/20"
          animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-primary/10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-10"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 rounded-full text-sm font-semibold text-primary">
                  <span className="animate-pulse">🔥</span>
                  Más de 15 años de tradición
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-foreground leading-tight">
                Don Bocatín{" "}
                <span className="text-primary">Bocatería</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Sabor local, buen ambiente y bocatas que enamoran desde hace 15+ años.
              </p>

              <p className="text-lg text-muted-foreground">
                📍 Plaza Reyes Católicos, 1, Roquetas de Mar, Almería
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-primary-foreground shadow-cartoon font-bold text-lg px-8 py-6"
                  asChild
                >
                  <a href="/menu" target="_blank" rel="noopener noreferrer">
                    Ver Carta Completa
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
                  asChild
                >
                  <a href="#reservar">
                    <Calendar className="w-5 h-5 mr-2" />
                    Reservar Mesa
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="font-bold text-foreground">8.7/10</p>
                  <p className="text-muted-foreground">200+ reseñas</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-2xl">♿</span>
                <div>
                  <p className="font-bold text-foreground">Accesible</p>
                  <p className="text-muted-foreground">Para todos</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
                <div>
                  <p className="font-bold text-foreground">Familiar</p>
                  <p className="text-muted-foreground">Ambiente acogedor</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Mascot Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse-soft" />
              <img 
                src={mascotImage} 
                alt="Don Boca Tín - Mascota de Don Bocatín Bocatería"
                className="relative w-full max-w-xl md:max-w-2xl rounded-3xl drop-shadow-2xl"
                loading="eager"
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-10 right-10 text-6xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🍔
            </motion.div>
            <motion.div
              className="absolute bottom-20 left-10 text-5xl"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              🥖
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};