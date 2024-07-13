import axios from "axios";

const api = axios.create({
    baseURL: 'https://node-js-portafolio.vercel.app/portafolio/v1',
    timeout: 5000
});

export const getProjects = async () => {
    try {
        return await api.get('/projects/projects')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getSkills = async () => {
    try {
        return await api.get('/skills/skills')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}