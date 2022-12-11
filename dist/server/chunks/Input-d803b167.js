import { c as create_ssr_component, g as add_attribute, d as escape, f as null_to_empty } from './index-c574249f.js';

/* empty css                                     */const css = {
  code: ".custom-input.svelte-i4w4tl{border-radius:15px}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { inputId = "" } = $$props;
  let { isRequired = false } = $$props;
  let { placeholder = "" } = $$props;
  let { type = "text" } = $$props;
  let { inputClass = "" } = $$props;
  let { disabled = false } = $$props;
  let { value = "" } = $$props;
  let { min = 0 } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.isRequired === void 0 && $$bindings.isRequired && isRequired !== void 0)
    $$bindings.isRequired(isRequired);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  $$result.css.add(css);
  return `<div class="${"form-control"}"><label class="${"label"}"${add_attribute("for", inputId, 0)}><span class="${"label-text text-neutral font-medium"}">${escape(label)}
			${isRequired ? `<span class="${"text-red-500 ml-1"}">*</span>
			` : ``}</span></label>
	<input${add_attribute("id", inputId, 0)}${add_attribute("type", type, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("name", inputId, 0)} ${isRequired ? "required" : ""}${add_attribute("value", value, 0)} ${disabled ? "disabled" : ""}${add_attribute("min", min, 0)} class="${escape(null_to_empty(`input input-bordered border-neutral w-full ${inputClass}`), true) + " svelte-i4w4tl"}">
</div>`;
});

export { Input as I };
//# sourceMappingURL=Input-d803b167.js.map
