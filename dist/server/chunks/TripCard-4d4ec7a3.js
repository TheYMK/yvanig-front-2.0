import { c as create_ssr_component, g as add_attribute, d as escape } from './index-c574249f.js';

const css = {
  code: ".trip-card.svelte-swr1hb.svelte-swr1hb{border-radius:15px;-moz-border-radius:15px;-webkit-border-radius:15px;box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.3);border-top:solid 1px rgba(255, 255, 255, 0.1)}.avatar.svelte-swr1hb img.svelte-swr1hb{@apply bg-contain object-contain;}",
  map: null
};
const TripCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { trip_type = "flight" } = $$props;
  let { departure_date = "20/02/2022" } = $$props;
  let { departure_time = "13:00" } = $$props;
  let { arrival_date = "20/02/2022" } = $$props;
  let { arrival_time = "16:00" } = $$props;
  let { origin = "Anjouan" } = $$props;
  let { destination = "Moh\xE9li" } = $$props;
  let { company_logo = "" } = $$props;
  let { id = "" } = $$props;
  let { origin_airport_code = "" } = $$props;
  let { destination_airport_code = "" } = $$props;
  if ($$props.trip_type === void 0 && $$bindings.trip_type && trip_type !== void 0)
    $$bindings.trip_type(trip_type);
  if ($$props.departure_date === void 0 && $$bindings.departure_date && departure_date !== void 0)
    $$bindings.departure_date(departure_date);
  if ($$props.departure_time === void 0 && $$bindings.departure_time && departure_time !== void 0)
    $$bindings.departure_time(departure_time);
  if ($$props.arrival_date === void 0 && $$bindings.arrival_date && arrival_date !== void 0)
    $$bindings.arrival_date(arrival_date);
  if ($$props.arrival_time === void 0 && $$bindings.arrival_time && arrival_time !== void 0)
    $$bindings.arrival_time(arrival_time);
  if ($$props.origin === void 0 && $$bindings.origin && origin !== void 0)
    $$bindings.origin(origin);
  if ($$props.destination === void 0 && $$bindings.destination && destination !== void 0)
    $$bindings.destination(destination);
  if ($$props.company_logo === void 0 && $$bindings.company_logo && company_logo !== void 0)
    $$bindings.company_logo(company_logo);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.origin_airport_code === void 0 && $$bindings.origin_airport_code && origin_airport_code !== void 0)
    $$bindings.origin_airport_code(origin_airport_code);
  if ($$props.destination_airport_code === void 0 && $$bindings.destination_airport_code && destination_airport_code !== void 0)
    $$bindings.destination_airport_code(destination_airport_code);
  $$result.css.add(css);
  return `<div class="${"trip-card w-full h-97 bg-white px-4 svelte-swr1hb"}"><div class="${"flex flex-col items-center"}"><div class="${"avatar mt-6 svelte-swr1hb"}"><div class="${"w-24 rounded-full"}"><img${add_attribute("src", company_logo, 0)} alt="${"company logo"}" class="${"svelte-swr1hb"}"></div></div>
		<div class="${"mt-4"}">${trip_type === "flight" ? `<i class="${"fa-solid fa-plane-departure text-neutral text-2xl"}"></i>` : `<i class="${"fa-solid fa-ship text-neutral text-2xl"}"></i>`}</div>
		<div class="${"mt-4"}"><span class="${"text-neutral font-bold text-xs"}">${escape(origin)} ( ${escape(origin_airport_code)} ) <i class="${"fa-solid fa-arrow-right"}"></i>
				${escape(destination)} ( ${escape(destination_airport_code)} )</span></div>
		<div class="${"grid grid-cols-2 gap-8 mt-4 place-items-center w-full"}"><div class="${"text-neutral"}"><span class="${"font-bold text-xs"}">D\xE9part:</span>
				<br>
				<span class="${"text-xs"}">${escape(departure_date)}</span></div>
			<div class="${"text-neutral"}"><span class="${"font-bold text-xs"}">Heure:</span>
				<br>
				<span class="${"text-xs"}">${escape(departure_time)}</span></div>
			
			<div class="${"text-neutral"}"><span class="${"font-bold text-xs"}">Arriv\xE9e:</span>
				<br>
				<span class="${"text-xs"}">${escape(arrival_date)}</span></div>
			<div class="${"text-neutral"}"><span class="${"font-bold text-xs"}">Heure:</span>
				<br>
				<span class="${"text-xs"}">${escape(arrival_time)}</span></div></div>
		<div class="${"my-8 self-center"}"><a${add_attribute("href", `/bookflight/${id}`, 0)} class="${"btn btn-primary rounded lg:w-48 w-36 text-xs"}">R\xE9server</a></div></div>
</div>`;
});

export { TripCard as T };
//# sourceMappingURL=TripCard-4d4ec7a3.js.map
