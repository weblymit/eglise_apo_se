import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/Header";
import Date from "../components/date";
import ReactPlayer from "react-player/youtube";
import BackButon from "../components/BackButon";
import SEO from "../components/SEO";

function Video(props) {
	const title = props.pageContext.video.titreVideo;
	const description = props.pageContext.video.descriptionAuteur;
	const urlVideo = props.pageContext.video.urlVideo;
	const dateVideo = props.pageContext.video.dateVideo;
	const heure = props.pageContext.video.heure;
	const auteurDuMessage = props.pageContext.video.auteurDuMessage;
	return (
		<Layout>
			<SEO
				title={title}
				description={description}
				keywords='"Serge Plais", "Eglise Saint Etienne", "Eglise evangélique Saint Etienne"'
			/>
			<Header title={title} />
			<div className='container py-10 lg:py-20 lg:px-2 lg:max-w-5xl'>
				<BackButon urlBack="/videos" />
				<div className=' '>
					<div className='text-center pt-3 pb-6 lg:pt-14 lg:pb-20'>
						<h2 className='font-bold text-3xl lg:text-7xl py-2 text-gray-900'>
							{title}
						</h2>
						<div className='h-1 w-1/3 lg:w-1/5 bg-green-500 mx-auto mt-3 mb-5' />
						<Date
							dateString={dateVideo}
							className='text-green-600 lg:text-xl '
						/>
						<p className='font-light text-gray-700'>{heure} </p>
					</div>
					<div className='h-[30vh] lg:h-[45vh]'>
						<ReactPlayer url={urlVideo} width='100%' height='100%' />
					</div>
					<div className='py-6 lg:py-16'>
						<p className='font-extrabold pb-2 text-2xl lg:pb-8 lg:text-5xl'>
							{auteurDuMessage}
						</p>
						<p className='lg:text-xl'>{description}</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Video;
