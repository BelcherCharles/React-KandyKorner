const remoteURL = "http://localhost:5002"

export default {
    postCandy(candy) {
        return fetch(`${remoteURL}/Candies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(candy)
        }).then(c => c.json())
    },

    getAllCandies: () => {
        return fetch(`${remoteURL}/Candies`)
            .then(candies => candies.json())
    },

    getSingleCandy: (candyId) => {
        return fetch(`${remoteURL}/Candies/${candyId}`)
            .then(singleCandy => singleCandy.json())
    },

    getAllLocations: () => {
        return fetch(`${remoteURL}/StoreLocations`)
            .then(locations => locations.json())
    },

    getSingleLocation: (locationId) => {
        return fetch(`${remoteURL}/StoreLocations/${locationId}`)
            .then(singleLocation => singleLocation.json())
    },

    postEmployee(newEmployee) {
        return fetch(`${remoteURL}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }).then(e => e.json())
    },

    getAllEmployees: () => {
        return fetch(`${remoteURL}/employees`)
            .then(employees => employees.json())
    },

    getSingleEmployee: (employeeId) => {
        return fetch(`${remoteURL}/employees/${employeeId}`)
            .then(singleEmployee => singleEmployee.json())
    },

    getAllOwners: () => {
        return fetch(`${remoteURL}/owners`)
            .then(owners => owners.json())
    },

    getSingleOwner: (ownerId) => {
        return fetch(`${remoteURL}/owners/${ownerId}`)
            .then(singleOwner => singleOwner.json())
    }
}