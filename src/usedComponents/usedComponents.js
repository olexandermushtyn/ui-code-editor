const Container = ({ children }) => <div className="container">{children}</div>
const Row = ({ children }) => <div className="row">{children}</div>
const Col = ({ children }) => <div className="col">{children}</div>
const Button = () => <button style={{ display: 'block' }}>Button</button>
const Input = () => <input></input>

const usedComponents = {
  Container: Container,
  Row: Row,
  Col: Col,
  Button: Button,
  Input: Input,
}

export default usedComponents
