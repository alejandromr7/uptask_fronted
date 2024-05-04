import api from "@/lib/axios";
import { DashboardProjectSchema, ProjectFormData } from "@/types/index";


export async function createProject(formData: ProjectFormData) {

    try {
        const { data } = await api.post('/projects', formData);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function getProjects() {

    try {
        const { data } = await api('/projects');
        const response = DashboardProjectSchema.safeParse(data);
        if (response.success) {
            return response.data;
        }
    } catch (error) {
        console.log(error)
    }
}