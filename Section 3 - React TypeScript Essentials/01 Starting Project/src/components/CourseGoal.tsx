import { Goal } from "./model/Goal"

type CourseGoalProps = {
    item: Goal
    onDelete: (id: number) => void
}

export default function CourseGoal({ item, onDelete }: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </article>
    )
}