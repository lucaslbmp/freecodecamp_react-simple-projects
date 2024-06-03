import { useEffect, useState } from "react";
import MenuList from "./menu-list";
import {FaPlus, FaMinus} from 'react-icons/fa';
import './styles.css'

export default function MenuItem({ item }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <li className="menu-item">
      <p className="menu-item-label" onClick={() => setExpanded(state => !state)}>{item.label}
           <span className="menu-item-button">{expanded ? <FaMinus /> : <FaPlus /> }</span>
      </p>
 
      {item && item.children && item.children.length > 0 && expanded ? (
        <MenuList list={item.children} />
      ) : null}
      
    </li>
  );
}
