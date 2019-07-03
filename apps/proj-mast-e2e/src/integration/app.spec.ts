import { getGreeting } from '../support/app.po';

describe('proj-mast', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to proj-mast!');
  });
});
