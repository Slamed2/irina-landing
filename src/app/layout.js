import "./globals.css";

export const metadata = {
  title: "Registro de Marca en USA | Roth Private Advising Law",
  description: "Protege tu marca en Estados Unidos con estrategia legal desde el inicio. Registro ante USPTO con acompañamiento completo en español.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-wf-page="landing" data-wf-site="69d7e583131347cd56340660">
      <head>
        <link href="https://cdn.prod.website-files.com/69d7e583131347cd56340660/css/irina-ab21b1.webflow.shared.f21cd7ee2.css" rel="stylesheet" type="text/css" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `WebFont.load({google:{families:["Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic","DM Sans:100,200,300,400,500,600,700,800,900","Marcellus:regular"]}});`}} />
      </head>
      <body>
        {/* NAVBAR from Webflow template */}
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
          <div className="base-container w-container">
            <div className="nav-wrapper">
              <a href="/" className="brand w-nav-brand">
                <img src="https://cdn.prod.website-files.com/69d7e583131347cd56340660/69d7e585131347cd56340778_in-law-logo.svg" loading="lazy" alt="logo" height="46" />
              </a>
              <nav role="navigation" className="nav-menu w-nav-menu">
                <div className="menu-wrap">
                  <a href="#proceso" className="nav-link w-nav-link">Proceso</a>
                  <a href="#servicios" className="nav-link w-nav-link">Servicios</a>
                  <a href="#precios" className="nav-link w-nav-link">Precios</a>
                  <a href="#faq" className="nav-link w-nav-link">FAQ</a>
                </div>
                <div className="nav-button-wrapper">
                  <a href="#contacto" className="primary-button w-button">Agenda tu consulta</a>
                </div>
              </nav>
              <div className="w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>

        {children}

        {/* FOOTER from Webflow template */}
        <div className="footer">
          <div className="base-container w-container">
            <div className="footer-wrapper-top">
              <h5 className="text-white">Protege tu marca con estrategia legal</h5>
              <div className="emergency-call-wrapper">
                <h5 className="text-white">Contacto</h5>
                <a href="mailto:irina@rothpalaw.com" className="footer-contact-link">irina@rothpalaw.com</a>
              </div>
            </div>
            <div className="footer-wrapper">
              <div className="footer-links-wrapper">
                <h5 className="white-text mb-15">Navegación</h5>
                <a href="#proceso" className="footer-link">Proceso</a>
                <a href="#servicios" className="footer-link">Servicios</a>
                <a href="#precios" className="footer-link">Precios</a>
                <a href="#faq" className="footer-link">FAQ</a>
              </div>
              <div className="footer-links-wrapper">
                <h5 className="white-text mb-15">Servicios</h5>
                <a href="#servicios" className="footer-link">Búsqueda comprensiva</a>
                <a href="#servicios" className="footer-link">Estrategia de registro</a>
                <a href="#servicios" className="footer-link">Aplicación USPTO</a>
              </div>
              <div className="footer-links-wrapper">
                <h5 className="white-text mb-15">Preguntas</h5>
                <a href="#faq" className="footer-link">¿Es caro registrar?</a>
                <a href="#faq" className="footer-link">¿Puedo hacerlo desde fuera de USA?</a>
                <a href="#faq" className="footer-link">¿Y si me rechazan la marca?</a>
              </div>
            </div>
            <div className="footer-bottom-wrapper">
              <div className="footer-copyright">© 2026 Roth Private Advising Law. Todos los derechos reservados.</div>
            </div>
          </div>
        </div>

        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69d7e583131347cd56340660" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
        <script src="https://cdn.prod.website-files.com/69d7e583131347cd56340660/js/webflow.433ae882.7ec71b5e2e11bb75.js" type="text/javascript"></script>
      </body>
    </html>
  );
}
