const app = () => {
    // Define state variables
    let count = 0;
  
    // Define functions to update state
    const incrementCount = () => {
      count++;
      render();
    }
  
    const decrementCount = () => {
      count--;
      render();
    }
  
    // Define function to render UI
    const render = () => {
      const appElement = document.querySelector('#app');
      appElement.innerHTML = `
        <h1>Counter App</h1>
        <p>Current count: ${count}</p>
        <button onclick="incrementCount()">+</button>
        <button onclick="decrementCount()">-</button>
      `;
    }
  
    // Call render function to initially render UI
    render();
  }
  
  // Call app function to start the app
  app();
  