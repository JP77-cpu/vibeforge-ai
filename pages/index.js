import { useState } from 'react';
export default function Home() {
 const [idea, setIdea] = useState('');
 const [output, setOutput] = useState('');
 const [loading, setLoading] = useState(false);
 const handleGenerate = async () => {
 if (!idea.trim()) {
 alert('Please enter an idea');
 return;
 }
 setLoading(true);
 try {
 const response = await fetch('/api/generate', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 },
 body: JSON.stringify({ input: idea }),
 });
 const data = await response.json();
 setOutput(data.output);
 } catch (error) {
 alert('Error generating output: ' + error.message);
 } finally {
 setLoading(false);
 }
 };
 return (
 <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
 <div className="max-w-6xl mx-auto">
 <h1 className="text-4xl font-bold text-center mb-2 text-indigo-900">
 VibeForge AI
 </h1>
 <p className="text-center text-gray-600 mb-8">
 Transform your ideas into amazing projects
 </p>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 {/* Input Section */}
 <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 h-fit">
 <div>
 <label className="block text-sm font-semibold text-gray-700 mb-2">
 Your Idea
 </label>
 <textarea value={idea} onChange={(e) => setIdea(e.target.value)} placeholder="e.g., Build a booking app" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" rows="6" />
 </div>
 <button onClick={handleGenerate} disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition duration-200">
 {loading ? 'Generating...' : 'Generate'}
 </button>
 </div>
 {/* Output Section - Real App Preview */}
 {output && (
 <div className="bg-white rounded-lg shadow-lg p-8">
 <label className="block text-sm font-semibold text-gray-700 mb-4">
 Generated App Preview
 </label>
 <iframe srcDoc={output} className="w-full h-96 border border-gray-300 rounded-lg" title="Generated App" sandbox="allow-scripts" />
 <details className="mt-4">
 <summary className="text-sm font-semibold text-gray-700 cursor-pointer">
 View Source Code
 </summary>
 <div className="mt-2 p-3 bg-gray-50 border border-gray-300 rounded-lg whitespace-pre-wrap text-xs text-gray-800 max-h-64 overflow-y-auto">
 {output}
 </div>
 </details>
 </div>
 )}
 </div>
 </div>
 </div>
 );
}