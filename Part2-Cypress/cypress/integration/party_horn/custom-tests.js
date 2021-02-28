describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
      .then(function ($el) {
        expect($el).to.have.value(75);
      })
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(function ($el) {
      expect($el).to.have.value(33);
    })
  });

  it('Volume of audio changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', .33);
    });
  });

  it('Image and Sound Sources change when selecting Party Horn', () => {
    cy.get('#radio-party-horn').check().trigger('input');
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image changes when increasing volume', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
    cy.get('#volume-slider').invoke('val', 1).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-slider').invoke('val', 34).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-slider').invoke('val', 66).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-slider').invoke('val', 67).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
    cy.get('#volume-slider').invoke('val', 100).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Honk button disabled when input is empty or non-number', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Error shown when textbox input is out of range', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('input:invalid').should('have.length', 1);
    cy.get('#volume-number').clear().type('-1');
    cy.get('input:invalid').should('have.length', 1);
  })
});
