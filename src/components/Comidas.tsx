import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const comidas = [
  {
    title: "Platito de jamón y alioli",
    image: "/aliolijamon.jpg",
    description:
      "Crujiente por fuera, tierno por dentro. Jamón sabroso, alioli cremoso y ese aroma que abre el apetito al instante.",
    emoji: "🥖",
  },
  {
    title: "Bacon Cheese Burger",
    image: "/baconcheese.jpg",
    description:
      "Queso fundido, bacon crujiente y carne jugosa. Un bocado intenso que te hará sonreír desde el primer mordisco.",
    emoji: "🧀",
  },
  {
    title: "Bocata Clásico",
    image: "/bocata.jpg",
    description:
      "Pan recién hecho y relleno generoso. Sencillo, sabroso y perfecto para cualquier momento del día.",
    emoji: "✨",
  },
  {
    title: "Hamburguesa de Pollo Empanado",
    image: "/hambuguesa%20de%20polllo%20empnano,%20con%20patatas.jpg",
    description:
      "Pollo crujiente, dorado y jugoso, con patatas irresistibles. Cada bocado es puro disfrute.",
    emoji: "🍗",
  },
  {
    title: "Hamburguesa Clásica",
    image: "/hamburguesa.jpg",
    description:
      "Carne al punto, pan suave y los imprescindibles que nunca fallan. Una clásica que siempre apetece.",
    emoji: "🍔",
  },
];

export const Comidas = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", duration: 24 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (!isPaused) emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(id);
  }, [emblaApi, isPaused]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="comidas" className="py-20 bg-gradient-to-b from-background to-background/60">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 space-y-3"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Platos que <span className="text-primary">Abren el Apetito</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sabores que se mueven contigo: pan crujiente, carne jugosa y salsas caseras en una selección pensada para antojarte.
          </p>
        </motion.div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl border-2 border-transparent shadow-soft hover:shadow-glow transition-shadow duration-300 bg-card">
            <div className="h-[220px] sm:h-[260px] lg:h-[300px]" ref={emblaRef}>
              <div className="flex h-full">
                {comidas.map((item, index) => (
                  <div
                    className="flex-[0_0_80%] sm:flex-[0_0_60%] lg:flex-[0_0_45%] pr-4"
                    key={item.title}
                  >
                    <div className="relative h-full overflow-hidden rounded-xl">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        animate={{ scale: selectedIndex === index ? 1.03 : 1.0, opacity: selectedIndex === index ? 1 : 0.95 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />

                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />

                      <div className="absolute left-3 bottom-3 flex items-center gap-2">
                        <span className="inline-flex w-9 h-9 bg-primary rounded-full items-center justify-center shadow-cartoon text-xl">
                          {item.emoji}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-black/50 text-white text-xs sm:text-sm font-medium backdrop-blur">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Edge gradient masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent rounded-l-2xl" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent rounded-r-2xl" />
          </div>

          <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
            <button
              aria-label="Anterior"
              onClick={scrollPrev}
              className="pointer-events-auto inline-flex items-center justify-center w-11 h-11 rounded-full bg-background/80 hover:bg-background text-foreground shadow-soft border hover:border-primary transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="Siguiente"
              onClick={scrollNext}
              className="pointer-events-auto inline-flex items-center justify-center w-11 h-11 rounded-full bg-background/80 hover:bg-background text-foreground shadow-soft border hover:border-primary transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
