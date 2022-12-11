import { c as create_ssr_component, a as subscribe$1, v as validate_component } from './index-c574249f.js';
import { p as page } from './stores-ee24c0b9.js';
import { L as Layout, N as Navbar, F as Footer } from './Layout-62ae1817.js';
import './Api-5728f2c6.js';
import { G as GenericHero } from './GenericHero-f2576d6f.js';
import { w as writable } from './index2-5501b94c.js';
import 'axios';

/* empty css                                                      */const defaultStoreValue = {
  bookingCache: {
    document_type: null,
    document_number: null,
    phone_number: null,
    date_of_birth: null,
    gender: null,
    booking_type: "flight",
    selectedOffer: null,
    flightId: null,
    seatId: null,
    payment_method: null
  },
  currentStep: 0
};
const bookingStoreWrittable = writable(defaultStoreValue);
const { subscribe, update } = bookingStoreWrittable;
const bookingStore = {
  subscribe,
  init(flightId) {
    try {
      let cache = {};
      let currStep = 1;
      if (window && window.localStorage.getItem("bookingCache")) {
        cache = JSON.parse(window.localStorage.getItem("bookingCache"));
        console.log("[bookingStore] cache", cache);
        if (cache.flightId == flightId) {
          if (cache.selectedOffer) {
            currStep = 2;
          }
          if (cache.selectedOffer && cache.document_type && cache.document_number && cache.phone_number && cache.date_of_birth && cache.gender) {
            currStep = 3;
          }
          if (cache.selectedOffer && cache.document_type && cache.document_number && cache.phone_number && cache.date_of_birth && cache.gender && cache.seatId) {
            currStep = 4;
          }
          if (cache.selectedOffer && cache.document_type && cache.document_number && cache.phone_number && cache.date_of_birth && cache.gender && cache.seatId && cache.payment_method) {
            currStep = 5;
          }
        } else {
          window.localStorage.setItem("bookingCache", JSON.stringify(defaultStoreValue.bookingCache));
        }
      } else {
        if (window) {
          window.localStorage.setItem("bookingCache", JSON.stringify(defaultStoreValue.bookingCache));
        }
      }
      return update((store) => ({
        ...store,
        bookingCache: { ...store.bookingCache, ...cache },
        currentStep: currStep
      }));
    } catch (err) {
      console.error("[bookingCacheStore] error on init", err);
    }
  },
  updateBooking(currentBookingProgress) {
    if (window && window.localStorage.getItem("bookingCache")) {
      let currStep = 1;
      window.localStorage.setItem("bookingCache", JSON.stringify(currentBookingProgress));
      if (currentBookingProgress.selectedOffer && currentBookingProgress.flightId) {
        currStep = 2;
      }
      if (currentBookingProgress.selectedOffer && currentBookingProgress.flightId && currentBookingProgress.document_type && currentBookingProgress.document_number && currentBookingProgress.phone_number && currentBookingProgress.date_of_birth && currentBookingProgress.gender) {
        currStep = 3;
      }
      if (currentBookingProgress.selectedOffer && currentBookingProgress.flightId && currentBookingProgress.document_type && currentBookingProgress.document_number && currentBookingProgress.phone_number && currentBookingProgress.date_of_birth && currentBookingProgress.gender && currentBookingProgress.seatId) {
        currStep = 4;
      }
      if (currentBookingProgress.selectedOffer && currentBookingProgress.flightId && currentBookingProgress.document_type && currentBookingProgress.document_number && currentBookingProgress.phone_number && currentBookingProgress.date_of_birth && currentBookingProgress.gender && currentBookingProgress.seatId && currentBookingProgress.payment_method) {
        currStep = 5;
      }
      return update((store) => ({
        ...store,
        bookingCache: { ...currentBookingProgress },
        currentStep: currStep
      }));
    }
  },
  resetBooking() {
    window.localStorage.setItem("bookingCache", JSON.stringify(defaultStoreValue.bookingCache));
    return update((store) => ({
      bookingCache: defaultStoreValue.bookingCache,
      currentStep: defaultStoreValue.currentStep
    }));
  }
};
const BookingStepper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentStep = 1 } = $$props;
  if ($$props.currentStep === void 0 && $$bindings.currentStep && currentStep !== void 0)
    $$bindings.currentStep(currentStep);
  return `<div class="${""}"><ul class="${"steps steps-vertical lg:steps-horizontal w-full font-bold"}"><li class="${"step step-primary"}">Informations sur le vol</li>
		<li class="${[
    "step",
    currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 5 ? "step-primary" : ""
  ].join(" ").trim()}">Passager
		</li>
		<li class="${[
    "step",
    currentStep === 3 || currentStep === 4 || currentStep === 5 ? "step-primary" : ""
  ].join(" ").trim()}">Options
		</li>
		<li class="${[
    "step",
    currentStep === 4 || currentStep === 5 ? "step-primary" : ""
  ].join(" ").trim()}">Paiement</li>
		<li class="${["step", currentStep === 5 ? "step-primary" : ""].join(" ").trim()}">Confirmer</li></ul></div>

`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe$1(page, (value) => value);
  let currentStep = 1;
  bookingStore.subscribe((store) => {
    store.bookingCache;
    currentStep = store.currentStep;
  });
  $$unsubscribe_page();
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, { sticky: true }, {}, {})}
	${validate_component(GenericHero, "GenericHero").$$render(
        $$result,
        {
          title: "Effectuer une r\xE9servation",
          titleClassName: "text-2xl lg:text-3xl text-center",
          separatorClassName: "w-48",
          containerClassName: "h-[100px]"
        },
        {},
        {}
      )}

	<div class="${"mt-20 px-8 lg:px-16"}">
		${validate_component(BookingStepper, "BookingStepper").$$render($$result, { currentStep }, {}, {})}
		
		${``}</div>
	<div class="${"mt-20"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cc448812.js.map
