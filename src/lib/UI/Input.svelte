<script lang="ts">
		// @ts-nocheck
	export let label = ''
	export let inputId = ''
	export let isRequired = false
	export let placeholder = ''
	export let type = 'text'
	export let inputClass = ''
	export let disabled = false
	export let value = ''
	export let min = 0
</script>

<div class="form-control">
	<label class="label" for={inputId}>
		<span class="label-text text-neutral font-medium"
			>{label}
			{#if isRequired}
				<span class="text-red-500 ml-1">*</span>
			{/if}</span
		>
	</label>
	<input
		id={inputId}
		{type}
		{placeholder}
		name={inputId}
		required={isRequired}
		{value}
		{disabled}
		{min}
		on:input
		class={`input input-bordered border-neutral w-full ${inputClass}`}
	/>
</div>

<style>
	.custom-input {
		border-radius: 15px;
	}
</style>
