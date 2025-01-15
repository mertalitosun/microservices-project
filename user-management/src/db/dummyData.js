
const Users = require("../models/users");
const Roles = require("../models/roles");
const bcrypt = require("bcryptjs");

const dummyData = async () => {
    const roleCount = await Roles.count();
    if (roleCount === 0) {
        const roles = await Roles.bulkCreate([
            { name: "Admin" },
            { name: "Müşteri" },
            { name: "Satış Ekibi" },
        ]);
        const usersCount = await Users.count();
        if (usersCount === 0) {
            const users = await Users.bulkCreate([
                {name: "Mertali", surname: "Tosun", email: "mertali2635@icloud.com", password: await bcrypt.hash("123456", 10)},
            ]);
            await users[0].addRoles([roles[0]]);
        }
    }
};

module.exports = dummyData;