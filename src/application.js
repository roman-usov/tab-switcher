export default () => {
  // BEGIN (write your solution here)
  const navContainers = document.querySelectorAll('.nav');
  
  navContainers.forEach((navContainer) => {
    navContainer.addEventListener('click', (e) => {
      // select the clicked element 
      const newActiveTab = e.target;
      
      // if the clicked element doesn't match a button element, ignore the click
      if (!newActiveTab.matches('[data-bs-toggle]' || newActiveTab.classList.contains('active'))) return;
      
      // get current active tab and current active pane
      const currentActiveTab = navContainer.querySelector('.active');
      const currentActiveContentPaneId = currentActiveTab.dataset.bsTarget.slice(1);
      const currentActivePane = document.getElementById(currentActiveContentPaneId);
      
      // get new active pane
      const newActiveContentPaneId = newActiveTab.dataset.bsTarget.slice(1);
      const newActivePane = document.getElementById(newActiveContentPaneId);
      
      // remove active class from the current active tab and pane
      currentActiveTab.classList.remove('active');
      currentActivePane.classList.remove('active');
      
      // add active class to the new active tab and pane
      newActiveTab.classList.add('active');
      newActivePane.classList.add('active');
    })
  });
  // END
};
