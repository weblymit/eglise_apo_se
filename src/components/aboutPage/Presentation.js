import React from "react";

function Presentation() {
	const style = "pt-3 pb-2 lg:pt-6 lg:pb-4 font-semibold text-green-700";

	return (
		<div className='pt-10 lg:pb-20 font-light text-gray-600 text-lg lg:text-xl lg:max-w-4xl lg:mx-auto'>
			<p className='pb-2'>
				Membre de l'union des{" "}
				<span className='font-semibold'>Eglises Apostoliques de France</span>{" "}
				(membre du Conseil National des Evangélique de France : CNEF )
			</p>
			<p className={style}>UNE ÉGLISE</p>
			<p>
				C’est-à-dire, une assemblée de chrétiens, unis dans une même foi : Nous
				reconnaissons en Jésus-Christ, notre sauveur et Seigneur, par qui Dieu
				nous a ouvert le Chemin de la Grâce vers la Vie Éternelle. Nous croyons
				que Jésus guide nos vies, à travers sa Parole et par l’Esprit Saint
				qu’Il nous a donné.
			</p>
			<p className={style}>PROTESTANTE</p>
			<p>
				Héritière du mouvement historique de la Réforme du 16ème siècle,
				L’Église protestante Apostolique de Saint Etienne reconnaît l’héritage
				commun de l’Église depuis ses origines, pour autant qu’il soit en accord
				avec la Bible, Parole de Dieu. Remarquons que le protestantisme ne
				constitue pas une seule Église protestante, mais des Églises
				protestantes. Réformés, Évangéliques, baptistes, méthodistes,
				apostoliques, pentecôtistes, Armée du Salut… font partie de la même
				famille.
			</p>
			<p className={style}>APOSTOLIQUE</p>
			<p>
				L’Eglise Apostolique, est issue de ce qu’on a appelé le "Réveil du pays
				de Galles". Elle est une Église protestante qui cherche, simplement, à
				redécouvrir la richesse spirituelle présentée dans le Nouveau Testament
				comme étant la vie normale des chrétiens des temps apostoliques et
				d’aujourd’hui. Une Église Protestante Apostolique qui veut être, à Saint
				Etienne une maison de prière et d’adoration, mais aussi le lieu où il
				est possible de trouver le pardon de nos péchés, la libération des
				culpabilités qui nous enchaînent, la guérison de nos maladies et le
				secours dans nos détresses.
			</p>
			<p className={style}>A SAINT ETIENNE </p>
			<p>
				L’Eglise Apostolique, met en pratique sa conception du Corps de Christ,
				à Saint Etienne, en ce qui concerne l'unité et la collaboration des
				communautés locales, pour un témoignage chrétien efficace.
			</p>
		</div>
	);
}

export default Presentation;
