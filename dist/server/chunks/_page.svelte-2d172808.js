import { c as create_ssr_component, a as subscribe, v as validate_component, d as escape, q as add_classes, g as add_attribute } from './index-c574249f.js';
import { L as Layout, N as Navbar, F as Footer, u as userStore } from './Layout-62ae1817.js';
import { p as page } from './stores-ee24c0b9.js';
import { c as customer_menus } from './constants-e30c3406.js';
import { L as LoadingToRedirect } from './LoadingToRedirect-5d09eb29.js';
import './Api-5728f2c6.js';
import 'moment';
import './index2-5501b94c.js';
import 'axios';

/* empty css                                                      */const CustomerGuard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let accessGranted = false;
  {
    if ($userStore && $userStore.role === "customer") {
      accessGranted = true;
    }
  }
  $$unsubscribe_userStore();
  return `<div>${accessGranted ? `${slots.default ? slots.default({}) : ``}` : `${validate_component(LoadingToRedirect, "LoadingToRedirect").$$render($$result, { count: 10 }, {}, {})}`}</div>

`;
});
const CustomerSideBarMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { activeMenu = customer_menus.BOOKINGS } = $$props;
  if ($$props.activeMenu === void 0 && $$bindings.activeMenu && activeMenu !== void 0)
    $$bindings.activeMenu(activeMenu);
  $$unsubscribe_userStore();
  return `
<div class="${"border-r-[1px] border-gray-200 h-full hidden md:block"}"><div class="${"flex flex-col justify-center items-center h-28 border-b-[1px] border-gray-200"}"><h4 class="${"font-bold text-xl text-neutral"}">Tableau de bord</h4>
		<p class="${"mt-2 text-sm"}">${escape($userStore && $userStore.email)} (Admin)</p>
		<div class="${"h-[5px] mt-2 bg-primary w-36"}"></div></div>
	<ul class="${"menu text-neutral"}"><li${add_classes((activeMenu === customer_menus.BOOKINGS ? "bordered" : "").trim())}><a${add_attribute("href", `#${customer_menus.BOOKINGS}`, 0)} class="${"hover:bg-primary hover:text-white"}">Mes r\xE9servations</a></li>
		<li${add_classes((activeMenu === customer_menus.SETTINGS ? "bordered" : "").trim())}><a${add_attribute("href", `#${customer_menus.SETTINGS}`, 0)} class="${"hover:bg-primary hover:text-white"}">Param\xE8tres</a></li></ul></div>


<div class="${"block md:hidden px-8 mt-10 mb-10"}"><div class="${"w-full border-[1px] rounded-t-md flex flex-row justify-between items-center h-14 py-8 px-4"}"><div><label class="${"btn btn-circle btn-primary swap swap-rotate"}"><input type="${"checkbox"}">
				
				<svg class="${"swap-off fill-current"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 512 512"}"><path d="${"M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"}"></path></svg>
				
				<svg class="${"swap-on fill-current"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 512 512"}"><polygon points="${"400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"}"></polygon></svg></label></div>
		<div class="${""}"><h4 class="${"font-bold text-md text-neutral"}">Tableau de bord</h4></div>
		<div></div></div>
	${``}</div>

`;
});
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contentType = customer_menus.BOOKINGS } = $$props;
  if ($$props.contentType === void 0 && $$bindings.contentType && contentType !== void 0)
    $$bindings.contentType(contentType);
  return `<div class="${"md:py-20 px-8"}">${`<div class="${"flex flex-col items-center justify-center h-96 gap-8"}"><span>Oops! Votre email n&#39;est pas encore v\xE9rifi\xE9.</span>
			<button class="${"text-xs btn btn-primary rounded-md"}" ${"disabled"}>${`<span>V\xE9rifier votre email</span>`}</button></div>`}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let activeMenu = customer_menus.BOOKINGS;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if ($page.url.hash) {
        activeMenu = $page.url.hash.replace("#", "");
        console.log(activeMenu);
      }
    }
    $$rendered = `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CustomerGuard, "CustomerGuard").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Navbar, "Navbar").$$render($$result, { sticky: true }, {}, {})}
		<div class="${"grid grid-cols-4 h-full"}"><div class="${"col-span-4 md:col-span-1"}">${validate_component(CustomerSideBarMenu, "CustomerSideBarMenu").$$render(
              $$result,
              { activeMenu },
              {
                activeMenu: ($$value) => {
                  activeMenu = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div>
			<div class="${"w-full col-span-4 md:col-span-3 h-full"}">${validate_component(Content, "Content").$$render($$result, { contentType: activeMenu }, {}, {})}</div></div>
		<div class="${""}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2d172808.js.map
