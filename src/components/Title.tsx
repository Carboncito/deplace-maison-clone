import {FC} from 'react';

const Title: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        paddingRight: 87.5,
      }}
    >
      <div className="title">Spring,</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div className="title">Summer</div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'center',
          marginLeft: 12,
          marginRight: 12,
        }}>
          <div className="title_small">COLL.</div>
          <div className="title_small">2021</div>
        </div>
      </div>
    </div>
  );
};

export default Title;
