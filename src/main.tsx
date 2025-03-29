
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enable smooth scrolling
document.documentElement.style.scrollBehavior = 'smooth';

createRoot(document.getElementById("root")!).render(<App />);
