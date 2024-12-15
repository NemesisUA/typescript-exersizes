// Task
type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
}

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie Johnson",
  status: "active"
}

//type ContactFields = keyof Contact
//const field : ContactFields = "status"

// Solution
export function getValue<T, K extends keyof T>(sourse: T, property: K) {
  return sourse[property]
}

console.log(getValue(primaryContact, "name"))
