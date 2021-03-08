import Banks from '../models/Banks';

async function getBanks() {
  try {
    const data = await Banks.find();
    return JSON.stringify(data);
  } catch {
    return null;
  }
}

export default getBanks;