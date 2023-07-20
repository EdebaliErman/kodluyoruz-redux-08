import React from 'react'

import { selectFormat, selectParagraph, setFormat, setParagraph } from '../../Redux/textSlice'
import { useDispatch, useSelector } from 'react-redux'

function Text() {
    const paragraph = useSelector(selectParagraph)
    const format = useSelector(selectFormat)
    const dispacth = useDispatch()

    console.log(format, paragraph)

    return (
        <div className='Text'>
            <form >
                <div >

                    Paragraph

                    <input type='number' name='numberParagraph' value={paragraph} onChange={(e) => dispacth(setParagraph(e.target.value))} />
                </div>
                
                <div>
                    Include HTML
                    <select id="html" value={format} name="html" onChange={(e) => dispacth(setFormat(e.target.value))} >
                        <option value="text">No</option>
                        <option value="html">Yes</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Text
