import { c as create_ssr_component, a as subscribe, v as validate_component } from './index-c574249f.js';
import { L as Layout, N as Navbar, F as Footer } from './Layout-8783c894.js';
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
  let email = "";
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-18p6u0h_START -->${$$result.title = `<title>Yvanig Agency</title>`, ""}<!-- HEAD_svelte-18p6u0h_END -->`, ""}

${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	<div class="${"h-screen lg:px-16"}"><div class="${"flex justify-center items-center h-full"}"><div class="${"auth-card bg-white w-[500px] h-fit md:rounded-[15px] p-8 mt-52 lg:mt-0 svelte-1sga2pc"}"><div id="${"title"}" class="${"text-center"}"><h1 class="${"font-bold text-neutral"}">V\xE9rifier votre adresse e-mail</h1></div>
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
						<div class="${"text-center col-span-2"}"><button ${"disabled"} class="${"btn btn-primary rounded-full w-48 text-xs mt-4"}">${`<span>V\xE9rifier</span>`}</button></div></form></div></div></div></div>
	<div class="${"mt-36 lg:mt-20"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3db1eda6.js.map
