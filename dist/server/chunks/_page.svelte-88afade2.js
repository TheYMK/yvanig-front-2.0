import { c as create_ssr_component, v as validate_component } from './index-c574249f.js';
import { L as Layout, N as Navbar, F as Footer } from './Layout-8783c894.js';
import { I as Input } from './Input-d803b167.js';
import './Api-5728f2c6.js';
import './index2-5501b94c.js';
import 'axios';

const css = {
  code: ".auth-card.svelte-1sga2pc{box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.3);border-top:solid 1px rgba(255, 255, 255, 0.1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = { email: "" };
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1pdvfbn_START -->${$$result.title = `<title>Yvanig Agency - R\xE9initialiser votre mot de passe</title>`, ""}<!-- HEAD_svelte-1pdvfbn_END -->`, ""}

${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	<div class="${"h-screen lg:px-16"}"><div class="${"flex justify-center items-center h-full"}"><div class="${"auth-card bg-white w-[400px] h-[350px] md:rounded-[15px] p-8 svelte-1sga2pc"}"><div id="${"title"}" class="${"text-center"}"><h1 class="${"font-bold text-neutral"}">R\xE9initialiser votre mot de passe</h1></div>
				<div id="${"form"}" class="${"mt-10"}"><form class="${"space-y-4"}">${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "Adresse email",
          isRequired: true,
          inputId: "email",
          type: "email",
          placeholder: "johndoe@xxxx.xxx",
          value: data.email
        },
        {},
        {}
      )}

						<div class="${"text-center"}"><button ${"disabled"} class="${"btn btn-primary rounded-full w-full text-xs mt-4"}">${`<span>Envoyer le lien de r\xE9initialisation</span>`}</button>
							${``}</div>

						<div class="${"text-center"}"><a href="${"/auth/login"}" class="${"text-neutral text-xs hover:text-primary hover:font-bold underline"}"><i class="${"fa-solid fa-circle-arrow-left"}"></i> Retour</a></div></form></div></div></div></div>
	<div class="${"mt-20"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-88afade2.js.map
