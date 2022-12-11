import { c as create_ssr_component, v as validate_component } from './index-c574249f.js';
import { L as Layout, N as Navbar, F as Footer } from './Layout-8783c894.js';
import { G as GenericHero } from './GenericHero-f2576d6f.js';
import './index2-5501b94c.js';
import './Api-5728f2c6.js';
import 'axios';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-7rrj3n_START -->${$$result.title = `<title>Yvanig Agency - PDC</title>`, ""}<!-- HEAD_svelte-7rrj3n_END -->`, ""}

${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, { darkLink: true }, {}, {})}
	${validate_component(GenericHero, "GenericHero").$$render(
        $$result,
        {
          title: "PDC",
          titleClassName: "text-3xl lg:text-6xl",
          separatorClassName: "w-48",
          containerClassName: "h-[300px]"
        },
        {},
        {}
      )}
	<div class="${"mt-10 px-8 text-justify"}"><h2 class="${"font-bold text-primary text-2xl my-10"}">Politique de confidentialit\xE9</h2>
		<p>Le site web www.yvanig-agency.com est d\xE9tenu par Yvanig Agency, qui est un contr\xF4leur de
			donn\xE9es de vos donn\xE9es personnelles. Nous avons adopt\xE9 cette politique de confidentialit\xE9, qui
			d\xE9termine la mani\xE8re dont nous traitons les informations collect\xE9es par www.yvanig-agency.com,
			qui fournit \xE9galement les raisons pour lesquelles nous devons collecter certaines donn\xE9es
			personnelles vous concernant. Par cons\xE9quent, vous devez lire cette politique de
			confidentialit\xE9 avant d&#39;utiliser le site web de www.yvanig-agency.com. Nous prenons soin de
			vos donn\xE9es personnelles et nous nous engageons \xE0 en garantir la confidentialit\xE9 et la
			s\xE9curit\xE9.
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">Les informations personnelles que nous collectons :
		</h2>
		<p>Lorsque vous visitez le www.yvanig-agency.com, nous recueillons automatiquement certaines
			informations sur votre appareil, notamment des informations sur votre navigateur web, votre
			adresse IP, votre fuseau horaire et certains des cookies install\xE9s sur votre appareil. En
			outre, lorsque vous naviguez sur le site, nous recueillons des informations sur les pages web
			ou les produits individuels que vous consultez, sur les sites web ou les termes de recherche
			qui vous ont renvoy\xE9 au site et sur la mani\xE8re dont vous interagissez avec le site. Nous
			d\xE9signons ces informations collect\xE9es automatiquement par le terme &quot;informations sur les
			appareils&quot;. En outre, nous pourrions collecter les donn\xE9es personnelles que vous nous
			fournissez (y compris, mais sans s&#39;y limiter, le nom, le pr\xE9nom, l&#39;adresse, les informations
			de paiement, etc.) lors de l&#39;inscription afin de pouvoir ex\xE9cuter le contrat.
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">Pourquoi traitons-nous vos donn\xE9es ?</h2>
		<p>Notre priorit\xE9 absolue est la s\xE9curit\xE9 des donn\xE9es des clients et, \xE0 ce titre, nous ne pouvons
			traiter que des donn\xE9es minimales sur les utilisateurs, uniquement dans la mesure o\xF9 cela est
			absolument n\xE9cessaire pour maintenir le site web. Les informations collect\xE9es automatiquement
			sont utilis\xE9es uniquement pour identifier les cas potentiels d&#39;abus et \xE9tablir des
			informations statistiques concernant l&#39;utilisation du site web. Ces informations statistiques
			ne sont pas autrement agr\xE9g\xE9es de mani\xE8re \xE0 identifier un utilisateur particulier du syst\xE8me.
			<br><br>
			Vous pouvez visiter le site web sans nous dire qui vous \xEAtes ni r\xE9v\xE9ler d&#39;informations, par lesquelles
			quelqu&#39;un pourrait vous identifier comme un individu sp\xE9cifique et identifiable. Toutefois, si
			vous souhaitez utiliser certaines fonctionnalit\xE9s du site web, ou si vous souhaitez recevoir notre
			lettre d&#39;information ou fournir d&#39;autres d\xE9tails en remplissant un formulaire, vous pouvez nous
			fournir des donn\xE9es personnelles, telles que votre e-mail, votre pr\xE9nom, votre nom, votre ville
			de r\xE9sidence, votre organisation, votre num\xE9ro de t\xE9l\xE9phone. Vous pouvez choisir de ne pas nous
			fournir vos donn\xE9es personnelles, mais il se peut alors que vous ne puissiez pas profiter de certaines
			fonctionnalit\xE9s du site web. Par exemple, vous ne pourrez pas recevoir notre bulletin d&#39;information
			ou nous contacter directement \xE0 partir du site web. Les utilisateurs qui ne savent pas quelles
			informations sont obligatoires sont invit\xE9s \xE0 nous contacter via yvanig-agency@gmail.com.
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">Vos droits :</h2>
		<p>Si vous \xEAtes un r\xE9sident europ\xE9en, vous disposez des droits suivants li\xE9s \xE0 vos donn\xE9es
			personnelles :
		</p>
		<ul class="${"my-4"}"><li>\u2022 Le droit d&#39;\xEAtre inform\xE9.</li>
			<li>\u2022 Le droit d&#39;acc\xE8s.</li>
			<li>\u2022 Le droit de rectification.</li>
			<li>\u2022 Le droit \xE0 l&#39;effacement.</li>
			<li>\u2022 Le droit de restreindre le traitement.</li>
			<li>\u2022 Le droit \xE0 la portabilit\xE9 des donn\xE9es.</li>
			<li>\u2022 Le droit d&#39;opposition.</li>
			<li>\u2022 Les droits relatifs \xE0 la prise de d\xE9cision automatis\xE9e et au profilage.</li></ul>
		<p>Si vous souhaitez exercer ce droit, veuillez nous contacter via les coordonn\xE9es ci-dessous.
		</p>

		<p>En outre, si vous \xEAtes un r\xE9sident europ\xE9en, nous notons que nous traitons vos informations
			afin d&#39;ex\xE9cuter les contrats que nous pourrions avoir avec vous (par exemple, si vous passez
			une commande par le biais du site), ou autrement pour poursuivre nos int\xE9r\xEAts commerciaux
			l\xE9gitimes \xE9num\xE9r\xE9s ci-dessus. En outre, veuillez noter que vos informations pourraient \xEAtre
			transf\xE9r\xE9es en dehors de l&#39;Europe, y compris au Canada et aux \xC9tats-Unis.
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">Liens vers d&#39;autres sites web :</h2>
		<p>Notre site web peut contenir des liens vers d&#39;autres sites web qui ne sont pas d\xE9tenus ou
			contr\xF4l\xE9s par nous. Sachez que nous ne sommes pas responsables de ces autres sites web ou des
			pratiques de confidentialit\xE9 des tiers. Nous vous encourageons \xE0 \xEAtre attentif lorsque vous
			quittez notre site web et \xE0 lire les d\xE9clarations de confidentialit\xE9 de chaque site web
			susceptible de collecter des informations personnelles.
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">S\xE9curit\xE9 de l&#39;information :</h2>
		<p>Nous s\xE9curisons les informations que vous fournissez sur des serveurs informatiques dans un
			environnement contr\xF4l\xE9 et s\xE9curis\xE9, prot\xE9g\xE9 contre tout acc\xE8s, utilisation ou divulgation non
			autoris\xE9s. Nous conservons des garanties administratives, techniques et physiques raisonnables
			pour nous prot\xE9ger contre tout acc\xE8s, utilisation, modification et divulgation non autoris\xE9s
			des donn\xE9es personnelles sous son contr\xF4le et sa garde. Toutefois, aucune transmission de
			donn\xE9es sur Internet ou sur un r\xE9seau sans fil ne peut \xEAtre garantie.
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">Divulgation l\xE9gale :</h2>
		<p>Nous divulguerons toute information que nous collectons, utilisons ou recevons si la loi
			l&#39;exige ou l&#39;autorise, par exemple pour nous conformer \xE0 une citation \xE0 compara\xEEtre ou \xE0 une
			proc\xE9dure judiciaire similaire, et lorsque nous pensons de bonne foi que la divulgation est
			n\xE9cessaire pour prot\xE9ger nos droits, votre s\xE9curit\xE9 ou celle d&#39;autrui, enqu\xEAter sur une fraude
			ou r\xE9pondre \xE0 une demande du gouvernement.
		</p>

		<h2 class="${"font-bold text-primary text-2xl my-10"}">Informations de contact :</h2>
		<p>Si vous souhaitez nous contacter pour comprendre davantage la pr\xE9sente politique ou si vous
			souhaitez nous contacter concernant toute question relative aux droits individuels et \xE0 vos
			informations personnelles, vous pouvez envoyer un courriel \xE0 yvanig-agency@gmail.com.
		</p></div>
	<div class="${"mt-20"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-97dbb74c.js.map
