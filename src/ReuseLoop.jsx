import User1 from './User1'
function ReuseLoop() {

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
            email:"farhan@gmail.com"
        },

        {
            name:"Rancho",
            id: "4",
            age:34,
            email:"rancho@gmail.com"
        }
            ]

return (
    <div>
        {
        Userdata.map((user)=>(
            <div>
                <User1 loop={user}/>
            </div>
        ))}
    </div>

)
}

export default ReuseLoop