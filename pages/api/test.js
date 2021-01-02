import dbConnect from '../../utilities/db-connect';

dbConnect();

export default async (req, res) => {
  res.json({test: 'Test-Ok'});
}