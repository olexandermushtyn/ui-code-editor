import { useContext } from 'react'
import CodeContext from '../CodeContext'

const useCodeStore = () => useContext(CodeContext)

export default useCodeStore
