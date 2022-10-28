
import './App.css';
import Header from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";



import Introduction from './components/Introduction';
import Insertion from './components/Insertion';
import Bubble from './components/Bubble';
import MergeSort from './components/MergeSort';
import QuickSort from './components/QuickSort';
import Selection from './components/Selection';
import HeapSort from './components/HeapSort';
import InsertionVisualizer from './components/InsertionVisualizer';
import BubbleVisualizer from './components/BubbleVisualizer';
import MergeVisualizer from './components/MergeVisualizer';
import QuickVisualizer from './components/QuickVisualizer';
import SelectionVisualizer from './components/SelectionVisualizer';
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/introduction" element={<Introduction/>} />
        <Route path="/insertion" element={<Insertion/>} />
        <Route path="/bubble" element={<Bubble/>} />
        <Route path="/mergesort" element={<MergeSort/>} />
        <Route path="/quicksort" element={<QuickSort/>}/>
        <Route path="/selection" element={<Selection/>}/>
        <Route path="/heapsort" element={<HeapSort/>}/>
        <Route path="/insertion-visualizer" element={<InsertionVisualizer/>}/>
        <Route path="/bubble-visualizer" element={<BubbleVisualizer/>}/>
        <Route path="/merge-visualizer" element={<MergeVisualizer/>}/>
        <Route path="/quick-visualizer" element={<QuickVisualizer/>}/>
        <Route path="/selection-visualizer" element={<SelectionVisualizer/>}/>
      </Routes>
    </div>
  );
}

export default App;
