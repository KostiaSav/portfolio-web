import './Projects.css';
import Project from '@/components/Project/Project';
import projects from '@/mock/projects.json';

const Projects = () => {
	return (
		<section className='projects pt-12 md:pt-24'>
			<div className='container'>
				<div
					className='projects__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8'
					data-aos='fade-up'
				>
					{projects.map((project) => (
						<Project
							key={project.id}
							title={project.title}
							description={project.description}
							image={project.image}
							href={project.href}
							badgesList={project.badgesList}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
