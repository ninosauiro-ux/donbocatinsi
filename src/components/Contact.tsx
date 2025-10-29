import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Accessibility } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-hero">
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
            Encuéntranos en <span className="text-primary">Roquetas de Mar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ven a visitarnos y disfruta de la mejor comida en un ambiente familiar
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <div className="space-y-6">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-6 shadow-soft border-2 border-transparent hover:border-primary/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    Dirección
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Plaza Reyes Católicos, 1<br />
                    Roquetas de Mar, Almería 04740
                  </p>
                  <a 
                    href="https://www.google.com/maps/dir//Plaza+Reyes+Cat%C3%B3licos,+1,+Roquetas+de+Mar,+Almer%C3%ADa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold hover-lift"
                  >
                    Cómo llegar →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-soft border-2 border-transparent hover:border-primary/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    Teléfono
                  </h3>
                  <a 
                    href="tel:+34661869382"
                    className="text-lg text-muted-foreground hover:text-primary transition-colors font-semibold"
                  >
                    661 869 382
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Llámanos para reservar o hacer pedidos
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-soft border-2 border-transparent hover:border-primary/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    Horarios
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Lunes:</span>
                      <span>13:00-15:30 / 19:30-23:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Martes:</span>
                      <span className="text-destructive">Cerrado</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Mié-Dom:</span>
                      <span>13:00-15:30 / 19:30-23:00</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Nota:</strong> Horario de invierno: 12:30-15:30 / 19:30-23:00<br />
                      Consultar posibles variaciones
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Accessibility */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-2xl p-6 shadow-soft border-2 border-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-cartoon">
                  <Accessibility className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    Accesibilidad
                  </h3>
                  <p className="text-muted-foreground">
                    Local totalmente adaptado para personas con movilidad reducida. 
                    Entrada accesible y espacios cómodos para todos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full min-h-[500px]"
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-soft border-2 border-border h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.892!2d-2.6145!3d36.7641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7aa2fabe3a3b25%3A0x1234567890!2sPlaza%20Reyes%20Cat%C3%B3licos%2C%201%2C%2004740%20Roquetas%20de%20Mar%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Don Bocatín en Plaza Reyes Católicos"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};