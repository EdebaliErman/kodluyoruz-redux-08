import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthTexts, selectFormat, selectItems, selectParagraph } from '../../Redux/textSlice'

function TextList() {
    const paragraph = useSelector(selectParagraph)
    const format = useSelector(selectFormat)
    const items = useSelector(selectItems)
    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(fecthTexts({ paragraph, format }))
    }, [dispacth, paragraph, format])
    console.log(items)
    return (
        <div className='TextList'>
            {format === "html" ? `<p>
            ${items}
            </p>`
                : <div>{items}</div>
            }
            Text List
        </div>
    )
}

export default TextList
