import { c as create_ssr_component, a as subscribe, v as validate_component } from './index-c574249f.js';
import { L as LoadingToRedirect } from './LoadingToRedirect-5d09eb29.js';
import { u as userStore } from './Layout-62ae1817.js';

const AdminGuard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let accessGranted = false;
  {
    if ($userStore && $userStore.role === "sysadmin") {
      accessGranted = true;
    }
  }
  $$unsubscribe_userStore();
  return `<div>${accessGranted ? `${slots.default ? slots.default({}) : ``}` : `${validate_component(LoadingToRedirect, "LoadingToRedirect").$$render($$result, { count: 10 }, {}, {})}`}</div>

`;
});

export { AdminGuard as A };
//# sourceMappingURL=AdminGuard-b2499bac.js.map
