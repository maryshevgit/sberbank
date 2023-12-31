import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import cls from './AnimationDetailOverlay.module.scss';

interface AnimationDetailOverlayProps {
  selectedId: string | null;
  setSelectedId: (param: string | null) => void;
  children: ReactNode;
}

export const AnimationDetailOverlay = ({
  selectedId,
  setSelectedId,
  children,
}: AnimationDetailOverlayProps) => {
  const html = document.getElementsByTagName('html')[0];

  useEffect(() => {
    if (selectedId) {
      html.style.overflow = 'hidden';
    }

    return () => {
      html.style.overflow = 'auto';
    };
  }, [html, selectedId]);

  return (
    <AnimatePresence>
      {selectedId && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cls.overlay}
            onClick={() => setSelectedId(null)}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cls.wrapper}
            layoutId={selectedId}
            onClick={() => setSelectedId(null)}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
