import { ApiErrorResponse, PROBLEM_CODE } from "apisauce";

export const invalidTokenOrError = (response: ApiErrorResponse<unknown>) => {
    const invalidTokenError = response.originalError.response?.data.description;
    const error = response.originalError.response?.data.error;
    return {
        invalidTokenError,
        error
    }
}
