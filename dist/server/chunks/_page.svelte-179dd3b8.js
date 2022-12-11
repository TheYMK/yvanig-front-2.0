import { c as create_ssr_component, a as subscribe, v as validate_component, d as escape, q as add_classes, g as add_attribute } from './index-c574249f.js';
import { L as Layout, N as Navbar, F as Footer, u as userStore } from './Layout-62ae1817.js';
import { A as AdminGuard } from './AdminGuard-b2499bac.js';
import { a as admin_menus } from './constants-e30c3406.js';
import { p as page } from './stores-ee24c0b9.js';
import './Api-5728f2c6.js';
import 'moment';
import 'react-image-file-resizer';
import '@bytemd/plugin-gfm';
import '@bytemd/plugin-breaks';
import '@bytemd/plugin-frontmatter';
import './index2-5501b94c.js';
import './LoadingToRedirect-5d09eb29.js';
import 'axios';

/** @type {import('./index.js').Schema} */
const defaultSchema = {
  strip: ['script'],
  clobberPrefix: 'user-content-',
  clobber: ['name', 'id'],
  ancestors: {
    tbody: ['table'],
    tfoot: ['table'],
    thead: ['table'],
    td: ['table'],
    th: ['table'],
    tr: ['table']
  },
  protocols: {
    href: ['http', 'https', 'mailto', 'xmpp', 'irc', 'ircs'],
    cite: ['http', 'https'],
    src: ['http', 'https'],
    longDesc: ['http', 'https']
  },
  tagNames: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'br',
    'b',
    'i',
    'strong',
    'em',
    'a',
    'pre',
    'code',
    'img',
    'tt',
    'div',
    'ins',
    'del',
    'sup',
    'sub',
    'p',
    'ol',
    'ul',
    'table',
    'thead',
    'tbody',
    'tfoot',
    'blockquote',
    'dl',
    'dt',
    'dd',
    'kbd',
    'q',
    'samp',
    'var',
    'hr',
    'ruby',
    'rt',
    'rp',
    'li',
    'tr',
    'td',
    'th',
    's',
    'strike',
    'summary',
    'details',
    'caption',
    'figure',
    'figcaption',
    'abbr',
    'bdo',
    'cite',
    'dfn',
    'mark',
    'small',
    'span',
    'time',
    'wbr',
    'input'
  ],
  attributes: {
    a: ['href'],
    img: ['src', 'longDesc'],
    input: [
      ['type', 'checkbox'],
      ['disabled', true]
    ],
    li: [['className', 'task-list-item']],
    div: ['itemScope', 'itemType'],
    blockquote: ['cite'],
    del: ['cite'],
    ins: ['cite'],
    q: ['cite'],
    '*': [
      'abbr',
      'accept',
      'acceptCharset',
      'accessKey',
      'action',
      'align',
      'alt',
      'ariaDescribedBy',
      'ariaHidden',
      'ariaLabel',
      'ariaLabelledBy',
      'axis',
      'border',
      'cellPadding',
      'cellSpacing',
      'char',
      'charOff',
      'charSet',
      'checked',
      'clear',
      'cols',
      'colSpan',
      'color',
      'compact',
      'coords',
      'dateTime',
      'dir',
      'disabled',
      'encType',
      'htmlFor',
      'frame',
      'headers',
      'height',
      'hrefLang',
      'hSpace',
      'isMap',
      'id',
      'label',
      'lang',
      'maxLength',
      'media',
      'method',
      'multiple',
      'name',
      'noHref',
      'noShade',
      'noWrap',
      'open',
      'prompt',
      'readOnly',
      'rel',
      'rev',
      'rows',
      'rowSpan',
      'rules',
      'scope',
      'selected',
      'shape',
      'size',
      'span',
      'start',
      'summary',
      'tabIndex',
      'target',
      'title',
      'type',
      'useMap',
      'vAlign',
      'value',
      'vSpace',
      'width',
      'itemProp'
    ]
  },
  required: {
    input: {
      type: 'checkbox',
      disabled: true
    }
  }
};

const AdminSideBarMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { activeMenu = admin_menus.OVERVIEW } = $$props;
  if ($$props.activeMenu === void 0 && $$bindings.activeMenu && activeMenu !== void 0)
    $$bindings.activeMenu(activeMenu);
  $$unsubscribe_userStore();
  return `
<div class="${"border-r-[1px] border-gray-200 h-full hidden md:block"}"><div class="${"flex flex-col justify-center items-center h-28 border-b-[1px] border-gray-200"}"><h4 class="${"font-bold text-xl text-neutral"}">Tableau de bord</h4>
		<p class="${"mt-2 text-sm"}">${escape($userStore && $userStore.email)} (Admin)</p>
		<div class="${"h-[5px] mt-2 bg-primary w-36"}"></div></div>
	<ul class="${"menu text-neutral"}"><li${add_classes((activeMenu === admin_menus.OVERVIEW ? "bordered" : "").trim())}><a${add_attribute("href", `#${admin_menus.OVERVIEW}`, 0)} class="${"hover:bg-primary hover:text-white"}">Compte rendu</a></li>
		<li${add_classes((activeMenu === admin_menus.FLIGHTS ? "bordered" : "").trim())}><a${add_attribute("href", `#${admin_menus.FLIGHTS}`, 0)} class="${"hover:bg-primary hover:text-white"}">Vols</a></li>
		<li${add_classes((activeMenu === admin_menus.BOOKINGS ? "bordered" : "").trim())}><a${add_attribute("href", `#${admin_menus.BOOKINGS}`, 0)} class="${"hover:bg-primary hover:text-white"}">R\xE9servations</a></li>
		<li${add_classes((activeMenu === admin_menus.BLOGS ? "bordered" : "").trim())}><a${add_attribute("href", `#${admin_menus.BLOGS}`, 0)} class="${"hover:bg-primary hover:text-white"}">Blogs</a></li>
		<li${add_classes((activeMenu === admin_menus.SETTINGS ? "bordered" : "").trim())}><a${add_attribute("href", `#${admin_menus.SETTINGS}`, 0)} class="${"hover:bg-primary hover:text-white"}">Param\xE8tres</a></li></ul></div>


<div class="${"block md:hidden px-8 mt-10 mb-10"}"><div class="${"w-full border-[1px] rounded-t-md flex flex-row justify-between items-center h-14 py-8 px-4"}"><div><label class="${"btn btn-circle btn-primary swap swap-rotate"}"><input type="${"checkbox"}">
				
				<svg class="${"swap-off fill-current"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 512 512"}"><path d="${"M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"}"></path></svg>
				
				<svg class="${"swap-on fill-current"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 512 512"}"><polygon points="${"400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"}"></polygon></svg></label></div>
		<div class="${""}"><h4 class="${"font-bold text-md text-neutral"}">Tableau de bord</h4></div>
		<div></div></div>
	${``}</div>

`;
});
JSON.stringify(defaultSchema);
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contentType = admin_menus.OVERVIEW } = $$props;
  if ($$props.contentType === void 0 && $$bindings.contentType && contentType !== void 0)
    $$bindings.contentType(contentType);
  return `<div class="${"md:py-20 px-8"}">${`<div class="${"flex flex-col items-center justify-center h-96 gap-8"}"><span>Oops! Votre email n&#39;est pas encore v\xE9rifi\xE9.</span>
			<button class="${"text-xs btn btn-primary rounded-md"}" ${"disabled"}>${`<span>V\xE9rifier votre email</span>`}</button></div>`}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let activeMenu = admin_menus.OVERVIEW;
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
        return `${validate_component(AdminGuard, "AdminGuard").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Navbar, "Navbar").$$render($$result, { sticky: true }, {}, {})}
		<div class="${"grid grid-cols-4 h-full"}"><div class="${"col-span-4 md:col-span-1"}">${validate_component(AdminSideBarMenu, "AdminSideBarMenu").$$render(
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
			<div class="${"w-full col-span-4 md:col-span-3"}">${validate_component(Content, "Content").$$render($$result, { contentType: activeMenu }, {}, {})}</div></div>
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
//# sourceMappingURL=_page.svelte-179dd3b8.js.map
