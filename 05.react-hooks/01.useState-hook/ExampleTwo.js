import React, { useState } from 'react'
import image1 from './course-1.jpg'
import image2 from './course-2.jpg'
import image3 from './course-3.jpg'
import image4 from './course-4.jpg'
import image5 from './course-5.jpg'
import image6 from './course-6.jpg'
function ExampleTwo() {
    const [iData, setIdata] = useState(image6);
    return (
        <div className='banner'>
            <img src={iData} alt='banner' />
            <button onClick={() => setIdata(image1)}>image 1</button>
            <button onClick={() => setIdata(image2)}>image 2</button>
            <button onClick={() => setIdata(image3)}>image 3</button>
            <button onClick={() => setIdata(image4)}>image 4</button>
            <button onClick={() => setIdata(image5)}>image 5</button>
        </div>
    )
}
export default ExampleTwo