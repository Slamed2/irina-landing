import Script from "next/script";

export const metadata = {
  title: "Registro de Marca en USA | Roth Private Advising Law",
  description: "Protege tu marca en Estados Unidos con estrategia legal desde el inicio. Registro ante USPTO con acompañamiento completo en español.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-wf-page="landing" data-wf-site="69d7e583131347cd56340660" suppressHydrationWarning style={{scrollBehavior: 'smooth'}}>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/website/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/website/css/webflow.css" rel="stylesheet" type="text/css" />
        <link href="/website/css/irina-ab21b1.webflow.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        <Script id="webfont-load" strategy="beforeInteractive">
          {`WebFont.load({google:{families:["Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic","DM Sans:300,400,500,600,700","Marcellus:300,400,500,600,700"]}});`}
        </Script>
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69d7e583131347cd56340660"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/69d7e583131347cd56340660/js/webflow.433ae882.7ec71b5e2e11bb75.js"
          strategy="lazyOnload"
        />
        <Script id="accordions" strategy="lazyOnload">
          {`(function(){
            // Set initial state: vertical bar rotated 90deg to form "+"
            document.querySelectorAll('.accordion-third-style-icon').forEach(function(bar){
              bar.style.transform = 'rotate(90deg)';
              bar.style.transition = 'transform 0.3s ease';
            });
            document.querySelectorAll('.accordion-item-home .accordion-toggle').forEach(function(toggle){
              toggle.style.cursor = 'pointer';
              toggle.addEventListener('click', function(e){
                e.preventDefault();
                var item = this.closest('.accordion-item-home');
                var list = item.querySelector('.accordion-list-home');
                var vertBar = item.querySelector('.accordion-third-style-icon');
                var isOpen = item.classList.contains('is-open');
                // Close all others
                document.querySelectorAll('.accordion-item-home').forEach(function(other){
                  if(other !== item){
                    other.classList.remove('is-open');
                    var ol = other.querySelector('.accordion-list-home');
                    var ov = other.querySelector('.accordion-third-style-icon');
                    if(ol) ol.style.height = '0px';
                    if(ov) ov.style.transform = 'rotate(90deg)';
                  }
                });
                if(isOpen){
                  item.classList.remove('is-open');
                  list.style.height = '0px';
                  if(vertBar) vertBar.style.transform = 'rotate(90deg)';
                } else {
                  item.classList.add('is-open');
                  list.style.height = list.scrollHeight + 'px';
                  if(vertBar) vertBar.style.transform = 'rotate(0deg)';
                }
              });
            });
          })();`}
        </Script>
        <Script
          src="https://link.marketingsupernova.com/js/external-tracking.js"
          data-tracking-id="tk_2a8c80b00f33430596c360514a88c90f"
          strategy="lazyOnload"
        />
        <Script id="navbar-scroll" strategy="lazyOnload">
          {`(function(){
            var nav = document.querySelector('.navbar-fixed');
            if(!nav) return;
            var logo = nav.querySelector('.logo-main');
            var allText = nav.querySelectorAll('.nav-item-title, .nav-link, .nav-dropdown-icon');
            var burger = nav.querySelector('.image-burger');
            var btn = nav.querySelector('.primary-button.light');
            var dropdownToggles = nav.querySelectorAll('.nav-dropdown-toggle');
            var menuBtn = nav.querySelector('.menu-button');
            nav.style.transition = 'all 0.3s ease';
            if(logo) logo.style.transition = 'filter 0.3s ease';
            if(burger) burger.style.transition = 'filter 0.3s ease';
            function applyScroll(){
              var scrolled = window.scrollY > 50;
              nav.style.backgroundColor = scrolled ? '#ffffff' : 'transparent';
              nav.style.boxShadow = scrolled ? '0 2px 10px rgba(0,0,0,0.08)' : 'none';
              if(logo) logo.style.filter = scrolled ? 'invert(1)' : 'none';
              if(burger) burger.style.filter = scrolled ? 'none' : 'invert(1)';
              allText.forEach(function(el){ el.style.color = scrolled ? '#1a2238' : ''; });
              dropdownToggles.forEach(function(t){
                var icon = t.querySelector('.w-icon-dropdown-toggle');
                if(icon) icon.style.color = scrolled ? '#1a2238' : '';
              });
              if(btn){
                btn.style.backgroundColor = scrolled ? '#1a2238' : '';
                btn.style.color = scrolled ? '#fff' : '';
                btn.style.borderColor = scrolled ? '#1a2238' : '';
              }
              if(menuBtn) menuBtn.style.color = scrolled ? '#1a2238' : '';
            }
            window.addEventListener('scroll', applyScroll);
            applyScroll();
          })();`}
        </Script>
      </body>
    </html>
  );
}
