// pages/api/questions.js
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  // Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'data');
  // Read the json data file questions.json
  const fileContents = await fs.readFile(path.join(jsonDirectory, 'questions.json'), 'utf8');
  // Return the content of the data file in json format
  res.status(200).json(JSON.parse(fileContents));
}
