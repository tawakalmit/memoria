import axios from 'axios';

const fetchData = async () => {
  const res = await axios.get('/api/cloudinary');
  return res.data;
};

export default fetchData;
