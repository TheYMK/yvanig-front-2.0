import { c as create_ssr_component, g as add_attribute, d as escape } from './index-c574249f.js';

const GenericHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { titleClassName = "" } = $$props;
  let { separatorClassName = "" } = $$props;
  let { containerClassName = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.titleClassName === void 0 && $$bindings.titleClassName && titleClassName !== void 0)
    $$bindings.titleClassName(titleClassName);
  if ($$props.separatorClassName === void 0 && $$bindings.separatorClassName && separatorClassName !== void 0)
    $$bindings.separatorClassName(separatorClassName);
  if ($$props.containerClassName === void 0 && $$bindings.containerClassName && containerClassName !== void 0)
    $$bindings.containerClassName(containerClassName);
  return `<div${add_attribute("class", `bg-white border-b-[1px] border-gray-200 flex flex-col justify-center items-center ${containerClassName}`, 0)}><h1${add_attribute("class", `text-neutral uppercase font-bold ${titleClassName}`, 0)}>${escape(title)}</h1>
	<div${add_attribute("class", `h-[5px] mt-2 bg-primary ${separatorClassName}`, 0)}></div>
	<div class="${"flex justify-center"}">${slots.action ? slots.action({}) : ``}</div>
</div>`;
});

export { GenericHero as G };
//# sourceMappingURL=GenericHero-f2576d6f.js.map
