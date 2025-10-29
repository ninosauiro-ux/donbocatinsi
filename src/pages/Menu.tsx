import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuSections = [
  {
    id: "hamburguesas",
    title: "🍔 Hamburguesas",
    items: [
      { name: "Nº1 Hamburguesa, lechuga, tomate, cebolla y queso", price: "5,50€" },
      { name: "Nº2 Hamburguesa, lechuga, tomate, cebolla, queso y beicon", price: "5,80€" },
      { name: "Nº3 Hamburguesa, lechuga, tomate, cebolla, queso, beicon y huevo", price: "6,00€" },
      { name: "Nº4 Hamburguesa, lechuga, tomate, cebolla, piña y salsa rosa", price: "6,00€" },
      { name: "Litel Muu - Pan brioche, hamburguesa de ternera, lechuga, tomate, queso, beicon, cebolla crujiente y salsa barbacoa", price: "7,00€" },
      { name: "Bell - Hamburguesa de ternera, lechuga, tomate, cebolla, queso cheddar y salsa de miel y mostaza", price: "7,00€" },
      { name: "Chicken Litel - Pan brioche, pechuga empanada, lechuga, tomate, queso, beicon, cebolla crujiente y salsa de miel y mostaza", price: "6,50€" },
    ]
  },
  {
    id: "bocadillos-pechuga",
    title: "🍗 Bocadillos de Pechuga",
    items: [
      { name: "Nº1 Pechuga, lechuga, tomate y queso", price: "5,60€", note: "Empanada +0,50€" },
      { name: "Nº2 Pechuga, lechuga, tomate, queso y beicon", price: "5,90€", note: "Empanada +0,50€" },
      { name: "Nº3 Pechuga, lechuga, tomate, queso, beicon y huevo", price: "6,10€", note: "Empanada +0,50€" },
      { name: "Nº4 Pechuga, lechuga, tomate, cebolla, piña y salsa rosa", price: "6,10€", note: "Empanada +0,50€" },
    ]
  },
  {
    id: "bocadillos-lomo",
    title: "🥩 Bocadillos de Lomo",
    items: [
      { name: "Nº1 Lomo, lechuga, tomate y queso", price: "5,60€" },
      { name: "Nº2 Lomo, lechuga, tomate, queso y beicon", price: "5,90€" },
      { name: "Nº3 Lomo, lechuga, tomate, queso, beicon y huevo", price: "6,10€" },
      { name: "Nº4 Lomo, lechuga, tomate, cebolla, piña y salsa rosa", price: "6,10€" },
    ]
  },
  {
    id: "bocatas",
    title: "🥖 Bocatas Especiales",
    items: [
      { name: "Tortilla con Tomate", price: "4,00€" },
      { name: "Tortilla con Jamón York y Tomate", price: "4,50€" },
      { name: "Chorizo", price: "3,50€" },
      { name: "Salchichón", price: "3,50€" },
      { name: "Jamón Serrano", price: "5,00€" },
      { name: "Jamón York con Queso", price: "4,50€" },
      { name: "Atún con Tomate y Lechuga", price: "4,50€" },
    ]
  },
  {
    id: "sandwiches",
    title: "🥪 Sándwiches",
    items: [
      { name: "Vegetal - Jamón york, queso, lechuga, tomate, huevo cocido y mayonesa", price: "4,50€" },
      { name: "Mixto - Jamón york y queso a la plancha", price: "3,50€" },
      { name: "Atún - Atún, lechuga, tomate y mayonesa", price: "4,50€" },
    ]
  },
  {
    id: "patatas",
    title: "🍟 Patatas",
    items: [
      { name: "Patatas Fritas", price: "3,00€" },
      { name: "Patatas con Queso", price: "4,00€" },
      { name: "Patatas con Queso y Beicon", price: "4,50€" },
      { name: "Patatas Completas - Con queso, beicon, salchichas y salsa", price: "5,50€" },
    ]
  },
  {
    id: "tapas",
    title: "🍽️ Tapas de la Casa",
    items: [
      { name: "Croquetas Caseras (4 uds)", price: "4,50€" },
      { name: "Calamares a la Romana", price: "6,00€" },
      { name: "Chocos Fritos", price: "6,50€" },
      { name: "Sepia a la Plancha", price: "7,00€" },
      { name: "Bravas", price: "4,00€" },
      { name: "Ensaladilla Rusa", price: "4,50€" },
      { name: "Boquerones en Vinagre", price: "5,00€" },
      { name: "Jamón Serrano", price: "7,00€" },
    ]
  },
  {
    id: "bebidas",
    title: "🥤 Bebidas",
    items: [
      { name: "Refrescos (Lata)", price: "1,50€" },
      { name: "Agua", price: "1,20€" },
      { name: "Cerveza", price: "1,80€" },
      { name: "Zumos Naturales", price: "2,50€" },
    ]
  }
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Don Bocatín"
                className="w-12 h-12 rounded-full object-cover shadow-cartoon"
              />
              <div>
                <h1 className="text-2xl font-display font-bold text-foreground">Nuestra Carta</h1>
                <p className="text-sm text-muted-foreground">Don Bocatín Bocatería</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-4"
          >
            Carta <span className="text-primary">Completa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Descubre todos nuestros deliciosos platos preparados con ingredientes frescos
          </motion.p>

          {/* Quick Nav */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {menuSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 bg-card hover:bg-primary hover:text-primary-foreground rounded-full text-sm font-semibold border border-border transition-all shadow-soft hover:shadow-cartoon"
              >
                {section.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu Sections */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {menuSections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.05 }}
              className="scroll-mt-20"
            >
              <div className="bg-card rounded-3xl p-8 shadow-soft border-2 border-border">
                <h2 className="text-4xl font-display font-bold text-foreground mb-8 pb-4 border-b-2 border-primary/20">
                  {section.title}
                </h2>

                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.03 }}
                      className="flex justify-between items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        {item.note && (
                          <p className="text-sm text-muted-foreground mt-1 italic">
                            {item.note}
                          </p>
                        )}
                      </div>
                      <span className="text-xl font-bold text-primary flex-shrink-0">
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card rounded-2xl p-8 shadow-soft border-2 border-primary/20 max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-4">
              <strong>Para llevar.</strong> Consulte plataformas externas para delivery.
            </p>
            <p className="text-sm text-muted-foreground">
              📞 Llámanos al <a href="tel:+34661869382" className="text-primary font-bold hover:underline">661 869 382</a> para hacer tu pedido
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              📍 Plaza Reyes Católicos, 1, Roquetas de Mar, Almería
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;