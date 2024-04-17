import express, { Request, Response } from 'express';

const router = express.Router();

// Sample product data (replace with your actual data source)
const products = [
  { id: 1, name: 'Product 1', description: 'Description 1' },
  { id: 2, name: 'Product 2', description: 'Description 2' },
  { id: 3, name: 'Product 3', description: 'Description 3' },
  // Add more products as needed
];

// Endpoint for handling search queries
router.get('/search', (req: Request, res: Response) => {
  const query = req.query.query as string; // Extract the query parameter from the request

  // Perform search logic (replace with your actual search implementation)
  const searchResults = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  res.json(searchResults); // Return search results as JSON
});

export default router;
