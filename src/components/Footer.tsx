import { MapPin, Phone, Mail, Instagram, Facebook, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Don Bocatín"
                className="w-12 h-12 rounded-full object-cover shadow-cartoon"
              />
              <div>
                <h3 className="text-xl font-display font-bold">Don Bocatín</h3>
                <p className="text-sm opacity-80">Bocatería</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Sabor local y tradición desde hace más de 15 años en Roquetas de Mar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/menu" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all inline-flex items-center gap-1">
                  Carta Completa
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('especialidades')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all text-left"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('reseñas')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all text-left"
                >
                  Reseñas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all text-left"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-80">
                  Plaza Reyes Católicos, 1<br />
                  Roquetas de Mar, Almería
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 opacity-80" />
                <a href="tel:+34661869382" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  661 869 382
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-3 mb-6">
              <a 
                href="https://www.instagram.com/donbocatin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-cartoon"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              <a 
                href="https://www.facebook.com/donbocatin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-cartoon"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
            <div className="text-sm opacity-80">
              <p className="font-semibold mb-1">Horario:</p>
              <p>Lun: 13:00-15:30 / 19:30-23:00</p>
              <p>Mar: Cerrado</p>
              <p>Mié-Dom: 13:00-15:30 / 19:30-23:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {currentYear} Don Bocatín Bocatería. Todos los derechos reservados.
            </p>
            <p className="text-sm opacity-80">
              Hecho con ❤️ en Roquetas de Mar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};