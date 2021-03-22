import Users from '../models/Users';
import UserDataProps from '../Interfaces/User-data-props';

interface UserDataObject extends UserDataProps {
  _id: string;
  selected_goods: Array<object>;
  requests: Array<object>;
}

async function getUserById(id: string) {
  try {
    const doc = await Users.findById({ _id: id });
    const user: UserDataObject = doc.toObject();

    user._id = user._id.toString();

    if (user.selected_goods) {
      user.selected_goods.forEach((item: {_id: object | string}) => {
        item._id = item._id.toString();
      });
    }

    if (user.requests) {
      user.requests.forEach((item: {_id: object | string}) => {
        item._id = item._id.toString();
      });
    }

    return user;

  } catch {
    return null;
  }
}

export default getUserById;