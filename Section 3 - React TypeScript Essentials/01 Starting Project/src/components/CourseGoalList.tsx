import CourseGoal from "./CourseGoal";
import { Goal } from "./model/Goal";

type CourseGoalListProps = {
    goals: Goal[]
    onDeleteGoal: (id: number) => void
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
    return (
        <ul>
            {goals.map(goal => <li>
                <CourseGoal item={goal} onDelete={onDeleteGoal} />
            </li>)}
        </ul>
    )
}