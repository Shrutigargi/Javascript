import React from "react";
import UserDetails  from "./UserDetails";

const AllUserList = () => {
    let allUsers = [
        {name: "John", email: "john@email.com",phoneNumber: "98765432"},
        {name: "Mohan",email: "mohann@email.com", phoneNumber: "98765432"},
        {name: "Karan", email: "karan@email.com", phoneNumber: "98765432"},
    ];

    return (
        <div>
            {allUsers.map((user, index) => (
                <UserDetails key={index} user={user} />
            ))}
                {/* <UserDetails user={allUsers[0]} />
            <UserDetails user={allUsers[1]} />
            <UserDetails user={allUsers[2]} /> */}
        </div>
    );
};
export default AllUserList;