// FORK this starter file and save it to your own Repl.it account.

const input = require('readline-sync');
const userInputCount = input.question("How many astronauts are there?");

// Declare and initialize the 12 variables here:
const day = "Monday 2019-03-18";
const time = "10:05:34 AM";
const astronautCount	= '7';
const astronautStatus	 = 'ready';
const averageAstronautMassKg = '80.7';
const crewMassKg = 'astronautCount * averageAstronautMassKg';
const fuelMassKg = '760000';
const shuttleMassKg = '74842.31';
const totalMassKg = 'crewMassKg + fuelMassKg + shuttleMassKg';
const fuelTempCelsius = -'225';
const fuelLevel = '100%';
const weatherStatus	= 'clear';



// Write code to generate the LC04 report here:
 ` -------------------------------------
 LC04 - LAUNCH CHECKLIST
-------------------------------------
Date: (day)
Time: (time)

-------------------------------------
> ASTRONAUT INFO
-------------------------------------
* count: (astronautCount)
* status: (weatherStatus)

-------------------------------------
> FUEL DATA
-------------------------------------
* Fuel temp celsius: (fuelTempCelsius)
* Fuel level: (fuelLevel)

-------------------------------------
> MASS DATA
-------------------------------------
* Crew mass: (crewMassKg) kg
* Fuel mass: (fuelMassKg )kg
* Shuttle mass: (shuttleMassKg) kg
* Total mass: (totalMassKg) kg

-------------------------------------
> FLIGHT PLAN
-------------------------------------
* weather: (weatherStatus)

-------------------------------------
> OVERALL STATUS
-------------------------------------
* Clear for takeoff: YES ``




// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.