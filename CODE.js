// code.js
// All JavaScript is here (no JS functions written inside the HTML file).

// Store player info from the form.
let playerName = "";      // stores the player name
let luckyPhrase = "";     // stores the lucky phrase
let playerReady = false;  // true only after valid submit

// ------------------------------------------------------------
// Function: savePlayerInfo
// What it does:
// - Reads name + lucky phrase from the form
// - Validates the name (required)
// - Prints validation + palindrome messages to the page (NO alerts)
// - Calls a parameter function (required by assignment)
// ------------------------------------------------------------
function savePlayerInfo() {
  // Get the output paragraph so we can print messages on the page.
  const out = document.getElementById("gameOutput");

  // Read and trim the name input.
  playerName = document.getElementById("playerName").value.trim();

  // Read and trim the lucky phrase input.
  luckyPhrase = document.getElementById("luckyPhrase").value.trim();

  // Validate: name is required.
  if (playerName.length === 0) {
    // MUST use textContent or innerHTML for validation (no alerts).
    out.textContent = "Name is required. Type your name and click Submit.";
    playerReady = false; // not ready
    return false; // stop form from reloading page
  }

  // If name is valid, allow the game.
  playerReady = true;

  // Print that the player was saved.
  out.textContent = "Player saved: " + playerName;

  // Palindrome message MUST be shown using textContent/innerHTML.
  // Parameter function required by assignment.
  showPalindromeMessage(luckyPhrase);

  // Prevent page reload.
  return false;
}

// ------------------------------------------------------------
// Function: showPalindromeMessage (PARAMETER FUNCTION)
// What it does:
// - Takes a phrase parameter
// - Checks if it is a palindrome
// - Prints the palindrome message to the page using innerHTML/textContent
// ------------------------------------------------------------
function showPalindromeMessage(phrase) {
  // Get the output paragraph.
  const out = document.getElementById("gameOutput");

  // If no phrase entered, still print a message.
  if (phrase.length === 0) {
    out.innerHTML += "<br>Lucky phrase: (none entered)";
    return;
  }

  // Check palindrome result.
  if (isPalindrome(phrase) === true) {
    out.innerHTML += "<br>Palindrome: YES (" + phrase + ")";
  } else {
    out.innerHTML += "<br>Palindrome: NO (" + phrase + ")";
  }
}

// ------------------------------------------------------------
// Function: playDiceGame
// What it does:
// - Generates 2 random numbers between 1 and 6
// - Adds them (math)
// - Uses conditionals (if/else if/else) for Craps rules
// - Prints ALL results to the page using textContent (no alerts)
// Rules:
// If sum = 7 or 11 -> CRAPS – you lose!
// Else if doubles and even -> You won!
// Else -> You pushed!
// ------------------------------------------------------------
function playDiceGame() {
  // Get the output paragraph.
  const out = document.getElementById("gameOutput");

  // Make sure user submitted the form first.
  if (playerReady === false) {
    out.textContent = "Submit your name first using the form, then roll the dice.";
    return;
  }

  // Generate die1 from 1 to 6.
  let die1 = Math.floor(Math.random() * 6) + 1;

  // Generate die2 from 1 to 6.
  let die2 = Math.floor(Math.random() * 6) + 1;

  // Calculate sum.
  let sum = die1 + die2;

  // Build output message.
  let msg = "";
  msg += "Player: " + playerName + "\n";
  msg += "Die 1: " + die1 + "\n";
  msg += "Die 2: " + die2 + "\n";
  msg += "Sum: " + sum + "\n\n";

  // Craps lose condition.
  if (sum === 7 || sum === 11) {
    msg += "CRAPS – you lose!";
  }
  // Win condition: doubles AND even.
  else if (die1 === die2 && die1 % 2 === 0) {
    msg += "You won!";
  }
  // Otherwise push.
  else {
    msg += "You pushed!";
  }

  // Print result to the page using textContent.
  out.textContent = msg;
}

// ------------------------------------------------------------
// Function: isPalindrome
// What it does:
// - Cleans the text (lowercase + remove spaces/punctuation)
// - Reverses it
// - Returns true if it matches
// ------------------------------------------------------------
function isPalindrome(text) {
  // Convert to lowercase.
  let lower = text.toLowerCase();

  // Remove non letters/numbers.
  let cleaned = lower.replace(/[^a-z0-9]/g, "");

  // Reverse cleaned text.
  let reversed = cleaned.split("").reverse().join("");

  // Return true if it matches and isn't empty.
  return cleaned.length > 0 && cleaned === reversed;
}