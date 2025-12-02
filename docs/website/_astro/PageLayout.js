import { c as createComponent, e as createAstro, d as addAttribute, f as renderHead, g as renderSlot, a as renderTemplate, m as maybeRenderHead, b as renderScript, r as renderComponent } from './astro/server.js';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css      */

const $$Astro$2 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "QTCS - Driving the Future of India's Mobility with Electric Vehicles" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#87CEEB"><link rel="icon" type="image/png" href="/qtcslogo.png"><!-- Open Graph / Social --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image" content="/og-image.png"><title>${title}</title>${renderHead()}</head> <body class="min-h-screen bg-sky-gradient text-white"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/rajesh/Documents/qtcs-presentation-new/qtcs-website/src/layouts/BaseLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { currentPage = "" } = Astro2.props;
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Vehicles" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 z-50 glass"> <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16 md:h-20"> <!-- Logo --> <a href="/" class="flex items-center gap-3"> <img src="/qtcslogo.png" alt="QTCS Logo" class="h-10 w-auto md:h-12"> <span class="text-xl md:text-2xl font-bold text-white">QTCS</span> </a> <!-- Desktop Navigation --> <div class="hidden md:flex items-center gap-8"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute([
    "text-base font-medium transition-colors duration-200",
    currentPage === link.href ? "text-accent-orange" : "text-white hover:text-sky-light"
  ], "class:list")}> ${link.label} </a>`)} <a href="/contact" class="px-5 py-2 bg-accent-orange text-white font-semibold rounded-full hover:bg-accent-gold transition-colors duration-200">
Get Quote
</a> </div> <!-- Mobile Menu Button --> <button id="mobile-menu-btn" class="md:hidden p-2 text-white hover:text-sky-light" aria-label="Toggle menu" aria-expanded="false"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> <path id="close-icon" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Mobile Navigation --> <div id="mobile-menu" class="hidden md:hidden pb-4" data-open="false"> <div class="flex flex-col gap-2"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute([
    "px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200",
    currentPage === link.href ? "bg-glass-bg-strong text-accent-orange" : "text-white hover:bg-glass-bg"
  ], "class:list")}> ${link.label} </a>`)} <a href="/contact" class="mt-2 px-4 py-3 bg-accent-orange text-white font-semibold rounded-lg text-center hover:bg-accent-gold transition-colors duration-200">
Get Quote
</a> </div> </div> </nav> </header> ${renderScript($$result, "/Users/rajesh/Documents/qtcs-presentation-new/qtcs-website/src/components/common/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/rajesh/Documents/qtcs-presentation-new/qtcs-website/src/components/common/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = {
    products: [
      { href: "/products/l3-vehicles", label: "L3 Vehicles" },
      { href: "/products/l5-vehicles", label: "L5 Vehicles" },
      { href: "/products/e-bus", label: "E-Bus" }
    ],
    company: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/careers", label: "Careers" }
    ],
    resources: [
      { href: "/presentation", label: "Presentation" },
      { href: "/style-guide", label: "Style Guide" },
      { href: "/downloads", label: "Downloads" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<footer class="bg-dark-overlay mt-auto"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"> <!-- Brand --> <div class="col-span-1 md:col-span-2 lg:col-span-1"> <a href="/" class="flex items-center gap-3 mb-4"> <img src="/qtcslogo.png" alt="QTCS Logo" class="h-12 w-auto"> <span class="text-2xl font-bold text-white">QTCS</span> </a> <p class="text-text-muted text-sm leading-relaxed">
Driving the Future of India's Mobility with sustainable electric vehicle solutions.
</p> </div> <!-- Products --> <div> <h3 class="text-white font-semibold mb-4">Products</h3> <ul class="space-y-2"> ${footerLinks.products.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-text-muted text-sm hover:text-white transition-colors duration-200"> ${link.label} </a> </li>`)} </ul> </div> <!-- Company --> <div> <h3 class="text-white font-semibold mb-4">Company</h3> <ul class="space-y-2"> ${footerLinks.company.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-text-muted text-sm hover:text-white transition-colors duration-200"> ${link.label} </a> </li>`)} </ul> </div> <!-- Resources --> <div> <h3 class="text-white font-semibold mb-4">Resources</h3> <ul class="space-y-2"> ${footerLinks.resources.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-text-muted text-sm hover:text-white transition-colors duration-200"> ${link.label} </a> </li>`)} </ul> </div> </div> <!-- Bottom Bar --> <div class="mt-12 pt-8 border-t border-glass-border"> <div class="flex flex-col md:flex-row justify-between items-center gap-4"> <p class="text-text-muted text-sm">
&copy; ${currentYear} QTCS. All rights reserved.
</p> <div class="flex gap-6"> <a href="/privacy" class="text-text-muted text-sm hover:text-white transition-colors">
Privacy Policy
</a> <a href="/terms" class="text-text-muted text-sm hover:text-white transition-colors">
Terms of Service
</a> </div> </div> </div> </div> </footer>`;
}, "/Users/rajesh/Documents/qtcs-presentation-new/qtcs-website/src/components/common/Footer.astro", void 0);

const $$Astro = createAstro();
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description, currentPage } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "currentPage": currentPage })} ${maybeRenderHead()}<main class="pt-16 md:pt-20 min-h-screen flex flex-col"> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/rajesh/Documents/qtcs-presentation-new/qtcs-website/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $ };
