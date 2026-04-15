// sample user object
const userProfile = {
  id: 101,
  name: "Jes",
  role: "admin",
  preferences: {
    theme: "dark",
    fontSize: "large"
  },

  // Method UI text
  getDisplayName() {
    return `${this.name} (${this.role})`;
  }
};

// grab output for html
const output = document.getElementById("output");

// dynamic access for form type
const fieldName = "role";

// update preference
userProfile.preferences.theme = "light";

// adding user profile state - online?
userProfile.isOnline = true;

// display data
output.innerHTML = `
  <p>Name: ${userProfile.name}</p>
  <p>Theme: ${userProfile.preferences.theme}</p>
  <p>Role: ${userProfile[fieldName]}</p>
  <p>Display name: ${userProfile.getDisplayName()}</p>
  <p>Online status: ${userProfile.isOnline}</p>
`;
