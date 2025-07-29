function Loop() {

    const Userdata=[
        {
            name:"Tushar",
            id: "1",
            age:19,
            email:"tushar@gmail.com"
        },

        {
            name:"Raju",
            id: "2",
            age:29,
            email:"raju@gmail.com"
        },

        {
            name:"Farhan",
            id: "3",
            age:23,
            email:"farhan@gmail.com"}
        // },

        // {
        //     name:"Rancho",
        //     id: "4",
        //     age:34,
        //     email:"rancho@gmail.com"
        // }
            ]

return (
    <div>

        <table border={1}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Email</td>

                </tr>
                {
                Userdata.map((user=>(
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>

                </tr>
                )))
            }
            </thead>
        </table>
    </div>
)
}

export default Loop