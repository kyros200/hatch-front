import { useState } from 'react';
import './DropDown.scss'

const DropDown = ({ title, content, ...rest}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
    <div className="dropDownNajjar" {...rest}>
        <div className="dropdownTitle" onClick={() => setIsOpen(!isOpen)}>
            <div className="title" onClick={() => setIsOpen(!isOpen)}>
                {title}
            </div>
            <div className={`arrow${isOpen ? " rotate" : ""}`}>
                {">"}
            </div>
        </div>
        <div className={`dropdownContent${isOpen ? " show" : ""}`} aria-hidden={!isOpen}>
            {content}
        </div>
    </div>
    )
}

export default DropDown;