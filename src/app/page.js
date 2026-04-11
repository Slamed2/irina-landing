export default function Home() {
  return (
    <>
      {/* HERO BANNER */}
      <div className="home-banner">
        <div className="base-container w-container">
          <div className="home-banner-content">
            <div className="in-section-tag" style={{color: '#C8A962', borderColor: '#C8A962'}}>Registro de Marca en Estados Unidos</div>
            <h1 className="home-title">Protege tu marca en USA con estrategia legal desde el inicio</h1>
            <p className="home-banner-discription">Te ayudamos a convertir tu marca en un activo legal en USA, con un proceso claro, una búsqueda comprensiva y una estrategia adecuada para el registro ante USPTO.</p>
            <div className="home-banner-buttons-wrapper">
              <a href="#contacto" className="primary-button w-button">Agenda tu consulta gratuita</a>
              <a href="#proceso" className="primary-button outline w-button">Conoce el proceso</a>
            </div>
          </div>
          <div className="numbers-wrapper">
            <div className="numbers-item"><div className="numbers">USPTO</div><div className="numbers-text">Registro federal</div></div>
            <div className="numbers-item"><div className="numbers">50</div><div className="numbers-text">Estados protegidos</div></div>
            <div className="numbers-item"><div className="numbers">100%</div><div className="numbers-text">En español</div></div>
            <div className="numbers-item"><div className="numbers">U.S.</div><div className="numbers-text">Attorney directo</div></div>
          </div>
        </div>
      </div>

      {/* PROBLEMA */}
      <div className="in-section dark" id="problema">
        <div className="base-container w-container">
          <div className="in-section-content-wrapper">
            <div className="in-section-content">
              <h2 className="in-section-title light">Las empresas que se venden por millones no venden productos — venden marcas protegidas</h2>
              <p className="no-margin light">Cuando alguien compra tu negocio, no está comprando solo lo que vendes... está comprando tu marca. Si no la registras, cualquiera puede tomarla.</p>
            </div>
            <div className="in-section-content">
              <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '20px', marginBottom: '12px'}}>
                <p className="no-margin light">⚠ Estás operando en USA sin protección legal de tu marca</p>
              </div>
              <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '20px', marginBottom: '12px'}}>
                <p className="no-margin light">⚠ Inviertes en branding y marketing sin respaldo legal</p>
              </div>
              <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '20px'}}>
                <p className="no-margin light">⚠ Alguien más podría registrar tu marca antes que tú</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESO */}
      <div className="in-section" id="proceso">
        <div className="base-container w-container">
          <div className="in-section-title-wrapper center">
            <h2 className="in-section-title">Convertimos tu marca en un activo legal protegido en USA</h2>
            <p className="no-margin">Un proceso claro y estratégico, con acompañamiento en cada etapa</p>
          </div>
          <div className="w-layout-grid features-grid-3col">
            {[
              {num: "01", title: "Búsqueda comprensiva", desc: "Análisis de riesgos, conflictos y viabilidad. Porcentaje estimado de registrabilidad."},
              {num: "02", title: "Estrategia de registro", desc: "Definimos clases, enfoque y ajustes. Recomendaciones: aplicar, ajustar o rebrandear."},
              {num: "03", title: "Aplicación ante USPTO", desc: "Solicitud revisada por U.S. attorney, alineada con estándares legales."},
              {num: "04", title: "Seguimiento continuo", desc: "Monitoreo del proceso con interpretación legal de cada actualización."},
              {num: "05", title: "Office Actions", desc: "Manejo estratégico de requerimientos con argumentos legales."},
              {num: "06", title: "Guía + Policing", desc: "Uso correcto de la marca y monitoreo post-registro."},
            ].map((step, i) => (
              <div key={i} className="features-item-wrapper">
                <div className="features-number">{step.num}</div>
                <h3 className="features-title">{step.title}</h3>
                <p className="text-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DIFERENCIADORES */}
      <div className="in-section grey" id="servicios">
        <div className="base-container w-container">
          <div className="in-section-title-wrapper center">
            <h2 className="in-section-title">Por qué trabajar con nosotros</h2>
            <p className="no-margin">No es solo llenar una aplicación — es proteger tu inversión</p>
          </div>
          <div className="w-layout-grid features-grid">
            <div className="features-item-wrapper"><h3 className="features-title">🔍 Búsqueda comprensiva</h3><p className="text-medium">Identificamos riesgos y conflictos antes de aplicar. Te damos un porcentaje estimado de registrabilidad.</p></div>
            <div className="features-item-wrapper"><h3 className="features-title">⚖ U.S. Attorney directo</h3><p className="text-medium">Cada marca es revisada personalmente con criterio legal y estratégico. No es automatizado.</p></div>
            <div className="features-item-wrapper"><h3 className="features-title">🇺🇸 Hablamos tu idioma</h3><p className="text-medium">100% en español con entendimiento del cliente latino haciendo negocios en USA.</p></div>
            <div className="features-item-wrapper"><h3 className="features-title">🛠 Acompañamiento completo</h3><p className="text-medium">Desde la búsqueda hasta las office actions. No te dejamos solo.</p></div>
          </div>
          <div style={{marginTop: '60px'}}>
            <div className="in-section-title-wrapper center">
              <p className="no-margin" style={{textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', color: '#999'}}>Comparación</p>
            </div>
            <div className="w-layout-grid features-grid-3col">
              <div className="features-item-wrapper" style={{borderTop: '3px solid #C8A962'}}><h3 className="features-title">Vs. Trademarkia</h3><p className="text-medium">Son servicios automatizados. Aquí cada marca se revisa personalmente.</p></div>
              <div className="features-item-wrapper" style={{borderTop: '3px solid #C8A962'}}><h3 className="features-title">Vs. Hacerlo solo</h3><p className="text-medium">La mayoría comete errores que después cuestan tiempo y dinero.</p></div>
              <div className="features-item-wrapper" style={{borderTop: '3px solid #C8A962'}}><h3 className="features-title">Vs. Otros abogados</h3><p className="text-medium">Más costosos o poco adaptados al cliente internacional.</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* PRECIOS */}
      <div className="in-section" id="precios">
        <div className="base-container w-container">
          <div className="in-section-title-wrapper center">
            <h2 className="in-section-title">Inversión</h2>
            <p className="no-margin">Transparencia total en cada concepto</p>
          </div>
          <div className="pricing-wrapper">
            <div className="pricing-item" style={{border: '2px solid #C8A962'}}>
              <div className="pricing-item-header">
                <h3 className="pricing-name">Búsqueda + Aplicación</h3>
                <div className="pricing-price-wrapper"><div className="pricing-currency">$ </div><div className="pricing-price">1,200</div><div className="pricing-currency">/USD</div></div>
              </div>
              <div className="pricing-feature-wrapper">
                {["Búsqueda comprensiva de la marca", "Análisis de riesgos y viabilidad", "Porcentaje estimado de registrabilidad", "Recomendaciones estratégicas", "Estrategia de registro adaptada", "Presentación ante USPTO", "Seguimiento del proceso", "Office actions no sustantivas incluidas", "Guía de uso correcto"].map((f, i) => (
                  <div key={i} className="pricing-feature">{f}</div>
                ))}
              </div>
              <a href="#contacto" className="primary-button w-button">Empezar ahora</a>
            </div>
            <div className="pricing-item">
              <div className="pricing-item-header">
                <h3 className="pricing-name">Office Actions Sustantivas</h3>
                <div className="pricing-price-wrapper"><div className="pricing-currency">$ </div><div className="pricing-price">550</div><div className="pricing-currency">/USD</div></div>
              </div>
              <div className="pricing-feature-wrapper">
                {["Respuesta estratégica con argumentos legales", "Análisis del requerimiento de USPTO", "Preparación y presentación de la respuesta"].map((f, i) => (
                  <div key={i} className="pricing-feature">{f}</div>
                ))}
              </div>
              <p style={{fontStyle: 'italic', fontSize: '0.82rem', color: '#999', marginTop: '16px'}}>Solo se cobra si USPTO emite un requerimiento sustantivo</p>
            </div>
            <div className="pricing-item">
              <div className="pricing-item-header">
                <h3 className="pricing-name">Tasas de USPTO</h3>
                <div className="pricing-price-wrapper"><div className="pricing-currency">$ </div><div className="pricing-price">350-450</div><div className="pricing-currency">/clase</div></div>
              </div>
              <div className="pricing-feature-wrapper">
                {["Tasa gubernamental obligatoria", "Siempre aplicamos la opción más económica", "Se paga directamente a USPTO"].map((f, i) => (
                  <div key={i} className="pricing-feature">{f}</div>
                ))}
              </div>
              <p style={{fontStyle: 'italic', fontSize: '0.82rem', color: '#999', marginTop: '16px'}}>Costo fijo del gobierno, no es nuestro honorario</p>
            </div>
          </div>
        </div>
      </div>

      {/* 10 RAZONES */}
      <div className="in-section dark">
        <div className="base-container w-container">
          <div className="in-section-title-wrapper center">
            <h2 className="in-section-title light">10 razones para registrar tu marca hoy</h2>
          </div>
          <div className="w-layout-grid features-grid">
            {["Evitar perder tu marca", "Proteger lo que ya construyes", "Crear valor real en tu negocio", "Aumentar credibilidad", "Prevenir conflictos legales", "Protección federal en USA", "Escalar con seguridad", "Prepararte para licencias o venta", "Evitar errores comunes", "Estrategia desde el inicio"].map((r, i) => (
              <div key={i} style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px'}}>
                <span style={{fontFamily: 'Marcellus, serif', fontWeight: 700, color: '#C8A962', fontSize: '1.1rem', width: '28px', flexShrink: 0}}>{String(i+1).padStart(2,'0')}</span>
                <p className="no-margin light">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="in-section" id="faq">
        <div className="base-container w-container">
          <div className="in-section-title-wrapper center">
            <h2 className="in-section-title">Preguntas frecuentes</h2>
          </div>
          <div style={{maxWidth: '720px', margin: '0 auto'}}>
            {[
              {q: '\u201CLo hago después\u201D', a: 'Después puede ser tarde si alguien más registra la marca.'},
              {q: '\u201CEs caro\u201D', a: 'Más caro es perder la marca o hacer rebranding.'},
              {q: '\u201CSolo es un nombre\u201D', a: 'La marca es uno de los activos más valiosos del negocio.'},
              {q: '\u201CLo puedo hacer yo online\u201D', a: 'Filing no es estrategia. La mayoría comete errores costosos.'},
              {q: '\u201CNo estoy seguro si se puede registrar\u201D', a: 'Por eso hacemos búsqueda comprensiva antes de aplicar.'},
              {q: '\u201CNo estoy en USA\u201D', a: 'El proceso está diseñado para extranjeros.'},
              {q: '\u201C¿Y si me rechazan?\u201D', a: 'Por eso hacemos búsqueda antes. Si hay objeciones, te acompañamos.'},
              {q: '\u201CHay opciones más baratas\u201D', a: 'No todas contemplan estrategia ni riesgos reales.'},
            ].map((item, i) => (
              <details key={i} style={{border: '1px solid #e8e4dd', borderRadius: '8px', marginBottom: '12px', overflow: 'hidden'}}>
                <summary style={{padding: '20px 24px', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif'}}>{item.q}</summary>
                <p style={{padding: '0 24px 20px', color: '#666', fontSize: '0.95rem'}}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* COMUNIDAD */}
      <div className="cta-section">
        <div className="base-container w-container">
          <div style={{textAlign: 'center'}}>
            <h2 className="in-section-title light">Para la comunidad latina en USA</h2>
            <p className="no-margin light" style={{maxWidth: '640px', margin: '0 auto'}}>Construye tu negocio sobre una base legal sólida protegiendo tu activo más importante: la marca.</p>
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="in-section" id="contacto">
        <div className="base-container w-container">
          <div style={{background: 'linear-gradient(135deg, #1B2A4A 0%, #0F1923 100%)', borderRadius: '20px', padding: '80px 60px', textAlign: 'center'}}>
            <h2 className="in-section-title light">Protege tu marca hoy</h2>
            <p className="no-margin light" style={{maxWidth: '640px', margin: '0 auto 36px'}}>Agenda una consulta y descubre si tu marca está lista para registrarse en USA</p>
            <a href="mailto:irina@rothpalaw.com" className="primary-button w-button">Contactar a Irina Roth</a>
            <p className="no-margin light" style={{marginTop: '20px', fontSize: '0.88rem'}}>irina@rothpalaw.com • Roth Private Advising Law • Miami, FL</p>
          </div>
        </div>
      </div>
    </>
  );
}
