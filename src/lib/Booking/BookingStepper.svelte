<script>
	export let currentStep = 1
</script>

<div class="">
	<ul class="steps steps-vertical lg:steps-horizontal w-full font-bold">
		<li class="step step-primary">Informations sur le vol</li>
		<li
			class="step"
			class:step-primary={currentStep === 2 ||
				currentStep === 3 ||
				currentStep === 4 ||
				currentStep === 5}
		>
			Passager
		</li>
		<li
			class="step"
			class:step-primary={currentStep === 3 || currentStep === 4 || currentStep === 5}
		>
			Options
		</li>
		<li class="step" class:step-primary={currentStep === 4 || currentStep === 5}>Paiement</li>
		<li class="step" class:step-primary={currentStep === 5}>Confirmer</li>
	</ul>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
</style>
