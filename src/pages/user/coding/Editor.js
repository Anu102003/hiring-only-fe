import React, { useRef, useEffect, useState } from 'react'
import "../../../assets/user/codingquestion.css"
import { EditorState } from '@uiw/react-codemirror'
import { basicSetup } from 'codemirror'
import { EditorView, keymap } from '@codemirror/view'
import { defaultKeymap, indentWithTab } from '@codemirror/commands'
import { java } from '@codemirror/lang-java'
import { oneDark } from '@codemirror/theme-one-dark'
import { Link } from 'react-router-dom'
export const Editor = ({initialValue,onEditorChange}) => {
    const editor = useRef()
    const [code, setCode] = useState('')

    const onUpdate = EditorView.updateListener.of((v) => {
        setCode(v.state.doc.toString())
    })
    const handleSave = () => {
        onEditorChange(code)
    };

    useEffect(() => {
        const state = EditorState.create({
            doc: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}', extensions: [
                basicSetup,
                keymap.of([defaultKeymap, indentWithTab]),
                oneDark,
                java(),
                onUpdate,
            ],
        })

        const view = new EditorView({ state, parent: editor.current })

        return () => {
            view.destroy()
        }
    }, [])

    return <>
        <div ref={editor}></div>
     <div className='coding-button'>
            <button className='run-button' onClick={handleSave}>Run / Save code</button>
            {/* <Link to="/score"><button className='submit-button'>Submit Code</button></Link> */}
        </div> 
    </>
}