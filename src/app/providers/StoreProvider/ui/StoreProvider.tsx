import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { StateSchema } from '../config/StateSchema';

interface IStoreProviderProps {
  children?: React.ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = (props : IStoreProviderProps) => {
  const {children, initialState} = props;
  const store = createReduxStore(initialState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

