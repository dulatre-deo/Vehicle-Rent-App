# Route & Ride — Vehicle Rental Estimator

A responsive browser-based rental cost estimator using the equations from `Vehicle Rent.xlsx`. The app starts with the Trip Distance input and does not include origin/destination search or Google Maps.

## Inputs

- Trip distance: 0 km initially
- Fuel efficiency: 7 km/liter initially
- Gas price: ₱0/liter initially
- Toll charges: ₱0 initially
- Driver compensation: ₱0 initially
- Vehicle rental: ₱0 initially

## Calculations

- Fuel needed (liters) = trip distance (km) ÷ fuel efficiency (km/liter)
- Trip fuel cost (PHP) = fuel needed (liters) × gas price (PHP/liter)
- Total cost (PHP) = trip fuel cost + toll + driver compensation + vehicle rental

Open `index.html` in a browser to use the estimator. The **Reset values** button restores the initial values above.
