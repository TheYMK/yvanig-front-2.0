import { c as create_ssr_component, a as subscribe, d as escape, f as null_to_empty, g as add_attribute } from './index-c574249f.js';
import { w as writable } from './index2-5501b94c.js';
import './Api-5728f2c6.js';

let userStore = writable(null);
const logo = "/_app/immutable/assets/logo_black-168883b3.png";
const css = {
  code: "#navbar.svelte-igd8m5{height:90px}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { sticky = false } = $$props;
  if ($$props.sticky === void 0 && $$bindings.sticky && sticky !== void 0)
    $$bindings.sticky(sticky);
  $$result.css.add(css);
  $$unsubscribe_userStore();
  return `

<nav id="${"navbar"}" class="${[
    escape(
      null_to_empty(`flex flex-col justify-center w-full z-50 top-0 px-8 lg:px-16 ${sticky ? "bg-primary" : ""}`),
      true
    ) + " svelte-igd8m5",
    (sticky ? "sticky" : "") + " " + (!sticky ? "fixed" : "")
  ].join(" ").trim()}"><div class="${"container flex flex-row justify-between items-center"}"><div id="${"left-side"}" class="${"flex flex-row items-center tooltip tooltip-bottom tooltip-primary"}" data-tip="${"Accueil"}"><a href="${"/"}" class="${"mr-8"}"><img${add_attribute("src", logo, 0)} alt="${""}" class="${"w-32"}"></a></div>
		<div id="${"right-side"}" class="${"flex flex-row items-center"}"><div class="${"block lg:hidden"}"><button class="${"flex items-center py-4 ml-4"}"><svg${add_attribute("class", `h-8 w-8 ${"hover:text-white"}`, 0)} fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"}" clip-rule="${"evenodd"}"></path></svg></button></div>
			<div class="${[
    "bg-primary hidden absolute w-full h-screen left-0 top-0 flex-grow lg:flex lg:items-center lg:static lg:bg-transparent lg:w-auto lg:h-auto lg:visible",
    "hidden"
  ].join(" ").trim()}"><div class="${"container font-medium text-30 text-center flex flex-col lg:flex-grow lg:mx-auto lg:flex-row lg:justify-end "}"><button class="${[
    "lg:hidden w-fit-content py-10 px-6 self-end hover:text-white",
    "hidden"
  ].join(" ").trim()}"><svg class="${"h-8 w-8"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
					<div class="${"flex flex-col items-center lg:flex-row"}"><a href="${"/"}"${add_attribute(
    "class",
    `text-2xl mb-5 lg:mb-0 lg:text-sm font-bold mr-5 ml-5 ${"hover:text-white"}`,
    0
  )}>Accueil
						</a>
						<a href="${"/discover"}"${add_attribute(
    "class",
    `text-2xl mb-5 lg:mb-0 lg:text-sm font-bold mr-5 ml-5 ${"hover:text-white"}`,
    0
  )}>D\xE9couvrir
						</a>
						<a href="${"/services"}"${add_attribute(
    "class",
    `text-2xl mb-5 lg:mb-0 lg:text-sm font-bold mr-5 ml-5 ${"hover:text-white"}`,
    0
  )}>Nos Services
						</a>
						<a href="${"/contact"}"${add_attribute(
    "class",
    `text-2xl mb-5 lg:mb-0 lg:text-sm font-bold mr-5 ml-5 ${"hover:text-white"}`,
    0
  )}>Contactez-nous
						</a>
						<div class="${"lg:ml-5"}">${$userStore ? `${$userStore.role === "sysadmin" ? `<div class="${"dropdown dropdown-end dropdown-hover"}"><div tabindex="${"0"}"${add_attribute(
    "class",
    `btn rounded-full  btn-sm text-xs w-40 border-none ${"bg-white hover:bg-white text-neutral"}`,
    0
  )}>Mon compte
										</div>
										<ul tabindex="${"0"}" class="${"menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52"}"><li><a href="${"/admin/account"}" class="${"hover:bg-primary hover:text-white"}">Tableau de bord</a></li>
											<li><a href="${"/auth/signout"}" class="${"hover:bg-primary hover:text-white"}">D\xE9connexion</a></li></ul></div>` : `<div class="${"dropdown dropdown-end dropdown-hover"}"><div tabindex="${"0"}" href="${"/user/account"}"${add_attribute(
    "class",
    `btn rounded-full btn-sm text-xs w-40 border-none ${"bg-white hover:bg-white text-neutral"}`,
    0
  )}>Mon compte
										</div>
										<ul tabindex="${"0"}" class="${"menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52"}"><li><a href="${"/user/account"}" class="${"hover:bg-primary hover:text-white"}">Mon Profil</a></li>
											<li><a href="${"/auth/signout"}" class="${"hover:bg-primary hover:text-white"}">D\xE9connexion</a></li></ul></div>`}` : `<a href="${"/auth/login"}"${add_attribute(
    "class",
    `btn rounded-full btn-sm text-xs w-40 border-none ${"bg-white hover:bg-white text-neutral"}`,
    0
  )}>Se Connecter</a>`}</div></div></div></div></div></div>
</nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"p-10 footer bg-white border-t-[1px] border-gray-200 text-neutral"}"><div><span class="${"footer-title"}">Nos Services</span>
		<a href="${"/services/trips"}" class="${"hover:text-primary"}">Billets d&#39;avion</a>
		<a href="${"/services/insurances"}" class="${"hover:text-primary"}">Assurance voyage</a>
		<a href="${"/services/visas"}" class="${"hover:text-primary"}">Visa et h\xE9b\xE9rgement</a>
		<a href="${"/services/rentings"}" class="${"hover:text-primary"}">Locations de voiture</a></div>
	<div><span class="${"footer-title"}">L&#39;agence</span>
		<a href="${"/about"}" class="${"hover:text-primary"}">\xC0 propos</a>
		<a href="${"/contact"}" class="${"hover:text-primary"}">Contact</a></div>
	<div><span class="${"footer-title"}">Autres</span>
		<a href="${"/"}" class="${"hover:text-primary"}">Mentions l\xE9gales</a>
		<a href="${"/"}" class="${"hover:text-primary"}">Politique de confidentialit\xE9 </a></div></footer>
<footer class="${"px-10 py-4 footer bg-primary text-neutral"}"><div class="${"items-center grid-flow-col"}"><img${add_attribute("src", logo, 0)} alt="${"logo"}" class="${"w-24"}">
		<p>Developed by <a class="${"font-bold hover:text-white"}" href="${"https://kaymkassai.com/"}" target="${"_blank"}">Kaym Kassai</a> <br>Copyright ${escape(new Date().getFullYear())}</p></div>
	<div class="${"md:place-self-center md:justify-self-end"}"><div class="${"grid grid-flow-col gap-4"}"><a href="${"/"}" class="${"hover:text-white"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"fill-current"}"><path d="${"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}"></path></svg></a>
			<a href="${"/"}" class="${"hover:text-white"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"fill-current"}"><path d="${"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"}"></path></svg></a>
			<a href="${"/"}" class="${"hover:text-white"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"fill-current"}"><path d="${"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"}"></path></svg></a></div></div>
</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${slots.default ? slots.default({}) : ``}
</div>`;
});

export { Footer as F, Layout as L, Navbar as N, userStore as u };
//# sourceMappingURL=Layout-62ae1817.js.map
