export const Teams = () => {
  const IPLTeams = [
    {
      team: "CSK",
      fullForm: "Chennai Super Kings",
      captain: "Sanju Samson",
      owner: "India Cements",
    },
    {
      team: "MI",
      fullForm: "Mumbai Indians",
      captain: "Rohit Sharma",
      owner: "Reliance Industries (Mukesh Ambani)",
    },
    {
      team: "RCB",
      fullForm: "Royal Challengers Bengaluru",
      captain: "Rajat Patidar",
      owner: "United Spirits (Diageo)",
    },
    {
      team: "RR",
      fullForm: "Rajasthan Royals",
      captain: "Ravindra Jadeja",
      owner: "Emerging Media IPL Ltd",
    },
    {
      team: "KKR",
      fullForm: "Kolkata Knight Riders",
      captain: "Shreyas Iyer",
      owner: "Red Chillies Entertainment (Shah Rukh Khan, Juhi Chawla)",
    },
    {
      team: "DC",
      fullForm: "Delhi Capitals",
      captain: "Rishabh Pant",
      owner: "JSW Group & GMR Group",
    },
    {
      team: "SRH",
      fullForm: "Sunrisers Hyderabad",
      captain: "Pat Cummins",
      owner: "Sun TV Network (Kalanithi Maran)",
    },
    {
      team: "PBKS",
      fullForm: "Punjab Kings",
      captain: "Shikhar Dhawan",
      owner: "Ness Wadia, Preity Zinta, Mohit Burman, Karan Paul",
    },
    {
      team: "GT",
      fullForm: "Gujarat Titans",
      captain: "Shubman Gill",
      owner: "CVC Capital Partners",
    },
    {
      team: "LSG",
      fullForm: "Lucknow Super Giants",
      captain: "KL Rahul",
      owner: "RPSG Group (Sanjiv Goenka)",
    },
  ];
  return (
    <>
    <h1>IPL Teams</h1>
      <table
      className="table table-bordered table-hover"
        border="1"
      >
        <thead>
          <tr>
            <th>Team</th>
            <th>Full Form</th>
            <th>Captain</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {IPLTeams.map((teamObj, index) => (
            <tr key={index}>
              <td>{teamObj.team}</td>
              <td>{teamObj.fullForm}</td>
              <td>{teamObj.captain}</td>
              <td>{teamObj.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
