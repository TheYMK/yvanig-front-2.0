import { c as create_ssr_component } from './index-c574249f.js';

const css = {
  code: "#preloader.svelte-1n9inz4.svelte-1n9inz4.svelte-1n9inz4{overflow:hidden;background-image:linear-gradient(135deg, var(--color-base-100) 0%, var(--color-base-100) 100%);left:0;right:0;top:0;bottom:0;position:fixed;z-index:9999;color:var(--color-primary)}#preloader.svelte-1n9inz4 .jumper.svelte-1n9inz4.svelte-1n9inz4{left:0;top:0;right:0;bottom:0;display:block;position:absolute;margin:auto;width:50px;height:50px}#preloader.svelte-1n9inz4 .jumper.svelte-1n9inz4>div.svelte-1n9inz4{background-color:var(--color-primary);width:10px;height:10px;border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;position:absolute;opacity:0;width:50px;height:50px;-webkit-animation:svelte-1n9inz4-jumper 1s 0s linear infinite;animation:svelte-1n9inz4-jumper 1s 0s linear infinite}#preloader.svelte-1n9inz4 .jumper.svelte-1n9inz4>div.svelte-1n9inz4:nth-child(2){-webkit-animation-delay:0.33333s;animation-delay:0.33333s}#preloader.svelte-1n9inz4 .jumper.svelte-1n9inz4>div.svelte-1n9inz4:nth-child(3){-webkit-animation-delay:0.66666s;animation-delay:0.66666s}@-webkit-keyframes svelte-1n9inz4-jumper{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes svelte-1n9inz4-jumper{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:1}100%{opacity:0}}",
  map: null
};
const LoadingToRedirect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { count = 10 } = $$props;
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  $$result.css.add(css);
  return `<div id="${"preloader"}" class="${"svelte-1n9inz4"}"><div class="${"jumper svelte-1n9inz4"}"><div class="${"svelte-1n9inz4"}"></div>
		<div class="${"svelte-1n9inz4"}"></div>
		<div class="${"svelte-1n9inz4"}"></div></div>
</div>`;
});

export { LoadingToRedirect as L };
//# sourceMappingURL=LoadingToRedirect-5d09eb29.js.map
