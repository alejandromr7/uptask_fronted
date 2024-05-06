import api from "@/lib/axios";
import { DashboardProjectSchema, Project, ProjectFormData } from "@/types/index";


export async function createProject(formData: ProjectFormData) {

    try {
        const { data } = await api.post<string>('/projects', formData);
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

export async function getProjectById(id: Project['id']) {

    try {
        const { data } = await api(`/projects/${id}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}

interface ProjectAPIType {
    formData: ProjectFormData,
    projectId: Project['id']
}

export async function updateProject({ formData, projectId }: ProjectAPIType) {

    try {
        const { data } = await api.put<string>(`/projects/${projectId}`, formData);
        return data;
    } catch (error) {
        console.log(error)
    }
}


export async function deleteProject(id: Project['id']) {
    try {
        const { data } = await api.delete<string>(`/projects/${id}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}
