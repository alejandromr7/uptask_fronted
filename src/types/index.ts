import { number, z } from "zod";

// ** Projects ** //

export const ProjectSchema = z.object({
    id: z.number(),
    projectName: z.string(),
    clientName: z.string(),
    description: z.string()
})

export type Project = z.infer<typeof ProjectSchema>;

export type ProjectFormData = Pick<Project, 'projectName' | 'clientName' | 'description'>;

