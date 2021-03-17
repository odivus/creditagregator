interface UserDataProps {
  user: {
    _id: string;
    personal: {
      first_name: string;
      middle_name: string;
      last_name: string;
      birthday: {
        day: string;
        month: string;
        year: string;
      };
    };
    passport: {
      number: string;
      registered_place: string;
    };
    contacts: {
      phone: string;
      email:string;
    };
    home_address: {
      city: string;
      address_one: string;
    };
    work: {
      company: string;
      position: string;
      income: string;
    },
    selected_goods: [
      _id: string,
      category: string,
      brand: string,
      model: string,
      price: number,
      quantity: number,
    ],
    requests: [{
      selectedBank: string,
      requestStatus: boolean,
      monthlyPayment: number,
      monthQuantity: number,
      rate: number,
      commission: number,
      totalSum: number,
    }],
  },
}

export default UserDataProps;