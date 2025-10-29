import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import hamburguesaImg from "@/assets/hamburguesa-specialty.png";
import bocadilloImg from "@/assets/bocadillo-specialty.png";
import patatasImg from "@/assets/patatas-specialty.png";
import tapasImg from "@/assets/tapas-specialty.png";

const specialties = [
  {
    title: "Hamburguesas Gourmet",
    description: "Carne de primera calidad, ingredientes frescos y pan brioche artesanal.",
    price: "Desde 5,50€",
    image: hamburguesaImg,
    emoji: "🍔"
  },
  {
    title: "Bocadillos de Pechuga",
    description: "Pechuga jugosa a la plancha o empanada con los mejores complementos.",
    price: "Desde 5,60€",
    image: bocadilloImg,
    emoji: "🥖"
  },
  {
    title: "Patatas Especiales",
    description: "Crujientes patatas fritas con salsas caseras y toppings variados.",
    price: "Desde 3,00€",
    image: patatasImg,
    emoji: "🍟"
  },
  {
    title: "Tapas de la Casa",
    description: "Selección de tapas tradicionales y creativas para compartir.",
    price: "Desde 2,50€",
    image: tapasImg,
    emoji: "🍽️"
  }
];

export const Specialties = () => {
  return (
    <section id="especialidades" className="py-20 bg-background">
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
            Nuestras <span className="text-primary">Especialidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestros platos estrella, preparados con ingredientes frescos y mucho amor
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                {/* Image Container */}
                <div className="relative aspect-square bg-gradient-hero p-6 flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full h-full"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-contain drop-shadow-xl"
                      loading="lazy"
                    />
                  </motion.div>
                  
                  {/* Emoji Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-cartoon text-2xl">
                    {item.emoji}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block text-2xl font-bold text-primary">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-cartoon font-bold text-lg px-8"
            asChild
          >
            <a href="/menu" target="_blank" rel="noopener noreferrer">
              Ver Carta Completa
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};