export interface Habit {
    id: string;
    name: string;
    description?: string;
    frequency: 'Daily' | 'Weekly';
    currentStreak: number;
    completedToday: boolean;
    createdAt: string;
}