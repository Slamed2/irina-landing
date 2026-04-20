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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
        <link href="/css/irina-ab21b1.webflow.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.min.css" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{__html: `document.addEventListener('click', function(e){var link=e.target.closest('a[href^="#"]');if(!link)return;var id=link.getAttribute('href').slice(1);if(!id)return;var target=document.getElementById(id);if(!target)return;e.preventDefault();e.stopPropagation();var navMenu=document.querySelector('.nav-menu');if(navMenu&&navMenu.classList.contains('menu-open')){navMenu.classList.remove('menu-open');var bd=document.querySelector('.menu-backdrop');if(bd)bd.style.display='none';document.body.style.overflow='';}target.scrollIntoView({behavior:'smooth',block:'start'});}, true);`}} />
        <script dangerouslySetInnerHTML={{__html: `(function(){
          if(window._formReady) return;
          window._formReady = true;
          function initForm(){
            var form = document.getElementById('contact-form');
            if(!form || form._bound) return;
            form._bound = true;
            form.addEventListener('submit', function(e){
              e.preventDefault();
              var fd = new FormData(form);
              if(!fd.has('form-name')) fd.append('form-name','service-form');
              var ok = document.getElementById('form-success');
              var err = document.getElementById('form-error');
              var btn = form.querySelector('input[type=submit]');
              if(btn){ btn.value = 'Enviando...'; btn.disabled = true; }
              fetch('/__forms.html', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: new URLSearchParams(fd).toString()
              }).then(function(r){
                if(r.ok){
                  form.style.display = 'none';
                  if(ok) ok.style.display = 'block';
                } else {
                  if(err) err.style.display = 'block';
                  if(btn){ btn.value = 'Enviar solicitud'; btn.disabled = false; }
                }
              }).catch(function(){
                if(err) err.style.display = 'block';
                if(btn){ btn.value = 'Enviar solicitud'; btn.disabled = false; }
              });
            });
          }
          if(document.readyState === 'loading'){
            document.addEventListener('DOMContentLoaded', initForm);
          } else { initForm(); }
        })();`}} />
        <script dangerouslySetInnerHTML={{__html: `document.addEventListener('DOMContentLoaded', function(){
          var menuBtn = document.querySelector('.menu-button');
          var closeBtn = document.querySelector('.close-menu-button');
          var navMenu = document.querySelector('.nav-menu');
          if(!menuBtn || !navMenu) return;

          var backdrop = document.createElement('div');
          backdrop.className = 'menu-backdrop';
          backdrop.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:99;transition:opacity 0.3s ease;';
          document.body.appendChild(backdrop);

          function openMenu(){
            navMenu.classList.add('menu-open');
            backdrop.style.display = 'block';
            document.body.style.overflow = 'hidden';
          }
          function closeMenu(){
            navMenu.classList.remove('menu-open');
            backdrop.style.display = 'none';
            document.body.style.overflow = '';
          }

          menuBtn.addEventListener('click', function(e){ e.preventDefault(); openMenu(); });
          if(closeBtn) closeBtn.addEventListener('click', function(e){ e.preventDefault(); closeMenu(); });
          backdrop.addEventListener('click', closeMenu);
          navMenu.querySelectorAll('a').forEach(function(l){ l.addEventListener('click', closeMenu); });
        });`}} />
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --primary-dark: #1A1A2E !important;
            --primary: #16213E !important;
            --primary-semi: rgba(22,33,62,0.4) !important;
            --primary-light: #FAFAF8 !important;
          }
          body {
            overflow-x: hidden;
            background-color: #FAFAF8;
          }

          /* Buttons: Coral #FF5C3A → Hot Pink #FF3D6E */
          .primary-button {
            background-color: #FF5C3A !important;
            border-color: #FF5C3A !important;
            color: #fff !important;
          }
          .primary-button:hover {
            background-color: #FF3D6E !important;
            border-color: #FF3D6E !important;
            color: #fff !important;
          }
          .primary-button.light {
            background-color: #FF5C3A !important;
            border-color: #FF5C3A !important;
            color: #fff !important;
          }
          .primary-button.light:hover {
            background-color: #FF3D6E !important;
            border-color: #FF3D6E !important;
            color: #fff !important;
          }
          .primary-button.outline {
            background-color: transparent !important;
            border-color: #FF5C3A !important;
            color: #FF5C3A !important;
          }
          .primary-button.outline:hover {
            background-color: #FF5C3A !important;
            color: #fff !important;
          }
          .primary-button.outline-light {
            background-color: transparent !important;
            border-color: #fff !important;
            color: #fff !important;
          }
          .primary-button.outline-light:hover {
            background-color: rgba(255,255,255,0.15) !important;
            color: #fff !important;
          }

          /* Light background sections: Cream BG */
          .section.primary-light-background {
            background-color: #FAFAF8 !important;
          }

          /* Dark sections: Navy Deep → Navy Mid gradient */
          .section.dark-background,
          .section.banners-home-three {
            background: linear-gradient(to bottom, #1A1A2E, #16213E) !important;
          }

          /* Headlines: Plus Jakarta Sans */
          h1, h2, h3, .home-title, .in-section-title, .services-titles, .accordion-title {
            font-family: 'Plus Jakarta Sans', sans-serif !important;
            font-weight: 800 !important;
            letter-spacing: -1px !important;
          }

          /* Advantages center item: Coral */
          .advantages-wrap.center-item {
            background-color: #FF5C3A !important;
          }
          .section, .banner-section-photo {
            overflow: hidden;
          }

          /* Hero banner: custom background image */
          .banner-section-photo {
            background-image: linear-gradient(to right, rgba(10,15,40,0.75) 0%, rgba(10,15,40,0.3) 60%, rgba(10,15,40,0) 100%), url('/images/hero-banner.jpg') !important;
            background-position: center center !important;
            background-size: cover !important;
            background-repeat: no-repeat !important;
          }
          @media (max-width: 767px) {
            .banner-section-photo {
              background-image: linear-gradient(to bottom, rgba(10,15,40,0.75) 0%, rgba(10,15,40,0.55) 50%, rgba(10,15,40,0.3) 100%), url('/images/hero-banner.jpg') !important;
              background-position: right center !important;
            }
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

          /* intl-tel-input fixes */
          .book-inputs-wrapper { display: flex !important; flex-wrap: wrap !important; column-gap: 20px !important; }
          .book-inputs-wrapper .iti { display: flex !important; box-sizing: border-box !important; flex: 0 0 calc(50% - 10px) !important; width: calc(50% - 10px) !important; max-width: calc(50% - 10px) !important; }
          .book-inputs-wrapper .select-book { flex: 0 0 calc(50% - 10px) !important; width: calc(50% - 10px) !important; max-width: calc(50% - 10px) !important; box-sizing: border-box !important; }
          @media (max-width: 767px) {
            .book-inputs-wrapper .iti { width: 100% !important; flex: 1 1 100% !important; max-width: 100% !important; }
            .book-inputs-wrapper .select-book { width: 100% !important; flex: 1 1 100% !important; max-width: 100% !important; }
          }
          .book-inputs-wrapper .iti input[type=tel] { width: 100% !important; box-sizing: border-box !important; }
          .iti__flag-container { z-index: 10; }
          .iti__country-list {
            z-index: 100 !important;
            max-height: 200px !important;
            overflow-y: auto !important;
            background: #fff !important;
            border: 1px solid #ddd !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
            border-radius: 4px !important;
            white-space: nowrap !important;
          }
          .iti__country-list .iti__country {
            padding: 8px 10px !important;
            font-size: 14px !important;
            color: #333 !important;
          }
          .iti__country-list .iti__country-name,
          .iti__country-list .iti__dial-code {
            color: #333 !important;
            -webkit-text-fill-color: #333 !important;
          }
          .iti__country-list .iti__country:hover,
          .iti__country-list .iti__country.iti__highlight {
            background-color: #f0f0f0 !important;
          }
          .iti input[type=tel] {
            padding-left: 52px !important;
          }
          .form-book-input.is-invalid {
            border-color: #e74c3c !important;
          }

          /* Service card icons: Coral */
          .icon-work-wrapper {
            background-color: #FF5C3A !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .icon-work-wrapper img {
            width: 36px;
            height: 36px;
          }

          /* Submit button: right-aligned, auto-width on desktop */
          .book-form-block .buttons-wrapper {
            display: flex !important;
            justify-content: flex-end !important;
          }
          .book-form-block .buttons-wrapper .primary-button.w-button {
            width: auto !important;
            padding-left: 40px !important;
            padding-right: 40px !important;
          }
          @media (max-width: 767px) {
            .book-form-block .buttons-wrapper .primary-button.w-button {
              width: 100% !important;
            }
          }

          /* Logo */
          .logo-main {
            height: 46px !important;
            width: auto !important;
            filter: none !important;
          }

          /* Desktop: show nav inline */
          @media (min-width: 992px) {
            .w-nav[data-collapse='medium'] .w-nav-menu {
              display: flex !important;
              position: relative !important;
              transform: none !important;
              width: auto !important;
              height: auto !important;
              background-color: transparent !important;
              padding: 0 !important;
              box-shadow: none !important;
              overflow: visible !important;
              float: right !important;
            }
            .nav-menu .tablet-menu {
              display: none !important;
            }
            .nav-menu .button-wrapper {
              display: none !important;
            }
            .menu-button {
              display: none !important;
            }
          }

          /* Mobile/Tablet: slide-in panel */
          @media (max-width: 991px) {
            .w-nav[data-collapse='medium'] .w-nav-menu {
              display: block !important;
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              width: 320px !important;
              max-width: 90vw !important;
              height: 100vh !important;
              z-index: 100 !important;
              background-color: #fff !important;
              overflow: auto !important;
              padding: 80px 30px 30px !important;
              transform: translateX(-100%);
              transition: transform 0.35s ease !important;
              box-shadow: 2px 0 20px rgba(0,0,0,0.15);
              float: none !important;
            }
            .nav-menu.menu-open {
              transform: translateX(0) !important;
            }
            .nav-menu .nav-link {
              color: #1a2238 !important;
              display: block !important;
              padding: 14px 0 !important;
              font-size: 18px !important;
            }
            .nav-menu .button-wrapper {
              display: block;
              margin-top: 20px;
            }
            .nav-menu .primary-button.nav-tablet {
              display: inline-block !important;
            }
            .nav-menu .tablet-menu {
              display: block;
              position: absolute;
              top: 20px;
              right: 20px;
            }
          }
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
            if(burger) burger.style.transition = 'filter 0.3s ease';
            function applyScroll(){
              var scrolled = window.scrollY > 50;
              nav.style.backgroundColor = scrolled ? '#ffffff' : 'transparent';
              nav.style.boxShadow = scrolled ? '0 2px 10px rgba(0,0,0,0.08)' : 'none';
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>
        <script dangerouslySetInnerHTML={{__html: `(function(){
          try{
            var urlField=document.getElementById('field_url');
            if(urlField) urlField.value=window.location.href;
            var ipField=document.getElementById('field_ip');
            if(ipField){
              fetch('https://api.ipify.org?format=json')
                .then(function(r){return r.json();})
                .then(function(d){ipField.value=d&&d.ip?d.ip:'';})
                .catch(function(){});
            }
          }catch(_){}

          $(function(){
            $('input[ms-code-phone-number]').each(function(){
              var input=this;
              if(input.dataset.msItiInit==='1') return;
              input.dataset.msItiInit='1';
              if(!window.intlTelInput) return;

              try{
                input.setAttribute('inputmode','tel');
                input.setAttribute('enterkeyhint','done');
                input.setAttribute('autocomplete','tel');
              }catch(_){}

              var preferredCountries=($(input).attr('ms-code-phone-number')||'').split(',').map(function(s){return s.trim();}).filter(Boolean);

              var iti=window.intlTelInput(input,{
                preferredCountries:preferredCountries,
                initialCountry:'auto',
                geoIpLookup:function(cb){
                  fetch('https://ipapi.co/json/')
                    .then(function(r){return r.json();})
                    .then(function(d){cb(d&&d.country?d.country:'US');})
                    .catch(function(){cb('US');});
                },
                nationalMode:true,
                formatOnDisplay:false,
                autoPlaceholder:'polite',
                separateDialCode:false,
                utilsScript:'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
              });

              function ensureE164IfFilled(){
                var raw=(input.value||'').trim();
                if(!raw) return;
                var digits=raw.replace(/\\D/g,'');
                if(!digits) return;
                var e164='';
                if(raw.startsWith('+')&&!/^\\+\\d{1,4}$/.test(raw)){
                  e164=raw.replace(/\\s+/g,'');
                }
                if(!e164&&window.intlTelInputUtils&&iti){
                  var libVal=iti.getNumber(window.intlTelInputUtils.numberFormat.E164)||'';
                  if(libVal&&!/^\\+\\d{1,4}$/.test(libVal)) e164=libVal;
                }
                if(!e164){
                  var sel=(iti&&iti.getSelectedCountryData&&iti.getSelectedCountryData())||{};
                  var dial=sel&&sel.dialCode?String(sel.dialCode):'';
                  var stripped=dial&&digits.startsWith(dial)?digits.slice(dial.length):digits;
                  if(dial&&stripped.length>=6){e164='+'+dial+stripped;}else{return;}
                }
                if(e164){input.value=e164;input.setAttribute('value',e164);}
              }

              input.addEventListener('blur',function(){
                try{
                  var hasVal=!!(input.value||'').trim();
                  if(!hasVal){input.classList.remove('is-invalid');return;}
                  if(window.intlTelInputUtils){input.classList.toggle('is-invalid',!iti.isValidNumber());}
                }catch(_){}
              });

              var form=input.form||$(input).closest('form')[0];
              if(form){
                form.addEventListener('submit',function(){
                  if(!(input.value||'').trim()) return;
                  ensureE164IfFilled();
                },true);
                form.addEventListener('keydown',function(e){
                  if(e.key==='Enter') ensureE164IfFilled();
                },true);
                var submits=form.querySelectorAll('button[type=submit],input[type=submit]');
                submits.forEach(function(btn){
                  ['pointerdown','touchstart','mousedown','click'].forEach(function(evt){
                    btn.addEventListener(evt,ensureE164IfFilled,true);
                  });
                });
                if('onformdata' in form){
                  form.addEventListener('formdata',function(ev){
                    ensureE164IfFilled();
                    ev.formData.set(input.name,input.value||'');
                  });
                }
                form.addEventListener('submit',function(e){
                  var hasVal=!!(input.value||'').trim();
                  if(hasVal&&window.intlTelInputUtils&&!iti.isValidNumber()){
                    e.preventDefault();
                    input.classList.add('is-invalid');
                    input.focus();
                  }
                },true);
              }
            });
          });
        })();`}} />
        <script
          src="https://link.marketingsupernova.com/js/external-tracking.js"
          data-tracking-id="tk_2a8c80b00f33430596c360514a88c90f"
        ></script>
      </body>
    </html>
  );
}
