// Node modules
import {
  createContext,
  useState,
  useRef,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';
// Components
import Snackbar from '@/components/Snackbar';

export interface SnackbarConfig {
  open?: boolean;
  message: string;
  type: 'info' | 'success' | 'error';
  timeOut?: number;
}
interface SnackbarProviderProps {
  children: ReactNode;
}

const initialCtxValue = {
  snackbar: {
    open: false,
    message: '',
    type: 'info',
  },
  showSnackbar: (config: SnackbarConfig) => {},
  hideSnackbar: () => {},
};
export const SnackbarContext = createContext(initialCtxValue);

const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const [snackbar, setSnackbar] = useState<SnackbarConfig>({
    open: false,
    message: '',
    type: 'info',
  });

  const timeoutRef = useRef<number | null>(null);
  const showSnackbar = useCallback(
    ({ message, type = 'info', timeOut = 5000 }: SnackbarConfig) => {
      // Clear any existing timeout to prevent multiple snackbar overlapping
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Set new snackbar
      setSnackbar({ open: true, message, type });

      // Auto-hide the snackbar after the specified timeOut
      timeoutRef.current = window.setTimeout(() => {
        setSnackbar((prev) => ({ ...prev, open: false }));
      }, timeOut);
    },
    [],
  );
  // Hide the snackbar manually
  const hideSnackbar = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setSnackbar((prev) => ({ ...prev, open: false }));
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => {
    return {snackbar, showSnackbar, hideSnackbar };
  }, [snackbar, showSnackbar, hideSnackbar]);

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <Snackbar snackbar={snackbar} />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;