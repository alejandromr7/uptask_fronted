import { getProjectById } from '@/api/projectAPI';
import LoadingComponents from '@/components/LoadingComponents';
import EditProjectForm from '@/components/project/EditProjectForm';
import { useQuery } from '@tanstack/react-query';
import { Navigate, useParams } from 'react-router-dom'

export default function EditProjectView() {

    const params = useParams();
    const projectId = +params.projectId!;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['getProject'],
        queryFn: () => getProjectById(projectId),
        retry: false
    });

    if (isLoading) return <LoadingComponents />
    if (isError) return <Navigate to='/404' />
    if (data) return <EditProjectForm data={data} projectId={projectId} />
}
