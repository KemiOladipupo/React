import { useState } from "react";


function Toggle() {
    const [isOn, setIsOn] = useState(false);

    const isLightOn = () => setIsOn(!isOn)
    return (
        <button onClick={isLightOn}>{isOn ? "ON" : "OFF"}</button>
    )
}

export default Toggle;