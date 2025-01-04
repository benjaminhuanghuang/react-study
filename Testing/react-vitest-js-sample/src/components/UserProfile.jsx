import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const UserProfile = ({userId}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);

  if(!user) return <p>Loading...</p>
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}

UserProfile.propTypes = {
  userId: PropTypes.string
};
export default UserProfile
