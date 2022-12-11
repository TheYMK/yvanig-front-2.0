<script>
	import Layout from '../../lib/Layout.svelte';
	import Navbar from '../../lib/Navbar/index.svelte';
	import Footer from '../../lib/Footer/index.svelte';
	import GenericHero from '../../lib/UI/GenericHero.svelte';
	import ServiceItem from '../../lib/Services/ServiceItem.svelte';

	const services = [
		{
			title: 'Billeterie',
			description: `Réserver des billets d’avion pour un weekend ou pour des vacances c’est facile avec <strong class="text-primary">YVANIG AGENCY</strong> : indiquez la ville de départ, la ville de destination et les dates durant lesquelles vous souhaitez voyager dans notre moteur de recherche. Notre comparateur vous proposera une sélection des vols les moins chers pour votre date choisie. De plus, découvrez nos meilleures offres de vol pas cher avec des compagnies low-cost et aussi avec des compagnies aériennes traditionnelles ! <br/>Réservez un vol pas cher avec <strong class="text-primary">YVANIG AGENCY</strong>, c’est simple et efficace !`,
			image: 'https://res.cloudinary.com/kaymkassai/image/upload/v1670785618/service1_ynqu5n.webp',
			link: '/services/billeterie',
			bgLeft: true
		},
		{
			title: 'Visa et hébérgement',
			description: `Réussir son installation aux Comores devient facile quand on connaît les rouages de l’administration comorienne ainsi que les subtilités fiscales. C’est pourquoi, <strong class="text-primary">YVANIG AGENCY</strong> vous offre des spécialistes dans toutes les facettes que peut recouvrir votre installation. Toute l’équipe est à vos côtés pour vous accompagner de A à Z dans la réalisation de votre projet jusqu’à son plein succès.`,
			image: 'https://res.cloudinary.com/kaymkassai/image/upload/v1670785617/service3_wn1usi.webp',
			link: '/services/visa-et-hebergement',
			bgLeft: false
		},
		{
			title: 'Location de voiture',
			description: `Chez <strong class="text-primary">YAVNIG AGENCY</strong>, nous proposons à nos clients la possibilité de réserver une location de voiture adaptée à leur budget et leurs besoins. Nous avons sélectionné plusieurs modèles de véhicules de tourisme pour des déplacements sur les routes seul, en couple, en famille ou avec un groupe d’amis. La location de voiture avec <strong class="text-primary">YVANIG AGENCY</strong> est simple et économique.`,
			image: 'https://res.cloudinary.com/kaymkassai/image/upload/v1670785618/service2_ubujqb.webp',
			link: '/services/location-de-voiture',
			bgLeft: true
		}
	];
</script>

<svelte:head>
	<title>Yvanig Agency - Nos Services</title>
</svelte:head>

<Layout>
	<Navbar darkLink={true} />
	<GenericHero
		title="Nos Services"
		titleClassName="text-3xl lg:text-6xl"
		separatorClassName="w-48"
		containerClassName="h-[300px]"
	/>
	<div>
		{#each services as service}
			<ServiceItem
				title={service.title}
				description={service.description}
				image={service.image}
				link={service.link}
				bgLeft={service.bgLeft}
			/>
		{/each}
	</div>
	<div class="mt-20">
		<Footer />
	</div>
</Layout>

<style>
	/* your styles go here */
</style>
