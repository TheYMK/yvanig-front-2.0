import { c as create_ssr_component, v as validate_component, e as each, d as escape, g as add_attribute } from './index-c574249f.js';
import { L as Layout, N as Navbar, F as Footer } from './Layout-8783c894.js';
import { G as GenericHero } from './GenericHero-f2576d6f.js';
import './index2-5501b94c.js';
import './Api-5728f2c6.js';
import 'axios';

const css = {
  code: ".service-background.svelte-gyckzz{background-repeat:no-repeat;background-size:cover}",
  map: null
};
const ServiceItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { image = "" } = $$props;
  let { link = "" } = $$props;
  let { bgLeft = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.bgLeft === void 0 && $$bindings.bgLeft && bgLeft !== void 0)
    $$bindings.bgLeft(bgLeft);
  $$result.css.add(css);
  return `<div class="${"w-full grid grid-cols-2 gap-10 md:gap-0"}"><div class="${"bg-primary h-[200px] md:h-[400px] md:col-span-1 col-span-2 " + escape(bgLeft === false ? "md:order-last" : "", true)}"><img${add_attribute("src", image, 0)} alt="${""}" class="${"object-cover w-full h-full service-background svelte-gyckzz"}"></div>
	<div class="${"h-96 w-full md:col-span-1 col-span-2 flex flex-col items-center justify-center px-4"}"><h1 class="${"self-start mb-10 font-bold uppercase"}">${escape(title)}</h1>
		<p class="${"text-justify"}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p>
		</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const services = [
    {
      title: "Billeterie",
      description: `R\xE9server des billets d\u2019avion pour un weekend ou pour des vacances c\u2019est facile avec <strong class="text-primary">YVANIG AGENCY</strong> : indiquez la ville de d\xE9part, la ville de destination et les dates durant lesquelles vous souhaitez voyager dans notre moteur de recherche. Notre comparateur vous proposera une s\xE9lection des vols les moins chers pour votre date choisie. De plus, d\xE9couvrez nos meilleures offres de vol pas cher avec des compagnies low-cost et aussi avec des compagnies a\xE9riennes traditionnelles ! <br/>R\xE9servez un vol pas cher avec <strong class="text-primary">YVANIG AGENCY</strong>, c\u2019est simple et efficace !`,
      image: "https://res.cloudinary.com/kaymkassai/image/upload/v1670785618/service1_ynqu5n.webp",
      link: "/services/billeterie",
      bgLeft: true
    },
    {
      title: "Visa et h\xE9b\xE9rgement",
      description: `R\xE9ussir son installation aux Comores devient facile quand on conna\xEEt les rouages de l\u2019administration comorienne ainsi que les subtilit\xE9s fiscales. C\u2019est pourquoi, <strong class="text-primary">YVANIG AGENCY</strong> vous offre des sp\xE9cialistes dans toutes les facettes que peut recouvrir votre installation. Toute l\u2019\xE9quipe est \xE0 vos c\xF4t\xE9s pour vous accompagner de A \xE0 Z dans la r\xE9alisation de votre projet jusqu\u2019\xE0 son plein succ\xE8s.`,
      image: "https://res.cloudinary.com/kaymkassai/image/upload/v1670785617/service3_wn1usi.webp",
      link: "/services/visa-et-hebergement",
      bgLeft: false
    },
    {
      title: "Location de voiture",
      description: `Chez <strong class="text-primary">YAVNIG AGENCY</strong>, nous proposons \xE0 nos clients la possibilit\xE9 de r\xE9server une location de voiture adapt\xE9e \xE0 leur budget et leurs besoins. Nous avons s\xE9lectionn\xE9 plusieurs mod\xE8les de v\xE9hicules de tourisme pour des d\xE9placements sur les routes seul, en couple, en famille ou avec un groupe d\u2019amis. La location de voiture avec <strong class="text-primary">YVANIG AGENCY</strong> est simple et \xE9conomique.`,
      image: "https://res.cloudinary.com/kaymkassai/image/upload/v1670785618/service2_ubujqb.webp",
      link: "/services/location-de-voiture",
      bgLeft: true
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-np5fqg_START -->${$$result.title = `<title>Yvanig Agency - Nos Services</title>`, ""}<!-- HEAD_svelte-np5fqg_END -->`, ""}

${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, { darkLink: true }, {}, {})}
	${validate_component(GenericHero, "GenericHero").$$render(
        $$result,
        {
          title: "Nos Services",
          titleClassName: "text-3xl lg:text-6xl",
          separatorClassName: "w-48",
          containerClassName: "h-[300px]"
        },
        {},
        {}
      )}
	<div>${each(services, (service) => {
        return `${validate_component(ServiceItem, "ServiceItem").$$render(
          $$result,
          {
            title: service.title,
            description: service.description,
            image: service.image,
            link: service.link,
            bgLeft: service.bgLeft
          },
          {},
          {}
        )}`;
      })}</div>
	<div class="${"mt-20"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8619c0a4.js.map
