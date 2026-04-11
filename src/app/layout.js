import Script from "next/script";

export const metadata = {
  title: "Registro de Marca en USA | Roth Private Advising Law",
  description: "Protege tu marca en Estados Unidos con estrategia legal desde el inicio. Registro ante USPTO con acompañamiento completo en español.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-wf-page="landing" data-wf-site="69d7e583131347cd56340660" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="https://cdn.prod.website-files.com/69d7e583131347cd56340660/css/irina-ab21b1.webflow.shared.f21cd7ee2.css" rel="stylesheet" type="text/css" />
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
              if(burger) burger.style.filter = scrolled ? 'invert(1)' : 'none';
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
