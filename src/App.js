import { ProForm, ProFormText } from '@ant-design/pro-components';
import './App.css';



function App() {
  return (
    <ProForm
    onFinish={async (values) => {
      console.log(values);
    }}
  >
    <ProFormText name="name" label="Name" />
  </ProForm>
  );
}

export default App;
