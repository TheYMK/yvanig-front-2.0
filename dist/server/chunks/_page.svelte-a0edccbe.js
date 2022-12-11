import { c as create_ssr_component, v as validate_component, d as escape } from './index-c574249f.js';
import { L as Layout, N as Navbar, F as Footer } from './Layout-8783c894.js';
import { I as Input } from './Input-d803b167.js';
import './Api-5728f2c6.js';
import './index2-5501b94c.js';
import 'axios';

const css = {
  code: ".contact-card.svelte-4mofok{box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.3);border-top:solid 1px rgba(255, 255, 255, 0.1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1fklw0p_START -->${$$result.title = `<title>Yvanig Agency - Contactez-nous</title>`, ""}<!-- HEAD_svelte-1fklw0p_END -->`, ""}

${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, { sticky: true }, {}, {})}
	<div class="${"h-screen lg:px-16"}"><div class="${"flex justify-center items-center h-full"}"><div class="${"contact-card bg-white w-[600px] h-fit md:rounded-[15px] p-8 svelte-4mofok"}"><div id="${"title"}" class="${"text-center"}"><h1 class="${"font-bold text-neutral"}">Avez-vous des questions ? Contactez-nous</h1></div>
				<div id="${"form"}" class="${"mt-10"}"><div class="${"grid grid-cols-1 lg:grid-cols-2 gap-2"}"><div class="${"col-span-2 lg:col-span-1"}">${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "Votre nom et pr\xE9nom",
          isRequired: true,
          inputId: "name",
          type: "text",
          placeholder: "John Doe",
          value: data.name
        },
        {},
        {}
      )}</div>
						<div class="${"col-span-2 lg:col-span-1"}">${validate_component(Input, "Input").$$render(
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
      )}</div>
						<div class="${"col-span-2 lg:col-span-2"}">${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: "Objet du message",
          isRequired: true,
          inputId: "subject",
          type: "text",
          placeholder: "Je souhaite avoir plus d'information sur votre service de location de voiture",
          value: data.subject
        },
        {},
        {}
      )}</div>
						<div class="${"col-span-2 lg:col-span-2"}"><label class="${"label"}" for="${"message"}"><span class="${"label-text text-neutral font-medium"}">Votre message
									<span class="${"text-red-500 ml-1"}">*</span></span></label>
							<textarea name="${"message"}" id="${"message"}" class="${"input h-24 input-bordered w-full border-black"}" placeholder="${"J'ai un probl\xE8me avec...."}">${escape(data.message, true)}</textarea></div>
						<div class="${"text-center col-span-1 lg:col-span-2"}"><button ${"disabled"} class="${"btn btn-primary rounded-full w-48 text-xs mt-4"}">${`<span>Envoyer un message</span>`}</button>
							${``}
							${`<div><p class="${"text-red-600 text-xs mt-4"}">Tous les champs sont requis</p></div>`}
							${data.message.length > 400 || data.message.length < 50 ? `<div><p class="${"text-red-600 text-xs mt-4"}">Votre message doit avoir plus de 50 caract\xE8res et moins de 400 caract\xE8res
									</p></div>` : ``}</div></div></div></div></div></div>
	<div class="${""}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a0edccbe.js.map
