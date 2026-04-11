export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="/" className="logo">Roth Private Advising</a>
          <div className="nav-links">
            <a href="#proceso">Proceso</a>
            <a href="#servicios">Servicios</a>
            <a href="#precios">Precios</a>
            <a href="#faq">FAQ</a>
            <a href="#contacto" className="btn btn-primary btn-sm">Agenda tu consulta</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Registro de Marca en Estados Unidos</div>
            <h1>Protege tu marca en USA con estrategia legal desde el inicio</h1>
            <p className="hero-subtitle">Te ayudamos a convertir tu marca en un activo legal en USA, con un proceso claro, una búsqueda comprensiva y una estrategia adecuada para el registro ante USPTO.</p>
            <div className="hero-ctas">
              <a href="#contacto" className="btn btn-primary btn-lg">Agenda tu consulta gratuita</a>
              <a href="#proceso" className="btn btn-outline btn-lg">Conoce el proceso</a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-number">USPTO</span><span className="stat-label">Registro federal en USA</span></div>
            <div className="stat"><span className="stat-number">50</span><span className="stat-label">Estados protegidos</span></div>
            <div className="stat"><span className="stat-number">100%</span><span className="stat-label">En español</span></div>
            <div className="stat"><span className="stat-number">U.S.</span><span className="stat-label">Attorney revisión directa</span></div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section section-dark">
        <div className="container">
          <div className="two-col">
            <div>
              <h2 className="section-title light">Las empresas que se venden por millones no venden productos — venden marcas protegidas</h2>
              <p className="text-light">Cuando alguien compra tu negocio, no está comprando solo lo que vendes... está comprando tu marca. Si no la registras, cualquiera puede tomarla, y todo lo que invertiste en marketing y posicionamiento se pierde.</p>
            </div>
            <div className="pain-points">
              <div className="pain-card"><span className="pain-icon">⚠</span><p>Estás operando en USA sin protección legal de tu marca</p></div>
              <div className="pain-card"><span className="pain-icon">⚠</span><p>Inviertes en branding y marketing sin respaldo legal</p></div>
              <div className="pain-card"><span className="pain-icon">⚠</span><p>Alguien más podría registrar tu marca antes que tú</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section" id="proceso">
        <div className="container text-center">
          <div className="section-header">
            <h2 className="section-title">Convertimos tu marca en un activo legal protegido en USA</h2>
            <p className="section-subtitle">Un proceso claro y estratégico, con acompañamiento en cada etapa</p>
          </div>
          <div className="process-grid">
            <div className="process-step"><div className="step-number">1</div><h3>Búsqueda comprensiva</h3><p>Análisis de riesgos, conflictos y viabilidad de registro. Porcentaje estimado de registrabilidad antes de aplicar.</p></div>
            <div className="process-step"><div className="step-number">2</div><h3>Estrategia de registro</h3><p>Definimos clases, enfoque y ajustes necesarios. Recomendaciones: aplicar, ajustar o rebrandear.</p></div>
            <div className="process-step"><div className="step-number">3</div><h3>Aplicación ante USPTO</h3><p>Solicitud preparada y revisada por U.S. attorney, alineada con estándares legales y prácticos.</p></div>
            <div className="process-step"><div className="step-number">4</div><h3>Seguimiento y acompañamiento</h3><p>Monitoreo continuo del proceso. Manejo estratégico de office actions con argumentos legales.</p></div>
            <div className="process-step"><div className="step-number">5</div><h3>Guía de uso</h3><p>Recomendaciones para el uso y mantenimiento adecuado de tu marca registrada.</p></div>
            <div className="process-step"><div className="step-number">6</div><h3>Trademark Policing</h3><p>Monitoreo y vigilancia post-registro para detectar posibles infracciones o conflictos.</p></div>
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section className="section section-light" id="servicios">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Por qué trabajar con nosotros</h2>
            <p className="section-subtitle">No es solo llenar una aplicación — es proteger tu inversión</p>
          </div>
          <div className="features-grid">
            <div className="feature-card"><div className="feature-icon">🔍</div><h3>Búsqueda comprensiva</h3><p>Antes de aplicar, identificamos riesgos y conflictos. Te damos un porcentaje estimado de registrabilidad para tomar decisiones informadas.</p></div>
            <div className="feature-card"><div className="feature-icon">⚖</div><h3>Revisión directa por U.S. Attorney</h3><p>Cada marca es revisada personalmente con criterio legal y estratégico. No es un proceso automatizado.</p></div>
            <div className="feature-card"><div className="feature-icon">🇺🇸</div><h3>Hablamos tu idioma</h3><p>Comunicación 100% en español con entendimiento profundo del cliente latino haciendo negocios en USA.</p></div>
            <div className="feature-card"><div className="feature-icon">🛠</div><h3>Acompañamiento completo</h3><p>Desde la búsqueda hasta las office actions. No te dejamos solo en ninguna etapa del proceso.</p></div>
          </div>
          <div className="comparison-section">
            <h3 className="text-center comp-label">Comparación</h3>
            <div className="comparison-grid">
              <div className="comparison-card"><h4>Vs. Plataformas como Trademarkia</h4><p>Son servicios automatizados. Aquí cada marca se revisa personalmente con criterio legal y estratégico en cada etapa.</p></div>
              <div className="comparison-card"><h4>Vs. Hacerlo solo</h4><p>Es como inmigración: la mayoría comete errores que después cuestan tiempo y dinero. Aquí se anticipan riesgos desde el inicio.</p></div>
              <div className="comparison-card"><h4>Vs. Otros abogados</h4><p>Muchos son más costosos o poco adaptados al cliente internacional. Nuestro enfoque es estratégico, eficiente y accesible.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section className="section" id="precios">
        <div className="container text-center">
          <div className="section-header">
            <h2 className="section-title">Inversión</h2>
            <p className="section-subtitle">Transparencia total en cada concepto</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card pricing-main">
              <div className="pricing-header"><h3>Búsqueda + Aplicación</h3><div className="price">$1,200 <span>USD</span></div></div>
              <ul className="pricing-features">
                <li>Búsqueda comprensiva de la marca</li>
                <li>Análisis de riesgos y viabilidad</li>
                <li>Porcentaje estimado de registrabilidad</li>
                <li>Recomendaciones estratégicas</li>
                <li>Estrategia de registro adaptada</li>
                <li>Presentación ante USPTO</li>
                <li>Seguimiento del proceso</li>
                <li>Office actions no sustantivas incluidas</li>
                <li>Guía de uso correcto de la marca</li>
              </ul>
              <a href="#contacto" className="btn btn-primary btn-block">Empezar ahora</a>
            </div>
            <div className="pricing-card">
              <div className="pricing-header"><h3>Office Actions Sustantivas</h3><div className="price">$550 <span>USD</span></div></div>
              <ul className="pricing-features">
                <li>Respuesta estratégica con argumentos legales</li>
                <li>Análisis del requerimiento de USPTO</li>
                <li>Preparación y presentación de la respuesta</li>
              </ul>
              <p className="pricing-note">Solo se cobra si USPTO emite un requerimiento sustantivo</p>
            </div>
            <div className="pricing-card">
              <div className="pricing-header"><h3>Tasas de USPTO</h3><div className="price">$350-$450 <span>por clase</span></div></div>
              <ul className="pricing-features">
                <li>Tasa gubernamental obligatoria</li>
                <li>Siempre aplicamos la opción más económica</li>
                <li>Se paga directamente a USPTO</li>
              </ul>
              <p className="pricing-note">Costo fijo del gobierno, no es nuestro honorario</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title light">10 razones para registrar tu marca hoy</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-item"><span>01</span> Evitar perder tu marca</div>
            <div className="benefit-item"><span>02</span> Proteger lo que ya estás construyendo</div>
            <div className="benefit-item"><span>03</span> Crear valor real en tu negocio</div>
            <div className="benefit-item"><span>04</span> Aumentar la credibilidad de tu marca</div>
            <div className="benefit-item"><span>05</span> Prevenir conflictos legales</div>
            <div className="benefit-item"><span>06</span> Protección a nivel federal en USA</div>
            <div className="benefit-item"><span>07</span> Escalar con seguridad</div>
            <div className="benefit-item"><span>08</span> Prepararte para licencias o venta</div>
            <div className="benefit-item"><span>09</span> Evitar errores comunes en el proceso</div>
            <div className="benefit-item"><span>10</span> Contar con una estrategia desde el inicio</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item"><summary>&ldquo;Lo hago después&rdquo;</summary><p>Después puede ser tarde si alguien más registra la marca. La protección debe hacerse antes de escalar.</p></details>
            <details className="faq-item"><summary>&ldquo;Es caro&rdquo;</summary><p>Más caro es perder la marca o tener que hacer rebranding. Registrar tu marca es una inversión que protege todo lo que ya construiste.</p></details>
            <details className="faq-item"><summary>&ldquo;Solo es un nombre&rdquo;</summary><p>La marca es uno de los activos más valiosos del negocio. Es lo que te diferencia y lo que tiene valor en una futura venta.</p></details>
            <details className="faq-item"><summary>&ldquo;Lo puedo hacer yo online&rdquo;</summary><p>Filing no es lo mismo que estrategia ni protección adecuada. La mayoría comete errores que después cuestan tiempo y dinero.</p></details>
            <details className="faq-item"><summary>&ldquo;No estoy seguro si mi marca se puede registrar&rdquo;</summary><p>Justamente por eso realizamos una búsqueda comprensiva antes de aplicar, para identificar riesgos y evaluar probabilidades.</p></details>
            <details className="faq-item"><summary>&ldquo;No estoy en USA&rdquo;</summary><p>El proceso está diseñado para extranjeros. Puedes registrar tu marca en USA desde cualquier país.</p></details>
            <details className="faq-item"><summary>&ldquo;¿Y si me rechazan la marca?&rdquo;</summary><p>Por eso hacemos la búsqueda comprensiva antes. Además, si surgen objeciones, te acompañamos en las respuestas.</p></details>
            <details className="faq-item"><summary>&ldquo;Hay opciones más baratas&rdquo;</summary><p>No todas contemplan estrategia ni riesgos reales. Lo barato puede salir caro si no hay criterio legal detrás.</p></details>
          </div>
        </div>
      </section>

      {/* COMUNIDAD */}
      <section className="section section-accent">
        <div className="container text-center">
          <h2 className="section-title light">Para la comunidad latina en USA</h2>
          <p className="text-light section-subtitle">Permite que emprendedores y empresas construyan negocios sobre una base legal sólida, protegiendo uno de sus activos más importantes: la marca.</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section" id="contacto">
        <div className="container text-center">
          <div className="cta-box">
            <h2 className="section-title">Protege tu marca hoy</h2>
            <p className="section-subtitle">Agenda una consulta gratuita y descubre si tu marca está lista para registrarse en USA</p>
            <a href="mailto:irina@rothpalaw.com" className="btn btn-primary btn-lg">Contactar a Irina Roth</a>
            <p className="cta-note">irina@rothpalaw.com &bull; Roth Private Advising Law &bull; Miami, FL</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div><h4>Roth Private Advising Law</h4><p>Registro de marcas en Estados Unidos con estrategia legal y acompañamiento en español.</p></div>
            <div className="footer-links">
              <a href="#proceso">Proceso</a>
              <a href="#servicios">Servicios</a>
              <a href="#precios">Precios</a>
              <a href="#faq">FAQ</a>
              <a href="#contacto">Contacto</a>
            </div>
          </div>
          <div className="footer-bottom"><p>&copy; 2026 Roth Private Advising Law. Todos los derechos reservados.</p></div>
        </div>
      </footer>
    </>
  );
}
