import { useState } from 'react';
import Drawer from '../../design-system/Drawer/Drawer';
import LegalContent from './LegalContent';

export default function Legal() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <p>
        <button
          className="underline"
          data-testid="open-button"
          onClick={() => setOpen(true)}
        >
          Mentions légales
        </button>
      </p>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Mentions légales"
      >
        <LegalContent />
      </Drawer>
    </>
  );
}
