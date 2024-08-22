import { FormEvent, useRef } from "react";
import { Goal } from "./model/Goal";

type NewGoalProps = {
    onAddGoal: (goal: Goal) => void;
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
    const titleRef = useRef<HTMLInputElement>(null)
    const descRef = useRef<HTMLInputElement>(null)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newId = Math.random();
        const newTitle = titleRef.current!.value;
        const newDesc = descRef.current!.value;

        const newGoal = new Goal(newId, newTitle, newDesc);
        event.currentTarget.reset();

        onAddGoal(newGoal);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="title">Goal Title</label>
                <input type="text" id="title" ref={titleRef} />
            </p>
            <p>
                <label htmlFor="description">Goal Description</label>
                <input type="text" id="description" ref={descRef} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
}