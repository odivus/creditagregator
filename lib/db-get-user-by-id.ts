import Users from '../models/Users';
import UserDataProps from '../pages/Interfaces/User-data-props';

interface UserDataObject extends UserDataProps {
  _id: string;
}

async function getUserById(id: string) {
  try {
    const data = await Users.findById({ _id: id });
    const user: UserDataObject = data.toObject();

    user._id = user._id.toString();
    return user;
  } catch {
    return null;
  }
}

export default getUserById;