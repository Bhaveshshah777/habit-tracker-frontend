import type { Habit } from "../types/Habit";

type HabitCardProps = { habit: Habit; onToggle: (id: string) => void };

export function HabitCard({ habit, onToggle }: HabitCardProps) {
  return (
    <Card>
      <h3>{habit.name}</h3>
      <p>🔥 {habit.currentStreak} day streak</p>
      <button onClick={() => onToggle(habit.id)}>
        {habit.completedToday ? "Undo" : "Mark Done"}
      </button>
    </Card>
  );
}
