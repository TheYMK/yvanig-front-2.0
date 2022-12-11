import { c as create_ssr_component, a as subscribe, v as validate_component, d as escape } from './index-c574249f.js';
import { L as Layout, N as Navbar, F as Footer } from './Layout-62ae1817.js';
import { I as Input } from './Input-d803b167.js';
import { p as page } from './stores-ee24c0b9.js';
import 'jwt-decode';
import './Api-5728f2c6.js';
import './index2-5501b94c.js';
import 'axios';

const css = {
  code: ".auth-card.svelte-1sga2pc{box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.3);border-top:solid 1px rgba(255, 255, 255, 0.1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let data = { newPassword: "", token: "" };
  let email = "";
  let repeat_password = "";
  let errors = { password: "", passwordMatch: "" };
  $$result.css.add(css);
  {
    {
      errors = { ...errors, passwordMatch: "" };
    }
  }
  $$unsubscribe_page();
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	<div class="${"h-screen lg:px-16"}"><div class="${"flex justify-center items-center h-full"}"><div class="${"auth-card bg-white w-[500px] h-fit md:rounded-[15px] p-8 mt-52 lg:mt-0 svelte-1sga2pc"}"><div id="${"title"}" class="${"text-center"}"><h1 class="${"font-bold text-neutral"}">R\xE9initialiser votre mot de passe</h1></div>
				<div id="${"form"}" class="${"mt-10"}"><form class="${"grid grid-cols-2 gap-8"}"><div class="${"col-span-2"}">${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "Adresse email",
          isRequired: true,
          disabled: true,
          inputId: "email",
          type: "email",
          value: email
        },
        {},
        {}
      )}</div>
						<div class="${"col-span-2 lg:col-span-1"}">${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "Nouveau mot de passe",
          isRequired: true,
          inputId: "password",
          type: "password",
          placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
          value: data.newPassword
        },
        {},
        {}
      )}</div>
						<div class="${"col-span-2 lg:col-span-1"}">${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "Confirmer le mot de passe",
          isRequired: true,
          inputId: "repeat_password",
          type: "password",
          placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
          value: repeat_password
        },
        {},
        {}
      )}</div>

						<div class="${"text-center col-span-2"}"><button ${"disabled"} class="${"btn btn-primary rounded-full w-48 text-xs mt-4"}">${`<span>R\xE9initialiser</span>`}</button>
							${errors.password || errors.passwordMatch ? `<div class="${"col-span-2 mt-4"}"><p class="${"text-red-600 text-xs"}">${escape(errors.password)}</p>
									<p class="${"text-red-600 text-xs"}">${escape(errors.passwordMatch)}</p></div>` : ``}</div></form></div></div></div></div>
	<div class="${"mt-36 lg:mt-20"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a6556993.js.map
