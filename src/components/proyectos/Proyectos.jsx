import { useState } from 'react'
import React from 'react';
import { Card } from '../Card'
import { useProjects } from '../../shared/hooks'

const Proyectos = () => {
    const { projects, loading } = useProjects();

    console.log("projects", projects)

    if (loading) {
        return <p>Cargando proyectos...</p>;
    }

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center items-center">
            <div className="container grid gap-8 px-4 md:px-6 flex justify-center">
            <h2 className="text-3xl font-bold mb-8 sm:text-2xl text-white">My projects</h2>
                {projects.map((project) => (
                    <Card
                        key={project._id}
                        title={project.titulo}
                        image={project.imagenPrincipal}
                        technologies={project.tecnologiasUtilizadas}
                        description={project.descripcion}
                        githubLink={project.link}
                        className={'bg-slate-900 text-white'}
                    />
                ))}
            </div>
        </section>
    );
};

export default React.memo(Proyectos);