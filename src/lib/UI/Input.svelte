<script lang="ts">
	export let label = ''
	export let inputId = ''
	export let isRequired = false
	export let placeholder = ''
	export let type = 'text'
	export let inputClass = ''
	export let disabled = false
	export let value = ''
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
		required={isRequired}
		{value}
		{disabled}
		on:input
		class={`input input-bordered border-neutral w-full ${inputClass}`}
	/>
</div>

<style>
	.custom-input {
		border-radius: 15px;
	}
</style>
