import {FC} from 'react';
import './images.css';

const Images: FC = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: 16,
          position: 'relative',
          width: '100%',
        }}
      >
        <div className="img_example_container" style={{marginRight: 22}}>
          <img
            className="img_example"
            width={302}
            height={427}
            alt="example 1"
            src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede27e188219c6c4ab2af6b_man-default.jpg"
          />
          <div className="img_bottom">
            <div style={{flex: 1}}>(01)</div>
            <div style={{flex: 1}}>MAN</div>
          </div>
        </div>
        <img
          className="img_opacity"
          width={122}
          height={122}
          alt="img"
          src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d09026ed5102a6910070111_scotch-tape.svg"
        />
        <div className="img_example_container">
          <img
            className="img_example"
            width={302}
            height={427}
            alt="example 2"
            src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede29ef88219c8178b2be22_women-default.jpg"
          />
          <div className="img_bottom">
            <div style={{flex: 1}}>(02)</div>
            <div style={{flex: 1}}>WMNS</div>
          </div>
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '2vw',
        lineHeight: '2vw',
      }}>
        Explore
        <div style={{
          position: 'relative',
          marginRight: 87.5,
          cursor: 'pointer',
        }}>
          <img
            width={61.25}
            height={61.25}
            alt="navigate"
            src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d14818767ac37ac193eccf4_circle-container.svg"
          />
          <img
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
          }}
            width={35}
            height={35}
            alt="arrow"
            src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d24aa633c6cae18850994a2_arrow.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Images;
