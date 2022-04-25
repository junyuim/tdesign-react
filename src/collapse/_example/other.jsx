import React, { useState } from 'react';
import { Collapse, TagInput, Checkbox } from 'tdesign-react';

const { Panel } = Collapse;
export default function CollapseExample() {
  const [collapseValue, setCollapseValue] = useState([]);
  const [disabledAll, setDisabledAll] = useState(false);
  const [borderless, setBorderless] = useState(false);
  return (
    <div className="tdesign-demo-block-row">
      <Collapse value={collapseValue} borderless={borderless} disabled={disabledAll} onChange={setCollapseValue}>
        <Panel header="这是一个折叠标题">
          这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
        </Panel>
        <Panel destroyOnCollapse header="设置默认展开项">
          这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
        </Panel>
        <Panel header="自定义折叠面板内容">
          <div className="tdesign-demo-block-column" style={{ width: '80%' }}>
            <TagInput defaultValue={['Vue', 'React']} clearable />
          </div>
        </Panel>
      </Collapse>
      <div>
        <Checkbox
          checked={disabledAll}
          onChange={() => {
            setDisabledAll(!disabledAll);
          }}
        >
          禁止全部
        </Checkbox>
        <Checkbox
          checked={borderless}
          onChange={() => {
            setBorderless(!borderless);
          }}
        >
          无边框模式
        </Checkbox>
        <div style={{ marginTop: 10 }}>当前展开的Collapse Panel: {collapseValue.map(item => `${item} `)}</div>
      </div>
    </div>
  );
}
