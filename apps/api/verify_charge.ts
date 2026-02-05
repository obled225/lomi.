import axios from 'axios';

const API_URL = 'http://localhost:3000/charge/wave';
const API_KEY = 'lomi_sk_f4c34691fed1e2b197b6040238be4b7026a47fc91ea114e831471c0d7cb5d332';

async function verifyCharge() {
  try {
    const payload = {
      amount: 100,
      currency: 'XOF',
      // organizationId is now inferred from API Key
      customer: {
        name: 'Test Customer',
        email: 'test@example.com',
        phoneNumber: '+2250160223401',
      },
      description: 'Test Charge via API',
      successUrl: 'https://google.com',
      errorUrl: 'https://google.com',
    };

    console.log('Sending request to:', API_URL);
    console.log('Payload:', JSON.stringify(payload, null, 2));

    const response = await axios.post(API_URL, payload, {
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    console.log('Success!');
    console.log('Status:', response.status);
    console.log('Data:', response.data);
  } catch (error: any) {
    console.error('Error verifying charge:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

verifyCharge().catch((err) => {
  console.error('Unhandled error:', err);
  process.exit(1);
});
