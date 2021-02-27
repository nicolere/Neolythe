interface ProjectData {
    icon: string;
    title: string;
    total: number;
    state: boolean; //State true = positive evolution, State false = negative evolution
    evolution: number;
    delay: number;
}

export const PROJECT_DATA: ProjectData[] = [
    {
        icon: 'leaderboard',
        title: 'Total Rates',
        total: 12,
        state: true,
        evolution: 30,
        delay: 1000
    },
    {
        icon: 'code',
        title: 'Features',
        total: 5,
        state: true,
        evolution: 50,
        delay: 1300
    },
    {
        icon: 'sentiment_satisfied_alt',
        title: 'Satisfied Users',
        total: 267,
        state: true,
        evolution: 24,
        delay: 1100
    }
]