class NotAuthorizedError extends Error {
    constructor() {
        super("Пользователь не авторизован");
        this.name = 'NotAuthorizedError';
    }
}
export { NotAuthorizedError };
//# sourceMappingURL=exceptions.js.map