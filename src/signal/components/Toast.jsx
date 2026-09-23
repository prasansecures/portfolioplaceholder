import { useEffect, useState } from 'react';

export default function Toast({ toast }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!toast) return undefined;
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div className="toast-region" role="status" aria-live="polite">
      {toast && visible && (
        <div key={toast.at} className="toast">
          {toast.message}
        </div>
      )}
    </div>
  );
}
