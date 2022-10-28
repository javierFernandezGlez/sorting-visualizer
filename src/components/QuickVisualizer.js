import {useState} from "react";
import SideBar from "./SideBar";
import { Button } from "react-bootstrap";

function QuickVisualizer() {
    function randomArray(n) {
        return Array.from({length: n}, () => Math.floor(1+ Math.random() * 100));
    }
    
    const [length, setLength] = useState(100);

    const initialArray = randomArray(length);
    
  
    const [state, setState] = useState(initialArray);
    
    const updateInitialArray = (e) => {
      setLength(e.target.value);
      const newArray = randomArray(length);
      setState([...newArray]);
    }

    function politeDelay(milliseconds){
        return new Promise(resolve => {
            setTimeout(() => resolve(), milliseconds)
        });
      }

    // function swap(arr, left, right) {
    //   const temp = arr[left][0];
    //   arr[left][0] = arr[right][0];
    //   arr[right][0] = temp;

    //   const temp1 = arr[left][1];
    //   arr[left][1] = arr[right][1];
    //   arr[right][1] = temp1;
    // }

    // async function partitionHigh(arr, low, high) {
    //   let pivot = arr[high];
    //   let i = low;

    //   for(let j = low; j < high; j++) {
    //     if(arr[j][0] <= pivot) {
    //       swap(arr, i, j);
    //       await politeDelay(100);
    //       setState([...arr]);
    //       i++;
    //     }
    //   }
    //   swap(arr, i, high);
    //   await politeDelay(100);
    //   setState([...arr]);

    //   return i;
    // }

    // async function quickSort() {
    //   let stack = [];

    //   let start = 0;
    //   let end = state.length - 1;

    //   stack.push({x : start, y: end});

    //   while(stack.length) {
    //     const { x, y } = stack.shift();

    //     await politeDelay(100);
    //     const PIVOT = partitionHigh(state, x, y);
    //     await politeDelay(100);
    //     setState([...state]);
    //     if(PIVOT - 1 > x) {
    //       stack.push({x: x, y: PIVOT - 1});
    //     }

    //     if(PIVOT + 1 < y) {
    //       stack.push({x: PIVOT + 1, y: y});
    //     }
    //   }
    // }

    const updateArray = () => {
        let array = randomArray(length);
        for(let i = 0; i < array.length; i++) {
            let bar = document.getElementById(i).style;
            bar.backgroundColor = "bisque";
        }
        setState(array);
    }

    const quickSort = async () => {
        
        let currentArr = state;
    
        await sorts(currentArr, 0, currentArr.length - 1)
        
      }
    
      const sorts = async (arr, left, right) => {
        if (left < right) {
          let partitionIndex = partition(arr, left, right)
    
        //   setState([...state, arr])
          await politeDelay(50);
          
          await sorts(arr, left, partitionIndex - 1)
          await politeDelay(20);
          await sorts(arr, partitionIndex + 1, right)
          await politeDelay(20);
        }
      }
    
      const partition = (arr, left, right) => {
        let pivot = arr[right]
        let i = left - 1

        let bar2 = document.getElementById(right).style
        
        
        
        
        for (let j = left; j < right; j++) {
            
          if (arr[j] < pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            
    
            let bar1 = document.getElementById(j).style;
            
            setTimeout(() => {
                bar1.backgroundColor = 'red'
                setState([...state, arr])
            }, 4)
            bar1.backgroundColor = 'bisque'

            setTimeout(() => {
                setState([...state, arr])
            }, 4)
            bar2.backgroundColor = 'red'
            bar2.backgroundColor = 'bisque'
            
    
            // setTimeout(() => {
            //     bar2.backgroundColor = 'bisque'
              
            // }, 100)
            
    
            
          }

        }
        
        let barI = document.getElementById(i+1).style;
        let barRight = document.getElementById(right).style;

        setTimeout(() => {
            let temp = arr[i + 1];
            arr[i + 1] = arr[right];
            arr[right] = temp;
            barI.backgroundColor = "bisque";
            barRight.backgroundColor = "bisque";
            setState([...state,arr]);
        }, 4)
        

        
    
        return i + 1
      }
      console.log(state.length);
      
      return (
        <div className="visualizer">
    <SideBar/>
    <h1 style={{textAlign: "center"}}>Length: {length}</h1>
        <input className="slider" type="range" min={25} max={150} value={length} onChange={updateInitialArray}></input>
    <div className="array">
      {state.map((element, key) => { 
        return key < length ? 
          (
            
            <div id={key} className='box' style={{height:`${element*3}px`}}>
              
            </div>
          ) : null

      })}
      </div>
      <Button variant="light" onClick={() => quickSort()}>Quick Sort</Button>
      <Button variant="light" onClick={() => updateArray()}>Generate New Array</Button>
    </div>
      );
}

export default QuickVisualizer;