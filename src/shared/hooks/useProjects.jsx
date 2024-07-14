import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getProjects as getProjectsRequest } from '../../service';

export const useProjects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState([])

    const getProjects = async () => {
        setLoading(true)
        const projectsData = await getProjectsRequest();

        if (projectsData.error) {
            setLoading(false)
            return toast.error(
                projectsData.error,
                projectsData.e?.response?.data || "Error al obtener los proyectos"
            );
        }

        setProjects(projectsData.data)
        setLoading(false)
        return projectsData.data
    }

    useEffect(() => {
        getProjects();
    }, [])

    return {
        projects,
        loading
    }
}