import { c as create_ssr_component, a as subscribe, v as validate_component, t as createEventDispatcher, e as each, g as add_attribute, d as escape } from './index-c574249f.js';
import { L as Layout, N as Navbar, F as Footer } from './Layout-8783c894.js';
import './Api-5728f2c6.js';
import { p as page } from './stores-ee24c0b9.js';
import { T as TripCard } from './TripCard-b7e40c37.js';
import { G as GenericHero } from './GenericHero-f2576d6f.js';
import './index2-5501b94c.js';
import 'axios';

const Filters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let data = {
    origin: "",
    destination: "",
    departure_date: ""
  };
  let countries = ["Anjouan", "Grande Comore", "Moheli", "Mayotte", "Tanzanie"];
  $$unsubscribe_page();
  return `<div class="${"lg:flex flex-row gap-3 items-end hidden"}"><div class="${"form-control w-full"}"><label class="${"label"}" for="${"island_start"}"><span class="${"label-text"}">Filtrer par lieu de d\xE9part:</span></label>
		<select id="${"island_start"}" class="${"select w-full select-bordered border-black"}"><option disabled selected value="${""}">Choisissez un lieu</option>${each(countries, (country) => {
    return `<option ${country === data.destination ? "disabled" : ""}${add_attribute("value", country, 0)}>${escape(country)}</option>`;
  })}</select></div>
	<div class="${"form-control w-full"}"><label class="${"label"}" for="${"island_end"}"><span class="${"label-text"}">Filtrer par lieu de destination:</span></label>
		<select id="${"island_end"}" class="${"select w-full select-bordered border-black"}"><option disabled selected value="${""}">Choisissez un lieu</option>${each(countries, (country) => {
    return `<option ${country === data.origin ? "disabled" : ""}${add_attribute("value", country, 0)}>${escape(country)}</option>`;
  })}</select></div>
	<div class="${"form-control w-full"}"><label class="${"label"}" for="${"departure_date"}"><span class="${"label-text"}">Filtrer par date de d\xE9part souhait\xE9e:</span></label>
		<input id="${"departure_date"}" type="${"date"}" class="${"input input-bordered w-full border-black"}"${add_attribute("value", data.departure_date, 0)}></div>
	<div class="${""}"><button class="${"btn btn-primary rounded w-48 text-xs"}">Filtrer</button></div>
	<div class="${""}"><button class="${"btn btn-danger rounded w-48 text-xs"}">Effacer</button></div>
</div>`;
});
const Trip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { flights = [] } = $$props;
  let { loading = false } = $$props;
  let { total = 0 } = $$props;
  createEventDispatcher();
  if ($$props.flights === void 0 && $$bindings.flights && flights !== void 0)
    $$bindings.flights(flights);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  return `<div class="${"px-8 lg:px-16"}"><div class="${"container"}"><div class="${"flex flex-col w-fit"}"><h2 class="${"text-xl lg:text-2xl font-bold text-neutral uppercase"}">Nos offres de voyages</h2>
			<div class="${"h-[5px] mt-2 bg-primary w-24 md:w-48 md:self-end"}"></div></div>
		<div class="${"mt-16"}"><div class="${"mb-16"}">${validate_component(Filters, "Filters").$$render($$result, { type: "flights" }, {}, {})}</div>
			${loading ? `<div class="${"flex justify-center"}"><svg role="${"status"}" class="${"mr-2 w-8 h-8 text-primary animate-spin dark:text-neutral fill-primary"}" viewBox="${"0 0 100 101"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"}" fill="${"currentColor"}"></path><path d="${"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"}" fill="${"currentFill"}"></path></svg></div>` : `${flights.length === 0 ? `<div class="${"flex justify-center items-center"}"><p>Aucun vol n&#39;a \xE9t\xE9 trouv\xE9</p></div>` : `<div class="${"grid grid-cols-1 lg:grid-cols-4 gap-8"}">${each(flights, (flight) => {
    return `${validate_component(TripCard, "TripCard").$$render(
      $$result,
      {
        id: flight.id,
        trip_type: "flight",
        origin_airport_code: flight.origin_airport_code,
        destination_airport_code: flight.destination_airport_code,
        departure_date: flight.departure_date,
        departure_time: flight.departure_time,
        arrival_date: flight.arrival_date,
        arrival_time: flight.arrival_time,
        origin: flight.origin,
        destination: flight.destination,
        company_logo: flight.company_logo
      },
      {},
      {}
    )}`;
  })}</div>`}`}

			${flights.length < total ? `<div class="${"flex justify-center items-center mt-20"}"><button class="${"btn btn-primary rounded-full w-48 text-xs mb-10"}">${loading ? `<div class="${"spin"}"><svg role="${"status"}" class="${"mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-white fill-primary"}" viewBox="${"0 0 100 101"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"}" fill="${"currentColor"}"></path><path d="${"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"}" fill="${"currentFill"}"></path></svg></div>` : `<span>Charger plus</span>`}</button></div>` : ``}</div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_pageStore;
  $$unsubscribe_pageStore = subscribe(page, (value) => value);
  let loading = false;
  let flights = [];
  let total = 0;
  $$unsubscribe_pageStore();
  return `${$$result.head += `<!-- HEAD_svelte-1hwr375_START -->${$$result.title = `<title>Yvanig Agency - D\xE9couvrir</title>`, ""}<!-- HEAD_svelte-1hwr375_END -->`, ""}

${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, { darkLink: true }, {}, {})}
	${validate_component(GenericHero, "GenericHero").$$render(
        $$result,
        {
          title: "D\xE9couvrir",
          titleClassName: "text-3xl lg:text-6xl",
          separatorClassName: "w-48",
          containerClassName: "h-[300px]"
        },
        {},
        {}
      )}
	<div class="${"mt-20"}">${validate_component(Trip, "Trip").$$render($$result, { flights, loading, total }, {}, {})}</div>
	
	<div class="${"mt-20"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-de9c3093.js.map
