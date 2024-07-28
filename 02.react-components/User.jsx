import React from 'react'
function User(props) {
    // let name = "Ducat India";
    // const emails = ["student1.@google.com", "student2.@google.com", "student3.@google.com", "student4.@google.com"];
    const students = [{
        id: 1,
        name: "Student 1",
        email: "student1@google.com"
    },
    {
        id: 2,
        name: "Student 2",
        email: "student2@google.com"
    },
    {
        id: 3,
        name: "Student 3",
        email: "student3@google.com"
    },
    {
        id: 4,
        name: "Student 4",
        email: "student4@google.com"
    },
    {
        id: 5,
        name: "Student 5",
        email: "student5@google.com"
    },
    ]
    // let list = emails.map((email) => <h2>{email}</h2>)
    // Warning: Each child in a list should have a unique "key" prop.

    // let list = emails.map((email) => <h2 key={email} >{email}</h2>)
    // Warning: Encountered two children with the same key, `student4.@google.com`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
    let list = students.map((data) => <div key={data.id}>
        <h1>{data.name}</h1>
        <h2>{data.email}</h2>
        <hr />
    </div>)
    return (
        <div>
            {list}
        </div>
    )
}
export default User

