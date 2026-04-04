const API_URL = "https://jsonplaceholder.typicode.com/users"; // Public dummy API: list of users as JSON

const loadBtn = document.getElementById("loadBtn"); // Button that triggers the fetch
const statusEl = document.getElementById("status"); // Shows loading, success, or error
const listEl = document.getElementById("list"); // Container for each user row

loadBtn.addEventListener("click", async () => { // Click handler; async so we can use await
  listEl.innerHTML = ""; // Clear previous results
  statusEl.textContent = "Loading…"; // User feedback while waiting
  loadBtn.disabled = true; // Avoid overlapping requests

  try { // Errors from fetch/JSON go to catch
    const res = await fetch(API_URL); // GET request; waits for response
    if (!res.ok) throw new Error(`HTTP ${res.status}`); // Fail on 4xx/5xx

    const users = await res.json(); // Parse JSON body into an array

    statusEl.textContent = `Loaded ${users.length} users.`; // Summary after parse

    for (const user of users) { // One list item per user
      const li = document.createElement("li"); // New <li>
      li.textContent = `${user.name} — ${user.email} (${user.address?.city ?? "—"})`; // Optional city if address exists
      listEl.appendChild(li); // Add to the page
    }
  } catch (err) { // Network error, bad JSON, or thrown above
    statusEl.textContent = `Error: ${err.message}`;
  } finally { // Runs success or failure
    loadBtn.disabled = false; // Allow another click
  }
});
