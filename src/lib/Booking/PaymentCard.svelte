<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import mastercard_logo from '../../assets/icon/ic_mastercard.svg?url'
	import visa_logo from '../../assets/icon/ic_visa.svg?url'
	import paypal_logo from '../../assets/icon/ic_paypal.svg?url'
	import moneygram_logo from '../../assets/icon/ic_moneygram.svg?url'
	import westernunion_logo from '../../assets/icon/ic_westernunion.svg?url'
	import { PaymentMethods } from '../../config/constants'
	import BankCardPayment from './PaymentOptions/BankCardPayment.svelte'
	import PaypalPayment from './PaymentOptions/PaypalPayment.svelte'
	import MoneygramPayment from './PaymentOptions/MoneygramPayment.svelte'
	import WesternUnionPayment from './PaymentOptions/WesternUnionPayment.svelte'

	export let flight = null
	export let selectedSeat = null
	export let selectedOffer = null

	let payment_method = null

	const dispatch = createEventDispatcher()
</script>

<div class="px-8 mt-10">
	<div class="">
		<!-- tab -->
		<div class="flex justify-center mt-4">
			<div class="flex flex-row justify-center gap-10 flex-wrap">
				<button
					class={`w-48 border-b-4 flex flex-col items-center ${
						payment_method === PaymentMethods.BANK_CARD ? 'border-primary text-primary' : ''
					}`}
					on:click={() => {
						payment_method = PaymentMethods.BANK_CARD
					}}
				>
					<div class="flex flex-row gap-2">
						<img src={mastercard_logo} width="40" alt="" />
						<img src={visa_logo} width="40" alt="" />
					</div>
					<div class="text-sm">Carte bancaire</div>
				</button>
				<button
					class={`w-48 border-b-4 flex flex-col items-center ${
						payment_method === PaymentMethods.PAYPAL ? 'border-primary text-primary' : ''
					}`}
					on:click={() => {
						payment_method = PaymentMethods.PAYPAL
					}}
				>
					<div class="flex flex-row gap-2">
						<img src={paypal_logo} width="40" alt="" />
					</div>
					<div class="text-sm">Paypal</div>
				</button>
				<button
					class={`w-48 border-b-4 flex flex-col items-center ${
						payment_method === PaymentMethods.MONEYGRAM ? 'border-primary text-primary' : ''
					}`}
					on:click={() => {
						payment_method = PaymentMethods.MONEYGRAM
					}}
				>
					<div class="flex flex-row gap-2">
						<img src={moneygram_logo} width="40" alt="" />
					</div>
					<div class="text-sm">Moneygram</div>
				</button>
				<button
					class={`w-48 border-b-4 flex flex-col items-center ${
						payment_method === PaymentMethods.WESTERN_UNION ? 'border-primary text-primary' : ''
					}`}
					on:click={() => {
						payment_method = PaymentMethods.WESTERN_UNION
					}}
				>
					<div class="flex flex-row gap-2">
						<img src={westernunion_logo} width="40" alt="" />
					</div>
					<div class="text-sm">Western Union</div>
				</button>
			</div>
		</div>
	</div>
	<!-- content -->
	{#if payment_method === PaymentMethods.BANK_CARD}
		<BankCardPayment />
	{/if}
	{#if payment_method === PaymentMethods.PAYPAL}
		<PaypalPayment />
	{/if}
	{#if payment_method === PaymentMethods.MONEYGRAM}
		<MoneygramPayment />
	{/if}
	{#if payment_method === PaymentMethods.WESTERN_UNION}
		<WesternUnionPayment />
	{/if}

	<!--  -->
	<div class="col-span-2 flex flex-row space-x-2 justify-center mt-10">
		<div class="btn-group grid grid-cols-2">
			<button
				class="btn btn-neutral"
				on:click={(e) => {
					e.preventDefault()
					dispatch('previous')
				}}><i class="fa-solid fa-angle-left mr-2" /> Précédent</button
			>
			<button
				class="btn btn-primary"
				disabled={!payment_method}
				on:click={(e) => {
					e.preventDefault()
					dispatch('nextStep', {
						payment_method: payment_method
					})
				}}>Suivant<i class="fa-solid fa-angle-right ml-2" /></button
			>
		</div>
	</div>
</div>

<style>
	/* your styles go here */
</style>
