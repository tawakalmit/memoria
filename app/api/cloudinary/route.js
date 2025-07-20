import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
  const API_KEY = process.env.CLOUDINARY_API_KEYS;
  const API_SECRET = process.env.CLOUDINARY_API_SECRET;

  const basicAuth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`,
      {
        expression: 'asset_folder:family',
        max_results: 30,
      },
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json(response.data.resources);
  } catch (error) {
    console.error('Cloudinary error:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Failed to fetch Cloudinary resources' }, { status: 500 });
  }
}
