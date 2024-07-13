import React from 'react'
import { useEffect } from 'react'
import { Card } from '../Card'
import { CardTitle } from '../CardTitle'
import { getProjects } from '../../service'
import toast from 'react-hot-toast'

export const Proyectos = () => {
    const [projects, setProjects] = React.useState([])

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getProjects();
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.data.json();
                console.log(data, "data");
                setProjects(data);
            } catch (error) {
                console.error(error);
                toast.error('Failed to fetch projects');
            }
        };

        fetchProjects();
        console.log(projects);
    }, []);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center items-center">
            <div className="container grid gap-8 px-4 md:px-6 flex justify-center">
                {projects.map((project) => (
                    <Card
                        key={project._id} // Asegúrate de tener un identificador único para cada proyecto
                        title={project.titulo} // Ajusta según la estructura de tu objeto de proyecto
                        image={project.imagePrincipal} // Ajusta según la estructura de tu objeto de proyecto
                        technologies={['React', 'Lorem ipsum', 'Node.js']} // Ejemplo de tecnologías (reemplaza con datos reales)
                        description={project.descripcion} // Ajusta según la estructura de tu objeto de proyecto
                        githubLink={project.link} // Ajusta según la estructura de tu objeto de proyecto
                    />
                ))}
            </div>
        </section>
    )
}
