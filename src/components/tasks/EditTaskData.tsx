import { getTaskById } from "@/api/taskAPI";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useLocation, useParams } from "react-router-dom"
import LoadingComponents from "../LoadingComponents";
import EditTaskModal from "./EditTaskModal";
import { TaskFormData } from "@/types/index";
import { useForm } from "react-hook-form";

export default function EditTaskData() {


    // Params //
    const params = useParams();
    const projectId = +params.projectId!;


    // Query Paranms //
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const taskId = +queryParams.get('editTask')!;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['task', taskId],
        queryFn: () => getTaskById({ projectId, taskId }),
        enabled: !!taskId,
        retry: false
    });

    if (isError) return <Navigate to='/404' />
    if (isLoading) return <LoadingComponents />
    if (data) return <EditTaskModal data={data} projectId={projectId} taskId={taskId} />
}
