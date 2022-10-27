import {Link} from "react-router-dom";
import {useState} from "react";

function SideBar(props) {

    const [active, setActive] = useState([true, false, false, false, false, false, false, false, false]);

    function changeActive(index) {
        const copy = [...active];

        for(let i = 0; i < copy.length; i++) {
            copy[i] = false;
        }
        copy[index] = true;
        setActive(copy);
    }
    
    return (
        <div className="content">
            <div className="wrapper">
                <div className="sidebar">
                    <div className="profile">
                        <img src="https://i0.wp.com/www.broyhillasset.com/wp-content/uploads/2016/12/sorting-toy-royalty-free-stock-photos-image-231188-WeCXzj-clipart.jpg?ssl=1" alt="course-logo"></img>
                        <h3>Sorting Algorithms</h3>
                        <ul className="sidebar-list">
                <li>
                    <Link to="/introduction">
                        
                        <span className="item">Introduction</span>
                    </Link>
                </li>
                <li>
                    <Link to="/insertion">
                        
                        <span className="item">Insertion Sort</span>
                    </Link>
                </li>
                <li>
                    <Link to="/insertion-visualizer">
                        <span className="item">Visualize Insertion Sort</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bubble">
                        
                        <span className="item">Bubble Sort</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bubble-visualizer">
                        <span className="item">Visualize Bubble Sort</span>
                    </Link>
                </li>
                <li>
                    <Link to="/mergesort">
                        <span className="item">Merge Sort</span>
                    </Link>
                </li>
                <li>
                    <Link to="/merge-visualizer">
                        <span className="item">Visualize Merge Sort</span>
                    </Link>
                </li>
                <li>
                    <Link to="/quicksort">
                        <span className="item">Quick Sort</span>
                    </Link>
                </li>
                <li>
                    <Link to="/quick-visualizer">
                        <span className="item">Visualize Quick Sort</span>
                    </Link>
                </li>
                <li>
                    <Link to="/selection">
                        <span className="item">Selection Sort</span>
                    </Link>
                </li>
                <li>
                    <Link to="/selection-visualizer">
                        <span className="item">Visualize Selection Sort</span>
                    </Link>
                </li>
                <li>
                    <Link to="/heapsort">  
                        <span className="item">Heap Sort</span>
                    </Link>
                </li>
            </ul>
                    </div>
                    
        
                </div>
            </div>
        </div>
    );
}

export default SideBar;