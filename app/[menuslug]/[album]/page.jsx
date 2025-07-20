'use client'

import fetchData from '@/utils/apiUtils';
import { useEffect, useState } from 'react';
import ImageThumb from '@/components/Shared/ImageThumb';

export default function Album() {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const data = await fetchData();
        setImages(data);
        console.log('Fetched album data:', data);
      } catch (error) {
        console.error('Error fetching album data:', error);
      }
    };

    fetchAlbumData();
  }, []);

  return (
    <div className='grid grid-cols-3'>
    {Images.map((item, index) => {
        if (item.format !== 'mp4' && item.format !== '3gp') {
        return (
            <ImageThumb key={index} source={item.secure_url} title={item.filename} />
        );
        }
        return null;
    })}
    </div>
  );
}
