import React, {useRef, useState} from "react";
import "../shared/buttonTypeOne.css"

const ButtonTypeOne = (props = {}) => {
    const { onClick, text = ``, className = `` } = props;
    const [ ripple,  setRipple ] = useState(false);
    const [showSpan, setShowSpan] = useState(false);
    const parentRef = useRef(null);
    const [x, setX] = useState();
    const [y, setY] = useState();
    const onClickTrigger = (e) => {
        setRipple(true);
        setShowSpan(true);
        let x = e.clientX - e.target.offsetLeft;

        // Get position of Y
        let y = e.clientY - e.target.offsetTop;
        setX(x); setY(y);
        setTimeout(() => {
            setRipple(false)
            setShowSpan(false);
        }, 1000)
        onClick && onClick(e);
    }
    return <>
        <div className={"button-type-one " + className} onClick={onClickTrigger}>
            {text}
            {showSpan ? <span style={{left: x, top: y}} className={'ripple-span '+ (ripple ? "ripple": '')}></span> : null}
        </div>
    </>;
};

export default ButtonTypeOne;