export interface AuthResponseDto {
    isAuthSuccessful: boolean;
    token: string;
    errorMessage: string;
  }