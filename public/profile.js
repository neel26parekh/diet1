document.addEventListener("DOMContentLoaded", function() {
    // Function to update the "Last Seen" time
    function updateLastSeen() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      var formattedTime = hours + ":" + minutes + ":" + seconds;
      document.getElementById("last-seen-time").textContent = formattedTime;
    }
  
    // Update "Last Seen" every second
    setInterval(updateLastSeen, 1000);
  
    // Initial update of "Last Seen"
    updateLastSeen();
  });
  