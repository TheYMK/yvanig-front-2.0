import { c as create_ssr_component, a as subscribe, v as validate_component } from './index-c574249f.js';
import { L as Layout, N as Navbar, F as Footer } from './Layout-62ae1817.js';
import { I as Input } from './Input-d803b167.js';
import './Api-5728f2c6.js';
import { p as page } from './stores-ee24c0b9.js';
import './index2-5501b94c.js';
import 'axios';

const css = {
  code: ".auth-card.svelte-1sga2pc{box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.3);border-top:solid 1px rgba(255, 255, 255, 0.1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let data = { email: "", password: "" };
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	<div class="${"h-screen lg:px-16"}"><div class="${"flex justify-center items-center h-full"}"><div class="${"auth-card bg-white w-[400px] h-fit md:rounded-[15px] p-8 svelte-1sga2pc"}"><div id="${"title"}" class="${"text-center"}"><h1 class="${"font-bold text-neutral"}">Se Connecter</h1></div>
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
						${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "Mot de passe",
          isRequired: true,
          inputId: "password",
          type: "password",
          placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
          value: data.password
        },
        {},
        {}
      )}
						<div><a href="${"/auth/password/forgot"}" class="${"text-neutral font-bold text-xs hover:text-primary"}">Mot de passe oubli\xE9 ?</a></div>

						<div class="${"text-center"}"><button ${"disabled"} class="${"btn btn-primary rounded-full w-48 text-xs mt-4"}">${`<span>Se connecter</span>`}</button>
							${``}</div>

						<div class="${"text-center"}"><a href="${"/auth/register"}" class="${"text-neutral text-xs hover:text-primary hover:font-bold underline"}">Vous n&#39;avez pas de compte ? Enregistrez-vous</a></div></form></div></div></div></div>
	<div class="${"mt-20"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7a24d4ce.js.map
