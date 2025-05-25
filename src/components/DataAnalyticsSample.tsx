import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Jan', accuracy: 65, precision: 78, recall: 62 },
  { name: 'Feb', accuracy: 70, precision: 82, recall: 68 },
  { name: 'Mar', accuracy: 75, precision: 85, recall: 72 },
  { name: 'Apr', accuracy: 72, precision: 81, recall: 74 },
  { name: 'May', accuracy: 78, precision: 87, recall: 76 },
  { name: 'Jun', accuracy: 82, precision: 90, recall: 80 },
];

export default function DataAnalyticsSample() {
  const [activeMetric, setActiveMetric] = useState('accuracy');
  
  const metrics = [
    { id: 'accuracy', name: 'Accuracy', color: '#8884d8' },
    { id: 'precision', name: 'Precision', color: '#82ca9d' },
    { id: 'recall', name: 'Recall', color: '#ffc658' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4">ML Model Performance</h3>
      <div className="mb-4">
        <div className="flex space-x-2">
          {metrics.map(metric => (
            <button
              key={metric.id}
              onClick={() => setActiveMetric(metric.id)}
              className={`px-3 py-1 rounded-md ${activeMetric === metric.id 
                ? 'bg-black text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {metric.name}
            </button>
          ))}
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
            <Bar 
              dataKey={activeMetric} 
              fill={metrics.find(m => m.id === activeMetric)?.color} 
              animationDuration={500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-gray-600 text-sm">
        This visualization shows the performance metrics of a machine learning model over time.
      </p>
    </motion.div>
  );
}
