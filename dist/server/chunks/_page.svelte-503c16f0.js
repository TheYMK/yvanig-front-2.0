import { c as create_ssr_component, v as validate_component } from './index-c574249f.js';
import { L as Layout, N as Navbar, F as Footer } from './Layout-8783c894.js';
import { G as GenericHero } from './GenericHero-f2576d6f.js';
import './index2-5501b94c.js';
import './Api-5728f2c6.js';
import 'axios';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, { darkLink: true }, {}, {})}
	${validate_component(GenericHero, "GenericHero").$$render(
        $$result,
        {
          title: "\xC0 propos de nous",
          titleClassName: "text-3xl lg:text-6xl",
          separatorClassName: "w-48",
          containerClassName: "h-[300px]"
        },
        {},
        {}
      )}
	<div></div>
	<div class="${"mt-20"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}

${$$result.head += `<!-- HEAD_svelte-1ruji2p_START -->${$$result.title = `<title>Yvanig Agency - \xC0 Propos de nous</title>`, ""}<!-- HEAD_svelte-1ruji2p_END -->`, ""}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-503c16f0.js.map
