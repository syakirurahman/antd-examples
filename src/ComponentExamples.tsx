import { useState } from "react";
import {
  Alert,
  AutoComplete,
  Button,
  Checkbox,
  Modal,
  Input,
  Radio,
  Space,
  Switch,
  Tooltip,
} from "antd";

const ComponentExamples = () => {
  const initOccupationList = [
    {
      value: "Frontend Engineer",
      label: "Frontend Engineer",
    },
    {
      value: "Backend Engineer",
      label: "Backend Engineer",
    },
    {
      value: "Fullstack Engineer",
      label: "Fullstack Engineer",
    },
    {
      value: "Technical Writer",
      label: "Technical Writer",
    },
    {
      value: "Developer Advocate",
      label: "Developer Advocate",
    },
    {
      value: "UI/UX Designer",
      label: "UI/UX Designer",
    },
    {
      value: "QA Engineer",
      label: "QA Engineer",
    },
  ];
  const [occupationList, setOccupationList] = useState(initOccupationList);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { TextArea } = Input;

  return (
    <div style={{ maxWidth: "640px", margin: "1rem auto" }}>
      <h1>Ant Design component examples</h1>
      <form>
        <Alert
          type="info"
          message="This is a Ant Design info Alert"
          style={{ marginBottom: "1rem" }}
        />
        <div style={{ marginBottom: "1rem" }}>
          <label>Full name</label>
          <Input placeholder="Insert your full name" />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <Input placeholder="Insert your email" type="email" />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Gender</label>
          <br />
          <Radio.Group>
            <Space direction="horizontal">
              <Radio value="female">Female</Radio>
              <Radio value="male">Male</Radio>
              <Radio value="other">Other</Radio>
            </Space>
          </Radio.Group>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Occupation</label>
          <AutoComplete
            placeholder="Occupation"
            options={occupationList}
            style={{ width: "100%" }}
            onSearch={(q) =>
              setOccupationList(
                q
                  ? initOccupationList.filter(
                      (opt) =>
                        opt.value
                          .toLocaleLowerCase()
                          .indexOf(q.toLocaleLowerCase()) > -1 ||
                        opt.label
                          .toLocaleLowerCase()
                          .indexOf(q.toLocaleLowerCase()) > -1
                    )
                  : initOccupationList
              )
            }
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Bio</label>
          <TextArea placeholder="Describe yourself" rows={2} />
        </div>
        <Space
          direction="horizontal"
          size="large"
          style={{ marginBottom: "1rem" }}
        >
          <div>
            <Switch defaultChecked /> <label>This is switch component</label>
          </div>
          <div>
            <Checkbox defaultChecked />{" "}
            <label>This is checkbox component</label>
          </div>
        </Space>
        <br />
        <Tooltip title="This is a Ant Design tooltip">
          <span>Hover me to show tooltip</span>
        </Tooltip>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Button type="default" htmlType="reset">
            Reset
          </Button>
          <Button type="primary" onClick={() => setIsDialogOpen(true)}>
            Save (Open Modal)
          </Button>
        </div>
      </form>

      <Modal
        title="Lorem ipsum dolor sit amet"
        open={isDialogOpen}
        onOk={() => setIsDialogOpen(false)}
        onCancel={() => setIsDialogOpen(false)}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et massa at orci ultrices facilisis. Donec id viverra ante, a mollis
          odio. Morbi nec vulputate urna, sit amet pulvinar tortor.
        </p>
      </Modal>
    </div>
  );
};

export default ComponentExamples;
