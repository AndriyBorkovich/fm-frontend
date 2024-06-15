export interface GetClubByIdWithStatsResponse {
    clubName: string;
    coachName: string;
    stadiumName: string;
    participatedChampionships: string;
    averageSquadAge: number;
    totalPlayedMatches: number;
    wins: number;
    losses: number;
    draws: number;
    scoredGoals: number;
    concededGoals: number;
  }