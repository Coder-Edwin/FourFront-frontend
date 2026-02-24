/**
 * app.js – Fourfront Management Investment Club
 * Author  : Edwin [Your Last Name]
 * Project : Fourfront Management Frontend Assessment
 *
 * Responsibilities:
 *  1. Toggle membership card descriptions open / closed
 *  2. Keyboard accessibility for membership cards (Enter / Space)
 *  3. Open the Foundation card by default on page load
 */

'use strict';

/* ----------------------------------------------------------------
   SECTION 1 – MEMBERSHIP CARD TOGGLE
   Clicking (or pressing Enter/Space on) a membership card
   shows or hides its description panel.
---------------------------------------------------------------- */

/**
 * Toggle a membership card's open/closed state.
 *
 * @param {HTMLElement} card - The .membership-card element to toggle
 */
function toggleMembership(card) {
  if (!card) return;

  const isOpen = card.classList.contains('open');

  // Toggle the CSS class that drives the CSS transition
  card.classList.toggle('open');

  // Keep aria-expanded in sync for screen readers
  card.setAttribute('aria-expanded', String(!isOpen));
}

/**
 * Attach click and keyboard listeners to all membership cards.
 * Called once the DOM is ready.
 */
function initMembershipCards() {
  const cards = document.querySelectorAll('.membership-card');

  cards.forEach(function (card) {

    // ── Mouse / tap ──────────────────────────────────────────────
    card.addEventListener('click', function () {
      toggleMembership(card);
    });

    // ── Keyboard (Enter or Space) ────────────────────────────────
    // Makes the card accessible to keyboard-only users
    card.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // prevent page scroll on Space
        toggleMembership(card);
      }
    });

  });
}


/* ----------------------------------------------------------------
   SECTION 2 – PAGE INITIALISATION
   Runs after the HTML has fully loaded.
---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {

  // Set up all membership card interactions
  initMembershipCards();

  // Open the Foundation card by default so the user
  // immediately sees there is expandable content
  var foundationCard = document.getElementById('foundationCard');
  if (foundationCard) {
    foundationCard.classList.add('open');
    foundationCard.setAttribute('aria-expanded', 'true');
  }

});
