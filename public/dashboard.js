function navigate(page) {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.sidebar ul li a');
  
    // Remove the 'active' class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
  
    // Add the 'active' class to the clicked link
    event.target.classList.add('active');
  
    // Update the content based on the selected page
    const content = document.getElementById('content');
    switch (page) {
      case 'home':
        content.innerHTML = `
          <h2>Home</h2>
          <p>Welcome to your dashboard. Here you can access various features and information.</p>
        `;
        break;
      case 'profile':
        content.innerHTML = `
          <h2>Profile</h2>
          <p>This is your profile page. You can view and update your profile information here.</p>
        `;
        break;
      case 'messages':
        content.innerHTML = `
          <h2>Messages</h2>
          <p>Check your messages here.</p>
        `;
        break;
      case 'settings':
        content.innerHTML = `
          <h2>Settings</h2>
          <p>Adjust your dashboard settings as needed.</p>
        `;
        break;
      case 'logout':
        content.innerHTML = `
          <h2>Logout</h2>
          <p>Are you sure you want to logout?</p>
        `;
        break;
    }
  }
  