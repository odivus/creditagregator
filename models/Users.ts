import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema({
  personal: {
    first_name: {
      type: String,
      required: [true, 'Пожалуйста введите ваше имя'],
    },
    middle_name: {
      type: String,
      required: [true, 'Пожалуйста введите ваше отчество'],
    },
    last_name: {
      type: String,
      required: [true, 'Пожалуйста введите вашу фамилию'],
    },
    birthday: {
      day: {
        type: String,
        required: [true, 'Пожалуйста введите дату вашего рождения'],
        maxlength: [2, 'Пожалуйста проверьте дату вашего рождения'],
      },
      month: {
        type: String,
        required: [true, 'Пожалуйста введите дату вашего рождения'],
        maxlength: [2, 'Пожалуйста проверьте месяц вашего рождения'],
      },
      year: {
        type: String,
        required: [true, 'Пожалуйста введите дату вашего рождения'],
        maxlength: [4, 'Пожалуйста проверьте год вашего рождения'],
        minlength: [4, 'Пожалуйста проверьте год вашего рождения'],
      },
    },
  },
  passport: {
      number: {
        type: String,
        required: [true, 'Пожалуйста введите номер вашего пасспорта'],
      },
      registered_place: {
        type: String,
        required: [true, 'Пожалуйста введите кем выдан ваш пасспорт'],
      },
  },
  contacts: {
    phone: {
      type: String,
      required: [true, 'Пожалуйста введите номер вашего телефона'],
    },
    email: {
      type: String,
      required: [true, 'Пожалуйста введите адрес вашей электронной почты'],
    },
  },
  home_address: {
    city: {
      type: String,
      required: [true, 'Пожалуйста введите город, в котором вы проживаете'],
    },
    address: {
      type: String,
      required: [true, 'Пожалуйста введите ваш домашний адрес'],
    },
  },
  work: {
    company: {
      type: String,
      required: [true, 'Пожалуйста введите название вашей компании'],
    },
    position: {
      type: String,
      required: [true, 'Пожалуйста введите название вашей должности'],
    },
    income: {
      type: String,
      required: [true, 'Пожалуйста введите ваш ежемесячный доход'],
    },
  }
});

export default mongoose.models.Users || mongoose.model('Users', usersSchema);
