import {FC} from 'react';

const Header: FC = () => {
  return (
    <header>
      <div className="header">
        <div style={{display: 'flex', flex: 1, alignItems: 'center'}}>
          <img
            width={122.5}
            height={42.48}
            alt="deplace"
            src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d10e5bbc661d246c0117a60_de-logotype.svg"
          />
        </div>
        <div style={{display: 'flex', flex: 1, justifyContent: 'center'}}>
          ---
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          CART
        </div>
      </div>
    </header>
  );
};

export default Header;
