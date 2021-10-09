import React from "react";

function Credo() {
	const styleArt = "font-semibold text-green-700 pt-3 pb-1 lg:pt-5 lg:pb-5 ";
	return (
		<div className='text-lg lg:text-xl lg:max-w-4xl lg:mx-auto text-gray-700'>
			<div className='text-center pb-6 lg:max-w-2xl lg:mx-auto lg:py-12'>
				<p className='text-2xl lg:text-4xl text-green-600 font-bold uppercase'>
					Nous croyons
				</p>
				<div className='h-1 w-28 lg:w-1/3 bg-green-500 mt-6 lg:mt-8 mx-auto' />
			</div>
			<div className='font-light '>
				<p className={styleArt}>Art. 1</p>
				<p>
					L'inspiration et l'autorité divine des Saintes Écritures (la Bible).
				</p>
				<p className={styleArt}>Art. 2</p>
				<p>
					Un seul Dieu en trois personnes, le Père, le Fils et le Saint-Esprit.
				</p>
				<p className={styleArt}>Art. 3</p>
				<p>
					La naissance virginale de notre Seigneur Jésus-Christ, sa vie sans
					péché, sa mort expiatoire, sa résurrection triomphante, son ascension
					et son intercession permanente pour nous, son deuxième avènement et
					son règne de mille ans sur la terre.
				</p>
				<p className={styleArt}>Art. 4</p>
				<p>
					La déchéance totale de la nature humaine, la nécessité de la
					repentance et de la nouvelle naissance.
				</p>
				<p className={styleArt}>Art. 5</p>
				<p>La peine éternelle des impénitents.</p>
				<p className={styleArt}>Art. 6</p>
				<p>Le baptême d'eau par immersion et la Sainte Cène.</p>
				<p className={styleArt}>Art. 7</p>
				<p>
					La justification et la sanctification du croyant par l'œuvre parfaite
					de Christ.
				</p>
				<p className={styleArt}>Art. 8</p>
				<p>
					Le baptême du Saint-Esprit pour les croyants, avec les signes qui
					l'accompagnent.
				</p>
				<p className={styleArt}>Art. 9</p>
				<p>
					Les dons du Saint-Esprit pour l'édification de l'Église, qui est le
					Corps de Christ.
				</p>
				<p className={styleArt}>Art. 10</p>
				<p>
					La direction de l'Église par des apôtres, prophètes, évangélistes,
					pasteurs, docteurs (enseignants), anciens et diacres.
				</p>
				<p className={styleArt}>Art. 11</p>
				<p>La possibilité de déchoir de la grâce.</p>
				<p className={styleArt}>Art. 12</p>
				<p>La pratique normale et évidente de la dîme et des offrandes.</p>
			</div>
		</div>
	);
}

export default Credo;
