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
        <script dangerouslySetInnerHTML={{__html: `document.addEventListener('click', function(e){var link=e.target.closest('a[href^="#"]');if(!link)return;var id=link.getAttribute('href').slice(1);if(!id)return;var target=document.getElementById(id);if(!target)return;e.preventDefault();e.stopPropagation();var navMenu=document.querySelector('.nav-menu');if(navMenu&&navMenu.style.transform==='translateX(0px)'){navMenu.style.transform='translateX(-100%)';var bd=document.querySelector('.menu-backdrop');if(bd)bd.style.display='none';document.body.style.overflow='';}target.scrollIntoView({behavior:'smooth',block:'start'});}, true);`}} />
        <script dangerouslySetInnerHTML={{__html: `document.addEventListener('DOMContentLoaded', function(){
          var form = document.getElementById('wf-form-Service-Form');
          if(!form) return;
          form.addEventListener('submit', function(e){
            e.preventDefault();
            var fd = new FormData(form);
            var body = new URLSearchParams(fd).toString();
            var wrap = form.closest('.book-form') || form.parentElement;
            var ok = wrap ? wrap.querySelector('.success-message') : null;

            fetch(window.location.pathname, {
              method: 'POST',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              body: body
            }).finally(function(){
              form.style.display = 'none';
              if(ok) ok.style.display = 'block';
            });
          });
        });`}} />
        <style dangerouslySetInnerHTML={{__html: `
          body {
            overflow-x: hidden;
          }
          .section, .banner-section-photo {
            overflow: hidden;
          }
          [data-w-id] {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.7s ease, transform 0.7s ease;
          }
          [data-w-id].revealed {
            opacity: 1 !important;
            transform: translateY(0) translateX(0) scale(1) !important;
          }
          .banner-content-container[data-w-id] { transition-delay: 0.1s; }
          .banner-content-container .home-title[data-w-id] { transition-delay: 0.25s; }
          .banner-content-container .home-banner-discription[data-w-id] { transition-delay: 0.4s; }
          .banner-content-container .buttons-wrapper[data-w-id] { transition-delay: 0.55s; }
          .working-numbers-copy[data-w-id] { transition-delay: 0.7s; }
          .column-two[data-w-id] { transition-delay: 0.15s; }
          .column-one[data-w-id] { transition-delay: 0.3s; }
          .accordion-item-home[data-w-id] { transition-delay: 0.1s; }
          .accordion-item-home[data-w-id]:nth-child(2) { transition-delay: 0.25s; }
          .accordion-item-home[data-w-id]:nth-child(3) { transition-delay: 0.4s; }
          .work-wrapper[data-w-id] { transform: translateY(30px); }
          .collection-item-services:nth-child(1) .work-wrapper[data-w-id] { transition-delay: 0.1s; }
          .collection-item-services:nth-child(2) .work-wrapper[data-w-id] { transition-delay: 0.25s; }
          .collection-item-services:nth-child(3) .work-wrapper[data-w-id] { transition-delay: 0.4s; }
          .advantages-wrap[data-w-id] { transition-delay: 0.1s; }
          .advantages-wrap.center-item[data-w-id] { transition-delay: 0.25s; }
          .advantages-wrap[data-w-id]:last-child { transition-delay: 0.4s; }
          .video-big[data-w-id] {
            transform: scale(0.97);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          .video-content[data-w-id] { transition-delay: 0.2s; }
          .video-button-wrapper[data-w-id] { transition-delay: 0.4s; }
          .book-wrapper[data-w-id] {
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          .home-contact-wrapper[data-w-id] { transition-delay: 0.15s; }
        `}} />
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
        <Script id="mobile-menu" strategy="afterInteractive">
          {`(function(){
            var menuBtn = document.querySelector('.menu-button');
            var closeBtn = document.querySelector('.close-menu-button');
            var navMenu = document.querySelector('.nav-menu');
            var overlay = document.querySelector('.w-nav-overlay');
            if(!menuBtn || !navMenu) return;

            // Create overlay if it doesn't exist
            if(!overlay){
              overlay = document.createElement('div');
              overlay.className = 'w-nav-overlay';
              overlay.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;';
              document.querySelector('.navbar-fixed').appendChild(overlay);
            }

            // Set initial hidden state
            navMenu.style.transform = 'translateX(-100%)';
            navMenu.style.transition = 'transform 0.4s ease';
            navMenu.style.display = 'block';
            navMenu.style.position = 'fixed';
            navMenu.style.top = '0';
            navMenu.style.left = '0';
            navMenu.style.width = '320px';
            navMenu.style.maxWidth = '90vw';
            navMenu.style.height = '100vh';
            navMenu.style.zIndex = '100';
            navMenu.style.backgroundColor = '#ffffff';
            navMenu.style.overflow = 'auto';
            navMenu.style.padding = '20px';
            navMenu.style.boxShadow = '2px 0 10px rgba(0,0,0,0.15)';

            // Style nav links dark for white bg
            navMenu.querySelectorAll('.nav-link').forEach(function(l){
              l.style.color = '#1a2238';
              l.style.display = 'block';
              l.style.padding = '12px 0';
            });

            // Create backdrop
            var backdrop = document.createElement('div');
            backdrop.className = 'menu-backdrop';
            backdrop.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:99;';
            document.body.appendChild(backdrop);

            function openMenu(){
              navMenu.style.transform = 'translateX(0)';
              backdrop.style.display = 'block';
              document.body.style.overflow = 'hidden';
            }

            function closeMenu(){
              navMenu.style.transform = 'translateX(-100%)';
              backdrop.style.display = 'none';
              document.body.style.overflow = '';
            }

            backdrop.addEventListener('click', closeMenu);

            menuBtn.addEventListener('click', function(e){
              e.preventDefault();
              openMenu();
            });

            if(closeBtn){
              closeBtn.addEventListener('click', function(e){
                e.preventDefault();
                closeMenu();
              });
            }

            // Close menu when clicking a nav link
            navMenu.querySelectorAll('a').forEach(function(link){
              link.addEventListener('click', function(){
                closeMenu();
              });
            });
          })();`}
        </Script>
        <Script
          src="https://link.marketingsupernova.com/js/external-tracking.js"
          data-tracking-id="tk_2a8c80b00f33430596c360514a88c90f"
          strategy="lazyOnload"
        />
        <Script id="scroll-reveal" strategy="afterInteractive">
          {`(function(){
            var els = document.querySelectorAll('[data-w-id]');
            if(!els.length) return;
            var observer = new IntersectionObserver(function(entries){
              entries.forEach(function(entry){
                if(entry.isIntersecting){
                  entry.target.classList.add('revealed');
                  observer.unobserve(entry.target);
                }
              });
            }, {threshold: 0.15, rootMargin: '0px 0px -50px 0px'});
            els.forEach(function(el){ observer.observe(el); });
          })();`}
        </Script>
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
