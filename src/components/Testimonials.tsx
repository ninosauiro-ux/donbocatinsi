import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const testimonials = [
  {
    name: "Antonio López",
    location: "Roquetas de Mar",
    rating: 5,
    comment: "Muy agradable y buen servicio ❤️",
    avatar: "👨",
    date: "Hace 2 semanas"
  },
  {
    name: "María Pérez",
    location: "Almería",
    rating: 5,
    comment: "Excelente atención por parte de sus dueñas. Siempre que estoy antojado de una rica hamburguesa voy a este sitio. ¡No cambien nunca!",
    avatar: "👩",
    date: "Hace 1 mes"
  },
  {
    name: "Juan García",
    location: "Roquetas de Mar",
    rating: 4,
    comment: "Comida buenísima. Buen trato, rápido y limpio",
    avatar: "👨‍🦱",
    date: "Hace 3 semanas"
  },
  {
    name: "Carmen Ruiz",
    location: "El Ejido",
    rating: 5,
    comment: "Los bocadillos más ricos de la zona. Siempre volvemos con la familia.",
    avatar: "👩‍🦰",
    date: "Hace 1 semana"
  },
  {
    name: "Miguel Fernández",
    location: "Roquetas de Mar",
    rating: 5,
    comment: "Local familiar y acogedor. Las hamburguesas están de 10. Totalmente recomendable.",
    avatar: "👨‍🦳",
    date: "Hace 4 días"
  },
  {
    name: "Laura Martínez",
    location: "Almería",
    rating: 5,
    comment: "Un sitio con encanto y comida deliciosa. El trato es muy cercano y familiar.",
    avatar: "👩‍🦳",
    date: "Hace 2 días"
  }
];

export const Testimonials = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState<number>(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [showThanks, setShowThanks] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    setRating(0);
    setName("");
    setComment("");
    setShowThanks(true);
  };

  useEffect(() => {
    if (!showThanks) return;
    const t = setTimeout(() => setShowThanks(false), 3000);
    return () => clearTimeout(t);
  }, [showThanks]);
  return (
    <section id="reseñas" className="py-20 bg-background">
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
            Lo Que Dicen <span className="text-primary">Nuestros Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Miles de clientes satisfechos avalan nuestra calidad y servicio
          </p>
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">8.7/10</span>
            <span className="text-muted-foreground">· 200+ reseñas</span>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 border-2 border-transparent hover:border-primary/20 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-3xl shadow-cartoon flex-shrink-0"
                  >
                    {testimonial.avatar}
                  </motion.div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-foreground text-lg truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground truncate">
                      {testimonial.location}
                    </p>
                    {/* Stars */}
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < testimonial.rating 
                              ? 'fill-primary text-primary' 
                              : 'fill-muted text-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <p className="text-muted-foreground leading-relaxed flex-1 mb-3">
                  "{testimonial.comment}"
                </p>

                {/* Date */}
                <p className="text-xs text-muted-foreground">
                  {testimonial.date}
                </p>
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
          <div className="inline-block bg-card rounded-2xl p-8 shadow-soft border-2 border-primary/10">
            <p className="text-xl font-display font-bold text-foreground mb-4">
              ¿Te gustaría compartir tu experiencia?
            </p>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full font-semibold shadow-cartoon hover-lift">
                  <Star className="w-5 h-5" />
                  Dejar una reseña
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dejar una reseña</DialogTitle>
                  <DialogDescription>Valora tu experiencia y añade tu nombre y un breve comentario.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="rating">Valoración</Label>
                    <div className="flex items-center gap-2" id="rating">
                      {[1,2,3,4,5].map((i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setRating(i)}
                          className="p-1"
                          aria-label={`${i} estrellas`}
                        >
                          <Star className={`w-6 h-6 ${i <= rating ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground'}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comment">Descripción</Label>
                    <Textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} required placeholder="Cuéntanos brevemente tu experiencia" />
                  </div>
                  <DialogFooter>
                    <Button type="submit" disabled={rating === 0}>Enviar reseña</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>

      {showThanks && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="relative mx-4 w-full max-w-md rounded-3xl border-2 border-primary/30 bg-card p-8 text-center shadow-glow"
          >
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary shadow-cartoon"
            >
              <Star className="h-8 w-8 fill-primary text-primary-foreground" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-2 text-2xl font-display font-extrabold text-foreground"
            >
              ¡Gracias por tu reseña!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="text-muted-foreground"
            >
              Tu opinión nos ayuda a mejorar.
            </motion.p>

            <div className="pointer-events-none absolute inset-0">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 0, x: 0, rotate: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [-10 - (i % 3) * 10, -40 - (i % 4) * 12],
                    x: [(i - 5) * 6, (i - 5) * 10],
                    rotate: [0, (i % 2 === 0 ? 20 : -20)],
                  }}
                  transition={{ duration: 1.2 + (i % 5) * 0.1, delay: 0.1 + i * 0.05, repeat: 0 }}
                  className="absolute left-1/2 top-1/2"
                >
                  <Star className="h-4 w-4 fill-primary/70 text-primary/70" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};