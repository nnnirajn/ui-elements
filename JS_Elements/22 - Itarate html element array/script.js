// Simple JSON array with items
const items = [
  { name: "Item 1", color: "red" },
  { name: "Item 2", color: "blue" },
  { name: "Item 3", color: "green" },
  { name: "Item 4", color: "purple" },
  { name: "Item 5", color: "orange" }
];

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the list element
  const itemList = document.getElementById("itemList");
  
  // Iterate through the JSON array
  items.forEach(item => {
    // Create a new list item
    const li = document.createElement("li");
    
    // Add the item class
    li.className = "item";
    
    // Set the text content
    li.textContent = item.name;
    
    // Set the text color
    li.style.color = item.color;
    
    // Add click event listener to toggle active class
    li.addEventListener('click', function() {
      // Remove active class from all items
      document.querySelectorAll('#itemList li').forEach(el => {
        el.classList.remove('active');
      });
      
      // Add active class to the clicked item
      this.classList.add('active');
    });
    
    // Append the list item to the list
    itemList.appendChild(li);
  });
});
