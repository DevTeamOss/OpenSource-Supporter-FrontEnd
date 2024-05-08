import { useState } from 'react'

export function useModal() {
    const [visible, setVisible] = useState(false)

    function open() {
        setVisible(true)
    }

    function close() {
        setVisible(false)
    }

    return { visible, open, close }
}
