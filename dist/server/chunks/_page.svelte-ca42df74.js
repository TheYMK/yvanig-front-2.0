import { c as create_ssr_component, v as validate_component, d as escape, f as null_to_empty, e as each, g as add_attribute, o as onDestroy } from './index-c574249f.js';
import { L as Layout, N as Navbar, F as Footer } from './Layout-62ae1817.js';
import { T as TripCard } from './TripCard-4d4ec7a3.js';
import './Api-5728f2c6.js';
import './index2-5501b94c.js';
import 'axios';

const css$3 = {
  code: ".background-image.svelte-10v5mjn{background-image:linear-gradient(360deg, var(--color-base-100) 0%, rgba(255, 18, 250, 0) 10%),\n			url('/src/assets/bg/bg_hero.png');background-color:var(--color-base-100);background-repeat:no-repeat;background-size:cover}.reservation-card.svelte-10v5mjn{box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.3);-webkit-box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.3);border-top:solid 1px rgba(255, 255, 255, 0.1)}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = {
    origin: "",
    destination: "",
    departure_date: ""
  };
  let countries = ["Anjouan", "Grande Comore", "Moheli", "Mayotte", "Tanzanie"];
  $$result.css.add(css$3);
  return `<div class="${"min-h-screen background-image px-8 lg:px-16 svelte-10v5mjn"}"><div class="${"container flex flex-col justify-center lg:justify-between lg:flex-row lg:items-center min-h-screen"}"><div class="${"leftSide w-full"}"><h1 class="${"mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-neutral"}">Hey! Bienvenue sur<br>Yvanig Agency
			</h1>
			<p class="${"mb-5 text-neutral text-md"}">Votre plus beau voyage d\xE9marre ici !</p>
			<a class="${"btn btn-primary rounded-full w-48 text-xs"}" href="${"/discover"}">D\xE9couvrir</a></div>
		<div class="${"rightSide w-full hidden lg:block"}"><div class="${"card w-full h-fit mt-20 bg-white reservation-card text-neutral svelte-10v5mjn"}"><div class="${"card-body"}"><h2 class="${"card-title uppercase"}">R\xE9servez maintenant</h2>
					<div class="${"flex justify-center mt-4"}"><div class="${"tabs gap-3"}"><button class="${escape(
    null_to_empty(`tab tab-bordered border-b-4 ${"border-primary text-primary"}`),
    true
  ) + " svelte-10v5mjn"}">Voyage</button>
							</div></div>

					<div class="${"card w-full bg-white text-black mt-2"}"><div class="${"card-body"}"><div class="${"grid grid-cols-2 gap-4"}"><div class="${"form-control w-full"}"><label class="${"label"}" for="${"island_start"}"><span class="${"label-text"}">Votre lieu de d\xE9part:</span></label>
									<select id="${"island_start"}" class="${"select w-full select-bordered border-black"}"><option disabled selected value="${""}">Choisissez un lieu</option>${each(countries, (country) => {
    return `<option ${country === data.destination ? "disabled" : ""}${add_attribute("value", country, 0)}>${escape(country)}</option>`;
  })}</select></div>
								<div class="${"form-control w-full"}"><label class="${"label"}" for="${"island_end"}"><span class="${"label-text"}">Votre lieu de destination:</span></label>
									<select id="${"island_end"}" class="${"select w-full select-bordered border-black"}"><option disabled selected value="${""}">Choisissez un lieu</option>${each(countries, (country) => {
    return `<option ${country === data.origin ? "disabled" : ""}${add_attribute("value", country, 0)}>${escape(country)}</option>`;
  })}</select></div></div>
							<div class="${""}"><div class="${"form-control w-full"}"><label class="${"label"}" for="${"departure_date"}"><span class="${"label-text"}">Date de d\xE9part souhait\xE9e:</span></label>
									<input id="${"departure_date"}" type="${"date"}" class="${"input input-bordered w-full border-black"}"${add_attribute("value", data.departure_date, 0)}></div></div>
							<div class="${"justify-end card-actions mt-4"}"><button class="${"btn btn-primary rounded w-48 text-xs"}">Rechercher</button></div></div></div></div></div></div></div>
</div>`;
});
const css$2 = {
  code: ".island-card.svelte-1io3qbo{box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.3)}",
  map: null
};
const IslandCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { island_name = "" } = $$props;
  if ($$props.island_name === void 0 && $$bindings.island_name && island_name !== void 0)
    $$bindings.island_name(island_name);
  $$result.css.add(css$2);
  return `<div class="${[
    escape(null_to_empty(`island-card w-56 h-64 md-72 md-w-96 lg:w-full lg:h-96 bg-cover object-cover`), true) + " svelte-1io3qbo",
    (island_name === "Anjouan" ? "bg-anjouan-bg" : "") + " " + (island_name === "Grande Comore" ? "bg-grandecomore-bg" : "") + " " + (island_name === "Moheli" ? "bg-moheli-bg" : "") + " " + (island_name === "Mayotte" ? "bg-mayotte-bg" : "")
  ].join(" ").trim()}"><div class="${"hover:bg-neutral/50 w-full h-full flex flex-col items-center justify-center"}"><h1 class="${"text-white font-bold text-md lg:text-2xl text-center"}">${escape(island_name)}</h1>
		<h2 class="${"text-white font-medium text-xl mt-2"}">Comores</h2>

		<div class="${["w-24 bg-white h-[2px] mt-4", "hidden"].join(" ").trim()}"></div>
		<button class="${[
    "btn btn-primary rounded-full lg:w-48 w-36 text-xs mt-8",
    "hidden"
  ].join(" ").trim()}">D\xE9couvrir</button></div>
</div>`;
});
const css$1 = {
  code: ".item.svelte-nv7dcb.svelte-nv7dcb{overflow:hidden;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;position:relative;-o-transition:0.7s;-ms-transition:0.7s;-moz-transition:0.7s;transition:0.7s;outline:none;width:420px;box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.3)}.item.svelte-nv7dcb:hover .svelte-nv7dcb{-o-transition:3s;-ms-transition:3s;-moz-transition:3s;-webkit-transition:3s;transition:3s;outline:none}.item.svelte-nv7dcb:hover img.svelte-nv7dcb{transform:scale(1.2)}@media(max-width: 640px){.item.svelte-nv7dcb.svelte-nv7dcb{width:320px}}@media(min-width: 768px){.item.svelte-nv7dcb.svelte-nv7dcb{width:380px}}@media(min-width: 1024px){.item.svelte-nv7dcb.svelte-nv7dcb{width:420px}}",
  map: null
};
const HeroItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { itemImage = "" } = $$props;
  if ($$props.itemImage === void 0 && $$bindings.itemImage && itemImage !== void 0)
    $$bindings.itemImage(itemImage);
  $$result.css.add(css$1);
  return `<div class="${"item svelte-nv7dcb"}"><div class="${"item_wrap svelte-nv7dcb"}"><img${add_attribute("src", itemImage, 0)} class="${"w-full aspect-square object-cover svelte-nv7dcb"}" alt="${"carousel 1"}"></div></div>

`;
});
const css = {
  code: "#carousel-container.svelte-8g0pus{width:100%;position:relative;display:flex;flex-direction:column;overflow-x:hidden}#carousel-images.svelte-8g0pus{display:flex;justify-content:center;flex-wrap:nowrap;-webkit-mask:linear-gradient(90deg, #000 0%, #fff 100%);mask:linear-gradient(90deg, #000 0%, #fff 100%)}button.svelte-8g0pus{position:absolute;top:50%;transform:translateY(-50%);display:flex;align-items:center;justify-content:center;background:transparent;border:none}button.svelte-8g0pus:focus{outline:auto}#left.svelte-8g0pus{left:10px}#right.svelte-8g0pus{right:10px}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { carouselItems = null } = $$props;
  let { speed = 500 } = $$props;
  let { autoplay = false } = $$props;
  let { autoplaySpeed = 5e3 } = $$props;
  let { displayControls = true } = $$props;
  let { carousel_type = "" } = $$props;
  let interval;
  const rotateLeft = (e) => {
    const transitioningImage = carouselItems[carouselItems.length - 1];
    document.getElementById(transitioningImage.id).style.opacity = "0";
    carouselItems = [
      carouselItems[carouselItems.length - 1],
      ...carouselItems.slice(0, carouselItems.length - 1)
    ];
    setTimeout(() => document.getElementById(transitioningImage.id).style.opacity = "1", speed);
  };
  const startAutoPlay = () => {
    if (autoplay) {
      interval = setInterval(rotateLeft, autoplaySpeed);
    }
  };
  const stopAutoPlay = () => {
    clearInterval(interval);
  };
  if (autoplay) {
    startAutoPlay();
  }
  onDestroy(() => {
    stopAutoPlay();
  });
  if ($$props.carouselItems === void 0 && $$bindings.carouselItems && carouselItems !== void 0)
    $$bindings.carouselItems(carouselItems);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
    $$bindings.autoplay(autoplay);
  if ($$props.autoplaySpeed === void 0 && $$bindings.autoplaySpeed && autoplaySpeed !== void 0)
    $$bindings.autoplaySpeed(autoplaySpeed);
  if ($$props.displayControls === void 0 && $$bindings.displayControls && displayControls !== void 0)
    $$bindings.displayControls(displayControls);
  if ($$props.carousel_type === void 0 && $$bindings.carousel_type && carousel_type !== void 0)
    $$bindings.carousel_type(carousel_type);
  $$result.css.add(css);
  return `<div id="${"carousel-container"}" class="${"svelte-8g0pus"}">${carousel_type === "islands" ? `<div id="${"carousel-images"}" class="${"svelte-8g0pus"}">${each(carouselItems, (item) => {
    return `<div${add_attribute("id", item.id, 0)} class="${"mx-2 svelte-8g0pus"}">${validate_component(IslandCard, "IslandCard").$$render($$result, { island_name: item.island_name }, {}, {})}
				</div>`;
  })}</div>` : `${carousel_type === "images" ? `<div id="${"carousel-images"}" class="${"svelte-8g0pus"}">${each(carouselItems, (item) => {
    return `<div${add_attribute("id", item.id, 0)} class="${"mx-4 svelte-8g0pus"}">${validate_component(HeroItem, "HeroItem").$$render($$result, { itemImage: item.path }, {}, {})}
				</div>`;
  })}</div>` : ``}`}
	${displayControls ? `<button id="${"left"}" class="${"svelte-8g0pus"}">${slots["left-control"] ? slots["left-control"]({}) : `
				<div class="${"tooltip"}" data-tip="${"Pr\xE9c\xE9dent"}"><div class="${"rotate-180"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"40"}" height="${"40"}" viewBox="${"0 0 24 24"}"><path fill="${"#ffffff"}" d="${"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"}"></path></svg></div></div>
			`}</button>
		<button id="${"right"}" class="${"svelte-8g0pus"}">${slots["right-control"] ? slots["right-control"]({}) : `
				<div class="${"tooltip"}" data-tip="${"Suivant"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"40"}" height="${"40"}" viewBox="${"0 0 24 24"}"><path fill="${"#ffffff"}" d="${"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"}"></path></svg></div>
			`}</button>` : ``}
</div>`;
});
const Island = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    { island_name: "Anjouan", id: "island1" },
    {
      island_name: "Grande Comore",
      id: "island2"
    },
    { island_name: "Moheli", id: "island3" },
    { island_name: "Mayotte", id: "island4" }
  ];
  return `<div class="${"px-8 lg:px-16"}"><div class="${"container"}"><div class="${"flex flex-col w-fit"}"><h2 class="${"text-lg lg:text-2xl font-bold text-neutral uppercase"}">PARTEZ \xC0 LA D\xC9COUVERTE DE NOS \xCELES AUX PARFUMS
			</h2>
			<div class="${"h-[5px] mt-2 bg-primary w-24 md:w-96 md:self-end"}"></div></div>

		<div class="${"mt-16 hidden lg:block"}"><div class="${"grid grid-cols-4 gap-8"}"><div class="${""}">${validate_component(IslandCard, "IslandCard").$$render($$result, { island_name: "Anjouan" }, {}, {})}</div>
				<div>${validate_component(IslandCard, "IslandCard").$$render($$result, { island_name: "Grande Comore" }, {}, {})}</div>
				<div>${validate_component(IslandCard, "IslandCard").$$render($$result, { island_name: "Moheli" }, {}, {})}</div>
				<div>${validate_component(IslandCard, "IslandCard").$$render($$result, { island_name: "Mayotte" }, {}, {})}</div></div></div>
		<div class="${"lg:hidden mt-16"}">${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      carouselItems: items,
      displayControls: true,
      carousel_type: "islands"
    },
    {},
    {}
  )}</div></div>
</div>`;
});
const AboutUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${""}"><div class="${""}"><div class="${"grid grid-cols-1 lg:grid-cols-2 place-items-center h-5/6 bg-white"}"><div class="${"h-full w-full overflow-hidden"}"><img src="${"https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}" alt="${""}" class="${"rounded-tr-lg rounded-br-lg"}"></div>
			<div class="${"flex flex-col justify-center items-center p-8"}">
				<h1 class="${"uppercase text-neutral font-bold text-md text-2xl"}">Notre mission</h1>
				<p class="${"text-neutral mt-10 text-justify "}">Nous n&#39;avons aucune limite lorsqu&#39;il s&#39;agit de servir nos clients. Notre passion est de
					voir leurs r\xEAves se r\xE9aliser, et de ne pas simplement r\xE9server un voyage mais de le
					personnaliser pour qu&#39;il corresponde \xE0 la personnalit\xE9 et aux besoins uniques du client.
				</p>
				<button class="${"btn btn-primary rounded-full w-56 text-xs mt-10"}">En savoir plus sur nous</button></div></div></div>
</div>`;
});
const RecentTrips = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { flights = [] } = $$props;
  let { loading = false } = $$props;
  if ($$props.flights === void 0 && $$bindings.flights && flights !== void 0)
    $$bindings.flights(flights);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  return `<div class="${"px-8 lg:px-16"}"><div class="${"container"}"><div class="${"flex flex-col w-fit"}"><h2 class="${"text-lg lg:text-2xl font-bold text-neutral uppercase"}">Nos r\xE9centes offres de voyages
			</h2>
			<div class="${"h-[5px] mt-2 bg-primary w-24 md:w-72 md:self-end"}"></div></div>

		<div class="${"mt-16"}">${loading ? `<div class="${"flex justify-center"}"><svg role="${"status"}" class="${"mr-2 w-8 h-8 text-primary animate-spin dark:text-neutral fill-primary"}" viewBox="${"0 0 100 101"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"}" fill="${"currentColor"}"></path><path d="${"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"}" fill="${"currentFill"}"></path></svg></div>` : `<div class="${"grid grid-cols-1 lg:grid-cols-4 gap-8"}">${each(flights, (flight) => {
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
  })}</div>`}</div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loading = false;
  let flights = [];
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
	<div class="${"mt-14"}">${validate_component(Island, "Island").$$render($$result, {}, {}, {})}</div>
	<div class="${"mt-20"}">${validate_component(RecentTrips, "RecentTrips").$$render($$result, { flights, loading }, {}, {})}</div>
	<div class="${"mt-20"}">${validate_component(AboutUs, "AboutUs").$$render($$result, {}, {}, {})}</div>

	<div class="${"mt-20"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ca42df74.js.map
