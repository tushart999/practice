function CollegeNames() {
  const College = [
    {
      name: "BMU",
      website: "bmu.edu.in",
      location: "gurgaon",
      student: [
        {
          name: "Raju",
          age: 28,
          phone: 990,
        },
      ],
    },
    {
      name: "SRC",
      website: "src.edu.in",
      location: "delhi",
      student: [
        {
          name: "Gukesh",
          age: 28,
          phone: 990,
        },
      ],
    },
    {
      name: "BMR",
      website: "bmr.edu.in",
      location: "BMR",
      student: [
        {
          name: "Shyaam",
          age: 28,
          phone: 990,
        },
      ],
    },
  ];

  return (
    <div>
      <ul>
        {College.map((college, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "beige",
              padding: "10px",
              margin: "10px",
              borderBottom: "5px solid black",
              color: "black",
            }}
          >
            <h1>Name: {college.name}</h1>
            <h1>Website: {college.website}</h1>
            <h1>Location: {college.location}</h1>

            <ul>
              {college.student.map((student, idx) => (
                <li key={idx}>
                  <h2>Student Name: {student.name}</h2>
                  <h2>Age: {student.age}</h2>
                  <h2>Phone: {student.phone}</h2>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollegeNames;
