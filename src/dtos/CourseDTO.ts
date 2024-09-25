import z from 'zod'

export interface CreateCourseInputDTO {
    id: string,
    name: string,
    lessons: number
}

export interface CreateCourseOutputDTO {
    message: string,
    course: {
        id: string,
        name: string,
        lessons: number,
        createdAt: string
    }
}

export interface EditCourseInputDTO {
    idToEdit: string,
    id: string,
    name: string,
    lessons: number
}

export interface EditCourseOutputDTO {
    idToEdit: string,
    id: string,
    name: string,
    lessons: number
}

export const CreateCourseSchema = z.object({
    id: z.string().min(2),
    name: z.string().min(3),
    lessons: z.number().positive()
}).transform(data => data as CreateCourseInputDTO)

export const EditCourseSchema = z.object({
    idToEdit: z.string().min(2),
    id: z.string().min(2),
    name: z.string().min(3),
    lessons: z.number().positive()
}).transform(data => data as EditCourseInputDTO)