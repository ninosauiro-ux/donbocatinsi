import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/logo.png"
              alt="Don Bocatín"
              className="w-12 h-12 rounded-full object-cover shadow-cartoon"
            />
            <div>
              <h1 className="text-xl font-display font-bold text-foreground leading-tight">Don Bocatín</h1>
              <p className="text-xs text-muted-foreground">Bocatería</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <a 
              href="/menu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Carta
            </a>
            <button 
              onClick={() => scrollToSection("especialidades")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Especialidades
            </button>
            <button 
              onClick={() => scrollToSection("reseñas")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Reseñas
            </button>
            <button 
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button Desktop */}
          <motion.div className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-cartoon font-semibold"
              asChild
            >
              <a href="#reservar">
                <Calendar className="w-4 h-4 mr-2" />
                Reservar Mesa
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <a 
                href="/menu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Carta
              </a>
              <button 
                onClick={() => scrollToSection("especialidades")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Especialidades
              </button>
              <button 
                onClick={() => scrollToSection("reseñas")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Reseñas
              </button>
              <button 
                onClick={() => scrollToSection("contacto")}
                className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>
              <Button 
                className="mt-2 bg-primary hover:bg-primary-dark text-primary-foreground shadow-cartoon font-semibold"
                asChild
              >
                <a href="#reservar">
                  <Calendar className="w-4 h-4 mr-2" />
                  Reservar Mesa
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};