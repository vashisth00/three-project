export default function handler(req, res) {
  if (req.method === 'POST') {
    // TODO: Implement webhook handler for real-time collaboration
    res.status(200).json({ message: 'Webhook received' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}