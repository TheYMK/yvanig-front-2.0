import { c as create_ssr_component, v as validate_component } from './index-c574249f.js';
import { L as Layout, N as Navbar, F as Footer } from './Layout-8783c894.js';
import { G as GenericHero } from './GenericHero-f2576d6f.js';
import './index2-5501b94c.js';
import './Api-5728f2c6.js';
import 'axios';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-117jnti_START -->${$$result.title = `<title>Yvanig Agency - Mentions l\xE9gales</title>`, ""}<!-- HEAD_svelte-117jnti_END -->`, ""}

${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, { darkLink: true }, {}, {})}
	${validate_component(GenericHero, "GenericHero").$$render(
        $$result,
        {
          title: "Mentions l\xE9gales",
          titleClassName: "text-3xl lg:text-6xl",
          separatorClassName: "w-48",
          containerClassName: "h-[300px]"
        },
        {},
        {}
      )}
	<div class="${"px-8 text-justify"}"><h2 class="${"font-bold text-primary text-2xl my-10"}">D\xE9finitions</h2>
		<p><b>Client :</b> tout professionnel ou personne physique capable au sens des articles 1123 et
			suivants du Code civil, ou personne morale, qui visite le Site objet des pr\xE9sentes conditions
			g\xE9n\xE9rales.<br>
			<b>Prestations et Services :</b>
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> met \xE0 disposition des
			Clients :
		</p>

		<p><b>Contenu :</b> Ensemble des \xE9l\xE9ments constituants l\u2019information pr\xE9sente sur le Site, notamment
			textes \u2013 images \u2013 vid\xE9os.
		</p>

		<p><b>Informations clients :</b> Ci apr\xE8s d\xE9nomm\xE9 \xAB Information (s) \xBB qui correspondent \xE0
			l\u2019ensemble des donn\xE9es personnelles susceptibles d\u2019\xEAtre d\xE9tenues par
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> pour la gestion de votre
			compte, de la gestion de la relation client et \xE0 des fins d\u2019analyses et de statistiques.
		</p>

		<p><b>Utilisateur :</b> Internaute se connectant, utilisant le site susnomm\xE9.</p>
		<p><b>Informations personnelles :</b> \xAB Les informations qui permettent, sous quelque forme que ce
			soit, directement ou non, l&#39;identification des personnes physiques auxquelles elles s&#39;appliquent
			\xBB (article 4 de la loi n\xB0 78-17 du 6 janvier 1978).
		</p>
		<p>Les termes \xAB donn\xE9es \xE0 caract\xE8re personnel \xBB, \xAB personne concern\xE9e \xBB, \xAB sous traitant \xBB et \xAB
			donn\xE9es sensibles \xBB ont le sens d\xE9fini par le R\xE8glement G\xE9n\xE9ral sur la Protection des Donn\xE9es
			(RGPD : n\xB0 2016-679)
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">1. Pr\xE9sentation du site internet.</h2>
		<p>En vertu de l&#39;article 6 de la loi n\xB0 2004-575 du 21 juin 2004 pour la confiance dans
			l&#39;\xE9conomie num\xE9rique, il est pr\xE9cis\xE9 aux utilisateurs du site internet <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> l&#39;identit\xE9 des diff\xE9rents intervenants dans le cadre de sa r\xE9alisation et de son suivi:
		</p>
		<p><strong>Propri\xE9taire</strong> : Yvanig Agency \u2013 Mutsamudu, Comores<br>

			<strong>Responsable publication</strong> : Melissa Bacar \u2013 mely2505@yahoo.fr<br>
			Le responsable publication est une personne physique ou une personne morale.<br>
			<strong>Webmaster</strong> : Melissa Bacar \u2013 mely2505@yahoo.fr<br>
			<strong>H\xE9bergeur</strong> : 1and1 \u2013 7 Place de la Gare 57200 Sarreguemines 0970 808 911<br>
			<strong>D\xE9l\xE9gu\xE9 \xE0 la protection des donn\xE9es</strong> : Melissa Bacar \u2013 mely2505@yahoo.fr<br></p>

		<div ng-bind-html="${"linkHTML"}"><p>Ces mentions l\xE9gales RGPD sont issues du <a href="${"https://fr.orson.io/1371/generateur-mentions-legales"}" title="${"g\xE9n\xE9rateur gratuit de mentions l\xE9gales pour un site internet"}">g\xE9n\xE9rateur gratuit de mentions l\xE9gales pour un site internet</a></p></div>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">2. Conditions g\xE9n\xE9rales d\u2019utilisation du site et des services propos\xE9s.
		</h2>

		<p>Le Site constitue une \u0153uvre de l\u2019esprit prot\xE9g\xE9e par les dispositions du Code de la Propri\xE9t\xE9
			Intellectuelle et des R\xE9glementations Internationales applicables. Le Client ne peut en aucune
			mani\xE8re r\xE9utiliser, c\xE9der ou exploiter pour son propre compte tout ou partie des \xE9l\xE9ments ou
			travaux du Site.
		</p>

		<p>L\u2019utilisation du site <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>
			implique l\u2019acceptation pleine et enti\xE8re des conditions g\xE9n\xE9rales d\u2019utilisation ci-apr\xE8s d\xE9crites.
			Ces conditions d\u2019utilisation sont susceptibles d\u2019\xEAtre modifi\xE9es ou compl\xE9t\xE9es \xE0 tout moment, les
			utilisateurs du site
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> sont donc invit\xE9s \xE0 les
			consulter de mani\xE8re r\xE9guli\xE8re.
		</p>

		<p>Ce site internet est normalement accessible \xE0 tout moment aux utilisateurs. Une interruption
			pour raison de maintenance technique peut \xEAtre toutefois d\xE9cid\xE9e par <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>, qui s\u2019efforcera alors de communiquer pr\xE9alablement aux utilisateurs les dates et heures de
			l\u2019intervention. Le site web
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>
			est mis \xE0 jour r\xE9guli\xE8rement par
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> responsable. De la m\xEAme
			fa\xE7on, les mentions l\xE9gales peuvent \xEAtre modifi\xE9es \xE0 tout moment : elles s\u2019imposent n\xE9anmoins \xE0
			l\u2019utilisateur qui est invit\xE9 \xE0 s\u2019y r\xE9f\xE9rer le plus souvent possible afin d\u2019en prendre connaissance.
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">3. Description des services fournis.</h2>

		<p>Le site internet <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> a
			pour objet de fournir une information concernant l\u2019ensemble des activit\xE9s de la soci\xE9t\xE9.
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> s\u2019efforce de fournir
			sur le site <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> des informations
			aussi pr\xE9cises que possible. Toutefois, il ne pourra \xEAtre tenu responsable des oublis, des inexactitudes
			et des carences dans la mise \xE0 jour, qu\u2019elles soient de son fait ou du fait des tiers partenaires
			qui lui fournissent ces informations.
		</p>

		<p>Toutes les informations indiqu\xE9es sur le site <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>
			sont donn\xE9es \xE0 titre indicatif, et sont susceptibles d\u2019\xE9voluer. Par ailleurs, les renseignements
			figurant sur le site
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> ne sont pas exhaustifs.
			Ils sont donn\xE9s sous r\xE9serve de modifications ayant \xE9t\xE9 apport\xE9es depuis leur mise en ligne.
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">4. Limitations contractuelles sur les donn\xE9es techniques.
		</h2>

		<p>Le site utilise la technologie JavaScript. Le site Internet ne pourra \xEAtre tenu responsable de
			dommages mat\xE9riels li\xE9s \xE0 l\u2019utilisation du site. De plus, l\u2019utilisateur du site s\u2019engage \xE0
			acc\xE9der au site en utilisant un mat\xE9riel r\xE9cent, ne contenant pas de virus et avec un
			navigateur de derni\xE8re g\xE9n\xE9ration mis-\xE0-jour Le site <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> est h\xE9berg\xE9 chez un prestataire sur le territoire de l\u2019Union Europ\xE9enne conform\xE9ment aux dispositions
			du R\xE8glement G\xE9n\xE9ral sur la Protection des Donn\xE9es (RGPD : n\xB0 2016-679)
		</p>

		<p>L\u2019objectif est d\u2019apporter une prestation qui assure le meilleur taux d\u2019accessibilit\xE9.
			L\u2019h\xE9bergeur assure la continuit\xE9 de son service 24 Heures sur 24, tous les jours de l\u2019ann\xE9e.
			Il se r\xE9serve n\xE9anmoins la possibilit\xE9 d\u2019interrompre le service d\u2019h\xE9bergement pour les dur\xE9es
			les plus courtes possibles notamment \xE0 des fins de maintenance, d\u2019am\xE9lioration de ses
			infrastructures, de d\xE9faillance de ses infrastructures ou si les Prestations et Services
			g\xE9n\xE8rent un trafic r\xE9put\xE9 anormal.
		</p>

		<p><a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> et l\u2019h\xE9bergeur ne pourront
			\xEAtre tenus responsables en cas de dysfonctionnement du r\xE9seau Internet, des lignes t\xE9l\xE9phoniques
			ou du mat\xE9riel informatique et de t\xE9l\xE9phonie li\xE9 notamment \xE0 l\u2019encombrement du r\xE9seau emp\xEAchant
			l\u2019acc\xE8s au serveur.
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">5. Propri\xE9t\xE9 intellectuelle et contrefa\xE7ons.
		</h2>

		<p><a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> est propri\xE9taire des
			droits de propri\xE9t\xE9 intellectuelle et d\xE9tient les droits d\u2019usage sur tous les \xE9l\xE9ments
			accessibles sur le site internet, notamment les textes, images, graphismes, logos, vid\xE9os,
			ic\xF4nes et sons. Toute reproduction, repr\xE9sentation, modification, publication, adaptation de
			tout ou partie des \xE9l\xE9ments du site, quel que soit le moyen ou le proc\xE9d\xE9 utilis\xE9, est
			interdite, sauf autorisation \xE9crite pr\xE9alable de :
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>.
		</p>

		<p>Toute exploitation non autoris\xE9e du site ou de l\u2019un quelconque des \xE9l\xE9ments qu\u2019il contient
			sera consid\xE9r\xE9e comme constitutive d\u2019une contrefa\xE7on et poursuivie conform\xE9ment aux
			dispositions des articles L.335-2 et suivants du Code de Propri\xE9t\xE9 Intellectuelle.
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">6. Limitations de responsabilit\xE9.</h2>

		<p><a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> agit en tant
			qu\u2019\xE9diteur du site. <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> est
			responsable de la qualit\xE9 et de la v\xE9racit\xE9 du Contenu qu\u2019il publie.
		</p>

		<p><a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> ne pourra \xEAtre tenu
			responsable des dommages directs et indirects caus\xE9s au mat\xE9riel de l\u2019utilisateur, lors de
			l\u2019acc\xE8s au site internet
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>, et r\xE9sultant soit
			de l\u2019utilisation d\u2019un mat\xE9riel ne r\xE9pondant pas aux sp\xE9cifications indiqu\xE9es au point 4, soit
			de l\u2019apparition d\u2019un bug ou d\u2019une incompatibilit\xE9.
		</p>

		<p><a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> ne pourra \xE9galement
			\xEAtre tenu responsable des dommages indirects (tels par exemple qu\u2019une perte de march\xE9 ou perte
			d\u2019une chance) cons\xE9cutifs \xE0 l\u2019utilisation du site
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>. Des espaces
			interactifs (possibilit\xE9 de poser des questions dans l\u2019espace contact) sont \xE0 la disposition
			des utilisateurs. <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> se
			r\xE9serve le droit de supprimer, sans mise en demeure pr\xE9alable, tout contenu d\xE9pos\xE9 dans cet
			espace qui contreviendrait \xE0 la l\xE9gislation applicable en France, en particulier aux
			dispositions relatives \xE0 la protection des donn\xE9es. Le cas \xE9ch\xE9ant,
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> se r\xE9serve \xE9galement
			la possibilit\xE9 de mettre en cause la responsabilit\xE9 civile et/ou p\xE9nale de l\u2019utilisateur, notamment
			en cas de message \xE0 caract\xE8re raciste, injurieux, diffamant, ou pornographique, quel que soit le
			support utilis\xE9 (texte, photographie \u2026).
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">7. Gestion des donn\xE9es personnelles.</h2>

		<p>Le Client est inform\xE9 des r\xE9glementations concernant la communication marketing, la loi du 21
			Juin 2014 pour la confiance dans l\u2019Economie Num\xE9rique, la Loi Informatique et Libert\xE9 du 06
			Ao\xFBt 2004 ainsi que du R\xE8glement G\xE9n\xE9ral sur la Protection des Donn\xE9es (RGPD : n\xB0 2016-679).
		</p>

		<h3 class="${"font-bold text-primary text-xl my-10"}">7.1 Responsables de la collecte des donn\xE9es personnelles
		</h3>

		<p>Pour les Donn\xE9es Personnelles collect\xE9es dans le cadre de la cr\xE9ation du compte personnel de
			l\u2019Utilisateur et de sa navigation sur le Site, le responsable du traitement des Donn\xE9es
			Personnelles est : Yvanig Agency. <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>est repr\xE9sent\xE9 par Melissa Bacar, son repr\xE9sentant l\xE9gal
		</p>

		<p>En tant que responsable du traitement des donn\xE9es qu\u2019il collecte, <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>
			s\u2019engage \xE0 respecter le cadre des dispositions l\xE9gales en vigueur. Il lui appartient notamment
			au Client d\u2019\xE9tablir les finalit\xE9s de ses traitements de donn\xE9es, de fournir \xE0 ses prospects et
			clients, \xE0 partir de la collecte de leurs consentements, une information compl\xE8te sur le traitement
			de leurs donn\xE9es personnelles et de maintenir un registre des traitements conforme \xE0 la r\xE9alit\xE9.
			Chaque fois que
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>
			traite des Donn\xE9es Personnelles,
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>
			prend toutes les mesures raisonnables pour s\u2019assurer de l\u2019exactitude et de la pertinence des Donn\xE9es
			Personnelles au regard des finalit\xE9s pour lesquelles
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> les traite.
		</p>

		<h3 class="${"font-bold text-primary text-xl my-10"}">7.2 Finalit\xE9 des donn\xE9es collect\xE9es</h3>

		<p><a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> est susceptible de traiter
			tout ou partie des donn\xE9es :
		</p>

		<ul><li>pour permettre la navigation sur le Site et la gestion et la tra\xE7abilit\xE9 des prestations et
				services command\xE9s par l\u2019utilisateur : donn\xE9es de connexion et d\u2019utilisation du Site,
				facturation, historique des commandes, etc.
			</li>

			<li>pour pr\xE9venir et lutter contre la fraude informatique (spamming, hacking\u2026) : mat\xE9riel
				informatique utilis\xE9 pour la navigation, l\u2019adresse IP, le mot de passe (hash\xE9)
			</li>

			<li>pour am\xE9liorer la navigation sur le Site : donn\xE9es de connexion et d\u2019utilisation</li>

			<li>pour mener des enqu\xEAtes de satisfaction facultatives sur <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> : adresse email
			</li>
			<li>pour mener des campagnes de communication (sms, mail) : num\xE9ro de t\xE9l\xE9phone, adresse email
			</li></ul>

		<p><a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> ne commercialise pas
			vos donn\xE9es personnelles qui sont donc uniquement utilis\xE9es par n\xE9cessit\xE9 ou \xE0 des fins statistiques
			et d\u2019analyses.
		</p>

		<h3 class="${"font-bold text-primary text-xl my-10"}">7.3 Droit d\u2019acc\xE8s, de rectification et d\u2019opposition
		</h3>

		<p>Conform\xE9ment \xE0 la r\xE9glementation europ\xE9enne en vigueur, les Utilisateurs de <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> disposent des droits suivants :
		</p>
		<ul><li>droit d&#39;acc\xE8s (article 15 RGPD) et de rectification (article 16 RGPD), de mise \xE0 jour, de
				compl\xE9tude des donn\xE9es des Utilisateurs droit de verrouillage ou d\u2019effacement des donn\xE9es
				des Utilisateurs \xE0 caract\xE8re personnel (article 17 du RGPD), lorsqu\u2019elles sont inexactes,
				incompl\xE8tes, \xE9quivoques, p\xE9rim\xE9es, ou dont la collecte, l&#39;utilisation, la communication ou
				la conservation est interdite
			</li>

			<li>droit de retirer \xE0 tout moment un consentement (article 13-2c RGPD)</li>

			<li>droit \xE0 la limitation du traitement des donn\xE9es des Utilisateurs (article 18 RGPD)</li>

			<li>droit d\u2019opposition au traitement des donn\xE9es des Utilisateurs (article 21 RGPD)</li>

			<li>droit \xE0 la portabilit\xE9 des donn\xE9es que les Utilisateurs auront fournies, lorsque ces donn\xE9es
				font l\u2019objet de traitements automatis\xE9s fond\xE9s sur leur consentement ou sur un contrat
				(article 20 RGPD)
			</li>

			<li>droit de d\xE9finir le sort des donn\xE9es des Utilisateurs apr\xE8s leur mort et de choisir \xE0 qui <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> devra communiquer (ou non) ses donn\xE9es \xE0 un tiers qu\u2019ils aura pr\xE9alablement d\xE9sign\xE9
			</li></ul>

		<p>D\xE8s que <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> a
			connaissance du d\xE9c\xE8s d\u2019un Utilisateur et \xE0 d\xE9faut d\u2019instructions de sa part,
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> s\u2019engage \xE0 d\xE9truire ses
			donn\xE9es, sauf si leur conservation s\u2019av\xE8re n\xE9cessaire \xE0 des fins probatoires ou pour r\xE9pondre \xE0
			une obligation l\xE9gale.
		</p>

		<p>Si l\u2019Utilisateur souhaite savoir comment <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>
			utilise ses Donn\xE9es Personnelles, demander \xE0 les rectifier ou s\u2019oppose \xE0 leur traitement, l\u2019Utilisateur
			peut contacter
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> par \xE9crit \xE0 l\u2019adresse
			suivante :
		</p>

		Yvanig Agency \u2013 DPO, Melissa Bacar<br>
		Comores 99200 Mutsamudu.

		<p>Dans ce cas, l\u2019Utilisateur doit indiquer les Donn\xE9es Personnelles qu\u2019il souhaiterait que <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> corrige, mette \xE0 jour ou supprime, en s\u2019identifiant pr\xE9cis\xE9ment avec une copie d\u2019une pi\xE8ce d\u2019identit\xE9
			(carte d\u2019identit\xE9 ou passeport).
		</p>

		<p>Les demandes de suppression de Donn\xE9es Personnelles seront soumises aux obligations qui sont
			impos\xE9es \xE0 <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> par la
			loi, notamment en mati\xE8re de conservation ou d\u2019archivage des documents. Enfin, les
			Utilisateurs de <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> peuvent
			d\xE9poser une r\xE9clamation aupr\xE8s des autorit\xE9s de contr\xF4le, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).
		</p>

		<h3 class="${"font-bold text-primary text-xl my-10"}">7.4 Non-communication des donn\xE9es personnelles
		</h3>

		<p><a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> s\u2019interdit de
			traiter, h\xE9berger ou transf\xE9rer les Informations collect\xE9es sur ses Clients vers un pays situ\xE9
			en dehors de l\u2019Union europ\xE9enne ou reconnu comme \xAB non ad\xE9quat \xBB par la Commission europ\xE9enne
			sans en informer pr\xE9alablement le client. Pour autant,
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> reste libre du choix
			de ses sous-traitants techniques et commerciaux \xE0 la condition qu\u2019il pr\xE9sentent les garanties suffisantes
			au regard des exigences du R\xE8glement G\xE9n\xE9ral sur la Protection des Donn\xE9es (RGPD : n\xB0 2016-679).
		</p>

		<p><a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> s\u2019engage \xE0 prendre
			toutes les pr\xE9cautions n\xE9cessaires afin de pr\xE9server la s\xE9curit\xE9 des Informations et notamment
			qu\u2019elles ne soient pas communiqu\xE9es \xE0 des personnes non autoris\xE9es. Cependant, si un incident
			impactant l\u2019int\xE9grit\xE9 ou la confidentialit\xE9 des Informations du Client est port\xE9e \xE0 la
			connaissance de <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>,
			celle-ci devra dans les meilleurs d\xE9lais informer le Client et lui communiquer les mesures de
			corrections prises. Par ailleurs
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> ne collecte aucune \xAB
			donn\xE9es sensibles \xBB.
		</p>

		<p>Les Donn\xE9es Personnelles de l\u2019Utilisateur peuvent \xEAtre trait\xE9es par des filiales de <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> et des sous-traitants (prestataires de services), exclusivement afin de r\xE9aliser les finalit\xE9s
			de la pr\xE9sente politique.
		</p>
		<p>Dans la limite de leurs attributions respectives et pour les finalit\xE9s rappel\xE9es ci-dessus,
			les principales personnes susceptibles d\u2019avoir acc\xE8s aux donn\xE9es des Utilisateurs de <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> sont principalement les agents de notre service client.
		</p>

		<div ng-bind-html="${"rgpdHTML"}"></div>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">8. Notification d\u2019incident</h2>
		<p>Quels que soient les efforts fournis, aucune m\xE9thode de transmission sur Internet et aucune
			m\xE9thode de stockage \xE9lectronique n&#39;est compl\xE8tement s\xFBre. Nous ne pouvons en cons\xE9quence pas
			garantir une s\xE9curit\xE9 absolue. Si nous prenions connaissance d&#39;une br\xE8che de la s\xE9curit\xE9, nous
			avertirions les utilisateurs concern\xE9s afin qu&#39;ils puissent prendre les mesures appropri\xE9es.
			Nos proc\xE9dures de notification d\u2019incident tiennent compte de nos obligations l\xE9gales, qu&#39;elles
			se situent au niveau national ou europ\xE9en. Nous nous engageons \xE0 informer pleinement nos
			clients de toutes les questions relevant de la s\xE9curit\xE9 de leur compte et \xE0 leur fournir
			toutes les informations n\xE9cessaires pour les aider \xE0 respecter leurs propres obligations
			r\xE9glementaires en mati\xE8re de reporting.
		</p>
		<p>Aucune information personnelle de l&#39;utilisateur du site <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>
			n&#39;est publi\xE9e \xE0 l&#39;insu de l&#39;utilisateur, \xE9chang\xE9e, transf\xE9r\xE9e, c\xE9d\xE9e ou vendue sur un support quelconque
			\xE0 des tiers. Seule l&#39;hypoth\xE8se du rachat de
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>
			et de ses droits permettrait la transmission des dites informations \xE0 l&#39;\xE9ventuel acqu\xE9reur qui
			serait \xE0 son tour tenu de la m\xEAme obligation de conservation et de modification des donn\xE9es vis
			\xE0 vis de l&#39;utilisateur du site
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>.
		</p>

		<h3>S\xE9curit\xE9</h3>

		<p>Pour assurer la s\xE9curit\xE9 et la confidentialit\xE9 des Donn\xE9es Personnelles et des Donn\xE9es
			Personnelles de Sant\xE9, <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> utilise des r\xE9seaux prot\xE9g\xE9s par des dispositifs standards tels que par pare-feu, la pseudonymisation,
			l\u2019encryption et mot de passe.
		</p>

		<p>Lors du traitement des Donn\xE9es Personnelles, <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>prend toutes les mesures raisonnables visant \xE0 les prot\xE9ger contre toute perte, utilisation
			d\xE9tourn\xE9e, acc\xE8s non autoris\xE9, divulgation, alt\xE9ration ou destruction.
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">9. Liens hypertextes \xAB cookies \xBB et balises (\u201Ctags\u201D) internet
		</h2>
		<p>Le site <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> contient un
			certain nombre de liens hypertextes vers d\u2019autres sites, mis en place avec l\u2019autorisation de
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>. Cependant,
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> n\u2019a pas la possibilit\xE9
			de v\xE9rifier le contenu des sites ainsi visit\xE9s, et n\u2019assumera en cons\xE9quence aucune responsabilit\xE9
			de ce fait.
		</p>
		Sauf si vous d\xE9cidez de d\xE9sactiver les cookies, vous acceptez que le site puisse les utiliser. Vous
		pouvez \xE0 tout moment d\xE9sactiver ces cookies et ce gratuitement \xE0 partir des possibilit\xE9s de d\xE9sactivation
		qui vous sont offertes et rappel\xE9es ci-apr\xE8s, sachant que cela peut r\xE9duire ou emp\xEAcher l\u2019accessibilit\xE9
		\xE0 tout ou partie des Services propos\xE9s par le site.
		<p></p>

		<h3 class="${"font-bold text-primary text-xl my-10"}">9.1. \xAB COOKIES \xBB</h3>
		<p>Un \xAB cookie \xBB est un petit fichier d\u2019information envoy\xE9 sur le navigateur de l\u2019Utilisateur et
			enregistr\xE9 au sein du terminal de l\u2019Utilisateur (ex : ordinateur, smartphone), (ci-apr\xE8s \xAB
			Cookies \xBB). Ce fichier comprend des informations telles que le nom de domaine de
			l\u2019Utilisateur, le fournisseur d\u2019acc\xE8s Internet de l\u2019Utilisateur, le syst\xE8me d\u2019exploitation de
			l\u2019Utilisateur, ainsi que la date et l\u2019heure d\u2019acc\xE8s. Les Cookies ne risquent en aucun cas
			d\u2019endommager le terminal de l\u2019Utilisateur.
		</p>
		<p><a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> est susceptible de
			traiter les informations de l\u2019Utilisateur concernant sa visite du Site, telles que les pages
			consult\xE9es, les recherches effectu\xE9es. Ces informations permettent \xE0
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> d\u2019am\xE9liorer le contenu
			du Site, de la navigation de l\u2019Utilisateur.
		</p>
		<p>Les Cookies facilitant la navigation et/ou la fourniture des services propos\xE9s par le Site,
			l\u2019Utilisateur peut configurer son navigateur pour qu\u2019il lui permette de d\xE9cider s\u2019il souhaite
			ou non les accepter de mani\xE8re \xE0 ce que des Cookies soient enregistr\xE9s dans le terminal ou, au
			contraire, qu\u2019ils soient rejet\xE9s, soit syst\xE9matiquement, soit selon leur \xE9metteur.
			L\u2019Utilisateur peut \xE9galement configurer son logiciel de navigation de mani\xE8re \xE0 ce que
			l\u2019acceptation ou le refus des Cookies lui soient propos\xE9s ponctuellement, avant qu\u2019un Cookie
			soit susceptible d\u2019\xEAtre enregistr\xE9 dans son terminal. <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> informe l\u2019Utilisateur que, dans ce cas, il se peut que les fonctionnalit\xE9s de son logiciel de
			navigation ne soient pas toutes disponibles.
		</p>
		<p>Si l\u2019Utilisateur refuse l\u2019enregistrement de Cookies dans son terminal ou son navigateur, ou si
			l\u2019Utilisateur supprime ceux qui y sont enregistr\xE9s, l\u2019Utilisateur est inform\xE9 que sa
			navigation et son exp\xE9rience sur le Site peuvent \xEAtre limit\xE9es. Cela pourrait \xE9galement \xEAtre
			le cas lorsque <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> ou l\u2019un
			de ses prestataires ne peut pas reconna\xEEtre, \xE0 des fins de compatibilit\xE9 technique, le type de
			navigateur utilis\xE9 par le terminal, les param\xE8tres de langue et d\u2019affichage ou le pays depuis lequel
			le terminal semble connect\xE9 \xE0 Internet.
		</p>
		<p>Le cas \xE9ch\xE9ant, <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>
			d\xE9cline toute responsabilit\xE9 pour les cons\xE9quences li\xE9es au fonctionnement d\xE9grad\xE9 du Site et des
			services \xE9ventuellement propos\xE9s par
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>, r\xE9sultant (i) du
			refus de Cookies par l\u2019Utilisateur (ii) de l\u2019impossibilit\xE9 pour
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> d\u2019enregistrer ou de consulter
			les Cookies n\xE9cessaires \xE0 leur fonctionnement du fait du choix de l\u2019Utilisateur. Pour la gestion
			des Cookies et des choix de l\u2019Utilisateur, la configuration de chaque navigateur est diff\xE9rente.
			Elle est d\xE9crite dans le menu d\u2019aide du navigateur, qui permettra de savoir de quelle mani\xE8re l\u2019Utilisateur
			peut modifier ses souhaits en mati\xE8re de Cookies.
		</p>
		<p>\xC0 tout moment, l\u2019Utilisateur peut faire le choix d\u2019exprimer et de modifier ses souhaits en
			mati\xE8re de Cookies. <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> pourra
			en outre faire appel aux services de prestataires externes pour l\u2019aider \xE0 recueillir et traiter
			les informations d\xE9crites dans cette section.
		</p>
		<p>Enfin, en cliquant sur les ic\xF4nes d\xE9di\xE9es aux r\xE9seaux sociaux Twitter, Facebook, Linkedin et
			Google Plus figurant sur le Site de <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>
			ou dans son application mobile et si l\u2019Utilisateur a accept\xE9 le d\xE9p\xF4t de cookies en poursuivant
			sa navigation sur le Site Internet ou l\u2019application mobile de
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>, Twitter, Facebook,
			Linkedin et Google Plus peuvent \xE9galement d\xE9poser des cookies sur vos terminaux (ordinateur,
			tablette, t\xE9l\xE9phone portable).
		</p>
		<p>Ces types de cookies ne sont d\xE9pos\xE9s sur vos terminaux qu\u2019\xE0 condition que vous y consentiez,
			en continuant votre navigation sur le Site Internet ou l\u2019application mobile de <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>. \xC0 tout moment, l\u2019Utilisateur peut n\xE9anmoins revenir sur son consentement \xE0 ce que
			<a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> d\xE9pose ce type de cookies.
		</p>

		<h3 class="${"font-bold text-primary text-xl my-10"}">Article 9.2. BALISES (\u201CTAGS\u201D) INTERNET</h3>

		<p><a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> peut employer occasionnellement
			des balises Internet (\xE9galement appel\xE9es \xAB tags \xBB, ou balises d\u2019action, GIF \xE0 un pixel, GIF transparents,
			GIF invisibles et GIF un \xE0 un) et les d\xE9ployer par l\u2019interm\xE9diaire d\u2019un partenaire sp\xE9cialiste
			d\u2019analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes,
			y compris l\u2019adresse IP de l\u2019Utilisateur) dans un pays \xE9tranger.
		</p>

		<p>Ces balises sont plac\xE9es \xE0 la fois dans les publicit\xE9s en ligne permettant aux internautes
			d\u2019acc\xE9der au Site, et sur les diff\xE9rentes pages de celui-ci.
		</p>
		<p>Cette technologie permet \xE0 <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> d\u2019\xE9valuer les r\xE9ponses des visiteurs face au Site et l\u2019efficacit\xE9 de ses actions (par exemple,
			le nombre de fois o\xF9 une page est ouverte et les informations consult\xE9es), ainsi que l\u2019utilisation
			de ce Site par l\u2019Utilisateur.
		</p>
		<p>Le prestataire externe pourra \xE9ventuellement recueillir des informations sur les visiteurs du
			Site et d\u2019autres sites Internet gr\xE2ce \xE0 ces balises, constituer des rapports sur l\u2019activit\xE9 du
			Site \xE0 l\u2019attention de <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a>, et fournir d\u2019autres services relatifs \xE0 l\u2019utilisation de celui-ci et d\u2019Internet.
		</p>
		<p></p>
		<h2 class="${"font-bold text-primary text-2xl my-10"}">10. Droit applicable et attribution de juridiction.
		</h2>
		<p>Tout litige en relation avec l\u2019utilisation du site <a href="${"https://www.yvanig-agency.com"}">https://www.yvanig-agency.com</a> est soumis au droit fran\xE7ais. En dehors des cas o\xF9 la loi ne le permet pas, il est fait attribution
			exclusive de juridiction aux tribunaux comp\xE9tents de Mutsamudu
		</p></div>
	<div class="${"mt-20"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f86f910d.js.map
