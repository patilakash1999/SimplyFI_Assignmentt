const tickets = {
    Kiev: ['Prague'],
    Prague: ['Zurich', 'Kiev'],
    Zurich: ['Amsterdam', 'Prague'],
    Amsterdam: ['Barcelona', 'Berlin'],
    Barcelona: ['Berlin'],
    Berlin: ['Kiev', 'Amsterdam']
  };
  
  // Function to find the route
  function findRoute(startCity, tickets) {
    const visited = new Set();
    const stack = [startCity];
    const route = [];
  
    while (stack.length > 0) {
      const currentCity = stack.pop();
      if (!visited.has(currentCity)) {
        visited.add(currentCity);
        route.push(currentCity);
  
        const neighbors = tickets[currentCity];
        for (const neighbor of neighbors) {
          stack.push(neighbor);
        }
      }
    }
  
    return route;
  }
  
  
  const startCity = 'Kiev';
  const route = findRoute(startCity, tickets);
  console.log('Your son was traveling:',route);
  