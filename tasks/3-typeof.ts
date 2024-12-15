type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
}

function toContact(nameOrContact: string | Contact): Contact {
  if (typeof nameOrContact === "object") {
    return {
      id: nameOrContact.id,
      name: nameOrContact.name,
      status: nameOrContact.status
    }
  }
  else {
    return {
      id: 0,
      name: nameOrContact,
      status: "active"
    }
  }
}

// Function takes an object with properties "min" and "max"
const myType = { min: 0, max: 200 }

function getScale(source: typeof myType) {
  return source.max - source.min
}

console.log(getScale({ min: 0, max: 100 }))