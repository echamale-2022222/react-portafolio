import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getSkills as getSkillsRequest } from '../../service';

export const useSkills = () => {
    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState([])

    const getSkills = async () => {
        setLoading(true)
        const skillsData = await getSkillsRequest();

        if (skillsData.error) {
            setLoading(false)
            return toast.error(
                skillsData.error,
                skillsData.e?.response?.data || "Error al obtener las skills"
            );
        }

        setSkills(skillsData.data)
        setLoading(false)
        return skillsData.data
    }

    useEffect(() => {
        getSkills();
    }, [])

    return {
        skills,
        loading
    }
}