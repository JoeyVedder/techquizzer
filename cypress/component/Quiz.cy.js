import React from 'react';
import { mount } from 'cypress/react'; 
import Quiz from '../../client/components/Quiz'; 

describe('Quiz Component', () => {
  it('renders the Quiz component with a question', () => {
    
    mount(<Quiz />);
    cy.get('.question').should('exist'); 
  });

  it('allows selecting an answer', () => {
    mount(<Quiz />);
    cy.get('.answer-option').first().click(); 
    cy.get('.answer-option').first().should('have.class', 'selected');
  });

  it('navigates to the next question', () => {
    mount(<Quiz />);
    cy.get('.next-btn').click(); 
    cy.get('.question').should('exist'); 
  });
});
