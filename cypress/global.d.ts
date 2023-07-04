/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getBySel(dataTestAttribute: string, args?: any): Chainable<JQuery<HTMLElement>>;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getBySelLike(dataTestPrefixAttribute: string, args?: any): Chainable<JQuery<HTMLElement>>;
    }
}
