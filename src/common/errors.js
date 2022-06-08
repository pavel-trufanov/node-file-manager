export const invalidInputError = (message) => {
    throw Error(`Invalid input: ${message}`);
}

export const operationFailedError = (message) => {
    throw Error(`Operation failed: ${message}`);
}
