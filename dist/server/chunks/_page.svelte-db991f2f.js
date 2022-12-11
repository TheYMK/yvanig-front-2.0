import { c as create_ssr_component, a as subscribe, v as validate_component, g as add_attribute, e as each, d as escape } from './index-c574249f.js';
import { A as AdminGuard } from './AdminGuard-b2499bac.js';
import { L as Layout, N as Navbar, F as Footer } from './Layout-62ae1817.js';
import { p as page } from './stores-ee24c0b9.js';
import './Api-5728f2c6.js';
import { I as Input } from './Input-d803b167.js';
import { T as TripCard } from './TripCard-4d4ec7a3.js';
import { F as FlightStatuses, C as ClassTypes } from './constants-e30c3406.js';
import 'react-image-file-resizer';
import { G as GenericHero } from './GenericHero-f2576d6f.js';
import './LoadingToRedirect-5d09eb29.js';
import './index2-5501b94c.js';
import 'axios';

const FileUpload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images = [] } = $$props;
  let { placeholder = "" } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  return `<div class="${"card shadow-lg my-8 cursor-pointer"}"><div class="${"card-body"}"><label class="${"flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300"}"><div class="${"flex flex-col items-center justify-center pt-7 cursor-pointer"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-12 h-12 text-gray-400 group-hover:text-gray-600"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"}" clip-rule="${"evenodd"}"></path></svg>
					<p class="${"pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600"}">${escape(placeholder)}</p>`}</div>
			<input type="${"file"}" multiple accept="${"images/*"}" class="${"opacity-0"}"></label></div></div>

<div class="${"mt-8 w-full flex flex-col items-center"}"><div class="${"space-x-8"}">${images ? `${each(images, (image) => {
    return `<div class="${"avatar indicator"}"><span class="${"indicator-item badge cursor-pointer"}" title="${"Supprimer l'image"}">X
					</span>

					<div class="${"mb-8 rounded-box w-28 h-28 ring ring-primary ring-offset-base-100 ring-offset-2"}"><img${add_attribute("src", image.url, 0)} alt="${""}"></div>
				</div>`;
  })}` : ``}</div>
</div>`;
});
const css = {
  code: ".modal-box.svelte-h3n7ru{@apply max-w-[800px]/* 512px */;}",
  map: null
};
const ManageSeatModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isManageSeatModalOpened = false } = $$props;
  let { flightId = "" } = $$props;
  let seats = [];
  let data = {
    seat_number: "",
    is_available: true,
    class_type: "economy",
    flightId: ""
  };
  if ($$props.isManageSeatModalOpened === void 0 && $$bindings.isManageSeatModalOpened && isManageSeatModalOpened !== void 0)
    $$bindings.isManageSeatModalOpened(isManageSeatModalOpened);
  if ($$props.flightId === void 0 && $$bindings.flightId && flightId !== void 0)
    $$bindings.flightId(flightId);
  $$result.css.add(css);
  return `<div class="${[
    "modal modal-bottom lg:modal-middle",
    isManageSeatModalOpened ? "modal-open" : ""
  ].join(" ").trim()}"><div class="${"modal-box relative w-full svelte-h3n7ru"}"><label for="${"my-modal-3"}" class="${"btn btn-sm btn-neutral text-white btn-circle absolute right-2 top-2"}">\u2715</label>
		<h3 class="${"text-lg font-bold"}">G\xE9rer les si\xE8ges pour ce vol</h3>
		<div class="${"py-4"}"><form class="${"grid grid-cols-3 gap-8 mt-10"}"><div class="${"col-span-3 lg:col-span-1"}">${validate_component(Input, "Input").$$render(
    $$result,
    {
      label: "Num\xE9ro du si\xE8ge",
      isRequired: true,
      inputId: "seat_number",
      type: "text",
      placeholder: "A01",
      value: data.seat_number
    },
    {},
    {}
  )}</div>

				<div class="${"form-control col-span-3 lg:col-span-1"}"><label class="${"label"}" for="${"class_type"}"><span class="${"label-text text-neutral font-medium"}">Type de classe
							<span class="${"text-red-500 ml-1"}">*</span></span></label>
					<select id="${"class_type"}" class="${"input input-bordered border-neutral w-full"}"${add_attribute("value", data.class_type, 0)}><option value="${""}" disabled>Veuillez choisir une classe</option><option${add_attribute("value", ClassTypes.ECONOMY, 0)}>\xC9conomique</option><option${add_attribute("value", ClassTypes.BUSINESS, 0)}>Affaire</option><option${add_attribute("value", ClassTypes.FIRST, 0)}>Premi\xE8re</option></select></div>

				<div class="${"form-control col-span-3 lg:col-span-1"}"><label class="${"label"}" for="${"is_available"}"><span class="${"label-text text-neutral font-medium"}">Disponible

							<span class="${"text-red-500 ml-1"}">*</span></span></label>
					<input id="${"is_available"}" type="${"checkbox"}" class="${"toggle toggle-primary toggle-lg"}" ${"checked"} required${add_attribute("value", data.is_available, 0)}></div>
				<div class="${"col-span-3"}"><div class="${"text-center self-start"}"><button ${"disabled"} class="${"btn btn-primary rounded-full w-48 text-xs mt-4"}">${`<span>${escape("Ajouter")}</span>`}</button>
						${``}</div></div></form>

			
			<div class="${"overflow-x-auto w-full mt-10"}"><table class="${"table w-full"}"><thead><tr><th>Num\xE9ro de si\xE8ge</th>
							<th>Type de classe</th>
							<th>Disponibilit\xE9</th>
							<th>Action</th></tr></thead>
					<tbody>${each(seats, (seat) => {
    return `<tr><td>${escape(seat.seat_number)}</td>
								<td>${seat.class_type === "economy" ? `Economique` : `${seat.class_type === "business" ? `Affaire` : `Premi\xE8re`}`}</td>
								<td>${seat.is_available ? `<i class="${"fa-solid fa-circle-check text-green-600"}"></i>` : `<i class="${"fa-solid fa-circle-xmark text-error"}"></i>`}</td>
								<th><button class="${"btn btn-primary btn-xs"}">Modifier</button>
									<button class="${"btn btn-error btn-xs"}">Supprimer</button></th>
							</tr>`;
  })}</tbody></table></div></div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data = {
    airline: "",
    flight_number: "",
    origin_airport_code: "",
    destination_airport_code: "",
    capacity: 0,
    origin: "",
    destination: "",
    origin_airport_name: "",
    destination_airport_name: "",
    departure_time: "",
    arrival_time: "",
    departure_date: "",
    arrival_date: "",
    refundable: false,
    company_logo: "",
    description: "",
    seat_base_price: 0,
    seat_price_business_class: 0,
    seat_price_first_class: 0,
    status: ""
  } } = $$props;
  let countries = [
    {
      place: "Anjouan",
      airport_name: "A\xE9roport de Ouani",
      airport_code: "AJN"
    },
    {
      place: "Grande Comore",
      airport_name: "A\xE9roport international Moroni Prince Sa\xEFd Ibrahim",
      airport_code: "HAH"
    },
    {
      place: "Moheli",
      airport_name: "A\xE9roport Bandar Es Eslam",
      airport_code: "NWA"
    },
    {
      place: "Mayotte",
      airport_name: "A\xE9roport international Dzaoudzi-Pamandzi",
      airport_code: "DZA"
    },
    {
      place: "Tanzanie",
      airport_name: "Julius Nyerere International Airport",
      airport_code: "DAR"
    }
  ];
  let images = [];
  let isManageSeatModalOpened = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(AdminGuard, "AdminGuard").$$render($$result, {}, {}, {
          default: () => {
            var _a, _b, _c, _d, _e;
            return `${validate_component(Navbar, "Navbar").$$render($$result, { sticky: true }, {}, {})}

		${validate_component(GenericHero, "GenericHero").$$render(
              $$result,
              {
                title: "Modification",
                titleClassName: "text-xl lg:text-4xl",
                separatorClassName: "w-48",
                containerClassName: "h-[300px]"
              },
              {},
              {
                action: () => {
                  return `<div slot="${"action"}" class="${"mt-10"}"><button class="${"btn btn-primary rounded text-xs"}">G\xE9rer les si\xE8ges</button></div>`;
                }
              }
            )}

		<div class="${"mt-10 grid grid-cols-4 gap-10 px-8 lg:px-16"}"><div class="${"col-span-4 lg:col-span-3"}">${validate_component(FileUpload, "FileUpload").$$render(
              $$result,
              {
                images,
                placeholder: "Veuillez telecharger le logo de la compagnie"
              },
              {},
              {}
            )}
				<form class="${"grid grid-cols-6 gap-8"}"><div class="${"col-span-6 lg:col-span-3"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Nom de la compagnie",
                isRequired: true,
                inputId: "airline",
                type: "text",
                placeholder: "AB Aviation",
                value: data.airline
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-3"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Num\xE9ro de vol",
                isRequired: true,
                inputId: "flight_number",
                type: "text",
                placeholder: "AB-1234",
                value: data.flight_number
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-3"}"><label class="${"label"}" for="${"origin"}"><span class="${"label-text text-neutral font-medium"}">Lieu d&#39;origine
								<span class="${"text-red-500 ml-1"}">*</span></span></label>
						<select id="${"origin"}" class="${"select select-bordered w-full border-black"}"${add_attribute("value", data.origin, 0)} required><option value="${""}" disabled selected>Selectionnez le lieu d&#39;origine?</option>${each(countries.filter((country) => country.place != data.destination), (country) => {
              return `<option${add_attribute("value", country.place, 0)}>${escape(country.place)}</option>`;
            })}</select></div>
					<div class="${"col-span-6 lg:col-span-3"}"><label class="${"label"}" for="${"destination"}"><span class="${"label-text text-neutral font-medium"}">Lieu de destination
								<span class="${"text-red-500 ml-1"}">*</span></span></label>
						<select id="${"destination"}" class="${"select select-bordered w-full border-black"}"${add_attribute("value", data == null ? void 0 : data.destination, 0)} required><option value="${""}" disabled selected>Selectionnez le lieu de destination?</option>${each(countries.filter((country) => country.place != data.origin), (country) => {
              return `<option${add_attribute("value", country.place, 0)}>${escape(country.place)}</option>`;
            })}</select></div>
					<div class="${"col-span-6 lg:col-span-3"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "A\xE9roport d'origine",
                isRequired: true,
                inputId: "origin_airport_name",
                type: "text",
                placeholder: "Hahaya Airport",
                value: data == null ? void 0 : data.origin_airport_name
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-3"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Code a\xE9roport d'origine",
                isRequired: true,
                inputId: "origin_airport_code",
                type: "text",
                placeholder: "Hahaya Airport",
                value: data == null ? void 0 : data.origin_airport_code
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-3"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "A\xE9roport de destination",
                isRequired: true,
                inputId: "destination_airport_name",
                type: "text",
                placeholder: "Julius Nyerere International Airport",
                value: data == null ? void 0 : data.destination_airport_name
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-3"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Code a\xE9roport de destination",
                isRequired: true,
                inputId: "destination_airport_code",
                type: "text",
                placeholder: "Hahaya Airport",
                value: data == null ? void 0 : data.destination_airport_code
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-3"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Date de d\xE9part",
                isRequired: true,
                inputId: "departure_date",
                type: "date",
                placeholder: "",
                value: data == null ? void 0 : data.departure_date
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-3"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Date d'arriv\xE9e",
                isRequired: true,
                inputId: "arrival_date",
                type: "date",
                placeholder: "",
                value: data == null ? void 0 : data.arrival_date
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-3"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Heure de d\xE9part",
                isRequired: true,
                inputId: "departure_time",
                type: "time",
                placeholder: "",
                value: data == null ? void 0 : data.departure_time
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-3"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Heure d'arriv\xE9e",
                isRequired: true,
                inputId: "arrival_time",
                type: "time",
                placeholder: "",
                value: data == null ? void 0 : data.arrival_time
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-3"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Capacit\xE9 maximum",
                isRequired: true,
                inputId: "capacity",
                type: "number",
                min: 0,
                placeholder: "",
                value: (_a = data == null ? void 0 : data.capacity) == null ? void 0 : _a.toString()
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-3"}"><div class="${"form-control"}"><label class="${"label"}" for="${"refundable"}"><span class="${"label-text text-neutral font-medium"}">Billet Remboursable

									<span class="${"text-red-500 ml-1"}">*</span></span></label>
							<input id="${"refundable"}" type="${"checkbox"}" class="${"toggle toggle-primary toggle-lg"}" ${(data == null ? void 0 : data.refundable) ? "checked" : ""} required${add_attribute("value", data == null ? void 0 : data.refundable, 0)}></div></div>

					<div class="${"col-span-6 lg:col-span-2"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Prix de base (\xE9conomique)",
                isRequired: true,
                inputId: "seat_base_price",
                type: "number",
                min: 0,
                placeholder: "",
                value: (_b = data == null ? void 0 : data.seat_base_price) == null ? void 0 : _b.toString()
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-2"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Prix premium (business)",
                isRequired: true,
                inputId: "seat_price_business_class",
                type: "number",
                min: 0,
                placeholder: "",
                value: (_c = data == null ? void 0 : data.seat_price_business_class) == null ? void 0 : _c.toString()
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-2"}">${validate_component(Input, "Input").$$render(
              $$result,
              {
                label: "Prix ultime (premi\xE8re)",
                isRequired: true,
                inputId: "seat_price_first_class",
                type: "number",
                min: 0,
                placeholder: "",
                value: (_d = data == null ? void 0 : data.seat_price_first_class) == null ? void 0 : _d.toString()
              },
              {},
              {}
            )}</div>
					<div class="${"col-span-6 lg:col-span-6"}"><div class="${"form-control"}"><label class="${"label"}" for="${"status"}"><span class="${"label-text text-neutral font-medium"}">Statut du vol
									<span class="${"text-red-500 ml-1"}">*</span></span></label>
							<select id="${"status"}" class="${"input input-bordered border-neutral w-full uppercase"}"${add_attribute("value", data.status, 0)}><option disabled value="${""}">Veuillez selectionner un statut</option><option${add_attribute("value", FlightStatuses.SCHEDULED, 0)}>${escape(FlightStatuses.SCHEDULED)}</option><option${add_attribute("value", FlightStatuses.DELAYED, 0)}>${escape(FlightStatuses.DELAYED)}</option><option${add_attribute("value", FlightStatuses.IN_AIR, 0)}>${escape(FlightStatuses.IN_AIR)}</option><option${add_attribute("value", FlightStatuses.EXPECTED, 0)}>${escape(FlightStatuses.EXPECTED)}</option><option${add_attribute("value", FlightStatuses.DIVERTED, 0)}>${escape(FlightStatuses.DIVERTED)}</option><option${add_attribute("value", FlightStatuses.RECOVERY, 0)}>${escape(FlightStatuses.RECOVERY)}</option><option${add_attribute("value", FlightStatuses.LANDED, 0)}>${escape(FlightStatuses.LANDED)}</option><option${add_attribute("value", FlightStatuses.ARRIVED, 0)}>${escape(FlightStatuses.ARRIVED)}</option><option${add_attribute("value", FlightStatuses.CANCELLED, 0)}>${escape(FlightStatuses.CANCELLED)}</option><option${add_attribute("value", FlightStatuses.NO_TAKEOFF_INFO, 0)}>${escape(FlightStatuses.NO_TAKEOFF_INFO)}</option><option${add_attribute("value", FlightStatuses.PAST_FLIGHT, 0)}>${escape(FlightStatuses.PAST_FLIGHT)}</option></select></div></div>
					<div class="${"col-span-6 lg:col-span-6"}"><div class="${"form-control"}"><label class="${"label"}" for="${"description"}"><span class="${"label-text text-neutral font-medium"}">Information additionnelle
									<span class="${"text-red-500 ml-1"}">*</span></span></label>
							<textarea id="${"description"}" required class="${"textarea textarea-bordered border-neutral w-full"}" placeholder="${"D\xE9crivez votre vol"}">${escape(data.description, true)}</textarea></div></div></form>
				<div class="${"text-center mt-10"}"><button ${!data.airline || !data.flight_number || !data.origin_airport_code || !data.destination_airport_code || data.capacity <= 0 || !data.origin || !data.destination || !data.origin_airport_name || !data.destination_airport_name || !data.departure_time || !data.arrival_time || !data.departure_date || !data.arrival_date || !data.description || !data.status || data.seat_base_price <= 0 || data.seat_price_business_class <= 0 || data.seat_price_first_class <= 0 ? "disabled" : ""} class="${"btn btn-primary rounded-full w-48 text-xs mt-4"}">${`<span>Modifer</span>`}</button></div></div>
			<div class="${"col-span-4 lg:col-span-1"}"><div class="${"font-bold text-xl"}">Aper\xE7u</div>
				<hr class="${"my-4"}">
				${validate_component(TripCard, "TripCard").$$render(
              $$result,
              {
                trip_type: "flight",
                origin_airport_code: data.origin_airport_code,
                destination_airport_code: data.destination_airport_code,
                departure_date: data.departure_date,
                departure_time: data.departure_time,
                arrival_date: data.arrival_date,
                arrival_time: data.arrival_time,
                origin: data.origin,
                destination: data.destination,
                company_logo: data.company_logo
              },
              {},
              {}
            )}</div></div>
		<div class="${"mt-20"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>
		${validate_component(ManageSeatModal, "ManageSeatModal").$$render(
              $$result,
              {
                flightId: (_e = $page.params) == null ? void 0 : _e.id,
                isManageSeatModalOpened
              },
              {
                isManageSeatModalOpened: ($$value) => {
                  isManageSeatModalOpened = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-db991f2f.js.map
