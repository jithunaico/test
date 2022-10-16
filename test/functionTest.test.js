
const { sum, deleteUserById, findUserById } = require("../utils/helpers")


let userdata = [];

describe("Testing imported functions", () => {
    let users = [
        {
            name: "Clem",
            age: 12,
            id: 1,
        },
        {
            name: "Justin",
            age: 15,
            id: 2,
        },
        {
            name: "Sarah",
            age: 84,
            id: 3,
        },

    ]
    test("Sum function should add 2 numbers", () => {
        expect(sum(5, 3)).toBe(8)
    })

    test("delete by id function should delete a user by their id", () => {


        expect(deleteUserById(users, 3)).toEqual([
            {
                name: "Clem",
                age: 12,
                id: 1,
            },
            {
                name: "Justin",
                age: 15,
                id: 2,
            },
        ])

        expect(deleteUserById(users, 3).length).toBe(2)


    })
    // done by Test Driven Development
    test("Finds a user by ID from a list of users", () => {

        expect(findUserById(users, 2)).toEqual({
            name: "Justin",
            age: 15,
            id: 2,
        })

        expect(findUserById(users, 10)).toBeUndefined()




    })
})