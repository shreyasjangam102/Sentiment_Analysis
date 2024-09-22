import { useState } from 'react';
import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";
import { Label } from "/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card";

const SentimentAnalysisApp = () => {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState(null);

  const analyzeSentiment = () => {
    const positiveWords = ['happy', 'good', 'great', 'excellent', 'awesome'];
    const negativeWords = ['sad', 'bad', 'terrible', 'awful', 'poor'];

    const words = text.toLowerCase().split(' ');
    let positiveCount = 0;
    let negativeCount = 0;

    words.forEach(word => {
      if (positiveWords.includes(word)) {
        positiveCount++;
      } else if (negativeWords.includes(word)) {
        negativeCount++;
      }
    });

    if (positiveCount > negativeCount) {
      setSentiment('Positive');
    } else if (negativeCount > positiveCount) {
      setSentiment('Negative');
    } else {
      setSentiment('Neutral');
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-md">
      <CardHeader className="bg-blue-500 text-white p-4 rounded-t-md">
        <CardTitle className="text-lg font-bold">Sentiment Analysis App</CardTitle>
        <CardDescription>Enter a text to analyze its sentiment</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Label htmlFor="text" className="block text-sm font-medium text-gray-700">Text:</Label>
        <Input id="text" value={text} onChange={e => setText(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md" />
        <Button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={analyzeSentiment}>Analyze Sentiment</Button>
        {sentiment && (
          <p className="mt-4 text-lg font-bold" style={{ color: sentiment === 'Positive' ? 'green' : sentiment === 'Negative' ? 'red' : 'gray' }}>Sentiment: {sentiment}</p>
        )}
      </CardContent>
      <CardFooter className="bg-gray-100 p-4 rounded-b-md">
        <p className="text-sm text-gray-500">Note: This is a basic sentiment analysis and may not be accurate for all texts.</p>
      </CardFooter>
    </Card>
  );
};

export default SentimentAnalysisApp;