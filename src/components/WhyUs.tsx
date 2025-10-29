import { motion } from "framer-motion";
import { Heart, Users, Accessibility, Award } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Hecho a Mano",
    description: "Cada plato se prepara con ingredientes frescos y técnicas artesanales",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Ambiente Familiar",
    description: "Un espacio acogedor donde todos son bienvenidos y se sienten como en casa",
    color: "text-secondary"
  },
  {
    icon: Accessibility,
    title: "Totalmente Accesible",
    description: "Local adaptado para personas con movilidad reducida y familias",
    color: "text-accent"
  },
  {
    icon: Award,
    title: "15+ Años de Tradición",
    description: "Más de una década sirviendo los mejores bocadillos de Roquetas de Mar",
    color: "text-primary"
  }
];

export const WhyUs = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            ¿Por Qué <span className="text-primary">Elegirnos?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos más que una bocatería, somos parte de la familia de Roquetas de Mar
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 border-2 border-transparent hover:border-primary/20 h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 ${reason.color.replace('text-', 'bg-')}/10 rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-8 h-8 ${reason.color}`} strokeWidth={2.5} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border-2 border-primary/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-bold text-foreground">
                  Una Historia de <span className="text-primary">Sabor y Tradición</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Desde hace más de 15 años, Don Bocatín ha sido el lugar de encuentro favorito 
                  de familias y amigos en Roquetas de Mar. Nuestra pasión por la buena comida 
                  y el servicio excepcional nos ha convertido en un referente local.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="text-3xl">🏆</span>
                    <span className="font-bold">200+ reseñas positivas</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <span className="text-3xl">❤️</span>
                    <span className="font-bold">Miles de clientes felices</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-gradient-primary rounded-2xl flex items-center justify-center text-white text-9xl shadow-glow">
                  <img src="/logo.png" alt="Don Bocatín" className="h-3/4 w-auto rounded-full shadow-cartoon" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-4xl shadow-cartoon"
                >
                  ⭐
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};