import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Users, Phone, Mail, User, Calendar as CalendarIcon, Clock } from "lucide-react";

const schema = z.object({
  people: z
    .string()
    .min(1)
    .refine((v) => {
      const n = Number(v);
      return Number.isInteger(n) && n >= 1 && n <= 20;
    }, "Introduce un número entre 1 y 20"),
  date: z
    .string()
    .min(1, "Selecciona un día")
    .refine((v) => !!v, "Selecciona un día"),
  time: z
    .string()
    .min(1, "Selecciona una hora"),
  name: z.string().min(2, "Introduce tu nombre y apellido"),
  phone: z
    .string()
    .min(6, "Introduce un teléfono válido")
    .regex(/^[+]?\d[\d\s-]{5,}$/i, "Introduce un teléfono válido"),
  email: z.string().email("Introduce un email válido").optional().or(z.literal("")),
  message: z.string().max(300).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

export const Reservation = () => {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { people: "2", date: "", time: "", name: "", phone: "", email: "", message: "" },
    mode: "onTouched",
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await fetch("https://n8n-n8n.s9u5gg.easypanel.host/webhook/dee33780-22de-41c3-84fc-2323178718c7", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "reservation",
          ...values,
          createdAt: new Date().toISOString(),
          url: typeof window !== "undefined" ? window.location.href : undefined,
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
        }),
      });
    } catch (e) {
      console.error("Error enviando reserva al webhook:", e);
    } finally {
      setSubmitted(values);
    }
  };

  return (
    <section id="reservar" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 space-y-3"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Reserva tu <span className="text-primary">Mesa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Haz tu reserva en segundos. Rápido, elegante y pensado para ti.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border bg-card/80 backdrop-blur shadow-soft hover:shadow-glow transition p-6 sm:p-8"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="people"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Número de personas</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="2" inputMode="numeric" {...field} />
                          <Users className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Día (dd/mm/aaaa)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input type="date" {...field} />
                          <CalendarIcon className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Hora</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input type="time" {...field} />
                          <Clock className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Nombre y apellido</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="Ej. María López" {...field} />
                          <User className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Teléfono</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="Ej. +34 612 345 678" {...field} />
                          <Phone className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email (opcional)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input type="email" placeholder="tu@email.com" {...field} />
                          <Mail className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Notas (opcional)</FormLabel>
                    <FormControl>
                      <Textarea rows={4} placeholder="¿Alguna preferencia o comentario?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-center pt-2">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-cartoon font-bold text-lg px-10 py-6">
                  Reservar ahora
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur" onClick={() => setSubmitted(null)} />
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative z-10 w-full max-w-md rounded-3xl border bg-card p-8 text-center shadow-glow"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.05 }}
                className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl shadow-cartoon"
              >
                ✅
              </motion.div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">¡Reserva confirmada!</h3>
              <p className="text-muted-foreground mb-6">Gracias por tu reserva, aquí te esperamos. Te contactaremos si es necesario.</p>
              <div className="space-x-3">
                <Button onClick={() => setSubmitted(null)} className="bg-primary hover:bg-primary-dark text-primary-foreground">
                  Cerrar
                </Button>
                <Button variant="outline" onClick={() => { setSubmitted(null); form.reset(); }}>
                  Hacer otra reserva
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
