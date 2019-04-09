import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
} from 'antd';

import 'antd/lib/button/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/date-picker/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/radio/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/tag/style/css';

export default compose(
  Form.create(),
  withHandlers({
    handleSubmit({ form }) {
      return event => {
        event.preventDefault();
        form.validateFields((err, values) => {
          if (!err) console.log(values);
        });
      };
    },
  })
)(({ form, handleSubmit }) => (
  <Form
    layout="vertical"
    style={{ padding: '20px' }}
    onSubmit={handleSubmit}
  >
    <Form.Item>
      Here is a form w/a Submit button.
      <Button type="primary" htmlType="submit" block>
        Submit
      </Button>
    </Form.Item>
  </Form>
));
