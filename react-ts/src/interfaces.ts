// Это интерфейс для Todo, поскольку мы его используем в разных файла, то просто выносим этот интерфейс в отдельный файл и потом импортируем куда нужно
// ITodo - I в начале помогает понять, что это Interface

export interface ITodo {
    title: string,
    id: number,
    completed: boolean
}