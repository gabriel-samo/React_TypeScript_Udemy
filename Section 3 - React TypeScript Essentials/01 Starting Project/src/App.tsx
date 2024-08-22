import { ReactNode, useState } from 'react';
import { Goal } from './components/model/Goal';

import goalsImage from './assets/goals.jpg'
import CourseGoalList from './components/CourseGoalList';
import Header from './components/Header';
import NewGoal from './components/NewGoal';
import InfoBox from './components/InfoBox';

export default function App() {

  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal(newGoal: Goal) {
    setGoals((prevState) => {
      return [...prevState, newGoal];
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevState) => {
      return prevState.filter((goal) => goal.id !== id)
    })
  }

  let infoBox: ReactNode;

  if (goals.length === 0) {
    infoBox = <InfoBox mode='hint'>You have no course goals yet. Start adding some!</InfoBox>
  }

  if (goals.length >= 4) {
    infoBox = <InfoBox mode='warning' severity='medium'>Your'e collecting too much goals. Don't put too much on your plate.</InfoBox>
  }

  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'Goals Image' }} title='Your Goals' />
      <NewGoal onAddGoal={handleAddGoal} />
      {infoBox}
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
