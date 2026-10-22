export interface Fault {
  id: string
  label: string
  causes: string[]
  action: string
  service: string
  urgent?: string
}

export const FAULTS: Fault[] = [
  { id: "wont-start", label: "It will not start", service: "emergency-generator-repairs",
    causes: ["Flat or dead battery", "No fuel, or old fuel that has gone off", "Blocked fuel filter or carburettor", "Faulty starter or choke", "Low oil shutdown tripping"],
    action: "We test the battery, fuel and starting system, find the exact fault and quote before we repair." },
  { id: "cuts-out", label: "It starts, then cuts out", service: "emergency-generator-repairs",
    causes: ["Blocked fuel or air filter", "Dirty carburettor or fuel pump fault", "Overheating", "Low oil sensor", "Governor problems"],
    action: "We check the fuel and air supply, the cooling and the safety sensors, then fix what is causing the shutdown." },
  { id: "no-power", label: "It runs but gives no power", service: "changeover-switches-and-electrical-repairs",
    causes: ["Alternator or AVR fault", "Tripped breaker or loose connection", "Worn brushes or failed capacitor", "Damaged output wiring"],
    action: "We test the alternator output, the AVR and the wiring with proper instruments and repair or replace the faulty part." },
  { id: "no-switchover", label: "It will not switch over when the power goes", service: "changeover-switches-and-electrical-repairs",
    causes: ["Changeover switch or contactor fault", "Control wiring problem", "Distribution board fault", "Automatic transfer switch settings"],
    action: "We test the changeover and control circuit, repair or replace it and prove it works by simulating a power cut." },
  { id: "smoke", label: "Smoke or a burning smell", service: "diesel-generator-repairs-and-engine-overhauls",
    urgent: "Switch it off and keep clear until it has been checked.",
    causes: ["Worn piston rings or valve seals", "Injector or fuel mixture problems", "Overloaded generator", "Oil leaking onto a hot surface", "Electrical overheating"],
    action: "We inspect the engine and electrics, find what is burning and give you a clear quote for the repair." },
  { id: "noise", label: "Loud knocking or vibration", service: "diesel-generator-repairs-and-engine-overhauls",
    urgent: "Stop running it if you hear heavy knocking.",
    causes: ["Loose or worn mountings", "Valve clearance out of adjustment", "Worn bearings", "Fuel injection faults", "Internal engine wear"],
    action: "We find the source of the noise before it becomes an expensive failure, and repair or overhaul as needed." },
  { id: "leaks", label: "Leaking fuel, oil or coolant", service: "generator-servicing-and-maintenance",
    urgent: "Switch it off. A fuel leak is a fire risk.",
    causes: ["Perished hoses and pipes", "Failed gaskets or seals", "Cracked or damaged tank", "Loose fittings", "Cooling system damage"],
    action: "We trace the leak, replace the failed part and check the whole system so it stays dry." },
  { id: "service-due", label: "It works, but it is due a service", service: "generator-servicing-and-maintenance",
    causes: ["Oil and filters due", "Battery and starter not tested", "Coolant and hoses not checked", "No load test done", "Changeover not tested"],
    action: "We service the generator, load test it and check the changeover so it is ready before the next outage." },
]
